import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-root',
  templateUrl: './board-root.component.html',
  styleUrls: ['./board-root.component.css']
})
export class BoardRootComponent implements OnInit {
  content = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRootBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
