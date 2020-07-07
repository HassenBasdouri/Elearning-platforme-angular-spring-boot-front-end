import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-teacher',
  templateUrl: './board-teacher.component.html',
  styleUrls: ['./board-teacher.component.css']
})
export class BoardTeacherComponent implements OnInit {
  content = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTeacherBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
