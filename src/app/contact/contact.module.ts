import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
@NgModule({
  declarations: [ContactMeComponent, ContactFooterComponent],
  exports: [ContactMeComponent, ContactFooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class ContactModule {}
