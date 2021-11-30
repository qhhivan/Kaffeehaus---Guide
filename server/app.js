const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const helmet = require('helmet');
const path = require('path');
// Routes
const routes = require('./routes/kaffeehaus');
// Colors und so einbinden
require('colors');
require('dotenv').config();

// Middleware
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

// routes
app.use('/', routes);

app.use(notFoundHandler);

app.use(errorHandler);

// CORS
app.use(cors());

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
