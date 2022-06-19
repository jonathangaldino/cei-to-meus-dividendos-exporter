import CsvRow from "./csv-row.js";

function xlsxToCsvFormat(workbook) {
  const workbookData = workbook.data.slice(1)

  const csvData = []

  workbookData.forEach(row => {
    const formattedRow = new CsvRow({
      code: row[3],
      date: row[1],
      value: row[6],
      quantity: row[5],
      type: row[0]
    })

    csvData.push(formattedRow)
  })

  return csvData;
}

export default xlsxToCsvFormat
