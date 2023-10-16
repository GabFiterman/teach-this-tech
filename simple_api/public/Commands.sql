-- TABLE WITH MANY DATA TYPES
CREATE TABLE aluno (
	id SERIAL,
	nome VARCHAR(255),
	cpf CHAR(11),
	observacao TEXT,
	idade INTEGER,
	dinheiro  NUMERIC(10,2),
	altura REAL,
	ativo BOOLEAN,
	dt_nascimento DATE,
	hora_aula TIME,
	data_matricula TIMESTAMP
);

-- HOW TO INSERT THEM
INSERT INTO aluno (
	nome,
	cpf,
	observacao,
	idade,
	dinheiro,
	altura,
	ativo,
	dt_nascimento,
	hora_aula,
	data_matricula
) VALUES (
		'Gabriel Henrique Fiterman',
		'04236059177',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed tincidunt erat, vitae viverra nisl. Curabitur metus quam, faucibus blandit augue at, malesuada ultricies mi. Vivamus a nisi dui. Duis consequat quis justo sed lacinia. Integer ut mi ante. Vestibulum ultricies suscipit diam. Integer luctus lectus risus, ut commodo felis faucibus vel. Nunc sed nisl eu diam mattis posuere. Nam ac tincidunt elit, eu porttitor lectus. Duis massa dui, aliquam id accumsan eget, condimentum at arcu.Aliquam accumsan ex a massa tristique scelerisque. Quisque eu dui libero. Nunc elementum nunc nec est dignissim tempor. Morbi eu purus eget leo tristique condimentum. Maecenas sagittis quam ut semper pulvinar. Integer dictum a eros sed suscipit. Nunc ac ex tincidunt, pulvinar leo non, cursus felis. Ut in neque vitae sapien dictum convallis sit amet eget ex.Cras nulla leo, malesuada ut augue sed, tincidunt pharetra ligula. Duis faucibus dui a quam faucibus consequat. Aenean a consectetur tortor, pretium sollicitudin ligula. Nunc consequat nunc tellus, in sagittis magna fringilla in. Vivamus accumsan urna eu sapien tempor ultricies. Donec eget turpis eu mauris aliquam dapibus. Donec in accumsan leo. Duis laoreet sollicitudin accumsan. Cras congue tincidunt tellus vitae gravida.',
		35,		
		7200.52,
		1.76,
		true,
-- 		'YYYY-MM-DD'
		'1999-01-27',
-- 		'HH24:MI:SS',
		'17:30:00',
-- 		'YYY-MM-DD HH24:MI:SS',
		'2020-02-08 12:32:45'
	);

-- SECONDARY TABLE, TO USE HERE
CREATE TABLE cadastro (
	id SERIAL,
	nome VARCHAR(255),
	email VARCHAR(255),
	notify_them BOOLEAN,
	register_date DATE
)

INSERT INTO cadastro (
	nome,
	email,
	notify_them,
	register_date
) VALUES (
	'Gabriel Henrique Fiterman',
	'gabriel@webearts.com',
	true,
	'2023-09-25'
);

SELECT * FROM cadastro;

SELECT * 
	FROM aluno
		WHERE ID = 1;

-- THIS HOW DO UPDATE
UPDATE aluno
SET 
    nome = 'Kakau Lopes',
    cpf = '12345678910',
    observacao = 'Teste',
    idade = 22,
    dinheiro = 7000.85,
    altura = 1.74,
    ativo = TRUE
WHERE EXISTS (
    SELECT 1 FROM aluno WHERE id = 1
);

INSERT INTO aluno (nome) VALUES ('Jade Lopes Fiterman');
INSERT INTO aluno (nome) VALUES ('Gabriel Henrique Fiterman');
INSERT INTO aluno (nome) VALUES ('Kakau');

SELECT *
	FROM aluno
WHERE nome NOT LIKE '%Fiterman'
;

DELETE FROM aluno WHERE id = 1;

SELECT * FROM aluno;

DROP TABLE aluno;

SELECT * FROM aluno;