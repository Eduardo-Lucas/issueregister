import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { IssueRegister } from '../domain/issueregister';
import { Modulo } from '../domain/modulo';
import { Solucao } from '../domain/solucao';
import { Situacao } from '../domain/situacao';
import { Tipo } from '../domain/tipo';
import { TipoUsuario } from '../domain/tipo-usuario';
import { Usuario } from '../domain/usuario';

@Injectable()
export class FirebaseService {
    issueregisters: FirebaseListObservable<IssueRegister[]>;
    modulos: FirebaseListObservable<Modulo[]>;
    solucoes: FirebaseListObservable<Solucao[]>;
    situacoes: FirebaseListObservable<Situacao[]>;
    tipos: FirebaseListObservable<Tipo[]>;
    tiposusuarios: FirebaseListObservable<TipoUsuario[]>;
    usuarios: FirebaseListObservable<Usuario[]>;

    constructor(private _af: AngularFire) {

    }

    getIssueRegisters(module:string = null) {

        if(module!=null) {
            this.issueregisters = this._af.database.list('/issueregister', {
                query: {
                    orderByChild: 'module',
                    equalTo: module
                }
            }) as FirebaseListObservable<IssueRegister[]>
        } else {
            this.issueregisters = this._af.database.list('/issueregister') as
            FirebaseListObservable<IssueRegister[]>
        }
           return this.issueregisters;
    }

    getModulos() {
        this.modulos = this._af.database.list('/modulos') as
           FirebaseListObservable<Modulo[]>
           return this.modulos;
    }

    getSolucoes() {
        this.solucoes = this._af.database.list('/solucoes') as
           FirebaseListObservable<Solucao[]>
           return this.solucoes;
    }

    getSituacoes() {
        this.situacoes = this._af.database.list('/situacoes') as
           FirebaseListObservable<Situacao[]>
           return this.situacoes;
           
    }

    getTipo() {
        this.tipos = this._af.database.list('/tipos') as
           FirebaseListObservable<Tipo[]>
           return this.tipos;
    }

    getTipoUsuario() {
        this.tiposusuarios = this._af.database.list('/tiposusuarios') as
           FirebaseListObservable<TipoUsuario[]>
           return this.tiposusuarios;
    }

    getUsuario(email: string = null) {
        this.usuarios = this._af.database.list('/usuarios', {
            query: {
                orderByChild: 'email',
                    equalTo: email
            }
        }) as
           FirebaseListObservable<Usuario[]>          
           return this.usuarios;
    }


    addIssueRegister(newIssueRegister) {
        return this.issueregisters.push(newIssueRegister);
    }

    updateIssueRegister(key, updIssueRegister) {
        return this.issueregisters.update(key, updIssueRegister);
    }

    deleteIssueRegister(key) {       
        return this.issueregisters.remove(key);
    }

}