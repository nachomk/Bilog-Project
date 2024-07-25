import z from 'zod'

export const sheduleSchema = z.object ({
    id_agenda: z.number(),
    ape_nom: z.string(),
    hora: z.string()
})
