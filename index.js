import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { loadSchema } from '@graphql-tools/load'
import { stitchSchemas } from '@graphql-tools/stitch'
import { UrlLoader } from '@graphql-tools/url-loader'

const schema = await stitchSchemas({
  subschemas: [
    {
      schema: await loadSchema('http://localhost:5000/graphql', {
        loaders: [new UrlLoader()],
      }),
    }
    // Epacio para servicios
  ],
})

const server = new ApolloServer({
  schema,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀 API Gateway listo en ${url}`)
