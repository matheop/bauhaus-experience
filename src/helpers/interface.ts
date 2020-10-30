// Retour un status (boolean) + un ou plusieurs tags pour interprétation
export interface ValidationObject {
	status: boolean;
	tags?: Array<string>;
}
