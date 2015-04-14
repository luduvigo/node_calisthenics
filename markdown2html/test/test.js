var index = require('../index');

exports['text_h1'] = function (test) {
    test.equal(index.convertH1("#prova"), "<h1>prova</h1>");
    test.done();
};

exports['check'] = function (test) {
    test.equal(index.check(), 1);
    test.done();
};
