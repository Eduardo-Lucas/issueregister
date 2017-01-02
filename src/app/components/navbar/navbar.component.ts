import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

import { TipoUsuario } from '../../domain/tipo-usuario';
import { Usuario } from '../../domain/usuario';

import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [FirebaseService]
})
export class NavbarComponent implements OnInit {
  tiposusuarios: TipoUsuario[];
  usuarios: Usuario[];

  profile: any;

  activeEmail    : string;
  activePassword: string;

  constructor(private _firebaseService: FirebaseService, private auth: Auth) {
          this.profile = JSON.parse(localStorage.getItem('profile'));          
   }

  ngOnInit() {
    // TipoUsuario
    this._firebaseService.getTipoUsuario().subscribe(tiposusuarios => {
      this.tiposusuarios = tiposusuarios;
    });
    // Usuario
    this._firebaseService.getUsuario().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  

}
