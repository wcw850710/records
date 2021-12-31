module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				default: '#000000d9',
				'light-default': '#0000001a',
				success: '#52c41a',
				'light-success': '#52c41a1a',
				primary: '#1890ff',
				'light-primary': '#1890ff1a',
				warning: '#faad14',
				'light-warning': '#faad141a',
				danger: '#ff4d4f',
				'light-danger': '#ff4d4f1a',
				secondary: '#00000073',
				disabled: '#00000040',
				'ant-border': 'rgba(0, 0, 0, 0.06)',
			},
			borderWidth: {
				1: '1px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
