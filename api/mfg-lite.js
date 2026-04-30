const handler = require('../server');

module.exports = async (req, res) => {
    const query = req.url && req.url.includes('?')
        ? req.url.slice(req.url.indexOf('?'))
        : '';
    req.url = `/api/mfg-lite${query}`;
    await handler(req, res);
};
