import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rhpermission } from '../model/rh-permission';

@Injectable({
  providedIn: 'root'
})
export class RhPermissionService {

  constructor( private httpclients : HttpClient) { }
  url="http://localhost:8081/RHpermissionSorties"
  save(RH:Rhpermission){
    return this.httpclients.post(this.url,RH);
  }
}
