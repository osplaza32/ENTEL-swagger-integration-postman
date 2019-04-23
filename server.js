var restify = require('restify');
const toJsonSchema = require('to-json-schema');
var renameKeys = require('rename-keys');
const options = {
    postProcessFnc: (type, schema, value, defaultFunc) =>
        (type === 'integer' || type === 'string') ? {...schema,example:value} : defaultFunc(type, schema, value),

};
var server = restify.createServer({
    name: 'SwaggerGenerate',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));
server.use(restify.plugins.acceptParser(server.acceptable));

