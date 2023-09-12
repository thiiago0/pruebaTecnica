export const getFirstTenPokemons = async (url, opciones = {}) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Tipo de contenido (puede variar según la API)
      // Puedes agregar más encabezados aquí si es necesario
    },
    ...opciones, // Permite sobrescribir las opciones predeterminadas
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getPokemonByID = (url, id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Tipo de contenido (puede variar según la API)
      // Puedes agregar más encabezados aquí si es necesario
    },
    ...opciones, // Permite sobrescribir las opciones predeterminadas
  };

  // Hacer la solicitud GET utilizando fetch y devolver la promesa
  return fetch(`${url}/${id}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa"); // Manejo de errores
      }
      return response.json(); // Parsear la respuesta JSON (si la respuesta es JSON)
    })
    .catch((error) => {
      throw error; // Propagar el error para que lo maneje el código que llama a esta función
    });
};
