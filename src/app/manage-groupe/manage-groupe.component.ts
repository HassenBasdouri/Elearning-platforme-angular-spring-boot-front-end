import { GroupeService } from './../_services/groupe.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manage-groupe',
  templateUrl: './manage-groupe.component.html',
  styleUrls: ['./manage-groupe.component.css']
})
export class ManageGroupeComponent implements OnInit {

  groupes: any;

  constructor(private groupeService: GroupeService) { }

  ngOnInit(): void {
    this.groupeService.getListOfGroupe().subscribe(
      data => {
        this.groupes = data;
      },
      err => {
        this.groupes = JSON.parse(err.error).message;
      }
    );
  }

}
