import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

var checkGender = (gender) => {
  var pronoun = "";
  gender === "He" ? (pronoun = "his") : (pronoun = "her");
  return pronoun;
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Steady on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.post("/letter_preview", (req, res) => {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  var day = new Date().getDay();
  var date = new Date().getDate();
  var year = new Date().getFullYear();

  var currentDay = `${days[day]} ${date} ${year}`;

  var pronoun = checkGender(req.body["gender"]);

  var studentData = {
    name: req.body["username"],
    matricule: req.body["matricule"],
    level: req.body["level"],
    gender: req.body["gender"],
    department: req.body["department"],
    date: currentDay,
    pronoun: pronoun,
  };

  res.render("letter.ejs", studentData);

  console.log(req.body);
});
