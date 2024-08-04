import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CharactersService } from '@morty/core';
import { TableMortyComponent } from '@morty/components';

@Component({
	selector: 'app-characters',
	standalone: true,
	imports: [AsyncPipe, TableMortyComponent],
	template: `<section class="characters">
		@if (charactersInfo$ | async; as charactersInfo) {
			<app-table-morty
				[characters]="charactersInfo.results"
				[pagination]="charactersInfo.info"
				(emitChangePage)="onGetCharacters($event)"
			/>
		}
	</section> `,
})
export default class CharactersComponent {
	private characterService = inject(CharactersService);
	public charactersInfo$ = this.characterService.getCharacters();

	onGetCharacters(page: number) {
		this.charactersInfo$ = this.characterService.getCharacters(page);
	}
}
