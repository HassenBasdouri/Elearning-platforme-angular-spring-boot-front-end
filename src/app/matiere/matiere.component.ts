import { MatiereService } from './../_services/matiere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  matiers: any;
  constructor( private ms :MatiereService) { }

  ngOnInit(): void {
    this.ms.getListOfMatiere().subscribe(
      data => {
        this.matiers = data;
      },
      err => {
        this.matiers = JSON.parse(err.error).message;
      }
    );
  }
  onDeleteMatier(matiere ){
  let conf=confirm("Etes Vous Sure ?")
  if(conf){
    this.ms.DeleteMatieres(matiere ).subscribe(data=>{
      this.ngOnInit();
    },err=>{
      console.log(err) ;
    
    })
   }
  }
}
