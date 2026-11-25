import type { ImageKey } from '../content/types';

const files = import.meta.glob<string>('../assets/cases/*.{avif,webp}', { eager: true, query: '?url', import: 'default' });

function src(key: ImageKey, width: 640 | 1200, ext: 'avif' | 'webp') {
  return files[`../assets/cases/${key}-${width}.${ext}`];
}

interface Props {
  image: { key: ImageKey; alt: string; width: number; height: number };
  sizes: string;
}

/** AVIF con fallback WebP, dos anchos, dimensiones fijas para evitar saltos de layout. */
export default function Picture({ image, sizes }: Props) {
  const set = (ext: 'avif' | 'webp') => `${src(image.key, 640, ext)} 640w, ${src(image.key, 1200, ext)} ${Math.min(1200, image.width)}w`;
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img src={src(image.key, 640, 'webp')} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
    </picture>
  );
}
