import { PessoaBase } from "./Abstratas/PessoaBase";

class Estudante extends PessoaBase {
  falar(): void {
    console.log(`${this.nome} está estudando TypeScript!`);
  }
}

const estudante = new Estudante("Gabriel", 25);
estudante.apresentar();
estudante.falar();