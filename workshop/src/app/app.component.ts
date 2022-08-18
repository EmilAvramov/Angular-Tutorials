import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { ITheme } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
