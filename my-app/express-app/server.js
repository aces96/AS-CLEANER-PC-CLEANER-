import express from 'express'
const app = express();
import router from './router/file.route'

app.use('/api', router);

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));