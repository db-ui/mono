export const DEFAULT_ID: string = 'OVERWRITE_DEFAULT_ID';
export const DEFAULT_LABEL: string = 'LABEL SHOULD BE SET';

export const DEFAULT_MESSAGE_ID_SUFFIX: string = '-message';
export const DEFAULT_PLACEHOLDER_ID_SUFFIX: string = '-placeholder';

export const DEFAULT_BACK: string = 'Back';

export const DEFAULT_CLOSE_BUTTON: string = 'Close Button';
export const TONALITY_CONST: string = 'tonality';
export const COLOR_CONST: string = 'color';

export enum TONALITY {
	'FUNCTIONAL' = 'functional',
	'REGULAR' = 'regular',
	'EXPRESSIVE' = 'expressive'
}
export const TONALITIES: TONALITY[] = Object.entries(TONALITY).map(
	([, value]) => value
);

export enum COLOR_SIMPLE {
	'PRIMARY' = 'primary'
}

export enum COLOR {
	'BASE' = 'base',
	'BASE_STRONG' = 'base-strong',
	'BASE_TRANSPARENT_SEMI' = 'base-transparent-semi',
	'BASE_TRANSPARENT_FULL' = 'base-transparent-full',
	'NEUTRAL' = 'neutral',
	'NEUTRAL_STRONG' = 'neutral-strong',
	'NEUTRAL_TRANSPARENT_SEMI' = 'neutral-transparent-semi',
	'NEUTRAL_TRANSPARENT_FULL' = 'neutral-transparent-full',
	'BRAND' = 'brand',
	'BRAND_TRANSPARENT_SEMI' = 'brand-transparent-semi',
	'BRAND_TRANSPARENT_FULL' = 'brand-transparent-full',
	'SUCCESSFUL' = 'successful',
	'SUCCESSFUL_TRANSPARENT_SEMI' = 'successful-transparent-semi',
	'SUCCESSFUL_TRANSPARENT_FULL' = 'successful-transparent-full',
	'CRITICAL' = 'critical',
	'CRITICAL_TRANSPARENT_SEMI' = 'critical-transparent-semi',
	'CRITICAL_TRANSPARENT_Full' = 'critical-transparent-full',
	'WARNING' = 'warning',
	'WARNING_TRANSPARENT_SEMI' = 'warning-transparent-semi',
	'WARNING_TRANSPARENT_FULL' = 'warning-transparent-full',
	'INFORMATIONAL' = 'informational',
	'INFORMATIONAL_TRANSPARENT_SEMI' = 'informational-transparent-semi',
	'INFORMATIONAL_TRANSPARENT_FULL' = 'informational-transparent-full'
}

export const COLORS: COLOR[] = Object.entries(COLOR).map(([, value]) => value);
export const COLORS_SIMPLE: COLOR_SIMPLE[] = Object.entries(COLOR_SIMPLE).map(
	([, value]) => value
);

export enum VARIANT {
	'CRITICAL' = 'critical',
	'INFORMATIONAL' = 'informational',
	'WARNING' = 'warning',
	'SUCCESSFUL' = 'successful'
}

export const VARIANTS: VARIANT[] = Object.entries(VARIANT).map(
	([, value]) => value
);

export const DEFAULT_VIEWPORT = { width: 390, height: 884 };

/**
 * Use those viewports if your component has a css media-query otherwise use the DEFAULT_VIEWPORT
 */
export const TESTING_VIEWPORTS = [
	{ name: 'desktop', width: 1920, height: 1280 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', ...DEFAULT_VIEWPORT }
];
