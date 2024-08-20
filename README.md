# Boilerplate TS-NODE

Сборка-песочница для работы с `typescript` с возможностью отладки в `vsc`.

Содержит настройки `eslint`, `prettier`, `husky` и `lint-staged`.

## Запуск проекта

Для запуска проекта нужно запустить отладочный скрипт `debug` средствами отладки `vsc`.

## Проверка правил eslint и форматирования

При каждом commit сборка проверяет файлы, которые были добавлены для commit. В случае возникновения ошибок будет выдано сообщение от `git`. Для исправления ошибок потенциальных к авто исправлению в терминале нужно запустить команду `npm run lint:fix`. Ошибки, которые не могут быть исправлены автоматически нужно исправлять вручную.

К авто исправляемым ошибкам относятся ошибки форматирования и некоторые ошибки eslint.

## Расширения vsc

Для того, чтобы vsc подсвечивал ошибки eslint и prettier нужно установить расширение eslint. Тогда при работе с кодом все ошибки будут подчеркиваться красным без запуска eslint.