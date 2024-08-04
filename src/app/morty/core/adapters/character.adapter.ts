import { CharacterResponse } from '../models';

export const UpdateCharacterPagination = (
	currentPage: number,
	characterResponse: CharacterResponse,
): CharacterResponse => {
	characterResponse.info.currentPage = currentPage;
	return characterResponse;
};
