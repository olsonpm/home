/**
 * This is based off eslint-config-next, picking the parts I want and other
 * slight modifications
 */

import path from 'node:path'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import { createNodeResolver } from 'eslint-plugin-import-x'

const { dirname } = import.meta
const pathToApp = path.resolve(dirname, '../app')

const nextPageOverrides = {
  files: ['**/page.js'],
  rules: {
    // next requires `export const` for some reason, which conflicts with this
    // import plugin rule
    'import-x/group-exports': 'off',
  },
}

const config = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  {
    name: 'next',
    // Default files, users can overwrite this.
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/resolver-next': [
        createNodeResolver({
          alias: {
            '@/*': [`${pathToApp}/*`],
          },
        }),
      ],
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',
      // removing this rule reduces lint time by a lot
      '@next/next/no-html-link-for-pages': 'off',
      // Image can't optimize with static site
      '@next/next/no-img-element': 'off',
    },
  },
  nextPageOverrides,
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
]

export default config
