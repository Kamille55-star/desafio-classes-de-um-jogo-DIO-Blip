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

let armasPercy = "Contracorrente e poderes"

let percy = new heroi("Percy", 18, "Semideus", armasPercy)

console.log(percy)   // mostra a class toda
percy.ataque()
armasAnnabeth = "Adaga, planejamento e inteligência"
let annabeth = new heroi ("Annabeth" , 18 , "Semideus" , armasAnnabeth)
console.log (annabeth)
annabeth.ataque()

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//if (heroi) {

//}