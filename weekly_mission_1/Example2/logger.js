// Funcion que se guardara en este modulo como info
exports.info=(message)=>{
    console.log(`info: ${message}`);
}

// Funcion que se guardara en este modulo como verbose
exports.verbose=(message)=>{
    console.log(`verbose: ${message}`);
}

/*
const logger=require('./logger');
logger.info('this is an informational message');
logger.verbose('this is a verbose message');
*/