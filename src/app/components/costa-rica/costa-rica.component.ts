import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-costa-rica',
  templateUrl: './costa-rica.component.html',
  styleUrls: ['./costa-rica.component.css']
})
export class CostaRicaComponent implements OnInit {
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
