import { argv } from './command-line.js'
import readFile  from './read-file.js'
import writeCsvFile from './write-csv.js'
import xlsxToCsvFormat from './xlsx-to-csv-format.js'

const { file } = argv

if (!file) {
  throw new Error('Where\'s the "--file" argument?')
}

const workbook = readFile(file)

const data = xlsxToCsvFormat(workbook)

writeCsvFile(data)

