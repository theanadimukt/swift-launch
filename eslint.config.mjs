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
