import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private auth: Auth) {
    
   }

  ngOnInit() {
  }

}
