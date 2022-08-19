import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	get isLogged(): boolean {
		return this.UserService.isLogged;
	}

	get firstName(): string {
		return this.UserService.user?.firstName || '';
	}

	logout(): void {
		this.UserService.logout();
		this.router.navigate(['/']);
	}

	constructor(private UserService: UserService, private router: Router) {}
}
