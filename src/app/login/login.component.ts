import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth'
import { moveIn, fallIn } from '../custom.animations'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fallIn(), moveIn()]
})
export class LoginComponent implements OnInit {

  state: string = '';

  email :string
  pass :string
  message :string = ''

  constructor(private afAuth :AngularFireAuth, private router :Router) { }


  loginUser() {
      this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pass)
      .then(
        success => this.router.navigate(['/Calendar']),
        error => this.message = error
      )
  }

  registerAccount() {
      this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.pass)
      .then(
            success =>  {
                          this.message = "Success"
                          this.router.navigate(['/Calendar'])
                        },
            error => this.message = error
          )
  }

  ngOnInit() {
  }

}
