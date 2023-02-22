import PrintDate from "../src/print_date";
import Calendar from "../src/calendar";
import Printer from "../src/printer";

describe("Test suite", () => {
  it("find a proper name for this test", () => {
    const calendar = new Calendar();
    const printer = new Printer();
    const printDate = new PrintDate(calendar, printer);
    printDate.printCurrentDate();
  });
});
