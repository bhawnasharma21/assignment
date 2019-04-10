import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'assign';
  public calculateDiv: Boolean = false;
  public displayDialog: Boolean = false;
  public countryData = [
      {
        'name': 'Croatia',
        'id': 'cr'
      },
      {
        'name': 'France',
        'id': 'fr'
      },
      {
        'name': 'Germany',
        'id': 'gr'
      },
      {
        'name': 'Italy',
        'id': 'it'
      },
      {
        'name': 'Spain',
        'id': 'sp'
      },
      {
        'name': 'United Kingdom',
        'id': 'uk'
      }
  ];
  public repaymenttype = [
    {
      'name': 'xyz',
      'id': 'x'
    },
    {
      'name': 'abc',
      'id': 'a'
    }
];
constructor(
) {
}
ngOnInit() {
}
newDiv() {
  this.calculateDiv = true;
}
popUp() {
  this.displayDialog = true;
}


}
