const express = require('express')

const router = express.Router()

router.get('/', (_request, response) => {
    response.sendFile({ response: 'Hello!'}).status(200)
})

module.exports = router
