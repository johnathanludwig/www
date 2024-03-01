import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [sveltekit()],
	preprocess: vitePreprocess()
});
