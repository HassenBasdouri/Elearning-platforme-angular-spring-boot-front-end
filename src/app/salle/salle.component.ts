import { SalleService } from './../_services/salle.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  salles: any;
  constructor( private salleservice:SalleService) { }

  ngOnInit(): void {
    this.salleservice.getListOfSalle().subscribe(
      data => {
        this.salles = data;
      },
      err => {
        this.salles = JSON.parse(err.error).message;
      }
    );


  }

onDeleteSalle(salle ){
    let conf=confirm("Etes Vous Sure ?")
    if(conf){
      this.salleservice.DeleteSalle(salle ).subscribe(data=>{
        this.ngOnInit();
      },err=>{
        console.log(err) ;
      
      })
     }
    }
}
