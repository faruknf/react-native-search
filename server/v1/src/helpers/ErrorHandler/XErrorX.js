class XErrorX extends Error {
    constructor(message, statusCode, options) {
        super(message)
        this.message = message
        this.statusCode = statusCode || 500
        this.options = { isForClient: false, ...options }
    }
    static handleOnMiddleware = (error, req, res, next) => {

        if (error instanceof XErrorX) {
            const isForClient = error.options.isForClient || false
            if (isForClient)
                return res.status(error.statusCode).json({ error: error.message })
            console.error(error)
        } else {
            return res.status(500).json({ payload: { error: 'Internal Server Error' } })
        }

    }

    static handleNotCaughtError = () => {
        process.on('unhandledRejection', (error) => {
            throw error
        })
        process.on('uncaughtException', (error) => {
            console.log('Uncaught handle error!')
            console.error(error)
            if (!(error instanceof XErrorX)) {
                process.exit()
            }
        })
    }
}


module.exports = XErrorX


