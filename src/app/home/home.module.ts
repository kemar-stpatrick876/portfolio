import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, LayoutModule, SharedModule],
})

export class HomeModule {}
