---
title: '$onlyForGuilds'
description: '$onlyForGuilds will check if the command was executed in one of the listed guilds and return a error message if not.'
id: onlyForGuilds
---

`$onlyForGuilds` will check if the command was executed in one of the listed guilds and return a error message if not.

## Uso

```php
$onlyForGuilds[...guildIds;error]
```

## Parámetros

| Campo       | Tipo            | Parámetros                                                                     | Requerido |
| ----------- | --------------- | ------------------------------------------------------------------------------ |:---------:|
| ...guildIds | string, integer | Guilds you want to limit the command to.                                       | verdadero |
| error       | consulta        | Error to return when the command was not executed in any of the listed guilds. | verdadero |

## Ejemplo(s)

This will limit the command only to the listed guilds:

```javascript
bot.command({
    name: "onlyForGuilds",
    code: `
    Ok.
    $onlyForGuilds[guildID;guildID;You can't use that command here!]
    `
});
```