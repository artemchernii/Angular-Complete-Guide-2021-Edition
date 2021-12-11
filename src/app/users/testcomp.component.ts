import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "./users.service";

@Component({
    selector: 'app-testcomp',
    template: `<h1 *ngFor="let user of arr | slice:0:3"> {{ user.id }} </h1><p style="color: green;">{{randomValue}}</p>`,
    styles: ['h1 {color: tomato;}']
})

export class TestComponent implements OnInit {
    constructor(private usrsSrv: UsersService, private route: ActivatedRoute, private router: Router) {}
    arr = [];
    @Input() randomValue!: string | undefined;
    ngOnInit() {

        const rV = this.route.snapshot.paramMap.get('randomValue');
        console.log(rV, 'random Value');
        this.usrsSrv.combineVals();
        this.usrsSrv.testBHV.subscribe(data => {
            this.arr = data;
        });
    }
}
