import xlsx from 'node-xlsx'

const moduleFolder = process.cwd()

function readFile(filePath) {
  const [ transactionsWorkbook ] = xlsx.parse(`${moduleFolder}/${filePath}`)
  
  return transactionsWorkbook
}

export default readFile
