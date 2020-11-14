/* Sapper */
import { goto } from "@sapper/app";

export const discover = async (str: string) => await goto(`/bauhaus/${str}`);
