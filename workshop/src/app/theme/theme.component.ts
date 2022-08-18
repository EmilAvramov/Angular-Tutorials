import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { ITheme } from '../shared/interfaces';

@Component({
	selector: 'app-theme',
	templateUrl: './theme.component.html',
	styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
	themes: ITheme[] | undefined;

	constructor(public contentService: ContentService) {
		this.fetchThemes();
	}

	fetchThemes(): void {
		this.themes = undefined;
		this.contentService
			.loadthemes()
			.subscribe((themes) => (this.themes = themes));
	}
}
