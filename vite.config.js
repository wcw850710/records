import { defineConfig } from 'vite'
import vitePluginImport from 'vite-plugin-babel-import'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/records/',
	plugins: [
		react(),
		vitePluginImport([
			{
				libraryName: 'antd',
				libraryDirectory: 'es',
				style(name) {
					return `antd/es/${name}/style`
				},
			},
		]),
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	server: {
		port: 3333,
	},
})
