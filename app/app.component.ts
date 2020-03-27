import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h3>Con il range bar (ma non stanno sulla stessa linea)</h3>
    <kendo-chart>
      <kendo-chart-series>
        <kendo-chart-series-item
          type="rangeColumn"
          categoryField="category"
          [stack]="'yes'"
          fromField="min"
          toField="max"
          [data]="data">
      </kendo-chart-series-item>

      <kendo-chart-series-item 
        type="rangeBar"
        categoryField="category"
        [stack]="'yes'"
        fromField="min"
        toField="max"
        [data]="data2">
      </kendo-chart-series-item>

    </kendo-chart-series>

  </kendo-chart>

  <h3>Post elaborando, i sovrapposti creano linee separate</h3>
    <kendo-chart>
      <kendo-chart-series>

      <kendo-chart-series-item *ngFor="let d of data3"
          [border]="{ width: 0 }"
          type="bar"
          [stack]="d.group"
          categoryField="category"
          field="dis"
          tooltipField="tooltip"
          [data]="d.data">
      </kendo-chart-series-item>

    </kendo-chart-series>

  </kendo-chart>

  <h3>Post elaborando, i sovrapposti si uniscono</h3>
    <kendo-chart>
      <kendo-chart-series>

      <kendo-chart-series-item *ngFor="let d of data4"
          [border]="{ width: 0 }"
          type="column"
          [stack]="d.group"
          categoryField="category"
          field="dis"
          tooltipField="tooltip"
          [data]="d.data">
          <kendo-chart-series-item-tooltip format="miovalore"></kendo-chart-series-item-tooltip>
      </kendo-chart-series-item>

    </kendo-chart-series>

  </kendo-chart>


<kendo-chart>
  <kendo-chart-series>
        <kendo-chart-series-item
          type="column"
          categoryField="category"
          [stack]="'yes'"
          field="min"
          toField="max"
          [data]="data5">
      </kendo-chart-series-item>
    </kendo-chart-series>
</kendo-chart>

  `
})
export class AppComponent implements OnInit {
  public style: string = 'normal';
  public data: any[] = [
    { min: 10, max: 13, category: 'p1' },
    { min: 8, max: 10, category: 'p2' },
    { min: 11, max: 13, category: 'p3' }
  ];
  public data2: any[] = [
    { min: 14, max: 16, category: 'p1' },
    { min: 12, max: 16, category: 'p2' },
    { min: 15, max: 16, category: 'p3' }
  ];
  public data3: any[] = 
    [
      {
        group: 'a',
        data: [
          { dis: 10, category: 'p1', color: 'rgba(0,0,0,0)' },
          { dis: 8, category: 'p2', color: 'rgba(0,0,0,0)' },
          { dis: 11, category: 'p3', color: 'rgba(0,0,0,0)' }
        ]
      },{
        group: 'a',
        data: [
          { dis: 3, category: 'p1', color: 'red', tooltip: 'dalle 10 alle 12' },
          { dis: 2, category: 'p2' },
          { dis: 2, category: 'p3' },
        ]
      },{
        group: 'a',
        data: [
          { dis: 1, category: 'p1', color: 'rgba(0,0,0,0)' },
          { dis: 2, category: 'p2', color: 'rgba(0,0,0,0)' },
          { dis: 2, category: 'p3', color: 'rgba(0,0,0,0)' },
        ]
      },{
        group: 'a',
        data: [
          { dis: 2, category: 'p1', color: 'red' },
          { dis: 4, category: 'p2' },
          { dis: 1, category: 'p3' }
        ]
      },{
        group: 'b',
        data: [
          { dis: 11, category: 'p1', color: 'rgba(0,0,0,0)' },
        ]
      },{
        group: 'b',
        data: [
          { dis: 3, category: 'p1', color: 'red' },
        ]
      }
    ];

    public data4: any[] = 
    [
      {
        group: 'a',
        data: [
          { dis: 10, category: 'p1', color: 'rgba(0,0,0,0)' },
          { dis: 8, category: 'p2', color: 'rgba(0,0,0,0)' },
          { dis: 11, category: 'p3', color: 'rgba(0,0,0,0)' }
        ]
      },{
        group: 'a',
        data: [
          { dis: 6, category: 'p1', color: 'red', tooltip: 'dalle 10 alle 12' },
          { dis: 2, category: 'p2' },
          { dis: 2, category: 'p3' },
        ]
      },{
        group: 'a',
        data: [
          { dis: 2, category: 'p2', color: 'rgba(0,0,0,0)' },
          { dis: 2, category: 'p3', color: 'rgba(0,0,0,0)' },
        ]
      },{
        group: 'a',
        data: [
          { dis: 4, category: 'p2' },
          { dis: 1, category: 'p3' }
        ]
      }
    ];

  public data5: any[] = [
    { min: new Date(1000000), max: new Date(3000000), category: 'p1' },
    { min: new Date(1500000), max: new Date(3500000), category: 'p2' },
    { min: new Date(2000000), max: new Date(3000000), category: 'p3' }
  ];
  
  ngOnInit(){

  }
}


