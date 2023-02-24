import PrintDate from "../src/print_date";

class CalendarDouble {
  constructor(private injectedDate: Date) {}

  today(): Date {
    return this.injectedDate;
  }
}

class PrinterDouble {
  public calledWithLine: string | null = null;

  printLine(line: string): void {
    this.calledWithLine = line;
  }
}

describe("Test suite", () => {
  it("should print a date", () => {
    const someDate = new Date(333);

    const calendar = new CalendarDouble(someDate);
    const printer = new PrinterDouble();

    const printDate = new PrintDate(calendar, printer);

    printDate.printCurrentDate();

    expect(printer.calledWithLine).toEqual(someDate.toString());
  });
});
