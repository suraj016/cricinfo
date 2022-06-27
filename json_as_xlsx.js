let xlsx = require("json-as-xlsx")     // xlxs ko require kiya  , module ko use karenge

let data = [     // data nam ka variable aur ye ek  array of object  hae
  {
    sheet: "Adults",
    columns: [
      { label: "User", value: "user" }, // Top level data
      { label: "Age", value: "age" }, // Custom format
      { label: "Phone", value: "" }, // Run functions
    ],
    content: [
      { user: "Andrea", age: 20, more: { phone: "11111111" } },
      { user: "Luis", age: 21, more: { phone: "12345678" } },
    ],
  },
]

let settings = {    // setting ek object hae
  fileName: "MySpreadsheet", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(data, settings) // Will download the excel file