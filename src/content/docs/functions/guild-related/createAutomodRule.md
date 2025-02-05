---
title: $createAutomodRule
description: $createAutomodRule will create a new Discord Automod Rule for the given guild.
id: createAutomodRule
---

`$createAutomodRule` will create a new Discord Automod Rule for the given guild.

## Usage

```php
$createAutomodRule[guildID;name;triggerType;triggerMetadata;actions;enabled?;exemptRoles?;exemptChannels?;reason?]
```

## Parameters

| Field           | Type    | Description                                                                                                           | Required |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------- | :------: |
| guildID         | integer | The ID of the guild where the automod rule should be created in.                                                      |   true   |
| name            | string  | The name of the new Automod Rule.                                                                                     |   true   |
| triggerType     | number  | The [trigger type](https://discord-api-types.dev/api/discord-api-types-v10/enum/AutoModerationRuleTriggerType).       |   true   |
| triggerMetadata | object  | The [trigger metadata](https://old.discordjs.dev/#/docs/discord.js/main/typedef/AutoModerationTriggerMetadata).       |   true   |
| actions         | object  | The [action performed when triggered](https://old.discordjs.dev/#/docs/discord.js/main/typedef/AutoModerationAction). |   true   |
| enabled?        | boolean | Enable the automod rule?                                                                                              |  false   |
| exemptRoles?    | string  | Exempt Roles from this Automod Rule, administrators are exempt my default. Split multiples roles with commas (`,`).   |  false   |
| exemptChannels? | string  | Exempt Channels from this Automod Rule. Split multiples channels with commas (`,`)                                    |  false   |
| reason?         | string  | The reason displayed in the guild's audit logs.                                                                       |  false   |

## Example(s)

This will create a automod rule which blocks the words (type: 1) "bad" & "words":

```javascript
client.command({
  name: "createAutomodRule",
  code: `
  $createAutomodRule[$guildID;Block Bad Words;1;{ "keywordFilter": ["bad", "words"]};[{ "type": 1 }];true;;;This is a reason!]
  `,
});
```
