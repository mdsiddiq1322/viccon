import { Component, OnInit } from '@angular/core';

import { faHome, faBuilding, faCogs, faGlobe, faPhoneAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	ihome = faHome;
  iabout = faBuilding;
  iservices = faCogs;
  iportfolio = faGlobe;
  icontact = faPhoneAlt;
  ibars = faBars;
  itimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
