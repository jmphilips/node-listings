const chalk = require('chalk')

const ModelLogger = {
    all(models) {
        console.log(chalk.blue(`${models.length} found`))
    },

    find(model) {
        console.log(chalk.greenBright(`${model} found`))
    },

    create(model) {
        console.log(chalk.blue(`${model} created`))
    },

    delete(model) {
        console.log(chalk.redBright(`${model} deleted`))
    },

    error(error) {
        console.log(chalk.red(`${error}`))
    },
}

export default ModelLogger
