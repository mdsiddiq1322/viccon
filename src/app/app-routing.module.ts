import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactComponent } from './Components/contact/contact.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'services',
		component: ServicesComponent
	},
	{
		path: 'portfolio',
		component: PortfolioComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
