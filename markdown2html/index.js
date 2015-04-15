exports.convertH1 = function (text) {
    return "<h1>" + text.substring(1) + "</h1>";
};

exports.convertH2 = function (text) {
    return "<h2>" + text.substring(2) + "</h2>";
}

exports.convertH3 = function (text) {
    return "<h3>" + text.substring(3) + "</h3>";
}

exports.convertH4 = function (text) {
    return "<h4>" + text.substring(4) + "</h4>";
}

exports.convertH5 = function (text) {
    return "<h5>" + text.substring(5) + "</h5>";
}

exports.convertH6 = function (text) {
    return "<h6>" + text.substring(6) + "</h6>";
}
