import invoices from "./data/invoices.json";
import plays from "./data/plays.json";
import statement, { htmlStatement } from "./statement";

console.log(statement(invoices, plays));
console.log(htmlStatement(invoices, plays));
