---
title: $commandsCount
description: Returns the amount of commands that you have for your bot
---

This function returns how many commands the bot has.

### Usage
```php
$commmandsCount
```

## Example

```javascript
bot.command({
name: "command-count",
code: `This bot currently has $commandsCount commands!`
})
```
