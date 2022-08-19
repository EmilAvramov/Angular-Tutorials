import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user.routing.module';
import { UserService } from './user.service';

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [CommonModule, UserRoutingModule],
	providers: [UserService]
})
export class UserModule {}
