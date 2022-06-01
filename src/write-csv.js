import { createObjectCsvWriter } from 'csv-writer'
import { PATH_TO_OUTPUT_FOLDER, CSV_HEADERS } from './constants.js'

const csvWriter = createObjectCsvWriter({
  path: `${PATH_TO_OUTPUT_FOLDER}/output.csv`,
  header: CSV_HEADERS
});

function writeCsvFile(data) {
  return csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}

export default writeCsvFile;
