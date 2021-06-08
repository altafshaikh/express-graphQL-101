const express = require("express");
const resolvers = require("./resolvers");
const Schema = require("./schema");

var { graphqlHTTP } = require("express-graphql");

const app = express();

app.get("/", (req, res) => {
  res.send("Up and Running with graphlQL");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => console.log(`Running at http://localhost:8082`));
