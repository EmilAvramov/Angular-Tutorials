import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	posts: IPost[] | undefined;

	constructor(public contentService: ContentService) {
		this.fetchPosts();
	}

	fetchPosts(): void {
		this.posts = undefined;
		this.contentService
			.loadPosts(3)
			.subscribe((posts) => (this.posts = posts));
	}
}
