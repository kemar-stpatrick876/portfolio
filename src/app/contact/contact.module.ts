import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [ContactMeComponent],
  exports: [ContactMeComponent],
  imports: [CommonModule],
})
export class ContactModule {}
