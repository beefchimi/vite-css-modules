interface Variants {
  [key: string]: boolean;
}

export function classNames(baseName: string, variants?: Variants) {
  const variantNames = variants
    ? Object.keys(variants).filter((key) => variants[key])
    : [];

  return [baseName, ...variantNames].join(' ');
}

export function variationName(prefix: string, variant: string) {
  const variantFirstLetter = variant.slice(0, 1).toUpperCase();
  return `${prefix.toLowerCase()}${variantFirstLetter}${variant.slice(1)}`;
}
