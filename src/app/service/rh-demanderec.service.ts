import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rhdemanderec } from '../model/rh-demanderec';

@Injectable({
  providedIn: 'root'
})
export class RhDemanderecService {

  constructor(private httpclients : HttpClient) { }
  url= "http://localhost:8081/RHdemandeRecrutements";
  save(RHdem:Rhdemanderec){
    return this.httpclients.post(this.url,RHdem);
  }
  getAll(){
    return this.httpclients.get<Rhdemanderec>("http://localhost:8081/RHdemandeRecrutements");
  }
  
}

