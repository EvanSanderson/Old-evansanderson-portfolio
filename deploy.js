const { promisify } = require('util')
const { bucket } = require('./config')
const npmRunExec = promisify(require('npm-run').exec)

// TODO: Simplify deploy script

const deploySite = async () => {
    await npmRunExec(`gulp build`)
    console.log('Files built')
    await npmRunExec(`aws s3 cp index.html ${bucket} --profile personal`)
    console.log('copied index.html')
    await npmRunExec(`aws s3 sync dist ${bucket}/dist --profile personal`)
    console.log('copied dist dir')
    await npmRunExec(`aws s3 cp blog/index.html ${bucket}/blog --profile personal`)
    console.log('copied blog index file')
    await npmRunExec(`aws s3 cp blog/slack_bot/index.html ${bucket}/blog/slack_bot --profile personal`)
    console.log('copied slack bot index file')
}

deploySite()