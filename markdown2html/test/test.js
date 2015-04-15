var index = require('../index');

exports['text_h1'] = function (test) {
    test.equal(index.convertH1("#prova"), 
               "<h1>prova</h1>");
    test.done();
};

exports['text_h2'] = function (test) {
    test.equal(index.convertH2("##prova"), 
               "<h2>prova</h2>");
    test.done();
};

exports['text_h3'] = function (test) {
    test.equal(index.convertH3("###prova"), 
               "<h3>prova</h3>");
    test.done();
};

exports['text_h4'] = function (test) {
    test.equal(index.convertH4("####prova"), 
               "<h4>prova</h4>");
    test.done();
};

exports['text_h5'] = function (test) {
    test.equal(index.convertH5("#####prova"), 
               "<h5>prova</h5>");
    test.done();
};

exports['text_h6'] = function (test) {
    test.equal(index.convertH6("######prova"), 
               "<h6>prova</h6>");
    test.done();
};


