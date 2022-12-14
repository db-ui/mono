/**
 * Generate Color Utilities (Classes and SCSS Placeholders) for color dependencies
 * according to definitions made by DB UI v3
 */

const prefix = 'db';

/**
 * Backgrounds have more than one variant with the same color for text (on-color)
 * e.g. neutral with variants 1-6 or transparent-full and transparent-semi
 */

const generateBGVariants = (value, index) => {
	return `
.${prefix}-bg-${value}-${index} {
    @extend %${prefix}-bg-${value}-${index};

    &-ia,
    &[data-variant="ia"] {
        @extend %${prefix}-bg-${value}-${index}-ia;
    }

    .db-weak {
        @extend %weak;
    }
}
`;
};

/**
 * Generates color utility classes and scss placeholders for non-interactive and interactive variants
 * of color combination (background-color and color) based on definitions made by DB UI v3
 *
 * @param {*} colorToken scss transform obj generated by styleDictionary
 * @returns scss string
 */
exports.generateColorUtilitityClasses = (colorToken) => {
	let output = `
	@use "variables" as *;
	@use "color-placeholder" as *;
	`;

	for (const [, value] of Object.keys(colorToken).entries()) {
		output += `/**
* ${value.toUpperCase()} - Utility Classes
**/
`;
		// Text colors with interactive variant, e.g. primary
		if (colorToken[value].enabled) {
			output += `
.${prefix}-bg-${value} {
    @extend %${prefix}-bg-${value};

    &-ia,
    &[data-variant="ia"] {
        @extend %${prefix}-bg-${value}-ia;
    }
}`;
		}

		for (const variant of Object.keys(colorToken[value].bg)) {
			if (colorToken[value].bg[variant].enabled) {
				output += generateBGVariants(value, variant);
			} else {
				for (const childVariant of Object.keys(
					colorToken[value].bg[variant]
				)) {
					output += generateBGVariants(
						value,
						variant + '-' + childVariant
					);
				}
			}
		}
	}

	return output;
};
