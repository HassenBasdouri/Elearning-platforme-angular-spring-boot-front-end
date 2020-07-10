import { MatiereService } from './../_services/matiere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nmatiere',
  templateUrl: './nmatiere.component.html',
  styleUrls: ['./nmatiere.component.css']
})
export class NMatiereComponent implements OnInit {

  constructor(private mt:MatiereService) { }

  ngOnInit(): void {
  }
  onSaveMatier(data:any){
    this.mt.saveMatieres(this.mt.host+"addMatier",data).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    
    })
  }

}
