export const getFirstTenPokemons = async (url, opciones = {}) => {
  const requestOptions = {
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

export const getPokemonByID = async (url, id) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json", // Tipo de contenido (puede variar según la API)
      // Puedes agregar más encabezados aquí si es necesario
    },
    // ...opciones,
  };

  try {
    const response = await fetch(`${url}${id}`, requestOptions);
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud fetch:", error);
    throw error;
  }
};
