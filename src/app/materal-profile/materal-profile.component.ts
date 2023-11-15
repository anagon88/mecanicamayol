import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materal-profile',
  templateUrl: './materal-profile.component.html',
  styleUrls: ['./materal-profile.component.css']
})
export class MateralProfileComponent implements OnInit {

  public tableTitlesWork = ["Id", "Nombre", "Auto", "Direccion", "Trabajos"];
  public tableInfoWork = [{ id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }, { id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }, { id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }, { id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }];

  public tableTitlesMateral = ["Id", "Nombre", "tpo", "preco", "Trabajos"];
  public tableInfoMateral = [{d:"Id", nombre: "Id", preco: "Id", trabao: "Id"}, {d:"Id", nombre: "Id", preco: "Id", trabao: "Id"}, {d:"Id", nombre: "Id", preco: "Id", trabao: "Id"}];
  
  constructor() { }

  ngOnInit() {
  }

}
