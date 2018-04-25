import { Component } from '@angular/core';


import { ContactoService } from './services/contacto.services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  constructor(  private contactoService: ContactoService ){
    
   }

  ngOnInit(): void {
   
  }

}
