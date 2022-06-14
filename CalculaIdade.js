function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`; }

    const mae= {
        nome: 'Carla',
        idade: 32,
    };

    const pai= {
        nome: 'Marcos',
        idade: 45,
    };

    const avó= {
        nome: 'Juçara',
        idade: 60,
    };

    console.log(calcula.call(mae, 20));
