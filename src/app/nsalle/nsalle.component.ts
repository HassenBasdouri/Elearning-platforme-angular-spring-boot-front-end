import { SalleService } from './../_services/salle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nsalle',
  templateUrl: './nsalle.component.html',
  styleUrls: ['./nsalle.component.css']
})
export class NSalleComponent implements OnInit {

  constructor(private sv:SalleService ) {}

  ngOnInit(): void {
    
  }
  onSaveSalle(data:any){
    this.sv.saveSalles(this.sv.host+"addSalle",data).subscribe(res=>{
       console.log(res);
     },err=>{
       console.log(err);
     
     })
   }
}
