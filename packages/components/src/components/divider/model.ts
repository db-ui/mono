import { EmphasisProps, GlobalProps, GlobalState } from '../../shared/model';

export const DividerMarginList = ['none', '_'] as const;
export type DividerMarginType = (typeof DividerMarginList)[number];

export const DividerVariantList = ['horizontal', 'vertical'] as const;
export type DividerVariantType = (typeof DividerVariantList)[number];

export type DBDividerDefaultProps = {
	margin?: DividerMarginType;
	variant?: DividerVariantType;
};

export type DBDividerProps = DBDividerDefaultProps &
	GlobalProps &
	EmphasisProps;

export type DBDividerDefaultState = {};

export type DBDividerState = DBDividerDefaultState & GlobalState;
