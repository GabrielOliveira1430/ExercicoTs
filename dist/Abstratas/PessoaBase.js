"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaBase = void 0;
class PessoaBase {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
exports.PessoaBase = PessoaBase;
//# sourceMappingURL=PessoaBase.js.map