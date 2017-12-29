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

Array.prototype.dot = function(b) {
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

Array.prototype.T = function() {
    var a = this;
    var c = zeros(a[0].length, a.length);
    for (var i = 0; i < a.length; ++i) {
        for (var j = 0; j < a[i].length; ++j) {
            c[j][i] = a[i][j];
        }
    }
    return c;
};

Number.prototype.add = function(b) {
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = a + b[i][j];
        }
    }
    return c;
};

Number.prototype.subtract = function(b) {
    var a = this;
    return a.add(-b);
};

Number.prototype.multiply = function(b) {
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = a * b[i][j];
        }
    }
    return c;
};

Number.prototype.divide = function(b) {
    var a = this;
    return a.multiply(1/b);
};

Array.prototype.add = function(b) {
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] + b;
        }
    }
    return c;
};

Array.prototype.subtract = function(b) {
    var a = this;
    return a.add(-b);
};

Array.prototype.multiply = function(b) {
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] * b;
        }
    }
    return c;
};

Array.prototype.divide = function(b) {
    var a = this;
    return a.multiply(1/b);
};


Array.prototype.exp = function() {
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = Math.exp(a[i][j]);
        }
    }
    return c;
};

Array.prototype.sigmoid = function(x, deriv) {
    if (deriv) {
        return x.multiply((1).subtract(x));
    } else {
        return x.multiply(-x.add(1));
    }
};

function sigmoid(x, deriv) {
    if (deriv) {
        return x * (1 - x);
    }
    return (1).divide((1).add(-x.exp()));
}

function display(m) {
    for (var i = 0; i < m.length; ++i) {
        console.log(m[i].join(' '));
    }
}

var X = [[0,0,1], [0,1,1], [1,0,1], [1,1,1]];
var y = [[0,1,1,0]].T;

syn0 = random(3, 4).multiply(2).subtract(1);

display(syn0);
