import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
    selector: 'app-testcomptwo',
    template: '<h1>TESTTWO</h1><h2>{{ userName.length > 0 && userName ? userName : "noName" }}</h2>',
    styles: ['h1 {color: tomato;}']
})

export class TestTwoComponent implements OnInit {
    constructor(private userSrv: UsersService) {}
    userName: string = '';

    ngOnInit() {
        this.userSrv.retUsrs().subscribe(user => {
            this.userName = user;
        });
    }
}
