import express from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import cookieParser from 'cookie-parser'
import notFoundRoute from './app/middlewares/notFoundRoute';


// middleware
const app = express();
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Welcome to my world!')
})
// api endpoints
app.use('/api', router)


// error handler
app.use(globalErrorHandler)

// 404 page
app.use(notFoundRoute)

export default app;