import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CONNECTION} from "../services/global";
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  public uri: string;
  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getBrief(){
    return this.http.get(this.uri + 'jhu-edu/brief');
  }

  getLatestBZ(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=BZ');
  }

  getLatestGT(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=GT');
  }

  getLatestSV(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=SV');
  }

  getLatestHN(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=HN');
  }

  getLatestNI(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=NI');
  }

  getLatestCR(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=CR');
  }

  getLatestPA(){
    return this.http.get(this.uri + 'jhu-edu/latest?iso2=PA');
  }


}
