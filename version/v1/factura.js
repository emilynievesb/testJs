export const factura = (nombre, precio, cant) => {
  return `El comprador debe pagar por su producto ${nombre} un total de ${
    precio * cant
  }`;
};
