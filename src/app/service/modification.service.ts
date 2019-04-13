import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modification } from '../model/modification';

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor(private htppClient: HttpClient) { }

  save(modification: Modification){
    return this.htppClient.post<Modification>("http://localhost:8081/modifications",modification);
  }

  getAll(){
    return this.htppClient.get<Modification>("http://localhost:8081/modifications");
  }
}
