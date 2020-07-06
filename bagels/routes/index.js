var express = require("express");
var router = express.Router();

const Bagels = [
  {
    image: "bagel_bleu",
    name: "Bagel façon Bresse Bleu",
    description:
      "Les fans de fromage bleu vont adorer cette recette de burger aux blancs de poulet et confit d'oignons. À accompagner de pommes de terre sautées ou de frites.",
  },
  {
    image: "bagel_pizza",
    name: "Bagel Pizza",
    description:
      "La Pizza Bagel réalise votre rêve le plus fou : une pizza à réaliser en quelques minutes avec comme base un bagel garni de sauce tomate, de jambon et de fromage. Une recette idéale pour votre prochain brunch.",
  },
  {
    image: "bagel_saumon",
    name: "Bagel Saumon",
    description:
      "Un délicieux pain rond, ultra moelleux et grillé, garni de saumon fumé et de crème.",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/bagel", function (req, res, next) {
  res.render("bagel", { Bagels });
});

module.exports = router;
