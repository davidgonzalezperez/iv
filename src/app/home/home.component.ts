import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Observable<any[]>;


  constructor( private router: Router,private db: AngularFireDatabase ) { }

  ngOnInit() {
  this.users = this.getRutas('/contactos');/*carga los usuarios al iniciar*/
}

  
getRutas(listPath): Observable<any[]> {
  return this.db.list(listPath).valueChanges();
}

}
