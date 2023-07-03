const express = require("express");
const app = express();

//node app.js to run it once, or nodemon app.js that it keeps on running and updated automatically.
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

//makes publick available
app.use(express.static("public"));

//first route
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/gallery.html")
);
