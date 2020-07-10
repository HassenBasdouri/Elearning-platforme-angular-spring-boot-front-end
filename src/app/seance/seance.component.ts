import { SeanceService } from './../_services/seance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {
  seances : any;
  constructor(private s: SeanceService) { }

  ngOnInit(): void {
    this.s.getListOfSeance().subscribe(
      data => {
        this.seances = data;
      },
      err => {
        this.seances = JSON.parse(err.error).message;
      }
    );
  }
  onDeleteSeance(seance ){
    let conf=confirm("Etes Vous Sure ?")
    if(conf){
      this.s.DeleteSeance(seance ).subscribe(data=>{
        this.ngOnInit();
      },err=>{
        console.log(err) ;
      
      })
     }
    }

}
