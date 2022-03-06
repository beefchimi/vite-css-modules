interface Variants {
  [key: string]: boolean;
}

export function classNames(baseName: string, variants?: Variants) {
  const variantNames = variants
    ? Object.keys(variants).filter((key) => variants[key])
    : [];

  return [baseName, ...variantNames].join(' ');
}

export function variationName(
  prefix: string,
  variant: string,
  // TODO: This type may not exist in some environments,
  // so we should make a generic CssDeclaration type.
  styles?: CSSModuleClasses,
) {
  const firstLetter = variant.slice(0, 1).toUpperCase();
  const className = `${prefix.toLowerCase()}${firstLetter}${variant.slice(1)}`;

  return styles ? styles[className] : className;
}
