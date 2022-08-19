import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-theme',
	templateUrl: './themes.component.html',
	styleUrls: ['./themes.component.css'],
})
export class ThemesComponent {
	themes: ITheme[] | undefined;
	posts: IPost[] | undefined;

	constructor(public contentService: ContentService) {
		this.fetchThemes();
		this.fetchPosts();
	}

	fetchThemes(): void {
		this.themes = undefined;
		this.contentService
			.loadthemes()
			.subscribe((themes) => (this.themes = themes));
	}

	fetchPosts(): void {
		this.posts = undefined;
		this.contentService
			.loadPosts(3)
			.subscribe((posts) => (this.posts = posts));
	}
}
