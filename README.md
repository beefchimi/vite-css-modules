# Vite CSS Modules

This repo exists to provide a thorough examination of CSS Modules in order to assess the pros and cons of using it at scale.

## Instructions

```sh
git clone git@github.com:beefchimi/vite-css-modules.git
cd vite-css-modules
npm install
npm run start
```

You may also need to configure your IDE to recognize `.module.css` with a specific language mode. For example, if our configuration uses a `SCSS`-like feature-set, it might make sense to always have `.css` files recognized as `.scss`. Otherwise, you may find features like auto-complete and syntax highlighting not quite working as expected.

## Remaining work

- [ ] Convert remaining `.css` files to `.scss`.
- [ ] Demonstrate the difference between `*.module.(s)css` and `*.(s)css` _(without `module` extension)_.
  - What effect does this have on `global` vs `local`?
- [ ] Configure `postcss` for `Vite` and enable `autoprefixer`.
  - Would be ideal if it could consume `@beefchimi/postcss-plugin`. However, that plugin should really be simplified to only include `autoprefixer`, since the other concerns are not as relevant these days.
- [ ] Implement `Vite > resolve.alias` to allow `@/` alias to `src` folder.
  - This should work for both `.(s)css` and `.ts(x)` files.
- [ ] Consider utilizing `additionalData` to auto import some foundational `.scss` utilities.
- [ ] Implement a `<ThemeProvider />` and demonstrate how easy/difficult it is to maintain different theme styles using `CSS Modules + React`.
- [ ] Implement some tooling that allows defining "design system tokens" in a _shareable source of truth_.
  - Would allow us to author a `.json` or `.ts` file that maps "variables to values".
  - This file would then be importable / parseable by both `.(s)css` and `.ts(x)` files.
- [ ] Implement some tooling that can parse both `.(s)css` and `.ts(x)` files to allow CSS Custom Properties linting.
  - This would be necessary in order to "type check" our use of CSS Custom Properties, allowing us to avoid typos.

## Exploration

Here are some quick thoughts on this technology choice:

### Pros

- Its just `CSS`, so all of the editor integration you would expect to have comes _(mostly)_ for free.
  - Autocompletion, syntax highlighting, etc.
- Shallow learning curve.
  - While there are some quirks of CSS Modules, there isn't much to know beyond familiarity with CSS.
- Control over bundle generation.
  - Can have finer control over bundle splitting and asset caching.
- Zero runtime cost _(cost is at build time)_.
- Classname obfuscation _(hashed classnames)_.
  - Development will produce “debug-friendly” class names (`.Header_x37`).
  - Production _can_ produce fully obfuscated class names (`H4a_x37`).
- Used in combination with `postcss`, which offers other plugins we require for our production builds.

### Cons

- Given the nature of our app and iteration cycles, caching `css` may not be _all that relevant_ at the moment.
  - This is highly debatable however, especially considering we don't even have continuous deployment.
- With a richly interactive app like ours, runtime CSS might actually offer some benefits.
  - Would require more investigation before detailing any of those benefits.
- No type safety.
  - There is nothing to ensure `CSS custom properties` are named/used correctly.
  - Example: A typo in a `CSS custom property` will not throw any errors and can be shipped to production without warning.
  - As a result, it is harder to debug visual issues.
  - This becomes a real issue when we think about extracting a design system into a separate dependency. Imagine bumping the dependency and not following the “breaking changes”, which could contain variable renaming... you will be using `undefined` variables without breaking the build.
- No protection from `custom property` collisions.
  - Can easily write a `CSS custom property` with an identical name.
  - However, there might be some `postcss` tooling to add this feature.
- Need to manually configure many `postcss` plugins to obtain the feature-set developers want.
  - Alternatively, use `dart-sass` with only a handful of `postcss` plugins.
- Cannot share cross-language tokens.
  - Example: Cannot write a selector loop informed by a `array.length` that is defined in your JS code.
  - Would need to either introduce some tooling to enable importing/exporting across languages, or split your source of truth by duplicating the variable in SCSS (degrades confidence).

## Criteria

In order to provide a comfortable developer experience, we need to couple CSS modules with the following features:

- Auto-prefixed properties/values, or code transformations for broader support _(based on defined browser support range)_.
- Selector / declaration nesting.
  - Basic nesting is an expected CSS feature, but more robust nesting (such is the case with `SCSS`) is preferred.
- Code-only variables _(non code generating variables)_.
  - Think `scss variables` vs `css custom properties`.
  - Valuable for when we just want to do some math to express the logic behind a value.
- Mixins for abstracting collections of styles into reusable groups.
- Functions for stripping units, retrieving values from an object, etc.
- Iterations such as `for` and `each` loops.
- Conditional statements such as `if` and `else`.
- Conditional operators such as `or` and `and`.
- Single-line comments.

If we decide to move forward with CSS Modules, we have the choice of either:

- `dart-sass` with only the `postcss` plugins necessary to complete the feature set.
- Curating a robust collection of `postcss` plugins to complete the feature set.

### Dart SASS + PostCSS

`dart-sass` should provide all of the features we want without the need to configure various other plugins. The only `postcss` plugin we would still require is [autoprefixer](https://github.com/postcss/autoprefixer).

One feature of `dart-sass` that stands out against anything provided by `postcss` is a "module system", allowing for more explicit imports between `.scss` files.

### PostCSS only

We will need to configure the following PostCSS plugins:

- [autoprefixer](https://github.com/postcss/autoprefixer)
  - Alternatively, [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) is an interesting option.
  - If we went with PostCSS Preset Env, we should make the decision to stick as closely to the native CSS spec as possible.
  - Essentially, selecting this tool is investing in native CSS as a core technology.
- [postcss-nested](https://github.com/postcss/postcss-nested)
  - Choosing this over `postcss-nesting` which is more faithful to the actual CSS spec.
  - But once again, if we use `postcss-preset-env` then we should used this plugin.
- [postcss-advanced-variables](https://github.com/csstools/postcss-advanced-variables)
  - This essentially rolls up a number of separate features into one plugin.
  - Can be used instead of _(to name a few granular plugins)_:
    - [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)
    - [postcss-mixins](https://github.com/postcss/postcss-mixins)
    - [postcss-each](https://github.com/madyankin/postcss-each)
  - It is possible that this plugin will conflict with `postcss-import` if configured incorrectly.

The following are configured automatically by `vite`, but will likely need to also be included for Yat’s `webpack` config:

- [postcss-import](https://github.com/postcss/postcss-import)
  - We may want to specify some rules around this, as it should generally only be used for importing “non-static-code” _(mixins, variables, etc)_.
  - I do not believe this plugin implements "importing as a module system", and therefor would not solve all the requirements for "import behaviour".
- [postcss-load-config](https://github.com/postcss/postcss-load-config)
  - I need to consult my `dev-configs` package and see if it will work in our required environments.
- [postcss-modules](https://github.com/madyankin/postcss-modules)
  - Investigate the `composes` example to see if this is a default feature of PostCSS.

Vite also uses `css-clean` to handle optimization + minification. I might need to manually configure these concerns in our `webpack` config.

We would need to make sure our `browserlist` is configured correctly, as some of these tools rely on that.

#### Additional PostCSS considerations

- [postcss-functions](https://github.com/andyjansson/postcss-functions)

#### Missing PostCSS features

- If we do not use `postcss-advanced-variables`, then there are several features we may find ourselves missing.
- If `postcss-import` does not provide a module system, then we won't be able to have explicit dependency imports.
