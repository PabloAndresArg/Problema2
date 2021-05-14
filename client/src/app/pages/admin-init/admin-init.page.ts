import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Encuesta } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-init',
  templateUrl: './admin-init.page.html',
  styleUrls: ['./admin-init.page.scss'],
})
export class AdminInitPage implements OnInit {

  constructor(private router: Router , private s_admin: AdminService) { }
  encuestas : any[] = [];
  ngOnInit() {
    this.s_admin.getAllEncuestas().subscribe(
      res=>{
        this.encuestas =res;
      }
    )

  }

  goToSignUP(){
     this.router.navigate(['/sing-up'])
  }

}
