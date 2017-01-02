import { Tipo } from './tipo';
import { Modulo } from './modulo';
import { Situacao } from './situacao';

export interface IssueRegister {
    $key?       : string;
    type?       : Tipo[]; 
    date_raised?: Date;    
    raised_by?  : string;
    author_name?: string; 
    description?: string; 
    module?     : Modulo[]; 
    situacao?   : Situacao[]; 
    closure_date: Date;  
}