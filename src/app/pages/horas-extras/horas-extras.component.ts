import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorasExtrasService } from 'src/app/services/horas-extras.service';

@Component({
  selector: 'app-horas-extras',
  templateUrl: './horas-extras.component.html',
  styleUrls: ['./horas-extras.component.scss']
})
export class HorasExtrasComponent implements OnInit {

  form: FormGroup = this._FormBuilder.group({
    fecha: ['', [Validators.required]],
    trabajador: ['', [Validators.required]],
    area: ['', [Validators.required]],
    equipo: ['', [Validators.required]],
    horas: ['', [Validators.required]],
    comentario: ['', [Validators.required]]
  });
  constructor(
    public _FormBuilder: FormBuilder,
    public _HorasExtrasService:HorasExtrasService
  ) {
    this._HorasExtrasService.buscar()
  }

  ngOnInit(): void {

  }

  ingresar(){
    this._HorasExtrasService.ingresar(this.form.value);
    this.form.reset();
  }

}
