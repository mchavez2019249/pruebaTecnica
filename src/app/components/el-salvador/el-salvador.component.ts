import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-el-salvador',
  templateUrl: './el-salvador.component.html',
  styleUrls: ['./el-salvador.component.css']
})
export class ElSalvadorComponent implements OnInit {
  public listTotal: any = [];
  constructor(private rest: RestApiService) { }

  ngOnInit(): void {
    this.list();
  }

  //list
  list(){
    this.rest.getLatestSV().subscribe(data => {
      console.log(data);
      this.listTotal = data;
    });
  }

}
