import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | string = process.env.PORT || 4444;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
}

const startServer = () => console.log(`Start Server on port http://127.0.0.1:${PORT}`)

app.start(appOptions, startServer);