import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private afAuth :AngularFireAuth, private router :Router) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState
            .map( userState => !!userState )
            .do( logedIn => {
                  if(!logedIn){
                    this.router.navigate([''])
                  }
            })
  }
}
