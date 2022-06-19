import readFile from '../../src/exporter/read-file';

describe('Read File', () => {
  const testFilePath = '/__tests__/exporter/testfile.xlsx'

  test('throws error if filepath is undefined', () => {
    expect(() => { readFile(undefined) }).toThrow()
  });

  test('is able to read a .xlsx basic file', () => {
    expect(() => { readFile(testFilePath) }).not.toThrow()
  });

  describe('parses the test file', () => {
    const workbook = readFile(testFilePath)

    test('tab\'s name must be valid', () => {
      expect(workbook).toHaveProperty('name', 'Movimentação')
    });

    test('has the data array', () => {
      expect(workbook).toHaveProperty('data')
    });
  });
});
