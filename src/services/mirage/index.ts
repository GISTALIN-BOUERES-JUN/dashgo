import { createServer, Model } from 'miragejs'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            users: Model.extend<Partial<User>>({})
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            // toda req precisa usar api/users

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            //reset do namespace pra nao prejudicar a rota api dentro do next

            this.passthrough()

        }

    })

    return server;
}