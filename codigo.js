const alunos = [
	{
		nome: 'Mário',
		nota: 6,
	},
	{
		nome: 'luana',
		nota: 7,
	},
	{
		nome: 'Lucas',
		nota: 6,
	},
    {   nome: 'joana',
        nota: 3,
        } 
];

function alunosAprovados(arr, media) {
	let aprovados = [];

	for (let i = 0; i < arr.length; i++) {
		let { nota, nome } = arr[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));
