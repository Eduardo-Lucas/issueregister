import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

import { IssueRegister } from '../../domain/issueregister';
import { Modulo } from '../../domain/modulo';
import { Solucao } from '../../domain/solucao';
import { Situacao } from '../../domain/situacao';
import { Tipo } from '../../domain/tipo';

import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [FirebaseService]
})
export class IssueListComponent implements OnInit {
  issueregisters: IssueRegister[];
  modulos: Modulo[];
  solucoes: Solucao[];
  situacoes: Situacao[];
  tipos: Tipo[];

  appState : string;
  activeKey: string;

  profile: any;

  activeType       : string;           
  activeRaised_by  : string;
  activeAuthor_name: string;
  activeDescription: string; 
  activeModule     : string;
  activeSituacao   : string;

  constructor(private _firebaseService: FirebaseService, private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));     
  }

  ngOnInit() {
    // IssueRegister
    this._firebaseService.getIssueRegisters().subscribe(issueregisters => {
      this.issueregisters = issueregisters;      
    })
    // Modulo
    this._firebaseService.getModulos().subscribe(modulos => {
      this.modulos = modulos;      
    })
    // Solucao
    this._firebaseService.getSolucoes().subscribe(solucoes => {
      this.solucoes = solucoes;
    })
    // Status
    this._firebaseService.getSituacoes().subscribe(situacoes => {
      this.situacoes = situacoes;    
    })
    // Tipo
    this._firebaseService.getTipo().subscribe(tipos => {
      this.tipos = tipos;
    })
  }

    changeState(state, key) {    
    if(key) {    
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterModulo(module) {        
    if(module == "0") {
     this._firebaseService.getIssueRegisters().subscribe(issueregisters => {
      this.issueregisters = issueregisters;
    })
    } else {
     this._firebaseService.getIssueRegisters(module).subscribe(issueregisters => {
      this.issueregisters = issueregisters;
    })
    }
  }

  addIssueRegister(
          type       : string,           
          raised_by  : string,
          author_name: string,
          description: string, 
          module     : string) {

            var hoje  = new Date();
            var agora = hoje.toLocaleDateString();

            var situacao     = "Aberta";
            var closure_date = null;

            var newIssueRegister = {
               type       : type,           
               raised_by  : raised_by,
               author_name: author_name,
               description: description, 
               module     : module,
               date_raised: agora,
               situacao   : situacao,
               closure_date: closure_date
            }
           
            this._firebaseService.addIssueRegister(newIssueRegister);

            this.changeState('default', null);

  }

  showEdit(issue) {         
    this.changeState('edit', issue.$key);
    this.activeType        = issue.type;           
    this.activeRaised_by   = issue.raised_by;
    this.activeAuthor_name = issue.author_name;
    this.activeDescription = issue.description; 
    this.activeModule      = issue.module;    
    this.activeSituacao    = issue.situacao;         
  }

  updateIssueRegister() {    
      var updIssueRegister = {
      type       : this.activeType,                    
      raised_by  : this.activeRaised_by,   
      author_name: this.activeAuthor_name, 
      description: this.activeDescription,  
      module     : this.activeModule,
      situacao   : this.activeSituacao
      }      
 
      this._firebaseService.updateIssueRegister(this.activeKey, updIssueRegister);
      this.changeState('default', null); 
    }

    deleteIssueRegister (key) {   
      console.log("Id passado: "+ key);       
       this._firebaseService.deleteIssueRegister(key);
       this.changeState('default', null); 
    }


}
