create schema pasticceria;

create table pasticceria.dolci (
	id serial primary key,
	nome varchar(255) not null,
	prezzo float not null,
	created_at timestamp default now()
);


INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cornetto vecchissimo', 10, now() - INTERVAL '4 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cornetto vecchio', 10, now() - INTERVAL '3 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cornetto vuoto', 10, now() - INTERVAL '2 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('fetta di torta classica', 10, now() - INTERVAL '2 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('fetta di cheesecake', 10, now() - INTERVAL '2 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cornetto vegano', 10, now() - INTERVAL '1 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cookie al pistacchio', 10, now() - INTERVAL '1 day');
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cornetto alla fragola', 10, now());
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('ciambella al cioccolato', 10, now());
INSERT INTO pasticceria.dolci (nome, prezzo, created_at) VALUES('cupcake', 10, now());

create table pasticceria.ingredienti (
	id serial primary key,
	nome varchar(255) not null,
	qta float,
	unita_misura varchar(255),
	dolce_id integer not null references pasticceria.dolci,
	created_at timestamp default now()
);

INSERT INTO pasticceria.ingredienti (nome, qta, unita_misura, dolce_id, created_at) 
VALUES(
	'zucchero'
	, 120
	, 'g' 
	, (select id from pasticceria.dolci where nome = 'cornetto vuoto')
	, now()
);

INSERT INTO pasticceria.ingredienti (nome, qta, unita_misura, dolce_id, created_at) 
VALUES(
	'maltodestrine'
	, 5
	, 'g' 
	, (select id from pasticceria.dolci where nome = 'cornetto vuoto')
	, now()
);

INSERT INTO pasticceria.ingredienti (nome, qta, unita_misura, dolce_id, created_at) 
VALUES(
	'sale'
	, null
	, 'qb' 
	, (select id from pasticceria.dolci where nome = 'cornetto vuoto')
	, now()
);

INSERT INTO pasticceria.ingredienti (nome, qta, unita_misura, dolce_id, created_at) 
VALUES(
	'pane'
	, 50
	, 'g' 
	, (select id from pasticceria.dolci where nome = 'cornetto vuoto')
	, now()
);