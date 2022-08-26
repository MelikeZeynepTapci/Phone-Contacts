import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import tableData from '../../contacs.json';



@Component({
  selector: 'tables',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  name: any;

  info = `
  <div class="row">
  <div class="col-6">
      {{name}}
  </div>
  <div class="col-4">
      <button type="button" class="btn btn-sm btn-secondary" data-container="body"
          data-toggle="popover" data-placement="right"
          data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Show Details
      </button>
  </div>
  <div class="col-2 mt-1">
      <input type="checkbox" aria-label="Checkbox for following text input">
  </div>
</div>
  `


  constructor() { }

  ngOnInit(): void {
  }

  getInfo(): any {
    contacts: [] = tableData;
  }

}
