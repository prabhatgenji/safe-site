import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const Approutes: Routes = [
	{
		path: 'home',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'component',
				loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
			}
		]
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
	{
		path: '',
		component: WelcomeComponent,
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/',
	}
];
