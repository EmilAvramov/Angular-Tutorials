import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { HomeComponent } from '../shared/home/home.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'themes',
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: ThemesComponent,
			},
			{
				path: ':themeId',
				component: ThemesComponent,
			},
		],
	},
	{
		path: 'add-theme',
		component: NewThemeComponent,
		canActivate: [AuthActivate],
		data: {
			authenticationRequired: true,
			authFailureRedirect: '/login',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ThemeRoutingModule {}
