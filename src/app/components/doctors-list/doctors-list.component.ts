import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit{

  doctors:any

  constructor(private http:ApiService){}

  ngOnInit(): void {

   const User_id = window.sessionStorage.getItem('User_id')
    
    this.http.Doclist(User_id)
    .subscribe(data=>{
      this.doctors = data.data
      console.log(this.doctors[0].name);
    })
  }

}
