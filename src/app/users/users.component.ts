import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {from, Observable, of} from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  name = 'Name';
  usersPosts: any = [];
  randomValue = '';
  constructor(private usersServ: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersServ.getUsers().subscribe(users => {
      this.usersPosts = users;
    });
    this.usersServ.retUsrs().subscribe(data => {
      console.log(data);
      this.name = data;
    });
  }
  addItem() {
    if (this.name.length !== 0) {
      this.usersServ.addText(this.name);
    }
  }

  changeName(name: string) {
    this.name = name;
  }

  nav(where: string) {
    this.router.navigate([where, {randomValue: this.randomValue === '' ? null : this.randomValue }], {relativeTo: this.route});
  }
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
