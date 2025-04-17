// eslint.config.mjs

import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest'; // Импорт плагина Jest

export default defineConfig([
  // Основная конфигурация для всех JavaScript-файлов
  {
    files: ['**/*.{js,mjs,cjs}'], // Применяется ко всем JS-файлам
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные браузера
      },
      ecmaVersion: 'latest', // Используем последнюю версию ECMAScript
      sourceType: 'module', // Модульный синтаксис (import/export)
    },
    rules: {
      'no-console': 'off', // Разрешаем использование console.log
    },
  },

  // Конфигурация для тестовых файлов
  {
    files: ['__tests__/**/*.{js,mjs,cjs}'], // Применяется только к тестовым файлам
    plugins: {
      jest: jestPlugin, // Добавляем плагин Jest
    },
    extends: ['jest/recommended'], // Используем рекомендации Jest
    rules: {
      'jest/no-disabled-tests': 'error', // Запрещаем отключение тестов
      'jest/no-focused-tests': 'error', // Запрещаем фокусированные тесты
      'jest/no-identical-title': 'error', // Запрещаем одинаковые заголовки тестов
    },
  },
]);