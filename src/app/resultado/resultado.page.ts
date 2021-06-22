import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  public info: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._route.queryParams.pipe(filter(params => params.info)).subscribe(params => {
      this.info = params.info;
    })
  }

  ngOnInit() {
  }

  irHaScanner(): void {
    this._router.navigate(['/home']);
  }

}
