import Calendar from "./calendar";
import Printer from "./printer";

class PrintDate {
  calendar: Calendar;
  printer: Printer;

  constructor(calendar: Calendar, printer: Printer) {
    this.calendar = calendar;
    this.printer = printer;
  }

  printCurrentDate() {
    const today = this.calendar.today();
    this.printer.printLine(today.toString());
  }
}

export default PrintDate;
