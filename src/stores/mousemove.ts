import { writable } from "svelte/store";

export let mouse = writable({ x: 0, y: 0 });
