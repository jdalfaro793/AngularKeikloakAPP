import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public xsHttpApiService: HttpClient) { }

  listar(): any {
    return this.xsHttpApiService.get(`${environment.api.url}${environment.api.rutas.student.init}/all`);
  }

  
}
