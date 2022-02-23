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
});
