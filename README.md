# Pasticceria

## Requisiti

L'installazione richiede di aver già installato sulla propria macchina:

- docker
- docker-compose
- node (LTS)
- yarn

La porta 5432 deve essere libera.

Potete controllare che essa effettivamente lo digitando in console linux:

```bash
    lsof -i -P -n | grep 5432
```

Se non compare nulla, potete preparare l'ambiente

```bash
    docker-compose build --no-cache 
```

## Avvio

Per l'avvio del servizio di backend occorre utilizzare docker compose:

```bash
    docker-compose up
```

Invece il frontend va avviato manualmente, con un classico:

```bash
    cd pasticceria-fe/
    yarn install
    REACT_APP_BE_HOST=http://localhost:5000 npm run start
```

A questo punto l'app è disponibile all'indirizzo <http://localhost:3000/>

Have fun and don't eat too many dolci! 🍩
