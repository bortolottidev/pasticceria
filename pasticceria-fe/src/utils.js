const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
    }),
  });
  return response.json();
}

export const fetchDolci = async () => {
  const url = `${process.env.REACT_APP_BE_HOST}/dolci`;
  try {
    return get(url);
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
