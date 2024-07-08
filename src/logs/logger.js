import pino from 'pino';

const logger = pino({
    transport:{
        target: 'pino-pretty',
        options:{
            tranlateTime: 'SYS:dd-mm-yyyy HH:mm:ss',
        },
    },
});

export default logger;