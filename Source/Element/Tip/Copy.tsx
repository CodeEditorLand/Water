import type { Instance } from "tippy.js";

import Tip from "@Element/Tip";

export const Fn = (
	Event: MouseEvent & {
		currentTarget: HTMLElement;
	},
) => {
	try {
		navigator.clipboard.writeText(Event.currentTarget.innerText);

		(
			Event.currentTarget.parentElement as HTMLDivElement & {
				_tippy: Instance;
			}
		)._tippy.setContent("Copied!");
	} catch (_Error) {
		console.log(_Error);
	}
};

export default async ({
	children,
}: {
	// biome-ignore lint/suspicious/noExplicitAny:
	children?: any;
}) => (
	<Tip
		Content="Copy to clipboard."
		onHidden={(Instance) => Instance.setContent("Copy to clipboard.")}>
		{(await import("solid-js")).children(() => children)}
	</Tip>
);
