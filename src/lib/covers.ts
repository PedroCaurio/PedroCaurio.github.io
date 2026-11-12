import type { ImageMetadata } from 'astro';

const covers = import.meta.glob<{ default: ImageMetadata }>('../assets/games/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

export function gameCover(id: string): ImageMetadata | undefined {
  const entry = Object.entries(covers).find(
    ([path]) =>
      path
        .split('/')
        .pop()
        ?.replace(/\.\w+$/, '') === id,
  );
  return entry?.[1].default;
}
