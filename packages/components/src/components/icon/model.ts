import { GlobalProps, GlobalState } from '../../shared/model';

export type DBIconDefaultProps = {
	icon?: string;
};

export type DBIconProps = DBIconDefaultProps & GlobalProps;

export type DBIconDefaultState = {};

export type DBIconState = DBIconDefaultState & GlobalState;
