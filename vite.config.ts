/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src',
			components: '/src/components',
			assets: '/src/assets',
			utility: '/src/utility',
			types: '/src/types',
			data: '/src/data',
			views: '/src/views',
			config: '/src/config',
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/__test__/setupTest.ts'],
	},
});
