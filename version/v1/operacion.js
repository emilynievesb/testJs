export const operacion = (n1, n2) => {
  if (n1 > n2) {
    return `La suma de esto es ${n1 + n2} y la resta ${n1 - n2}`;
  }
  return `La división de esto es ${n2 / n1} y la multiplicación ${n1 * n2}`;
};
