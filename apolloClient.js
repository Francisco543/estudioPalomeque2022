import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri:'https://api-us-east-1.hygraph.com/v2/cl5x8t2zy1ved01ukdunq5fk2/master',
    cache: new InMemoryCache()
})

export default client