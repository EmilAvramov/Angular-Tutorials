import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
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
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ThemeRoutingModule {}
