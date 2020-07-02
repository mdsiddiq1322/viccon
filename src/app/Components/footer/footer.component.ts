import { Component, OnInit } from '@angular/core';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBuilding, faCogs, faGlobe, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	ihome = faHome;
  iabout = faBuilding;
  iservices = faCogs;
  iportfolio = faGlobe;
  icontact = faPhoneAlt;
  iinsta = faInstagram;
  ifb = faFacebook;
  itwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
