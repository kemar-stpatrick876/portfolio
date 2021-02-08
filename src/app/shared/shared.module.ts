import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, NavComponent, FooterComponent],
  exports: [ButtonComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
