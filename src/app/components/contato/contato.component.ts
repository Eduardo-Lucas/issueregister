import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
