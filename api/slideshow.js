const handler = require('../server');

module.exports = async (req, res) => {
    req.url = '/api/slideshow';
    await handler(req, res);
};
