import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table-list',
  templateUrl: './user-table-list.component.html',
  styleUrls: ['./user-table-list.component.css']
})
export class UserTableListComponent implements OnInit {
  public tableTitles = ["Id", "Nombre", "Auto", "Direccion", "Trabajos"];
  public tableInfo = [{ id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }, { id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }, { id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }, { id: 1, nombre: 'Ana', auto: "Suran", direccion: "Pedro Goyena 1111", action: 'action' }];

  constructor() { }

  ngOnInit() {
  }

}
