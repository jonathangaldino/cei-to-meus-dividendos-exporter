import path from 'node:path'

export const PATH_TO_OUTPUT_FOLDER = path.resolve('./src/output')

export const CSV_HEADERS = [
  { id: 'code', title: 'Código' },
  { id: 'date', title: 'Data' },
  { id: 'value', title: 'Valor' },
  { id: 'quantity', title: 'Quantidade' },
  { id: 'type', title: 'Tipo' },
  { id: 'expense', title: 'Despesas' }
]
