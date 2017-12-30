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
    var c = zeros(b.length, b[0].length);
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < b[i].length; j++) {
            c[i][j] = a + b[i][j];
        }
    }
    return c;
};

Number.prototype.subtract = function(b) {
    var a = this;
    var c = zeros(b.length, b[0].length);
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < b[i].length; j++) {
            c[i][j] = a - b[i][j];
        }
    }
    return c;
};

Number.prototype.multiply = function(b) {
    var a = this;
    var c = zeros(b.length, b[0].length);
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < b[i].length; j++) {
            c[i][j] = a * b[i][j];
        }
    }
    return c;
};

Number.prototype.divide = function(b) {
    var a = this;
    var c = zeros(b.length, b[0].length);
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < b[i].length; j++) {
            c[i][j] = a / b[i][j];
        }
    }
    return c;
};

Array.prototype.add = function(b) {
    var i, j;
    var a = this;
    var c = zeros(a.length, a[0].length);

    if ((typeof b) === "number") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] + b;
            }
        }
    } else {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] + b[i][j];
            }
        }
    }
    return c;
};

Array.prototype.subtract = function(b) {
    var i, j;
    var a = this;
    var c = zeros(a.length, a[0].length);

    if ((typeof b) === "number") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] - b;
            }
        }
    } else {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] - b[i][j];
            }
        }
    }
    return c;
};

Array.prototype.multiply = function(b) {
    var i, j;
    var a = this;
    var c = zeros(a.length, a[0].length);

    if (typeof b === "number") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] * b;
            }
        }
    } else {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] * b[i][j];
            }
        }
    }
    return c;
};

Array.prototype.divide = function(b) {
    var i, j;
    var a = this;
    var c = zeros(a.length, a[0].length);

    if (typeof b === "number") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] / b;
            }
        }
    } else {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                c[i][j] = a[i][j] / b[i][j];
            }
        }
    }
    return c;
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

Array.prototype.minus = function() {
    var a = this;
    var c = zeros(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            c[i][j] = -a[i][j];
        }
    }
    return c;
};


function sigmoid(x) {
    return 1..divide(1..add(x.minus().exp()));
}

function sigmoid_deriv(x) {
    return x.dot(1..subtract(x));
}

function display(m) {
    for (var i = 0; i < m.length; ++i) {
        console.log(m[i].join(' '));
    }
    console.log();
}

var X = [[0,0,1], [0,1,1], [1,0,1], [1,1,1]];
var y = [[0,0,1,1]].T();

w = [random(3, 1).multiply(2).subtract(1)];
layer = new Array(2);
error = new Array(2);
delta = new Array(2);

for (var i = 0; i < 10000; i++) {
    layer[0] = X;
    layer[1] = sigmoid(layer[0].dot(w[0]));
    error[1] = y.subtract(layer[1]);
    delta[1] = error[1].multiply(sigmoid_deriv(layer[1]));
    w[0] = w[0].add(layer[0].T().dot(delta[1]));
}

display(layer[1]);
