import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IContactRequest {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public sendMessage(request: IContactRequest): Observable<any> {
    const payload = {
      name: request.name,
      _replyto: request.email,
      message: request.message,
    };

    return this.http.post('https://formspree.io/f/mknpekaa', payload);
  }
}
