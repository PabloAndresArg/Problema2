import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Pregunta, PreguntaActual } from 'src/app/Interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.page.html',
  styleUrls: ['./cuestionario.page.scss'],
})
export class CuestionarioPage implements OnInit {
  id_encuesta: number;
  nombre_encuesta:string;
  respuestasPosibles: any[]=[];
  todas_las_preguntas: any[] = [];
  constructor(private router: Router , private activatedRoute: ActivatedRoute , private service: UsersService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    // params.id o .correo depende como le puse en el routing.module.ts
    this.id_encuesta = params.id;
    this.nombre_encuesta = params.encuesta;

    this.service.getAllPreguntasPorEncuesta(this.id_encuesta).subscribe(
      res=>{
        this.todas_las_preguntas = res;
        console.log("retorna " , this.todas_las_preguntas)
      },
      err=>{
        console.log("TODAS LAS PREGUNTAS",err)
      }
    )

    this.service.getAllRespuestasEncuesta(this.id_encuesta).subscribe(
      res=>{
        this.respuestasPosibles = res;


        for (let i = 0; i < this.todas_las_preguntas.length; i++) {
          this.todas_las_preguntas[i].Respuestas = [];
          for (let x = 0; x < this.respuestasPosibles.length; x++) {
    
            if (this.todas_las_preguntas[i].id == this.respuestasPosibles[x].id && this.todas_las_preguntas[i].pregunta == this.respuestasPosibles[x].pregunta) {
              //console.log(this.todas_las_preguntas[i].pregunta , "== " , this.respuestasPosibles[x].respuesta);
              this.todas_las_preguntas[i].Respuestas.push(
                {
                  ID_PRE: this.respuestasPosibles[x].ID_PRE, respuesta: this.respuestasPosibles[x].respuesta,
                  id_pregunta: this.respuestasPosibles[x].id, respuestaCorrecta: this.respuestasPosibles[x].respuestaCorrecta
                });
            }
          }
        }

      //  console.log("A VER :  " , this.todas_las_preguntas)
      },
      err=>{
        console.log("RESPEUSTAS POSIBLES" , err)
      }
    )
  }

  closeSession(){
    this.router.navigate(['/']);
  }


}
