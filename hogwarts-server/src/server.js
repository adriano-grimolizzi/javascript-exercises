const app = require("./app")
const logger = require('@agrimolizzi/logger')()

const PORT = 3000

app.listen(PORT, () => {
    logger.info(`Example app listening at http://localhost:${PORT}`)
})
