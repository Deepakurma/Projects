import fs from "fs";
import superagent from "superagent";
import express from "express";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 3000;

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I couldn't read that file: " + err);
      resolve(data);
    });
  });
};

const writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("I couldn't write that file: " + err);
      resolve("Success");
    });
  });
};

const extractAPIContents = (json) => {
  const { pages } = json.query;
  return Object.keys(pages).map((id) => pages[id].extract);
};

const getCountry = async () => {
  try {
    const data = await readFile(`${__dirname}/country.txt`);
    // console.log(`Country: ${data}`);

    const response = await superagent.get(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=India`
    );
    // console.log(response)
    const json = response.body;
    const contents = extractAPIContents(json);
    console.log(contents)
    // const countryData = JSON.stringify(response.body); // Convert the response body to a JSON string
    await writeFile('countrnames.txt', JSON.stringify(contents)); // Write contents as JSON string
    // console.log(`File has been saved.`);
  } catch (err) {
    console.error(err);
  }
};

getCountry();


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});