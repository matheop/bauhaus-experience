import { writable } from "svelte/store";

const store = writable("lg");

export const media = {
	subscribe: store.subscribe,
	set: (md: string) => {
		store.set(md);
	},
	up: (width: number) => {
		let md: string = defaultCalc(width);
		store.update(() => md);
	},
};

function defaultCalc(width: number) {
	if (width > 1280) return "xl";
	if (width > 1024 && width <= 1280) return "lg";
	if (width > 767 && width <= 1024) return "md";
	if (width > 480 && width <= 767) return "sm";
	return "xs";
}
