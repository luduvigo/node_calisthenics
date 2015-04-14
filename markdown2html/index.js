console.log("Hello world");

exports.convertH1 = function (text) {
    return "<h1>" + text.substring(1) + "</h1>";
};

exports.check = function () {
        return 1;
};

exports.convertH2 = function (text) {
    return "<h2>" + text.substring(1) + "</h2>";
}
