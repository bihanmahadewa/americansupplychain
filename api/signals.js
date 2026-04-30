const handler = require('../server');

module.exports = async (req, res) => {
    req.url = '/api/signals';
    await handler(req, res);
};
