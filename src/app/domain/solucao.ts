import { IssueRegister } from './issueregister';

export interface Solucao {
    $key?: string;
    dataSolucao?: Date;
    descricao?: string;
    chaveIssue: IssueRegister[];
}