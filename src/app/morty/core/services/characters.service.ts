import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { CharacterResponse } from '../models';

@Injectable({
	providedIn: 'root',
})
export class CharactersService {
	private urlApiMorty = environment.URL_API_MORTY;
	private charactersUlr = `${this.urlApiMorty}/character`;
	private http = inject(HttpClient);

	getCharacters(): Observable<CharacterResponse> {
		return this.http.get<CharacterResponse>(this.charactersUlr);
	}
}
