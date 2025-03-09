import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';
import { IRegisterFail, IRegisterSucc } from '../../../shared/interfaces/IRegister/iregister';
import { IloginFail, IloginSucc } from '../../../shared/interfaces/ILogin/ilogin';
import { ILogout } from '../../../shared/interfaces/ILogout/ilogout';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) { }

  name:BehaviorSubject<string>=new BehaviorSubject('')


  register(data: object): Observable<IRegisterFail | IRegisterSucc> {
    return this.httpClient.post<IRegisterFail | IRegisterSucc>(`${environment.baseUrl}/api/users`, data)
  }

  login(data:object) :Observable<IloginFail | IloginSucc> {
    return this.httpClient.post<IloginFail | IloginSucc>(`${environment.baseUrl}/api/users/auth` ,data)
  }


  logout():Observable<ILogout> {
    return this.httpClient.post<ILogout>(`${environment.baseUrl}/api/users/logout`,{} )
  }
}
