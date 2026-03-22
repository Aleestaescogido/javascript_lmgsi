const express = require("express");
const convert = require("xml-js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/convert", (req, res) => {
  const { data } = req.body;
  const result = data.toUpperCase();
  res.json({ result });
});

app.post("/json2XML", (req, res) => {
  let json = req.body.data;
  json = json.replaceAll("\"", "");
  json = json.replaceAll("{", "");
  json = json.replaceAll("}", "");
  
  let keyvalues = json.split(",");
  let xml = "<arrel>";
  
  for (let i = 0; i < keyvalues.length; i++) {
    let temparray = keyvalues[i].split(":");
    xml += "<" + temparray[0] + ">" + temparray[1] + "</" + temparray[0] + ">";
  }
  
  xml += "</arrel>";
  res.json({ result: xml });
});

app.post("/xml2json", (req, res) => {
  const { data } = req.body;
  const result = convert.xml2json(data, { compact: true, spaces: 4 });
  res.json({ result });
});

app.post("/json2xmllib", (req, res) => {
  const { data } = req.body;
  let jsonData = data;
  if (typeof jsonData === "string") {
    jsonData = JSON.parse(jsonData);
  }
  const result = convert.json2xml(jsonData, { compact: true, spaces: 4 });
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
