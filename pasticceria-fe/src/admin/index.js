import React, { useState } from "react";
import './index.css'

const initialState = {
  nome: "",
  prezzo: "",
  ingredienti: [{ nome: "", unita: "", qta: "" }],
};

export default function AdminPage({ dolci, addNewDolceFunction, requireReloadFunction, goBackFunction }) {
  const [form, setForm] = useState(initialState);
  const addNewIngrediente = () =>
    setForm({
      ...form,
      ingredienti: [...form.ingredienti, { nome: "", unita: "", qta: "" }],
    });
  const onChangeIngredienteProp =
    (ingrediente, index, prop) =>
    ({ target }) => {
      const before = form.ingredienti.slice(0, index);
      const value = { ...ingrediente, [prop]: target.value };
      const after = form.ingredienti.slice(index + 1, form.ingredienti.length);
      setForm({ ...form, ingredienti: [...before, value, ...after] });
    };
  const submitForm = () => {
    // TODO Highlight unvalid comp
    const data = {
      ...form,
      ingredienti: form.ingredienti.filter(({ nome }) => nome)
    }
    addNewDolceFunction(data).then(() => requireReloadFunction(true));
    setForm(initialState);
  };

  const ingredienti = () =>
    form.ingredienti.map((ingrediente, index) => {
      return (
        <div
          style={{ height: 50, display: "flex", gap: 16, justifyContent: "flex-start" }}
          key={index}
        >
          <input
            type="text"
            placeholder="Nome"
            value={ingrediente.nome}
            onChange={onChangeIngredienteProp(ingrediente, index, "nome")}
            style={{ flex: 1, maxWidth: 250 }}
          ></input>
          <input
            type="number"
            placeholder="Quantità"
            value={ingrediente.qta}
            onChange={onChangeIngredienteProp(ingrediente, index, "qta")}
            style={{ flex: 1, maxWidth: 100 }}
          ></input>
          <input
            type="text"
            placeholder="Unità misura"
            value={ingrediente.unita}
            onChange={onChangeIngredienteProp(ingrediente, index, "unita")}
            style={{ flex: 1, maxWidth: 100 }}
          ></input>
        </div>
      );
    });

  return (
    <div className="column gap-8" style={{ padding: 16, height: "100%", minHeight: '100vh', backgroundColor: "#61dafb" }}>
      <div className="App-header row full-width">
        <div style={{ flex: 1 }}><button onClick={goBackFunction}>Indietro</button></div>
        <h1 style={{ flex: 9, textAlign: 'center', margin: 0 }}> Vetrina </h1>
      </div>
      <div className="row full-width">
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 9 }}>
          <ul>
            {dolci.map((dolce) => (
              <li key={dolce.id}>{JSON.stringify(dolce)}</li>
            ))}
          </ul>
          <h1 style={{ textAlign: 'center'}}> Inserisci nuovo dolce </h1>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <input
              type="text"
              placeholder="Nome"
              value={form.nome}
              onChange={({ target }) => setForm({ ...form, nome: target.value })}
              style={{ flex: 1, maxWidth: 250 }}
            ></input>
            <input
              type="number"
              placeholder="Prezzo"
              value={form.prezzo}
              onChange={({ target }) => setForm({ ...form, prezzo: target.value })}
              style={{ flex: 1, maxWidth: 100 }}
            ></input>
          </div>
          <h3>Ingredienti</h3>
          {ingredienti()}
          <div className="full-width" style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button onClick={addNewIngrediente}>Nuovo ingrediente</button>
            <button onClick={submitForm}>Aggiungi dolce</button>
          </div>
        </div>
      </div>
    </div>
  );
}
