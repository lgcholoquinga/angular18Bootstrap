import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CharactersService } from '@morty/core';
import { TableMortyComponent } from '@morty/components';
import { GridtableComponent } from '@common/components';

@Component({
	selector: 'app-characters',
	standalone: true,
	imports: [AsyncPipe, TableMortyComponent, GridtableComponent],
	template: `<section class="characters">
		<h2 class="text-center">List of Characters</h2>
		<hr />
		<app-gridtable [columns]="columns" [data]="data" />
		<!-- @if (charactersInfo$ | async; as charactersInfo) {
			<app-table-morty
				[characters]="charactersInfo.results"
				[pagination]="charactersInfo.info"
				(emitChangePage)="onGetCharacters($event)"
			/>
		} -->
	</section> `,
})
export default class CharactersComponent {
	private characterService = inject(CharactersService);
	public charactersInfo$ = this.characterService.getCharacters();

	columns = ['Name', 'Age', 'LastName', 'Photo'];
	data = [{ Name: 'Luis', Age: 28 }];

	onGetCharacters(page: number) {
		this.charactersInfo$ = this.characterService.getCharacters(page);
	}
}
