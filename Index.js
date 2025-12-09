const epxress = require("express");
const port = 3000;
const app = epxress();
app.set("view engine", "ejs");

const employee = [
  {
    fname: "Caleb",
    lname: "Phiri",
    location: "BT",
    hasPosition: true,
  },
  {
    fname: "Akuzike",
    lname: "Mosomali",
    location: "BT",
    hasPosition: true,
  },
  {
    fname: "Esther",
    lname: "Kondowe",
    location: "BT",
    hasPosition: true,
  },
  {
    fname: "Charles",
    lname: "Louis",
    location: "Mzuzu",
    hasPosition: false,
  },
];
app.get("/", (req, res) => {
  res.render("Employee", { worker: employee });
});
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
