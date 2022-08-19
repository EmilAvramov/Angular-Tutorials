import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import {
	CommonModule,
	isPlatformBrowser,
	isPlatformServer,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { LocalStorage } from './injection-tokens';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		AsideComponent,
		NotFoundComponent,
	],
	imports: [CommonModule, HttpClientModule, RouterModule],
	exports: [HeaderComponent, FooterComponent, AsideComponent],
	providers: [
		{
			provide: LocalStorage,
			useValue: window.localStorage,
			useFactory: (platformId: Object) => {
				if (isPlatformBrowser(platformId)) {
					return window.localStorage;
				}
				if (isPlatformServer(platformId)) {
					return class implements Storage {
						length = 0;

						private data: Record<string, string> = {};

						clear(): void {
							this.data = {};
						}
						getItem(key: string): string | null {
							return this.data[key];
						}
						key(index: number): string | null {
							throw new Error('Method not implemented');
						}

						removeItem(key: string): void {
							const { [key]: removeItem, ...others } = this.data;
							this.data = others;
						}

						setItem(key: string, value: string): void {
							this.data[key] = value;
						}
					};
				}
				throw Error('NOT IMPLEMENTED')
			},
			deps: [PLATFORM_ID],
		},
	],
})
export class CoreModule {}
