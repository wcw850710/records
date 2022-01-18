let id = 0
const y = true,  n = false

/** 長期計畫 type:
 id {int}
 name {string}
 startDate? {string}      開始執行日期
 endDate? {string}        結束(完成)日期
 subs? {Goal[]}           子任務
 comment {string}         額外描述
 subs: Omit<Goal, 'subs'>
 */
const d = {
	regularSchedule: { id: ++id, name: '固定作息', comment: '昭６晚１２', startDate: '2022-01-01', endDate: '2022-12-31' },
	meditation: { id: ++id, name: '冥想', startDate: '2022-01-01', endDate: '2022-12-31' },
	english: { id: ++id, name: '學英文', startDate: '2022-01-01', endDate: '2022-12-31' },
	sport: { id: ++id, name: '運動', startDate: '2022-01-01', endDate: '2022-12-31' },
	sport: { id: ++id, name: '讀書', startDate: '2022-01-16', endDate: '2022-12-31' },
	program: { id: ++id, name: '寫程式', startDate: '2022-01-01', endDate: '2022-12-31', subs: {
		flutter: { id: ++id, name: 'flutter', startDate: '2022-01-03' },
		android: { id: ++id, name: 'android' },
		ios: { id: ++id, name: 'ios' },
	}},
}

// 獨立事件 {d}
const ind = {}

export default {
	d,
	ind,
	/** 目標 */
	goals: d,
	/** 資源(好文之類的)
	 */
	resources: [],
	/** 成就
	*/
	achievements: [],
	/** type:
	 * id {int}         用來抓 d.name
	 * subId? {int}     用來抓 d.sub name
	 * status {boolean} 是否完成
	 * comment? {string}
	 * bad? {boolean}   有值且是 true 的話表示為糟糕的事
	 * num? {int}       次數
	 */
	done: {
		'01': {
			'01': [
				{ id: d.sport.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.english.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.meditation.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.regularSchedule.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.program.id, status: n, comment: '跟凌發同事出去露營' },
			],
			'02': [
				{ id: d.sport.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.english.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.meditation.id, status: y, comment: '跟凌發同事出去露營' },
				{ id: d.regularSchedule.id, status: n, comment: '跟凌發同事出去露營' },
				{ id: d.program.id, status: n, comment: '跟凌發同事出去露營' },
			],
			'03': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: '起床偷懶' },
				{ id: d.program.id, status: n, comment: '偷懶...' },
			],
			'04': [
				{ id: d.sport.id, status: y, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: y, comment: null },
				{ id: d.program.id, status: y, comment: null },
			],
			'05': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: y, comment: null },
			],
			'06': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
			'07': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
			'08': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: '公司加班到一點多' },
				{ id: d.program.id, status: n, comment: null },
			],
			'09': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
			'10': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
			'11': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: y, comment: null },
			],
			'12': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
			'14': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: '尾牙' },
			],
			'15': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: '尾牙' },
				{ id: d.program.id, status: y, comment: null },
			],
			'16': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: y, comment: null },
			],
			'17': [
				{ id: d.sport.id, status: n, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: n, comment: null },
				{ id: d.regularSchedule.id, status: n, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
			'18': [
				{ id: d.sport.id, status: y, comment: null },
				{ id: d.english.id, status: n, comment: null },
				{ id: d.meditation.id, status: y, comment: null },
				{ id: d.regularSchedule.id, status: y, comment: null },
				{ id: d.program.id, status: n, comment: null },
			],
		},
	},
}
