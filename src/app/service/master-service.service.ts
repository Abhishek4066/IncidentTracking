import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  http = inject(HttpClient)

  login(obj: User){

   return this.http.post<IAPIRESPONSE>('https://projectapi.gerasim.in/api/IncidentTracking/login',obj);
  }
}
