class heroi {
  constructor(nome, idade, tipo, armas) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.armas = armas
  }

  ataque() {
    console.log(`${this.nome} atacou usando: ${this.armas}`)
  }
}

let armasPercy = ["Espada Contracorrente", "Poderes"]

let percy = new heroi("Percy", 18, "Semideus", armasPercy)

console.log(percy)   // mostra a class toda
percy.ataque()       // mostra o ataque
armasAnnabeth = ["Adaga", " planejamento e inteligência"]
let annabeth = new heroi ("Annabeth" , 18 , "Semideus" , armasAnnabeth)
console.log (annabeth)
annabeth.ataque()
