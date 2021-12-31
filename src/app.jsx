import { ConfigProvider } from 'antd'
import zh_TW from 'antd/lib/locale/zh_TW'
import { useCallback, useEffect, useState } from 'react'
const modules = import.meta.glob('./records/*.js')

function App() {
	const [loading, setLoading] = useState(false)
	const [records, setRecords] = useState({})
	const [selectedYear, setSelectedYear] = useState(() =>
		new Date().getFullYear(),
	)

	const bootstrap = useCallback(async () => {
		const newRecords = {}

		setLoading(true)
		for (const path in modules) {
			const year = path.replace(/[./A-z]+(\d+)\.js/g, '$1')
			const { default: d } = await modules[path]()
			newRecords[year] = d
		}
		setLoading(false)

		console.log(newRecords)
		setRecords(newRecords)
	}, [])

	useEffect(bootstrap, [])

	return (
		<ConfigProvider locale={zh_TW}>
			<div className="p-10">
				<div className={'p-6 bg-white rounded-md shadow-lg'}>
					{loading
						? '資料獲取中'
						: records[selectedYear]
						? JSON.stringify(records[selectedYear])
						: '找不到資料'}
				</div>
			</div>
		</ConfigProvider>
	)
}

export default App
