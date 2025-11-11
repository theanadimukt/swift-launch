# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Swift Launch is a production-ready Next.js 16 SaaS starter with TypeScript, Prisma, Stripe, and Auth.js. This is a boilerplate/starter kit with infrastructure ready but minimal business logic implemented.

**Tech Stack**: Next.js 16 (App Router), TypeScript, PostgreSQL, Prisma ORM, Auth.js v5, Stripe, Resend, Tailwind CSS, shadcn/ui

## Development Commands

### Core Development

```bash
pnpm dev                 # Start development server (localhost:3000)
pnpm build              # Build for production (runs prisma generate first)
pnpm start              # Start production server
pnpm type-check         # Run TypeScript type checking
```

### Database Operations

```bash
pnpm db:generate        # Generate Prisma client
pnpm db:migrate         # Run migrations (also runs generate)
pnpm db:push           # Push schema changes without migration
pnpm db:studio         # Open Prisma Studio GUI
pnpm db:seed           # Run database seed script
```

### Testing

```bash
pnpm test              # Run unit tests with Vitest
pnpm test:ui           # Run Vitest with UI
pnpm test:e2e          # Run E2E tests with Playwright
pnpm test:e2e:ui       # Run Playwright with UI
```

### Code Quality

```bash
pnpm lint              # Run ESLint
pnpm format            # Format code with Prettier
pnpm format:check      # Check formatting without modifying
```

### Stripe Development

```bash
pnpm stripe:listen     # Forward Stripe webhooks to localhost:3000/api/webhooks/stripe
```

### Docker

```bash
docker-compose up -d postgres   # Start PostgreSQL only
docker-compose up              # Start full stack (PostgreSQL + Next.js)
```

## Architecture

### Authentication (Auth.js v5)

**Configuration**: `lib/auth/config.ts`

- **Strategy**: JWT-based sessions (not database sessions)
- **Providers**: GitHub and Google OAuth (conditionally loaded based on env vars)
- **Session**: Custom callbacks inject `user.id` into session object
- **Routes**: Exposed via catch-all `/app/api/auth/[...nextauth]/route.ts`

**Middleware Protection** (`middleware.ts`):

- Redirects unauthenticated users from `/dashboard/*` to `/login`
- Redirects authenticated users from `/login` or `/register` to `/dashboard`
- Excludes API routes, static files, and Next.js internals

**Important**: This is OAuth-only authentication. No password/email authentication is implemented.

### Database Schema (Prisma)

**Location**: `prisma/schema.prisma`

**Key Models**:

- **User**: Core user model with NextAuth fields plus `createdAt`/`updatedAt`
- **Account**: OAuth provider accounts (composite unique on `[provider, providerAccountId]`)
- **Session**: User sessions (indexed on `userId`)
- **VerificationToken**: Email verification tokens
- **Subscription**: Stripe subscription management
  - Unique constraints on `stripeCustomerId` and `stripeSubscriptionId`
  - Fields: `status`, `plan` (free/pro/enterprise), `stripePriceId`, `stripeCurrentPeriodEnd`
  - Cascade deletes with User

**Database Client**: Global singleton pattern in `lib/db/index.ts` prevents multiple Prisma instances in development.

**After Schema Changes**: Always run `pnpm db:generate` to update Prisma client, then `pnpm db:migrate` to apply migrations.

### Stripe Integration

**Configuration**: `lib/stripe/index.ts` (API version: `2025-02-24.acacia`)

**Webhook Handler**: `app/api/webhooks/stripe/route.ts`

- Verifies Stripe signature using `STRIPE_WEBHOOK_SECRET`
- Handles:
  - `checkout.session.completed`: Initial checkout (placeholder)
  - `customer.subscription.updated`: Updates subscription status and period end
  - `customer.subscription.deleted`: Marks subscription as deleted
- Directly updates Prisma `Subscription` model

**Subscription Plans**: Defined in `config/subscriptions.ts`

- Free ($0), Pro ($29), Enterprise ($99)
- Price IDs from env vars: `STRIPE_PRICE_ID_PRO`, `STRIPE_PRICE_ID_ENTERPRISE`

**Local Testing**: Use `pnpm stripe:listen` to forward webhooks from Stripe CLI.

### Server Architecture Patterns

**Current State**: This starter uses API Routes exclusively. Server Actions structure exists but is not implemented.

**Directory Structure**:

- `app/api/` - API route handlers (NextAuth, Stripe webhooks)
- `server/actions/` - Empty, ready for mutating server actions
- `server/queries/` - Empty, ready for data fetching functions
- `server/services/` - Empty, ready for business logic layer

**When Adding Server Logic**:

- Use `"use server"` directive for server actions
- Place mutations in `server/actions/`
- Place queries in `server/queries/`
- Place reusable business logic in `server/services/`
- Server actions limited to 2MB body size (configured in `next.config.mjs`)

### Email Service (Resend)

**Location**: `lib/email/index.ts`

- Simple wrapper around Resend SDK
- `sendEmail()` accepts: `to`, `subject`, and React Email component
- Uses env vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
- Integrates with `@react-email/components` for templating

**No email templates exist yet** - structure is ready for React Email components.

### Testing Setup

**Unit Tests** (Vitest):

- Test directory: `tests/unit/`
- Setup file: `tests/setup.ts`
- Uses jsdom environment
- Path alias `@/` resolves to project root

**E2E Tests** (Playwright):

- Test directory: `tests/e2e/`
- Runs on Chromium (Desktop Chrome)
- Auto-starts dev server on localhost:3000
- Retries: 2x in CI, 0x locally
- Workers: 1 in CI, unlimited locally

### Configuration Files

**Site Metadata**: `config/site.ts` - Centralized site name, description, URLs
**Subscriptions**: `config/subscriptions.ts` - Pricing tiers and features
**Path Aliases**: `@/*` maps to project root in TypeScript and build tools

**Security Headers** (configured in `next.config.mjs`):

- Strict-Transport-Security
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: origin-when-cross-origin

**Next.js Config**:

- Standalone output mode for Docker deployment
- Remote image patterns for GitHub and Google avatars
- Server actions enabled (experimental)

## Key Architectural Patterns

1. **Global Singletons**: Database client uses singleton pattern to prevent multiple instances
2. **Type Safety**: Zod validation for forms (`lib/validations/`), TypeScript strict mode enabled
3. **Component Library**: Uses shadcn/ui components in `components/ui/`
4. **Separation of Concerns**: Clear separation between `lib/` (utilities), `server/` (logic), `app/` (routes), `components/`
5. **Docker Ready**: Multi-stage Dockerfile, standalone Next.js output, docker-compose for local development

## Important Notes

- **Package Manager**: This project uses `pnpm`, not npm or yarn
- **Node Version**: Requires Node.js 20+
- **Environment Variables**: Copy `.env.example` to `.env` and configure before running
- **Git Hooks**: Husky runs lint-staged on pre-commit (ESLint + Prettier)
- **Database**: PostgreSQL 16 required (run via Docker or external instance)
- **Auth Secret**: Generate with `openssl rand -base64 32` for `AUTH_SECRET`

## Common Workflows

### Adding a New Database Model

1. Edit `prisma/schema.prisma`
2. Run `pnpm db:generate` to update Prisma client
3. Run `pnpm db:migrate` to create and apply migration
4. Test with `pnpm db:studio` to inspect database

### Adding a New Server Action

1. Create file in `server/actions/`
2. Add `"use server"` directive at top
3. Export async function
4. Import and use in Server Components or Client Components via form actions

### Setting Up OAuth Provider

1. Create OAuth app in provider console (GitHub/Google)
2. Add credentials to `.env`: `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, etc.
3. Providers are conditionally loaded in `lib/auth/config.ts` based on env var presence

### Testing Stripe Webhooks Locally

1. Install Stripe CLI
2. Run `pnpm stripe:listen` to start forwarding
3. Copy webhook signing secret to `.env` as `STRIPE_WEBHOOK_SECRET`
4. Trigger test events via Stripe CLI or Dashboard
