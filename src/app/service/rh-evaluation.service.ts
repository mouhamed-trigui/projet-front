import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rhevaluation } from '../model/rh-evaluation';

@Injectable({
  providedIn: 'root'
})
export class RhEvaluationService {

  constructor(private httpclients : HttpClient) { }
  url= "http://localhost:8081/RHevaluationEmps";
  save(RHE:Rhevaluation){
    return this.httpclients.post(this.url,RHE);
  }
  getAll(){
    return this.httpclients.get<Rhevaluation>("http://localhost:8081/RHevaluationEmps");
  }
  
}
