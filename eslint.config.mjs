import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'

// 'off' - отключение правила
// 'warn' - предупреждение
// 'error' - ошибка
const lintStatus = 'error'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // Подключение и настройка плагина prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  },

  // Подключение и настройка плагина import
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          typescript: {
            project: 'tsconfig.json',
          },
        },
      },
    },
    rules: {
      /** Правило, которое проверяет пути импортов. При некорректном пути импорта будет сообщение об ошибке */
      'import/no-unresolved': 'error',
    },
  },

  // Общие правила
  {
    rules: {
      /** Правило, запрещающее объявлять неиспользуемые переменные */
      'no-unused-vars': 'off',

      /** Правило, запрещающее объявлять неиспользуемые переменные */
      '@typescript-eslint/no-unused-vars': [lintStatus],

      /** Правило, запрещающее использовать `var` для объявления переменной */
      'no-var': lintStatus,

      /** Правило, запрещающее использование let вместо const, если переменная не изменяется. */
      'prefer-const': [
        lintStatus,
        {
          /** Касается деструктуризации:
           * ```
           *  let {a, b} = foo();
           *  a = a + 1;
           * ```
           *  Если 'a' будет изменяться, но 'b' останется неизменяемой - отобразится ошибка */
          destructuring: 'any',

          /** This is an option to avoid conflicting with no-use-before-define rule (without "nofunc" option).
           * If true is specified, this rule will ignore variables that are read between the declaration and the first assignment. Default is false.
           * https://eslint.org/docs/latest/rules/prefer-const#ignorereadbeforeassign */
          ignoreReadBeforeAssign: true,
        },
      ],

      /** Правило, запрещающее использовать `const a = new Array()` вместо `const a = []` */
      '@typescript-eslint/no-array-constructor': lintStatus,

      /** Правило, запрещающее использовать тип `any` */
      '@typescript-eslint/no-explicit-any': lintStatus,

      /** Правило, запрещающее использовать константу для условий
       * ```
       * const condition = true;
       * while(condition) {}
       * ```
       */
      'no-constant-condition': lintStatus,

      /** Правило, запрещающее использовать двойное отрицание `!!!booleanParam`
       * Иногда используют для проверки на null или undefined */
      'no-extra-boolean-cast': lintStatus,

      /** Правило, запрещающее использовать undefined в явном виде */
      'no-undef': lintStatus,

      /** Правило, запрещающее использовать опциональные цепочки обращений к структуре
       * ```
       * obj.foo?.fee
       * ``` */
      '@typescript-eslint/no-non-null-asserted-optional-chain': lintStatus,

      /** Это правило запрещает лексические объявления (let, const, function и class) в предложениях case/default.
       Причина в том, что лексическое объявление видно во всем блоке switch, но оно инициализируется только при его назначении,
       что произойдет только в том случае, если будет достигнут случай, в котором оно определено.
       */
      'no-case-declarations': lintStatus,

      /** Правило, запрещающее использовать конструкцию trycatch в местах, где точно нет исключений */
      'no-useless-catch': lintStatus,

      /** Правило, запрещающее использовать пустые блоки
       * ```
       * if() {
       *  // smoothing doing
       * } else {
       *
       * }
       *```
       */
      'no-empty': lintStatus,

      /**
       * JavaScript приостанавливает выполнение инструкций потока управления в блоках try и catch до завершения выполнения блока finally.
       * Таким образом, когда в finally используются команды return, throw, break или continue,
       * инструкции потока управления внутри try и catch перезаписываются, что рассматривается как непредвиденное поведение.
       */
      'no-unsafe-finally': lintStatus,

      /** Правило, запрещающее переменной присваивать собственное значение
       * ```
       * foo = foo
       * ```
       */
      'no-self-assign': lintStatus,

      /** Правило, запрещающее использовать `require` вместо `import` */
      '@typescript-eslint/no-var-requires': lintStatus,

      /** Правило, требующее использовать функцию `isNaN` вместо сравнения с `Number.NaN` */
      'use-isnan': lintStatus,

      /** This number literal will lose precision at runtime. Это касается чисел с большим количеством знаков после запятой. */
      '@typescript-eslint/no-loss-of-precision': lintStatus,

      /** Правило, запрещающее использование одинаковых `case`
       * ```
       * switch (foo) {
       *    case(0):
       *    break;
       *
       *    case(1):
       *    break;
       *
       *    case(0):
       *    break
       * }
       * ```
       */
      'no-duplicate-case': lintStatus,

      /** Правило запрещающее использовать
       * ```
       * \@ts-nocheck
       * ``` */
      '@typescript-eslint/ban-ts-comment': lintStatus,

      // 'no-magic-number': lintStatus
    },
  },
]
