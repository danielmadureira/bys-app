const getBrazilianLongDate = (data) => {
  const mesesExtenso = [
    'janeiro', 'fevereiro', 'março', 'abril',
    'maio', 'junho', 'julho', 'agosto',
    'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  return [
    data.getDate(),
    mesesExtenso[data.getMonth()],
    data.getFullYear()
  ].join(' de ');
}

export const DateHelpers = {
  getBrazilianLongDate
}