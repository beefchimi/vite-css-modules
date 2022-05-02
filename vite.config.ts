import {defineConfig} from 'vite';
import pluginReact from '@vitejs/plugin-react';
import pluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr({
      // TODO: Configure this plugin
      // https://react-svgr.com/docs/options/
      // https://react-svgr.com/docs/configuration-files/
      // https://github.com/svg/svgo#configuration
      // svgrOptions: {},
    }),
  ],
  resolve: {
    alias: {
      // NOTE: This might require ignoring `@typescript-eslint/naming-convention`.
      // '@/': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      // If we want to remove the redundancy of the `folder` + base class name,
      // we could write a function `generateScopedName()` function.
      generateScopedName: '[folder]_[local]_[hash:base64:6]',
    },
  },
});
