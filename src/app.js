require('dotenv').config()
const express = require('express')
const { NODE_ENV } = require('./config')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const validateBearerToken = require('./validateBearerToken')
const bookmarksRouter = require('./bookmarksRouter')
const errorHandler = require('./errorHandler')

const app = express()


app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test'
}))
app.use(helmet())
app.use(cors())
app.use(validateBearerToken)
app.use(bookmarksRouter)
app.use(errorHandler)

module.exports = app