import { TipoUsuario } from './tipo-usuario';

export interface Usuario {
    $key?: string;
    ativo?: string;
    email?: string;
    nome?: string;
    senha?: string;
    tipo?: TipoUsuario[];  
}