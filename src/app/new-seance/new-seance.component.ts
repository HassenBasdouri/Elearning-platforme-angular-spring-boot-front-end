import { ServicesService } from './../-services.service';
import { SeanceService } from './../_services/seance.service';
import { Component, OnInit } from '@angular/core';
import { SalleService } from './../_services/salle.service';
import { MatiereService } from './../_services/matiere.service';
import { GroupeService } from './../_services/groupe.service';
@Component({
  selector: 'app-new-seance',
  templateUrl: './new-seance.component.html',
  styleUrls: ['./new-seance.component.css']
})
export class NewSeanceComponent implements OnInit {
  ensgts :any
  matiers: any;
  salles: any;
  groupes: any;
  constructor( private s:SeanceService ,
    private groupeService: GroupeService, private salleservice:SalleService , 
    private ms :MatiereService , private ens:ServicesService) { }

ngOnInit(): void {
  this.salleservice.getListOfSalle().subscribe(
    data => {
      this.salles = data;
    },
    err => {
      this.salles = JSON.parse(err.error).message;
    }
  );
  this.ms.getListOfMatiere().subscribe(
    data => {
      this.matiers = data;
    },
    err => {
      this.matiers = JSON.parse(err.error).message;
    }
  );
  this.groupeService.getListOfGroupe().subscribe(
    data => {
      this.groupes = data;
    },
    err => {
      this.groupes = JSON.parse(err.error).message;
    }
  );
  this.ens.getListOfEns().subscribe(
    data => {
      this.ensgts = data;
    },
    err => {
      this.ensgts = JSON.parse(err.error).message;
    }
  );
  }
  onSaveSeance(data:any){
    this.s.saveSeance(this.s.host+"addSeance",data).subscribe(res=>{
       console.log(res);
     },err=>{
       console.log(err);
     
     })
   }
  
}
