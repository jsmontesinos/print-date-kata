import PrintDate from "../src/print_date";

describe("Test suite", () => {
  it("should print a date", () => {
    const someDate = new Date();
    const calendar = {
      today: jest.fn().mockReturnValue(someDate),
    };
    const printer = {
      printLine: jest.fn(),
    };
    const printDate = new PrintDate(calendar, printer);

    printDate.printCurrentDate();

    expect(printer.printLine).toBeCalledWith(someDate.toString());
  });
});
