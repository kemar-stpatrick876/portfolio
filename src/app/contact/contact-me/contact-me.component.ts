import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService, IContactRequest } from '../contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'portfolio-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  sendMessage(): void {
    const { value } = this.contactForm;
    this.contactService.sendMessage(value as IContactRequest).subscribe(
      (res: any) => {
        if (res.ok) {
          this.toastr.success(
            'Thank you, I will respond as soon as possible!',
            'Message Sent!'
          );
          this.contactForm.reset();
        } else {
          this.toastr.error('Failed to send message!', '!Failure');
        }
      },
      () => {
        this.toastr.error('Failed to send message!', '!Failure');
      }
    );
  }
}
