import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-nicaragua',
  templateUrl: './nicaragua.component.html',
  styleUrls: ['./nicaragua.component.css']
})
export class NicaraguaComponent implements OnInit {
  public listTotal: any = [];
  constructor(private rest: RestApiService) { }

  ngOnInit(): void {
    this.list();
  }

  //list
  list(){
    this.rest.getLatestHN().subscribe(data => {
      console.log(data);
      this.listTotal = data;
    });
  }

}
