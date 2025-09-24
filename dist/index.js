"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PessoaBase_1 = require("./Abstratas/PessoaBase");
class Estudante extends PessoaBase_1.PessoaBase {
    falar() {
        console.log(`${this.nome} está estudando TypeScript!`);
    }
}
const estudante = new Estudante("Gabriel", 25);
estudante.apresentar();
estudante.falar();
//# sourceMappingURL=index.js.map