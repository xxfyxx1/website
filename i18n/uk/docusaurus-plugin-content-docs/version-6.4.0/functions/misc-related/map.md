---
title: $map
description: '$map виконуватиме очікувані команди по вказаним елементам.'
id: map
---

`$map` буде виконуватися очікування команд на вказані елементи.

## Використання

```php
$map[text;split;awaitedCmds;sep?]
```

## Параметри

| Поле         | Тип   | Опис                           | Обов'язковий |
| ------------ | ----- | ------------------------------ |:------------:|
| текст        | рядок | Текст.                         |     так      |
| розділити    | рядок |                                |     так      |
| Чейтед-Кемдс | рядок | Awaited Команди для виконання. |     так      |
| місце?       | рядок | Розділювач.                    |      ні      |