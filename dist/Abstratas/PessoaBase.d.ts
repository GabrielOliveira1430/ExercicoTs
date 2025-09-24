import { IPessoa } from "../interfaces/IPessoa";
export declare abstract class PessoaBase implements IPessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number);
    abstract falar(): void;
    apresentar(): void;
}
//# sourceMappingURL=PessoaBase.d.ts.map