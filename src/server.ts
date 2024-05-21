import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.listen(port, () => { console.log(`listening on ${port}`) });