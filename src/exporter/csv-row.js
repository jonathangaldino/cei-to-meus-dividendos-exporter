const formatCode = code => code.split(' ')[0];
const formatValue = value => value.toLocaleString('pt-br', { minimumFractionDigits: 2 } );
const translateType = type => {
  const types = {
    'Credito': 'Compra',
    'Debito': 'Venda'
  }

  return types[type];
}


class CsvRow {
  constructor({ code, date, value, quantity, type }) {
    this.code = formatCode(code)
    this.date = date
    this.value = formatValue(value)
    this.quantity = parseInt(quantity)
    this.type = translateType(type)
    this.expense = '0,0'
  }
}

export default CsvRow
