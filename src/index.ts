import { argv } from './helpers/command-line'
import { readFile, writeCsvFile, xlsxToCsvFormat } from './exporter'

const workbook = readFile(argv.file)

const data = xlsxToCsvFormat(workbook)

writeCsvFile(data)

