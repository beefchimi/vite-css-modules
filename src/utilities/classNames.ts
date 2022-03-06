interface Variants {
  [key: string]: boolean;
}

type ClassNameArgs = (string | Variants)[];

function convertVariantsToNames(variants?: Variants) {
  return variants ? Object.keys(variants).filter((key) => variants[key]) : [];
}

export function classNames(baseName: string, ...args: ClassNameArgs) {
  const additionalNames = args.length
    ? args.map((addition) =>
        typeof addition === 'string'
          ? addition
          : convertVariantsToNames(addition),
      )
    : [];

  return [baseName, ...additionalNames.flat()].join(' ');
}

// TODO: `CSSModuleClasses` will not exist in all environments,
// so we should make a generic `CssDeclaration` type.
export function variationName(
  prefix: string,
  variant: string,
  styles?: CSSModuleClasses,
) {
  const firstLetter = variant.slice(0, 1).toUpperCase();
  const className = `${prefix.toLowerCase()}${firstLetter}${variant.slice(1)}`;

  return styles ? styles[className] : className;
}
