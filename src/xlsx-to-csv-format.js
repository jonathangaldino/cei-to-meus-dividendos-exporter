import CsvRow from "./csv-row.js";

const translateType = type => {
  const types = {
    'Credito': 'Compra',
    'Debito': 'Venda'
  }

  return types[type];
}

function xlsxToCsvFormat(workbook) {
  const workbookData = workbook.data.slice(1)

  const csvData = []

  workbookData.forEach(row => {
    csvData.push(new CsvRow({
      code: row[3].split(' ')[0],
      date: row[1],
      value: `"${row[6]}"`,
      quantity: parseInt(row[5]),
      type: translateType(row[0]),
      expense: `"0,0"`
    }))
  })

  return csvData;
}

export default xlsxToCsvFormat
