import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'morty',
		loadChildren: () =>
			import('./morty/morty.routes').then((route) => route.MORTY_ROUTES),
	},
	{
		path: '',
		redirectTo: '/morty',
		pathMatch: 'full',
	},
];
