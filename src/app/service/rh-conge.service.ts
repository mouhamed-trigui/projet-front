import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RhConge } from '../model/rh-conge';


@Injectable({
  providedIn: 'root'
})
export class RhCongeService {

  constructor(
    private httpclients:HttpClient
  ) { }
  url="http://localhost:8081/RHconges"
  save(RHC:RhConge){
    return this.httpclients.post(this.url,RHC);
    
  }
}
