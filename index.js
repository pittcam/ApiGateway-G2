import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { loadSchema } from '@graphql-tools/load'
import { stitchSchemas } from '@graphql-tools/stitch'
import { UrlLoader } from '@graphql-tools/url-loader'

const authSchema = await loadSchema('http://servicio1:5000/graphql', {
  loaders: [new UrlLoader()],
})
const tmdbSchema = await loadSchema('http://servicio2:5001/graphql', {
  loaders: [new UrlLoader()],
})

const schema = await stitchSchemas({
  subschemas: [authSchema, tmdbSchema],
})

const server = new ApolloServer({
  schema,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log('🚀 API Gateway listo en ${url}')