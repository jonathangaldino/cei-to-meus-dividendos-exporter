const formatCode = (code: string) => code.split(' ')[0];
const formatValue = (value: number) => value.toLocaleString('pt-br', { minimumFractionDigits: 2 } );
const translateType = (type: string) => {
  const types = {
    'Credito': 'Compra',
    'Debito': 'Venda'
  }

  return types[type];
}

interface CsvRowProps {
  code: string;
  date: string;
  value: number;
  quantity: string;
  type: string;
}


class CsvRow {
  code: string;
  date: string;
  value: string;
  quantity: number;
  type: string;
  expense: string;

  constructor(props: CsvRowProps) {
    this.code = formatCode(props.code)
    this.date = props.date
    this.value = formatValue(props.value)
    this.quantity = parseInt(props.quantity)
    this.type = translateType(props.type)
    this.expense = '0,0'
  }
}

export default CsvRow
