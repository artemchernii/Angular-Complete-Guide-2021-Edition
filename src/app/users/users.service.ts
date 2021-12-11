import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { catchError, map, share, startWith, tap } from "rxjs/operators";
interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}
@Injectable({
    providedIn: 'root'
})


export class UsersService implements OnInit {
    constructor(private http: HttpClient) {}
    private text$ = of(['artem', 'rustam']);
    private testSb = new Subject<string>();
    private testSbasObs$ = this.testSb.asObservable().pipe(startWith('default'));
    public testBHV = new BehaviorSubject(null);


    ngOnInit() {}


    getUsers() {
        return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(
            map(res => {
                return res;
            }),
            catchError(error => error),
            share()
        );
    }
    combineVals() {
        this.getUsers().subscribe(users => {
            console.log(users, 'users');
            this.testBHV.next(users);
        });
    }
    retUsrs(): Observable<string> {
        return this.testSbasObs$;
    }

    getText() {
        return this.text$;
    }
    addText(str: string) {
        this.testSb.next(str);
    }
}
