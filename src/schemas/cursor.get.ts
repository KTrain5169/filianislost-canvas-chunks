import z from "zod";

export const cursorSchema = z.array(z.object({
    id: z.number().int().meta({
        description: 'The ID of the cursor.'
    }),
    tier: z.number().int().meta({
        description: 'The cursor\'s tier.'
    }),
    name: z.string().meta({
        description: 'The cursor\'s name.'
    }),
    free: z.boolean().default(false).meta({
        description: 'If true, the cursor is unlocked immediately without any requirement on the user.'
    }),
    unlock: z.discriminatedUnion('kind', [
        z.object({
            kind: z.union([z.literal('client'), z.literal('code'), z.literal('manual')]).meta({
                description: 'These unlock methods rely on either specific client-side detection, or manual intervetion by mods.'
            }),
            tooltip: z.string().meta({
                description: 'A string to display on hovering over the cursor in the inventory. If omitted, will simply say "You do not own this cursor!"'
            }).optional(),
        }),
        z.object({
            kind: z.literal('purchase').meta({
                description: 'Purchase from the cursor shop for a certain amount of coins.'
            }),
            cost: z.number().int().meta({
                description: 'The amount of coins it takes to buy the cursor.'
            })
        }),
        z.object({
            kind: z.literal('stat').meta({
                description: 'Grind up your stats for unlocking these cursors. If you\'ve already passed these stats by the time these conditions were added, it should automatically unlock.'
            }),
            stat: z.enum(['pixels_changed', 'shared', 'invites']).meta({
                description: 'The stat that is being tracked. pixels_changed denotes pixels painted, shared denotes sharing the canvas (images or invites?) and invites is amount of people invited through your invite link.'
            }),
            gte: z.number().int().meta({
                description: 'The value at which the condition is met.'
            })
        })
    ]).meta({
        description: 'Cursor unlock conditions. If the object is omitted, that means there is no unlock condition for them yet.'
    }).optional()
}))