import { filename } from 'pathe/utils';

const glob = import.meta.glob('~/assets/cat-images/*.jpg', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default])
);

export const useAssetCatImages = () => {
  return { images };
}