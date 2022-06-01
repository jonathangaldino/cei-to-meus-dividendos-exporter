class CsvRow {
  constructor({ code, date, value, quantity, type, expense }) {
    this.code = code
    this.date = date
    this.value = value
    this.quantity = quantity
    this.type = type
    this.expense = expense
  }

  toObject() {
    return {
      code: this.code,
      date: this.date,
      value: this.value,
      quantity: this.quantity,
      type: this.type,
      expense: this.expense
    }
  }
}

export default CsvRow
