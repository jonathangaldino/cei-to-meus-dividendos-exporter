import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const argv = yargs(process.argv.slice(2)).options({
  file: { type: 'string' }
}).parseSync();




