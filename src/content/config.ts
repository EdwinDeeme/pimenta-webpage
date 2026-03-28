import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(['Article', 'Tutorial']),
  }),
});

export const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  client: z.string().optional(),
  year: z.number(),
  tags: z.array(z.string()),
  image: z.string(),
  liveUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: portfolioSchema,
});

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};