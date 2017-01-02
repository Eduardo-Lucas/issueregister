import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profile: any;

  constructor(private auth: Auth) {
          this.profile = JSON.parse(localStorage.getItem('profile'));          
  }

  ngOnInit() {
  }

}
