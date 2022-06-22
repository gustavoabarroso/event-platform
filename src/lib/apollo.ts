import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ovazij11j001xt2nlrbroo/master',
  cache: new InMemoryCache(),
});
