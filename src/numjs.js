function zeros(n, m) {
    var c = new Array(n);
    for (var i = 0; i < n; i++) {
        c[i] = new Array(m);
        for (var j = 0; j < m; j++) {
            c[i][j] = 0;
        }
    }
    return c;
}

function random(n, m) {
    var c = zeros(n, m);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            c[i][j] = Math.random();
        }
    }
    return c;
}

Array.prototype.dot = function(b){
    var a = this;
    var c = zeros(a.length, b[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b[0].length; j++) {
            for (var k = 0; k < a[0].length; ++k) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
};

Array.prototype.T = function(){
    var a = this;
    var c = zeros(a[0].length, a.length);
    for (var i = 0; i < a.length; ++i) {
        for (var j = 0; j < a[i].length; ++j) {
            c[j][i] = a[i][j];
        }
    }
    return c;
};

Array.prototype.multiply = function(b){
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] * b;
        }
    }
    return c;
};

Array.prototype.divide = function(b){
    var a = this;
    return a.multiply(1/b);
};

Array.prototype.add = function(b){
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] + b;
        }
    }
    return c;
};

Array.prototype.subtract = function(b){
    var a = this;
    return a.add(-b);
};

function display(m) {
    for (var i = 0; i < m.length; ++i) {
        console.log(m[i].join(' '));
    }
}

var X = [[0,0,1], [0,1,1], [1,0,1], [1,1,1]];

display(X.multiply(3));
display(X.divide(4));
display(X.add(5));
display(X.subtract(6));
