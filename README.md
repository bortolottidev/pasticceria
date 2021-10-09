# Pasticceria

## Requisiti

L'installazione richiede di aver installato docker e docker-compose sulla propria macchina.

L'installazione richiede di avere la porta 5432 libera.

Potete controllare che essa effettivamente lo digitando in console linux:

```bash
    lsof -i -P -n | grep 5432
```

Se non compare nulla, potete preparare l'ambiente

```bash
    docker-compose build --no-cache 
```

## Avvio

Per l'avvio di tutti i servizi utilizzare:

```bash
    docker-compose up
```
