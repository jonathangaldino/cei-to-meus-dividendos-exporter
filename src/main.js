import { argv } from './helpers/command-line.js'
import { readFile, writeCsvFile, xlsxToCsvFormat } from './exporter'

const workbook = readFile(argv.file)

const data = xlsxToCsvFormat(workbook)

writeCsvFile(data)

