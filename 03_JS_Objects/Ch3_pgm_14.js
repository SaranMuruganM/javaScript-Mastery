// A question and answer for a quiz app

var questionAndAnswer = {
  question: "What is the capital of France?",
  answer1: "Bordeaux",
  answer2: "F",
  answer3: "Paris",
  answer4: "Brussels",
  correctAnswer: "Paris",
  marksForQuestion: 2,
};

console.log(
  questionAndAnswer.question +
    "\t\t\t\t" +
    "Marks: " +
    questionAndAnswer.marksForQuestion
);
console.log("\noption 1: " + questionAndAnswer.answer1);
console.log("option 2: " + questionAndAnswer.answer2);
console.log("option 3: " + questionAndAnswer.answer3);
console.log("option 4: " + questionAndAnswer.answer4);
console.log("\nCorrect Answer is: " + questionAndAnswer.correctAnswer);

/* Further Adventures
 *
 * 1) Use console.log to present the question
 *    and answer options in a nicely formatted way.
 *
 */
