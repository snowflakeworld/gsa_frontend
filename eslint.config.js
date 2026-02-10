import eslint from '@eslint/js'
import tslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/*.config.js'],
    plugins: {
      ts,
      react
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
        globals: {
          ...globals.browser
        }
      }
    },
    rules: {
      'react/display-name': 'off',
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
      'import/no-anonymous-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      // add new line above comment
      // 'lines-around-comment': [
      //   'error',
      //   {
      //     beforeLineComment: true,
      //     beforeBlockComment: true,
      //     // allowBlockStart: true,
      //     allowClassStart: true,
      //     allowObjectStart: true,
      //     allowArrayStart: true
      //   }
      // ],
      // add new line above return
      'newline-before-return': 'error'
    }
  }
]
