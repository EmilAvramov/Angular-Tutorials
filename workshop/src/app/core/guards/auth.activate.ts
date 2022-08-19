import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable()
export class AuthActivate implements CanActivate {
	constructor(private router: Router, private userService: UserService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		const { authenticationRequired, authFailureRedirect } = route.data;

		if (
			typeof authenticationRequired === 'boolean' &&
			authenticationRequired === this.userService.isLogged
		) {
			return true;
		}
		let authRedirectedUrl = authFailureRedirect;
		if (authenticationRequired) {
			const loginRedirectedUrl = route.url.reduce(
				(acc, s) => `${acc}/${s.path}`,
				''
			);
			authRedirectedUrl += `?redirectUrl=${loginRedirectedUrl}`;
		}

		return this.router.parseUrl(authRedirectedUrl) || '/';
	}
}
