const handler = require('../server');

module.exports = async (req, res) => {
    req.url = '/api/contribute';
    await handler(req, res);
};
