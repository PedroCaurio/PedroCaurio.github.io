import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
const localized = z.object({ pt: text, en: text });
const localizedList = z.object({ pt: z.array(text).min(1), en: z.array(text).min(1) });
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'use AAAA-MM');

const profile = defineCollection({
  loader: file('src/content/profile.yaml'),
  schema: z.object({
    name: text,
    fullName: text,
    label: localized,
    summary: localized,
    email: z.email(),
    profiles: z.array(z.object({ network: text, username: text, url: z.url() })).min(1),
    rpgMasterYears: z.number().int().positive(),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    order: z.number().int(),
    organization: text,
    url: z.url().optional(),
    position: localized,
    employment: localized,
    startDate: yearMonth.optional(),
    endDate: yearMonth.optional(),
    confidential: z.boolean().default(false),
    summary: localized,
    highlights: localizedList,
    tags: z.array(text),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z.object({
    order: z.number().int(),
    institution: text,
    shortName: text,
    area: localized,
    studyType: localized,
    startDate: yearMonth.optional(),
    endDate: yearMonth.optional(),
    expected: z.boolean().default(false),
    score: z.string().optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({
    order: z.number().int(),
    attribute: localized,
    name: localized,
    keywords: z.array(text).min(1),
  }),
});

const games = defineCollection({
  loader: file('src/content/games.yaml'),
  schema: z.object({
    title: text,
    order: z.number().int(),
    featured: z.boolean().default(false),
    engine: text,
    language: text,
    genre: localized,
    summary: localized,
    role: localized,
    contributions: localizedList,
    team: z.array(z.object({ name: text, role: localized.optional() })).default([]),
    jam: z
      .object({
        name: text,
        awards: localizedList.optional(),
      })
      .optional(),
    noGenerativeAi: z.boolean().default(false),
    links: z.object({ itch: z.url(), repo: z.url().optional() }),
    playableInBrowser: z.boolean().default(false),
    coverFit: z.enum(['cover', 'contain']).default('cover'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: text,
    summary: text,
    role: text,
    order: z.number().int(),
    featured: z.boolean().default(false),
    confidential: z.boolean().default(false),
    draft: z.boolean().default(false),
    stack: z.array(text).min(1),
    links: z.object({ repo: z.url().optional(), demo: z.url().optional() }).default({}),
  }),
});

const rpg = defineCollection({
  loader: file('src/content/rpg.yaml'),
  schema: z.object({
    title: text,
    kind: z.enum(['sistema', 'campanha']),
    status: localized,
    summary: localized.optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { profile, experience, education, skills, games, projects, rpg };
