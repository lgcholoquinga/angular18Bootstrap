import { Info } from './api.model';

export interface CharacterResponse {
	info: Info;
	results: Character[];
}

export interface Character {
	id: number;
	name: string;
	status: Status;
	species: Species;
	type: string;
	gender: Gender;
	origin: Origin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export enum Gender {
	Female = 'Female',
	Male = 'Male',
	Unknown = 'unknown',
}

export interface LinkedElement {
	name: string;
	url: string;
}

export type Origin = LinkedElement;
export type Location = LinkedElement;

export enum Species {
	Alien = 'Alien',
	Human = 'Human',
}

export enum Status {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown',
}
