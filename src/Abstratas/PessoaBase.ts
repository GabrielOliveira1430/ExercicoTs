import { IPessoa } from "../interfaces/IPessoa";

export abstract class PessoaBase implements IPessoa {
  constructor(public nome: string, public idade: number) {}

  abstract falar(): void; // método abstrato

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}