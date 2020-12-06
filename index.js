module.exports.handler = (event, context, callback) => {

    const message = {
        message: 'Fa no s3 wagyimi na suro mbaa!',
        event
    }

    callback(null, message);
};
