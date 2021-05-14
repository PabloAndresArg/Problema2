import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.page.html',
  styleUrls: ['./cuestionario.page.scss'],
})
export class CuestionarioPage implements OnInit {
  id_encuesta: number;
  constructor(private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    // params.id o .correo depende como le puse en el routing.module.ts
    this.id_encuesta = params.id;
  }

  closeSession(){
    this.router.navigate(['/']);
  }


}
