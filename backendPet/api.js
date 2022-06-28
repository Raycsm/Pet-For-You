var express = require('express');
var app = express();
var sequelize = require('sequelize');
var port = 3000;
var cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var fs = require('fs');
var sql_secret = fs.readFileSync('sql_secret.txt', 'utf8');
var sql_secret_array = sql_secret.split('\n');
var database_name = sql_secret_array[0];
var username = sql_secret_array[1];
var password = sql_secret_array[2];

const Sequelize = new sequelize(database_name, username, password, {
	freezeTableName: true,
	host: 'localhost',
	dialect: 'mysql',
	define: {
		timestamps: false
	}
});

const Cliente = Sequelize.define('clientes', {
	id: {
		type: sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: sequelize.TEXT,
		allowNull: false
	},
	senha: {
		type: sequelize.TEXT,
		allowNull: false
	},
	endereco: {
		type: sequelize.TEXT,
		allowNull: false
	},
	telefone: {
		type: sequelize.BIGINT(14),
		allowNull: true
	},
	fisicaoujuridica: {
		type: sequelize.STRING,
		allowNull: false
	}
});

const PessoaFisica = Sequelize.define('pessoas_fisicas', {
	cpf: {
		type: sequelize.BIGINT(14),
		primaryKey: true,
		allowNull: false
	},
	nome: {
		type: sequelize.TEXT,
		allowNull: false
	},
	cliente_id: {
		type: sequelize.INTEGER,
		allowNull: false
	}
});

const PessoaJuridica = Sequelize.define('pessoas_juridicas', {
	cnpj: {
		type: sequelize.BIGINT(14),
		primaryKey: true,
		allowNull: false
	},
	nome: {
		type: sequelize.TEXT,
		allowNull: false
	},
	cliente_id: {
		type: sequelize.INTEGER,
		allowNull: false
	}
});

const pet = Sequelize.define('pet', {
	id: {
		type: sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	nome: {
		type: sequelize.STRING,
		allowNull: false
	},
	tipo: {
		type: sequelize.STRING,
		allowNull: false
	},
	localizacao: {
		type: sequelize.STRING,
		allowNull: false
	},
	sexo: {
		type: sequelize.STRING,
		allowNull: false
	},
	raca: {
		type: sequelize.STRING,
		allowNull: false
	},
	idadeanos: {
		type: sequelize.INTEGER,
		allowNull: false
	},
	idademeses: {
		type: sequelize.INTEGER,
		allowNull: false
	},
	pesoestimado: {
		type: sequelize.STRING,
		allowNull: false
	},
	porte: {
		type: sequelize.STRING,
		allowNull: false
	},
	vacinado: {
		type: sequelize.STRING,
		allowNull: false
	},
	castrado: {
		type: sequelize.STRING,
		allowNull: false
	},
	telefone: {
		type: sequelize.STRING,
		allowNull: false
	},
	email: {
		type: sequelize.STRING,
		allowNull: false
	},
	descricao: {
		type: sequelize.STRING,
		allowNull: false
	},
	cliente_id: {
		type: sequelize.INTEGER,
		allowNull: false
	}
});

app.post('/cliente', (req, res) => {
	const { email, senha, endereco, telefone, fisicaoujuridica } = req.body;
	Cliente.create({
		email,
		senha,
		endereco,
		telefone,
		fisicaoujuridica
	})
		.then(() => {
			Cliente.findOne({
				where: {
					email
				}
			})
				.then(cliente => {
					const { id } = cliente;
					if (fisicaoujuridica === 'f') {
						const { cpf, nome } = req.body;
						PessoaFisica.create({
							cpf,
							nome,
							cliente_id: id
						})
							.then(() => {
								res.send('Cliente cadastrado com sucesso!');
							})
							.catch(err => {
								res.send(err);
							});
					} else {
						const { cnpj, nome } = req.body;
						PessoaJuridica.create({
							cnpj,
							nome,
							cliente_id: id
						})
							.then(() => {
								res.send('Cliente cadastrado com sucesso!');
							})
							.catch(err => {
								res.send(err);
							});
					}
				})
				.catch(err => {
					res.send(err);
				});
		})
		.catch(err => {
			res.send(err);
		});
});


app.post('/pet', (req, res) => {
	pet.create({
		nome: req.body.nome,
		tipo: req.body.tipo,
		localizacao: req.body.localizacao,
		sexo: req.body.sexo,
		raca: req.body.raca,
		idadeanos: req.body.idadeanos,
		idademeses: req.body.idademeses,
		pesoestimado: req.body.pesoestimado,
		porte: req.body.porte,
		vacinado: req.body.vacinado,
		castrado: req.body.castrado,
		telefone: req.body.telefone,
		email: req.body.email,
		descricao: req.body.descricao,
		cliente_id: req.body.cliente_id
	})
		.then(() => {
			res.send('Pet cadastrado com sucesso!');
		})
		.catch(err => {
			res.send(err);
		});
	});

app.listen(port, function (){
	console.log(`http://localhost:${port}`)
})
