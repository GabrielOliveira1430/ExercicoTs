import { PessoaBase } from "./Abstratas/PessoaBase";

class Estudante extends PessoaBase {
  falar(): void {
    console.log(`${this.nome} está estudando TypeScript!`);
  }
}

const estudante = new Estudante("Gabriel Oliveira", 25);
estudante.apresentar();
estudante.falar();//   Saída: "Gabriel Oliveira está estudando TypeScript!"