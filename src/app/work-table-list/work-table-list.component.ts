import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getWorks } from 'app/state/work/work.actions';

@Component({
  selector: 'app-work-table-list',
  templateUrl: './work-table-list.component.html',
  styleUrls: ['./work-table-list.component.css']
})
export class WorkTableListComponent implements OnInit {
  public tableTitles = ["Id", "Nombre", "Auto", "Fecha de entrada", "Monto"];
  public tableInfo = [{ id: 1, nombre: 'Ana', auto: "Suran", fecha: "15/11/2023", monto: 1235 }, { id: 1, nombre: 'Ana', auto: "Suran", fecha: "15/11/2023", monto: 1235 }, { id: 1, nombre: 'Ana', auto: "Suran", fecha: "15/11/2023", monto: 1235 }, { id: 1, nombre: 'Ana', auto: "Suran", fecha: "15/11/2023", monto: 1235 }];

  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.dispatch(getWorks());
  }

}
