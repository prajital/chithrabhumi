import ApolloClient from "apollo-boost";
import config from './client-config';
//import fetch from 'node-fetch';
//import { createHttpLink } from 'apollo-link-http';

// apollo client setup
const client = new ApolloClient({
	uri:  config.graphqlUrl,
	
});

export default client;
