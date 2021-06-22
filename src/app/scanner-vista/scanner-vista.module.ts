import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerVistaPageRoutingModule } from './scanner-vista-routing.module';

import { ScannerVistaPage } from './scanner-vista.page';
import { QuarModule } from '@altack/quar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerVistaPageRoutingModule,
    QuarModule
  ],
  declarations: [ScannerVistaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScannerVistaPageModule {}
