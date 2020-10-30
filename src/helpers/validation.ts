import { dateRegex, emailRegex, passwordRegex, specialCharactersRegex } from "helpers/regex";
import type { ValidationObject } from "helpers/interface";

// Email
export const isValidEmail = (email: string) => {
	return emailRegex.test(String(email).toLowerCase());
};

// Mot de passe fort
export const isStrongPassword = (password: string) => {
	let response: ValidationObject;

	response.status = passwordRegex.test(String(password));
	// Vérifie la longueur du MDP
	if (password.length < 8) response.tags = [...response.tags, "length"];
	// Le MDP ne contient pas de Majuscule
	if (password === password.toLowerCase() || password === password.toUpperCase())
		response.tags = [...response.tags, "uppercase-lowercase"];
	// The password does not contain any uppercase character
	if (!specialCharactersRegex.test(String(password)))
		response.tags = [...response.tags, "special"];
	// Le MDP ne contient pas de chiffre
	if (password.search(/[0-9]/) < 0) response.tags = [...response.tags, "digit"];
	return response;
};

// Date : format JJ/MM/AAAA
export const isValidDate = (dateString: string, min: number = 1000) => {
	// First check for the pattern
	if (!dateRegex.test(dateString)) return false;
	// Parse the date parts to integers
	const parts = dateString.split("/");
	const day = parseInt(parts[0], 10);
	const month = parseInt(parts[1], 10);
	const year = parseInt(parts[2], 10);
	// Check the ranges of month and year
	if (year < min || year > 3000 || month == 0 || month > 12) return false;

	let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;
	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
};
