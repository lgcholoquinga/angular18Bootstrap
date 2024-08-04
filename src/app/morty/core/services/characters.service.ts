import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'environments/environment';
import { CharacterResponse } from '../models';
import { UpdateCharacterPagination } from '../adapters/character.adapter';

@Injectable({
	providedIn: 'root',
})
export class CharactersService {
	private urlApiMorty = environment.URL_API_MORTY;
	private charactersUlr = `${this.urlApiMorty}/character`;
	private http = inject(HttpClient);

	getCharacters(page?: number): Observable<CharacterResponse> {
		const currentPage = page ? page : 1;
		return this.http
			.get<CharacterResponse>(this.charactersUlr, {
				params: { page: currentPage },
			})
			.pipe(map((data) => UpdateCharacterPagination(currentPage, data)));
	}
}
