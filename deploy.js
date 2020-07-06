const { promisify } = require('util')
const { bucket } = require('./config')
const npmRunExec = promisify(require('npm-run').exec)

const deploySite = async () => {
    await npmRunExec(`gulp build`)
    console.log('Files built')
    await npmRunExec(`aws s3 cp index.html ${bucket} --profile personal`)
    console.log('Copying index.html')
    await npmRunExec(`aws s3 sync dist ${bucket}/dist --profile personal`)
    console.log('Copying dist dir')
}

deploySite()