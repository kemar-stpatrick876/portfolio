import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ContactMeComponent],
  exports: [ContactMeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class ContactModule {}
