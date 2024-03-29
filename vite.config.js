import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),
		VueI18nPlugin({
			include: resolve(
				dirname(fileURLToPath(import.meta.url)),
				'./src/locales/**'
			)
		})]
});