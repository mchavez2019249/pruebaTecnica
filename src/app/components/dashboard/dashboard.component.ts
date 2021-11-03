import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public listTotal: any = [];

  constructor(private rest: RestApiService) { }



  ngOnInit(): void {
    this.list();
  }

  //list
  list(){
    this.rest.getBrief().subscribe(data => {
     console.log(data);
     this.listTotal = data;
    });
  }

  showAlertSave() {
    Swal.fire({
      position: "center",
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1800
    })
  }

}
