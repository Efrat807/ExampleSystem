import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const {
	HOST: host = 'localhost',
	PORT = 5173,
	FORCE_HTTPS = false,
} = process.env;
const openUrl = (port = PORT) => `http://localhost:${port}`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const buildFolderName = mode.charAt(0).toUpperCase() + mode.slice(1);

	return {
		define: { 'process.env.MODE_ENV': JSON.stringify(mode) },
		server: { host, port: +PORT, open: openUrl() },
		preview: {
			host,
			port: +PORT + 1,
			https: !!FORCE_HTTPS,
			open: host === 'localhost' ? openUrl(+PORT + 1) : false,
		},
		build: {
			sourcemap: true,
			minify: true,
			outDir: `build${buildFolderName}`,
			chunkSizeWarningLimit: 160000000000000,
			rollupOptions: {
				output: {
					manualChunks(id) {
						return id.includes('node_modules')
							? id
								.toString()
								.split('node_modules/')[1]
								.split('/')[0]
								.toString()
							: null;
					},
				},
			},
		},
		plugins: [react()],
	};
});
