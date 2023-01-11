import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBInputDefaultProps {
	id: string;
	label: string;
	type?: 'text' | 'search' | 'date' | 'number'
	variant?: 'error' | 'success' | 'warning' | 'information';
	iconBefore?: string;
	iconAfter?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	value?: any;
	description?: string;
	name?: string;
}

export const iconVariants:any = {
	'error': 'error',
	'warning': 'error-triangle',
	'success': 'check-circle',
	'information': 'info'
}

export type DBInputProps = DBInputDefaultProps  & GlobalProps;

export interface DBInputDefaultState {}

export type DBInputState = DBInputDefaultState & GlobalState;
