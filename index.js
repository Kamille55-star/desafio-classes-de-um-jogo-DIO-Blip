class heroi {
  constructor(nome, idade, cabana, armas) {
    this.nome = nome
    this.idade = idade
    this.cabana = cabana
    this.armas = armas
  }

  atacar() {
    let ataque = ""
    if (this.cabana === "Poseidon"){
      ataque = "poderes de água e furacão"
    }
    else if (this.cabana ==="Athena"){
      ataque = "planejamento e estratégia"
    }
    else if (this.cabana === "Hades"){
      ataque = "poderes das sombras, invocar mortos"
    }
    else if (this.cabana === "Apolo"){
      ataque = "poderes de se iluminar e cegar inimigo"
    }
    else if (this.cabana === "Hefesto"){
      ataque = "poderes de fogo"
    }
    console.log(`o/a ${this.nome} do chalé de ${this.cabana} atacou usando ${ataque}`)
  }
}

 

let percy = new heroi("Percy", 18, "Poseidon")


let annabeth = new heroi ("Annabeth", 18 , "Athena" )


let nico = new heroi("Nico", 18, "Hades")


let will = new heroi("Will", 18, "Apolo")


let leo = new heroi("Leo", 18, "Hefesto")

let herois = [percy, annabeth, nico, will, leo]

for (let h of herois) {
  h.atacar()
}


