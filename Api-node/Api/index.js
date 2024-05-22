import superagent from "superagent";
import express from "express";
import bodyParser from "body-parser";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import inquirer from "inquirer";

const app = express();
const port = 3000;
var contents = "";
var DATA;

const extractAPIContents = (json) => {
  const { pages } = json.query;
  return Object.keys(pages).map((id) => pages[id].extract);
};

app.use(bodyParser.urlencoded({ extended: true }));

const FetchContents = (res, req, next) => {
  //taking user input from console
  inquirer
    .prompt([
      {
        message: "seach :-",
        name: "country",
      },
    ])
    .then((answers) => {
      DATA = answers.country;
      console.log(DATA);
      if (DATA) {
        getCountry();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  //-------------------------------------------------------------------
  const getCountry = async () => {
    try {
      const response = await superagent.get(
        `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${DATA}`
      );

      const json = response.body;
      contents = extractAPIContents(json);
    } catch (err) {
      console.error(err);
    }
    next();
  };
};

app.use(FetchContents);

app.get("/", (req, res) => {
  res.send(`<div>${contents}</div>`);
});

app.listen(port, () => {
  console.log("listening on port");
});
