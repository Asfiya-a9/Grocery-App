import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from  '@angular/common/http'

import { CatmodRoutingModule } from './catmod-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatmodRoutingModule,HttpClientModule
  ]
})
export class CatmodModule { }
