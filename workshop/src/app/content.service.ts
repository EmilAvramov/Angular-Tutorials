import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';
import { environment } from '../environments/environment'
const url = environment.apiURL

@Injectable()
export class ContentService {
	constructor(private http: HttpClient) {}

	loadthemes() {
		return this.http.get<ITheme[]>(`${url}/themes`);
	}
	loadPosts(limit?: number) {
		const query = limit ? `?limit=${limit}` : '';
		return this.http.get<IPost[]>(`${url}/posts${query}`);
	}
}
