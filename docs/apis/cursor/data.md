# `/cursor/data`

the `/cursor/data` route holds info about all cursors on the site.
It only supports one HTTP method: `GET`.

## `GET`

This method does not require authentication.
This returns a stringified JSON array with an object the name, id, tier, if it's free, as well as unlock conditions.

## Schema

The response from this appears to satisfy the following schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "The ID of the cursor."
      },
      "tier": {
        "type": "integer",
        "description": "The cursor's tier."
      },
      "name": {
        "type": "string",
        "description": "The cursor's name."
      },
      "free": {
        "default": false,
        "description": "If true, the cursor is unlocked immediately without any requirement on the user.",
        "type": "boolean"
      },
      "unlock": {
        "oneOf": [
          {
            "type": "object",
            "properties": {
              "kind": {
                "anyOf": [
                  {
                    "type": "string",
                    "const": "client"
                  },
                  {
                    "type": "string",
                    "const": "code"
                  },
                  {
                    "type": "string",
                    "const": "manual"
                  }
                ],
                "description": "These unlock methods rely on either specific client-side detection, or manual intervetion by mods."
              },
              "tooltip": {
                "type": "string",
                "description": "A string to display on hovering over the cursor in the inventory. If omitted, will simply say \"You do not own this cursor!\""
              }
            },
            "required": [
              "kind"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "kind": {
                "type": "string",
                "const": "purchase",
                "description": "Purchase from the cursor shop for a certain amount of coins."
              },
              "cost": {
                "type": "integer",
                "description": "The amount of coins it takes to buy the cursor."
              }
            },
            "required": [
              "kind",
              "cost"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "kind": {
                "type": "string",
                "const": "stat",
                "description": "Grind up your stats for unlocking these cursors. If you've already passed these stats by the time these conditions were added, it should automatically unlock."
              },
              "stat": {
                "type": "string",
                "enum": [
                  "pixels_changed",
                  "shared",
                  "invites"
                ],
                "description": "The stat that is being tracked. pixels_changed denotes pixels painted, shared denotes sharing the canvas (images or invites?) and invites is amount of people invited through your invite link."
              },
              "gte": {
                "type": "integer",
                "description": "The value at which the condition is met."
              }
            },
            "required": [
              "kind",
              "stat",
              "gte"
            ],
            "additionalProperties": false
          }
        ],
        "description": "Cursor unlock conditions. If the object is omitted, that means there is no unlock condition for them yet."
      }
    },
    "required": [
      "id",
      "tier",
      "name",
      "free"
    ],
    "additionalProperties": false
  }
}
```
