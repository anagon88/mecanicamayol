import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() title = 'TiTle';
  @Input() isMainTable = true;
  @Input() subtitle: string;
  @Input() tableTitles = [];
  @Input() tableInfo = [];
  @Input() addButton: string;
  @Input() redirectBtn: string;
  @Input() redirectRow: string;

  public tableInfoValues = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public getRowValues(row: any): string[] {
    return Object.values(row);
  }

  public goToPage(): void {
    this.router.navigate([this.redirectBtn]);
  }

  public goToUserInfo(): void {
    this.router.navigate(['/user-profile?id=1']);
  }

}
