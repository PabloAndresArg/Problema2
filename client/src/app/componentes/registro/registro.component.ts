import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  @Input() admin: boolean = false;
  @Input() titulo: string = 'Registro';

  constructor() { }

  ngOnInit() {}

}
