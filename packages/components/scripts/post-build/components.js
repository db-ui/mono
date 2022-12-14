module.exports = [
	{
		name: 'divider',
		defaultStylePath: 'components/divider/divider.css',
		overwrites: {
			vue: [
				{
					from: 'import { DBDividerState, DBDividerProps } from "./model";',
					to: ''
				}
			]
		}
	},

	{
		name: 'card',
		defaultStylePath: 'components/card/card.css'
	},

	{
		name: 'tab-bar',
		defaultStylePath: 'components/tab-bar/tab-bar.css',
		overwrites: {
			angular: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{ from: '[key]="tab.name"', to: '' }
			],
			react: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{
					from: 'convertTabs(props.tabs)?.map((tab)',
					to: 'convertTabs(props.tabs)?.map((tab:any)'
				},
				{
					from: 'import type { DBTabProps } from "../tab/model";',
					to: ''
				}
			],
			vue: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{
					from: 'v-for="(tab, index)',
					to: 'v-for="(tab)'
				}
			]
		}
	},

	{
		name: 'tab',
		defaultStylePath: 'components/tab/tab.css'
	},

	{
		name: 'button',
		defaultStylePath: 'components/button/button.css'
	},
	{
		name: 'icon',
		defaultStylePath: 'base/css/icon/icons.css'
	}
];
