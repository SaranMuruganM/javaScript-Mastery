// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen",
};

var movie2 = {
  title: "Interstellar",
  actors: "Amy Poehler, Bill Hader",
  directors: "Quinton Tarantino",
};

var blogPost = {
  title: "FullStack",
  body: "It's a complete course which covers frontend and backend with databases",
};

console.log("Directors: " + movie1.directors);
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Blog post title: " + blogPost.title);
console.log("------------------------------");
console.log("Body: " + blogPost.body);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */
