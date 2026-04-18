const handler = require('../server');

module.exports = async (req, res) => {
    req.url = '/api/fun-fact';
    await handler(req, res);
};
