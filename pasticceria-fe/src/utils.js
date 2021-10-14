const call = async (url, method = 'GET', body) => {
  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  return response.json();
}

const get = url => call(url);
const post = (url, body) => call(url, 'POST', body);

export const fetchDolci =   async () => {
  const url = `${process.env.REACT_APP_BE_HOST}/dolci`;
  try {
    return get(url);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addNewDolce = async (newDolce) => {
  const url = `${process.env.REACT_APP_BE_HOST}/dolci`;
  try {
    return post(url, { nome: 'asd', prezzo: '222', ingredienti: [] });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchDettaglioDolce = async (id) => {
  const url = `${process.env.REACT_APP_BE_HOST}/dolci/${id}`;
  try {
    return get(url);
  } catch (error) {
    console.error(error);
    return null;
  }
};
