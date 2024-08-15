import { Component, input } from '@angular/core';

@Component({
	selector: 'app-gridtable',
	standalone: true,
	imports: [],
	templateUrl: './gridtable.component.html',
	styleUrl: './gridtable.component.scss',
})
export class GridtableComponent<T> {
	columns = input.required<string[]>();
	data = input.required<T[]>();
}
