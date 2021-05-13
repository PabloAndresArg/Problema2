import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-init',
  templateUrl: './admin-init.page.html',
  styleUrls: ['./admin-init.page.scss'],
})
export class AdminInitPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToSignUP(){
     this.router.navigate(['/sing-up'])
  }

}
