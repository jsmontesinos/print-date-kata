import PrintDate from "../src/print_date";

class Calendar {
  constructor(private injectedDate: Date) {}

  today(): Date {
    return this.injectedDate;
  }
}

class Printer {
  constructor(private expectedLine: string) {}

  public isCalledWithExpectedLine: boolean = false;

  printLine(line: string): void {
    this.isCalledWithExpectedLine = this.expectedLine === line;
  }
}

describe("Test suite", () => {
  it("should print a date", () => {
    const someDate = new Date();

    const calendar = new Calendar(someDate);

    const printer = new Printer(someDate.toString());

    const printDate = new PrintDate(calendar, printer);

    printDate.printCurrentDate();

    expect(printer.isCalledWithExpectedLine).toBe(true);
  });
});
