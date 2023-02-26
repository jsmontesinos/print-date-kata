import Calendar from "../src/calendar";
import Printer from "../src/printer";
import PrintDate from "../src/print_date";

class CalendarDouble implements Calendar {
  constructor(private mockedDate: Date) {}

  today(): Date {
    return this.mockedDate;
  }
}

class PrinterDouble implements Printer {
  public calledWithLine: string | null = null;

  printLine(line: string): void {
    this.calledWithLine = line;
  }
}

describe("Test suite", () => {
  it("should print a date", () => {
    const someDate = new Date();
    const calendar = new CalendarDouble(someDate);
    const printer = new PrinterDouble();
    const printDate = new PrintDate(calendar, printer);

    printDate.printCurrentDate();

    expect(printer.calledWithLine).toEqual(someDate.toString());
  });
});
