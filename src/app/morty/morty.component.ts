import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-morty',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './morty.component.html',
	styleUrl: './morty.component.scss',
})
export default class MortyComponent {}
