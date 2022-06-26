import Express from 'express';
import { schema } from './data/schema.js';
import { graphqlHTTP } from 'express-graphql';

const app = Express();

app.get('/', (req, res) => {
  res.send("<a href='/graphql'>GraphQL Ui Link</a>");
});

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql:true,
}))

app.listen(5000, () => console.log("the server is running on port 5000") );