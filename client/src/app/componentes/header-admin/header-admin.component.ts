

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  @Input() titulo: string ;
  constructor(private router: Router) { }

  ngOnInit() { }

  closeSession(){
    this.router.navigate(['/']);
  }

}
