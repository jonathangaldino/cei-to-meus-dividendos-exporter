import xlsx from 'node-xlsx'

const moduleFolder = process.cwd()

function readFile(filePath) {
  if (!filePath) {
    throw new Error('Filepath is undefined or unknown')
  }

  const [ transactionsWorkbook ] = xlsx.parse(`${moduleFolder}/${filePath}`)
  
  return transactionsWorkbook
}

export default readFile
