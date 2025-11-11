# Next.js 16 Production Setup Guide

## Docker + TypeScript + Prisma + Stripe + Auth.js

---

## Prerequisites

- Docker & Docker Compose installed
- Node.js 20+ (for local dev without Docker)
- pnpm installed globally: `npm install -g pnpm`

---

## Setup Checklist

### 1. Initialize Project

```bash
# Create project with Next.js 16 (App Router, TypeScript, Tailwind)
pnpm create next-app@latest my-saas-app --typescript --tailwind --app --use-pnpm --import-alias "@/*"

cd my-saas-app
```

### 2. Install Core Dependencies

```bash
# UI & Styling
pnpm add class-variance-authority clsx tailwind-merge lucide-react
pnpm add -D @tailwindcss/typography @tailwindcss/forms

# Auth.js (v5 - latest)
pnpm add next-auth@beta @auth/prisma-adapter

# Database
pnpm add @prisma/client
pnpm add -D prisma

# Stripe
pnpm add stripe @stripe/stripe-js micro

# Email
pnpm add resend react-email @react-email/components

# Validation & Forms
pnpm add zod react-hook-form @hookform/resolvers

# State & Data Fetching
pnpm add zustand swr

# Analytics
pnpm add next-plausible

# Utilities
pnpm add date-fns nanoid
```

### 3. Install Dev Dependencies

```bash
# Testing
pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom jsdom
pnpm add -D playwright @playwright/test

# Linting & Formatting
pnpm add -D eslint-config-prettier eslint-plugin-tailwindcss
pnpm add -D prettier prettier-plugin-tailwindcss

# Git Hooks
pnpm add -D husky lint-staged

# Types
pnpm add -D @types/node @types/react @types/react-dom
```

### 4. Setup shadcn/ui

```bash
pnpm dlx shadcn@latest init

# Install common components
pnpm dlx shadcn@latest add button card input label form select dialog dropdown-menu
pnpm dlx shadcn@latest add toast table tabs avatar badge separator
```

### 5. Initialize Prisma

```bash
pnpm prisma init

# After configuring schema, run:
pnpm prisma generate
pnpm prisma migrate dev --name init
```

### 6. Setup Git Hooks

```bash
pnpm exec husky init
echo "pnpm lint-staged" > .husky/pre-commit
```

### 7. Create Folder Structure

```bash
mkdir -p app/{auth,dashboard,api}/{login,register,forgot-password,dashboard,settings,billing,auth/[...nextauth],webhooks/stripe}
mkdir -p components/{ui,forms,layouts}
mkdir -p lib/{auth,db,email,stripe,validations}
mkdir -p server/{actions,queries,services}
mkdir -p hooks styles public prisma/migrations
mkdir -p tests/{unit,e2e}
mkdir -p config
```

### 8. Docker Setup

Create `docker-compose.yml` in project root:

```yaml
version: '3.9'

services:
  postgres:
    image: postgres:16-alpine
    container_name: nextjs-postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: nextjs_dev
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U postgres']
      interval: 10s
      timeout: 5s
      retries: 5

  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: development
    container_name: nextjs-app
    restart: unless-stopped
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/nextjs_dev
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    depends_on:
      postgres:
        condition: service_healthy
    command: pnpm dev

volumes:
  postgres_data:
```

Create `Dockerfile`:

```dockerfile
# Base stage
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# Dependencies stage
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Development stage
FROM base AS development
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]

# Builder stage
FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN pnpm prisma generate
RUN pnpm build

# Production stage
FROM base AS production
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Create `.dockerignore`:

```
node_modules
.next
.git
.env*
!.env.example
npm-debug.log
README.md
.dockerignore
Dockerfile
docker-compose.yml
```

---

## Configuration Files

### `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "checkJs": false,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "isolatedModules": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `eslint.config.mjs`

```javascript
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tailwindcss from 'eslint-plugin-tailwindcss'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  ...tailwindcss.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]

export default eslintConfig
```

### `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### `.prettierignore`

```
node_modules
.next
out
build
dist
coverage
*.lock
pnpm-lock.yaml
```

### `package.json` scripts section

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:generate": "prisma generate",
    "db:studio": "prisma studio",
    "db:seed": "tsx prisma/seed.ts",
    "stripe:listen": "stripe listen --forward-to localhost:3000/api/webhooks/stripe",
    "prepare": "husky"
  }
}
```

### `.lintstagedrc.js`

```javascript
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
}
```

### `vitest.config.ts`

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

### `tests/setup.ts`

```typescript
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
```

### `playwright.config.ts`

```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

### `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Auth.js v5 required tables
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts      Account[]
  sessions      Session[]
  subscriptions Subscription[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// Stripe Subscription Management
model Subscription {
  id                   String    @id @default(cuid())
  userId               String
  stripeCustomerId     String    @unique
  stripeSubscriptionId String?   @unique
  stripePriceId        String?
  stripeCurrentPeriodEnd DateTime?
  status               String?   // active, canceled, past_due, etc.
  plan                 String?   // free, pro, enterprise
  createdAt            DateTime  @default(now())
  updatedAt            DateTime  @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([stripeCustomerId])
}
```

---

## Environment Variables

### `.env.example`

```bash
# ============================================
# DATABASE
# ============================================
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nextjs_dev?schema=public"

# ============================================
# NEXT.JS
# ============================================
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# ============================================
# AUTH.JS (NextAuth v5)
# ============================================
AUTH_SECRET="generate-with-openssl-rand-base64-32"
AUTH_URL="http://localhost:3000"

# OAuth Providers (optional)
AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""

# ============================================
# STRIPE
# ============================================
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Stripe Price IDs
STRIPE_PRICE_ID_PRO="price_..."
STRIPE_PRICE_ID_ENTERPRISE="price_..."

# ============================================
# EMAIL (Resend)
# ============================================
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="noreply@yourdomain.com"

# ============================================
# ANALYTICS
# ============================================
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="yourdomain.com"

# ============================================
# FEATURE FLAGS (optional)
# ============================================
NEXT_PUBLIC_ENABLE_ANALYTICS="true"
NEXT_PUBLIC_ENABLE_STRIPE="true"
```

### Generate AUTH_SECRET

```bash
openssl rand -base64 32
```

---

## Essential Code Files

### `lib/db/index.ts` - Prisma Client

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### `lib/auth/config.ts` - Auth.js Configuration

```typescript
import { NextAuthConfig } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { prisma } from '@/lib/db'

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }
      return token
    },
  },
}
```

### `lib/auth/index.ts`

```typescript
import NextAuth from 'next-auth'
import { authConfig } from './config'

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
```

### `app/api/auth/[...nextauth]/route.ts`

```typescript
import { handlers } from '@/lib/auth'

export const { GET, POST } = handlers
```

### `lib/stripe/index.ts` - Stripe Client

```typescript
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
})
```

### `app/api/webhooks/stripe/route.ts` - Stripe Webhook Handler

```typescript
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      // Handle successful checkout
      break
    }
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      // Update subscription in database
      await prisma.subscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          status: subscription.status,
          stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        },
      })
      break
    }
  }

  return NextResponse.json({ received: true })
}
```

### `lib/email/index.ts` - Email Client

```typescript
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string
  subject: string
  react: React.ReactElement
}) {
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to,
      subject,
      react,
    })
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}
```

### `lib/validations/auth.ts` - Zod Schemas

```typescript
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
```

### `config/site.ts` - Site Configuration

```typescript
export const siteConfig = {
  name: 'My SaaS App',
  description: 'Build your SaaS faster',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername/yourrepo',
  },
}
```

### `config/subscriptions.ts` - Pricing Plans

```typescript
export const subscriptionPlans = [
  {
    name: 'Free',
    price: 0,
    description: 'Get started with basic features',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    stripePriceId: null,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Unlock advanced features',
    features: ['All Free features', 'Feature 4', 'Feature 5', 'Priority support'],
    stripePriceId: process.env.STRIPE_PRICE_ID_PRO,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large teams and organizations',
    features: ['All Pro features', 'Feature 6', 'Feature 7', 'Dedicated support'],
    stripePriceId: process.env.STRIPE_PRICE_ID_ENTERPRISE,
  },
]
```

### `app/layout.tsx` - Root Layout with Analytics

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PlausibleProvider from 'next-plausible'
import './globals.css'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### `middleware.ts` - Auth Middleware

```typescript
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthPage =
    req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')
  const isProtectedPage = req.nextUrl.pathname.startsWith('/dashboard')

  if (isProtectedPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

---

## GitHub Actions CI Workflow

### `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run ESLint
        run: pnpm lint

      - name: Check formatting
        run: pnpm format:check

      - name: Type check
        run: pnpm type-check

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run unit tests
        run: pnpm test

  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps

      - name: Run E2E tests
        run: pnpm test:e2e

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

---

## Development Workflow

### Start with Docker:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Run migrations
docker-compose exec app pnpm prisma migrate dev

# Stop services
docker-compose down
```

### Start without Docker (local Postgres required):

```bash
# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your values

# Generate Prisma client
pnpm db:generate

# Run migrations
pnpm db:migrate

# Start dev server
pnpm dev
```

### Common Commands:

```bash
# Database
pnpm db:studio              # Open Prisma Studio
pnpm db:push                # Push schema without migration
pnpm db:seed                # Seed database

# Testing
pnpm test                   # Run unit tests
pnpm test:ui                # Unit tests with UI
pnpm test:e2e               # Run E2E tests
pnpm test:e2e:ui            # E2E tests with UI

# Stripe webhook testing
pnpm stripe:listen          # Forward webhooks to local

# Code quality
pnpm lint                   # Run ESLint
pnpm format                 # Format code
pnpm type-check             # TypeScript check
```

---

## Production Deployment Checklist

- [ ] Set all environment variables in production
- [ ] Run database migrations: `pnpm prisma migrate deploy`
- [ ] Configure Stripe webhook endpoint in Stripe Dashboard
- [ ] Setup domain for Plausible Analytics
- [ ] Enable HTTPS and update AUTH_URL
- [ ] Configure CORS for API routes if needed
- [ ] Setup error monitoring (Sentry)
- [ ] Configure backup strategy for Postgres
- [ ] Test OAuth providers in production
- [ ] Verify email sending works in production

---

## Package Versions (Latest as of 2025)

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-auth": "5.0.0-beta.25",
    "@auth/prisma-adapter": "^2.7.4",
    "@prisma/client": "^6.1.0",
    "stripe": "^17.5.0",
    "@stripe/stripe-js": "^5.2.0",
    "resend": "^4.0.1",
    "react-email": "^3.0.3",
    "zod": "^3.24.1",
    "react-hook-form": "^7.54.2",
    "@hookform/resolvers": "^3.9.1",
    "zustand": "^5.0.2",
    "swr": "^2.2.5",
    "tailwindcss": "^3.4.17",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "lucide-react": "^0.468.0",
    "next-plausible": "^3.12.2",
    "date-fns": "^4.1.0",
    "nanoid": "^5.0.9"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "prisma": "^6.1.0",
    "vitest": "^2.1.8",
    "@vitest/ui": "^2.1.8",
    "@testing-library/react": "^16.1.0",
    "@testing-library/jest-dom": "^6.6.3",
    "playwright": "^1.49.1",
    "@playwright/test": "^1.49.1",
    "eslint": "^9.17.0",
    "eslint-config-next": "^16.0.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-tailwindcss": "^3.17.5",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.9",
    "husky": "^9.1.7",
    "lint-staged": "^15.2.11"
  }
}
```

---

## Notes

1. **Auth.js v5** is in beta but stable for production use
2. **Prisma** handles migrations automatically with `prisma migrate dev`
3. **Stripe CLI** required for local webhook testing: `brew install stripe/stripe-cli/stripe`
4. **Resend** requires verified domain in production
5. **shadcn/ui** components are copied to your project (not npm package)
6. **Docker** setup uses multi-stage builds for optimal production images
7. **Plausible** is privacy-friendly, GDPR-compliant analytics
8. All configs use **latest ESLint flat config format** (ESM)

---

## Troubleshooting

**Prisma connection issues in Docker:**

```bash
# Ensure DATABASE_URL uses 'postgres' hostname not 'localhost'
DATABASE_URL="postgresql://postgres:postgres@postgres:5432/nextjs_dev"
```

**Auth.js session not persisting:**

```bash
# Generate new AUTH_SECRET
openssl rand -base64 32
```

**Stripe webhook signature verification fails:**

```bash
# Use Stripe CLI for local testing
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

**TypeScript errors in tests:**

```bash
# Ensure vitest types are recognized
pnpm add -D @vitest/ui
```
