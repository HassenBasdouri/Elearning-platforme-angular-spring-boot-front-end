import { GroupeService } from './../_services/groupe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-groupe',
  templateUrl: './new-groupe.component.html',
  styleUrls: ['./new-groupe.component.css']
})
export class NewGroupeComponent implements OnInit {

  constructor(private gp:GroupeService) { }

  ngOnInit(): void {
  }
  onSaveGroupe(data:any){
   this.gp.saveGroupes(this.gp.host+"addGroupe",data).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    
    })
  }

}
