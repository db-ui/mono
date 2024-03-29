import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBTooltipProps, DBTooltipState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTooltip(props: DBTooltipProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		}
	});
	// jscpd:ignore-end

	// TODO: Shall we check if only <span>, <p> or direct text was passed as children?
	return (
		<i
			role="tooltip"
			ref={ref}
			className={cls('db-tooltip', props.className)}
			id={props.id}
			data-emphasis={props.emphasis}
			data-animation={props.animation}
			data-delay={props.delay}
			data-width={props.width}
			data-variant={props.variant}
			data-placement={props.placement}
			// TODO: clarify this attribute and we need to set it statically
			data-gap="true"
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</i>
	);
}
