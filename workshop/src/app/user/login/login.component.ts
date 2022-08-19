import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	constructor(
		private UserService: UserService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	login(email: string, password: string): void {
		this.UserService.login(email, password);
		const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
		this.router.navigate([redirectUrl]);
	}
}
