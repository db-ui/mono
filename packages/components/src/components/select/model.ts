import {
	ChangeEventProps,
	ChangeEventState,
	ClickEventProps,
	ClickEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormMessageState,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	IconProps
} from '../../shared/model';

export interface DBSelectDefaultProps {
	/**
	 * The description attribute will add a paragraph below the select.
	 */
	description?: string;

	/**
	 * If you don't/can't use children/slots you can pass in the options as an array.
	 */
	options?: DBSelectOptionType[];
}

export type DBSelectOptionType = {
	/**
	 * Identifier for option
	 */
	id?: string;

	/**
	 * Disables this option
	 */
	// Disables this option
	disabled?: boolean;

	/**
	 * If the value is different from the label you want to show to the user.
	 */
	label?: string;

	/**
	 * If you want to use optgroup you can nest options here.
	 */
	options?: DBSelectOptionType[];

	/**
	 * The main value you select, will be shown as default label if no label is set.
	 */
	value: string | string[] | number;
};

export type DBSelectProps = DBSelectDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLSelectElement> &
	ChangeEventProps<HTMLSelectElement> &
	FocusEventProps<HTMLSelectElement> &
	FormProps &
	IconProps &
	FormMessageProps;

export interface DBSelectDefaultState {
	_placeholderId: string;
	getOptionLabel: (option: DBSelectOptionType) => string;
}

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState<HTMLSelectElement> &
	ChangeEventState<HTMLSelectElement> &
	FocusEventState<HTMLSelectElement> &
	FormState &
	FormMessageState;
