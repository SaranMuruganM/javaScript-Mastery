// Using the same function with multiple objects

// var movie1;
// var movie2;
// var movie3;
// var movie;
// var showMovieInfo;

// movie1 = {
//   title: "Inside Out",
//   actors: "Amy Poehler, Bill Hader",
//   directors: "Pete Doctor, Ronaldo Del Carmen",
// };

// movie2 = {
//   title: "Spectre",
//   actors: "Daniel Craig, Christoph Waltz",
//   directors: "Sam Mendes",
// };

// movie3 = {
//   title: "Star Wars: Episode VII - The Force Awakens",
//   actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
//   directors: "J.J.Abrams",
// };

// showMovieInfo = function () {
//   console.log("Movie information for " + movie.title);
//   console.log("------------------------------");
//   console.log("Actors: " + movie.actors);
//   console.log("Directors: " + movie.directors);
//   console.log("------------------------------");
// };

// movie = movie1;
// showMovieInfo();

// movie = movie2;
// showMovieInfo();

// movie = movie3;
// showMovieInfo();

let quiz;

let quiz1 = {
  question: "Which is the longest river",
  choice1: "Nile",
  choice2: "ganga",
  choice3: "Yamuna",
};
let quiz2 = {
  question: "Full form of OOPS",
  choice1: "Object Oriented Programming",
  choice2: "object",
  choice3: "Programming",
};
let quiz3 = {
  question: "Full form of MERN",
  choice1: "Mongo Express react Nodejs",
  choice2: "mongodb",
  choice3: "express",
};

const showQuiz = () => {
  console.log("\n Question " + quiz.question);
  console.log("------------------------------");
  console.log("\nOption 1: " + quiz.choice1);
  console.log("Option 1: " + quiz.choice2);
  console.log("Option 1: " + quiz.choice3);
  console.log("------------------------------\n");
};

quiz = quiz1;
showQuiz();
quiz = quiz2;
showQuiz();
quiz = quiz3;
showQuiz();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */
