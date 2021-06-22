import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner-vista',
  templateUrl: './scanner-vista.page.html',
  styleUrls: ['./scanner-vista.page.scss'],
})
export class ScannerVistaPage implements OnInit, AfterViewInit  {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  onSuccess(result: any) {
    this._router.navigate(['/resultado'], {
      queryParams: {
        info: result,
      },
    });
}

onError(res) {
  console.log(res)
}

  /*
  
  */

}
