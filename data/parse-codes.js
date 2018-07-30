const parse = require("csv-parse");
const fs = require("fs");
const os = require("os");

const data = fs.readFileSync("./SIC07_CH_condensed_list_en.csv");
const lines = [];
const metaRow = {index: {_index: "sic-search", _type: "sic-code", _id: null}};

parse(data, (err, output) => {
  output.splice(0, 1);  // remove the headers

  output.forEach(row => {
    let [code, description] = row;
    let meta = {index: {_index: "sic-search", _type: "sic-code", _id: code}};
    lines.push(
      JSON.stringify(meta),
      JSON.stringify({code, description})
    );
  });

  fs.writeFileSync("./sample_data.txt", lines.join(os.EOL));
  console.log(`----------------- Written SIC code file -------------------
Output: sample_data.txt
-----------------------------------------------------------`);

});


