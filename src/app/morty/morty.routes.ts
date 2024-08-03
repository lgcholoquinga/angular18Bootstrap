import { Routes } from '@angular/router';

export const MORTY_ROUTES: Routes = [
	{
		path: '',
		title: 'Morty',
		loadComponent: () => import('./morty.component'),
		children: [
			{
				path: 'characters',
				title: 'Characters',
				loadComponent: () => import('./pages/characters/characters.component'),
			},
			{
				path: '',
				redirectTo: 'characters',
				pathMatch: 'full',
			},
		],
	},
];
