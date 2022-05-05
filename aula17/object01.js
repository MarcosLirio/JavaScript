let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log(`${amigo.nome} engordou.`);
    this.peso += p;
}};

amigo.engordar(2);
console.log(`Agora ${amigo.nome} pesa ${amigo.peso}Kg`);