import type { CollectionEntry } from 'astro:content';
import { localize, type Locale } from '../i18n';

interface PersonInput {
  site: URL;
  locale: Locale;
  profile: CollectionEntry<'profile'>['data'];
  experience: CollectionEntry<'experience'>['data'][];
  education: CollectionEntry<'education'>['data'][];
  skills: CollectionEntry<'skills'>['data'][];
}

export function personJsonLd({ site, locale, profile, experience, education, skills }: PersonInput) {
  const current = experience.find((job) => !job.endDate);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': new URL('/#person', site).href,
    name: profile.name,
    alternateName: profile.fullName,
    url: site.href,
    email: `mailto:${profile.email}`,
    description: localize(profile.summary, locale),
    jobTitle: current ? localize(current.position, locale) : undefined,
    worksFor: current ? { '@type': 'Organization', name: current.organization, url: current.url } : undefined,
    alumniOf: education.map((ed) => ({ '@type': 'EducationalOrganization', name: ed.institution })),
    knowsAbout: skills.flatMap((group) => group.keywords),
    sameAs: profile.profiles.map((p) => p.url),
  };
}
