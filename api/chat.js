const handler = require('../server');

module.exports = async (req, res) => {
    req.url = '/api/chat';
    await handler(req, res);
};
