var service = {
};

service.requireNoCache = function(file) {
    delete require.cache[require.resolve(file)];
    return require(file);
};

module.exports = service;