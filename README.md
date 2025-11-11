# Swift Launch

A production-ready Next.js 16 SaaS starter with TypeScript, Prisma, Stripe, and Auth.js.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Auth.js (NextAuth v5)
- **Payments**: Stripe
- **Email**: Resend + React Email
- **Styling**: Tailwind CSS + shadcn/ui
- **Testing**: Vitest + Playwright
- **Deployment**: Docker

## Prerequisites

- Node.js 20+
- pnpm (installed globally)
- Docker & Docker Compose (for containerized setup)

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

- Database URL
- Auth.js secret (generate with `openssl rand -base64 32`)
- OAuth provider credentials (GitHub/Google)
- Stripe keys
- Resend API key

### 3. Start Database (Docker)

```bash
docker-compose up -d postgres
```

### 4. Run Database Migrations

```bash
pnpm db:generate
pnpm db:migrate
```

### 5. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Docker Development

To run the entire stack with Docker:

```bash
docker-compose up
```

This starts:

- PostgreSQL database on port 5432
- Next.js app on port 3000

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run E2E tests
- `pnpm db:studio` - Open Prisma Studio
- `pnpm db:migrate` - Run database migrations
- `pnpm stripe:listen` - Listen to Stripe webhooks locally

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Auth pages (login, register)
│   └── dashboard/         # Protected dashboard pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   └── layouts/          # Layout components
├── lib/                   # Utility libraries
│   ├── auth/             # Auth.js configuration
│   ├── db/               # Prisma client
│   ├── email/            # Email service
│   ├── stripe/           # Stripe client
│   └── validations/      # Zod schemas
├── server/                # Server-side logic
│   ├── actions/          # Server actions
│   ├── queries/          # Database queries
│   └── services/         # Business logic
├── prisma/               # Database schema & migrations
├── tests/                # Tests
│   ├── unit/            # Unit tests
│   └── e2e/             # E2E tests
└── config/               # App configuration
```

## Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript with strict mode
- ✅ Authentication with Auth.js (GitHub, Google OAuth)
- ✅ Database with Prisma + PostgreSQL
- ✅ Payments with Stripe
- ✅ Email with Resend
- ✅ UI components with shadcn/ui
- ✅ Form validation with Zod + React Hook Form
- ✅ Testing with Vitest + Playwright
- ✅ Linting with ESLint
- ✅ Formatting with Prettier
- ✅ Git hooks with Husky + lint-staged
- ✅ Docker support
- ✅ CI/CD with GitHub Actions

## Next Steps

1. Configure your OAuth providers in the respective developer consoles
2. Set up Stripe products and pricing
3. Configure your domain in Resend for email sending
4. Customize the app layout and styling
5. Add your business logic and features

## Documentation

See [setup-guide.md](setup-guide.md) for detailed setup instructions and configuration options.

## License

MIT
