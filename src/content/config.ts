import { z, defineCollection } from 'astro:content';
const marketNewsEntries = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        isDraft: z.boolean(),
    }),
});
export const collections = {
    'news': marketNewsEntries,
};
