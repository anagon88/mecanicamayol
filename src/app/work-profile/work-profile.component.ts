import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-profile',
  templateUrl: './work-profile.component.html',
  styleUrls: ['./work-profile.component.css']
})
export class WorkProfileComponent implements OnChanges, OnInit {
  public tableTitlesMaterial = ["Id", "Nombre", "Cantidad", "Monto"];
  public tableInfoMaterial = [{ id: 1, nombre: 'Clavo', cantidad: 2, monto: 125 }, { id: 1, nombre: 'Clavo', cantidad: 7, monto: 725 }, { id: 1, nombre: 'Bobina', cantidad: 2, monto: 800 }];

  public tableTitlesWork = ["Id", "Nombre", "Horas", "Monto"];
  public tableInfoWork = [{ id: 1, nombre: 'Cevada de mate', cantidad: 2, monto: 125 }, { id: 1, nombre: 'Cambio de clavito', cantidad: 2, monto: 800 }, { id: 1, nombre: 'Cocinar a Ana', cantidad: 2, monto: 300 }, { id: 1, nombre: 'Ayuda de Ing Ana', cantidad: 2, monto: 300000 }];
  
  public total = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.total = this.calculateTotal();
    console.log(this.calculateTotal() );
  }
  ngOnChanges() {
    this.total = this.calculateTotal();
  }

  public calculateTotal(): number {
    const sumMaterials =  this.tableInfoMaterial.reduce(
      (accumulator, currentValue) => accumulator + currentValue.monto,
      0,
    );

    const sumWork =  this.tableInfoWork.reduce(
      (accumulator2, currentValue2) => accumulator2 + currentValue2.monto,
      0,
    );
    
    return (sumMaterials + sumWork) | 0;
  }

}
