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
