
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

function dot(a, b) {
    var c = zeros(a.length, b[0].length);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b[0].length; j++) {
            for (var k = 0; k < a[0].length; ++k) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
}

function transpose(a) {
    var c = zeros(a[0].length, a.length);
    for (var i = 0; i < a.length; ++i) {
        for (var j = 0; j < a[i].length; ++j) {
            c[j][i] = a[i][j];
        }
    }
    return c;
}

function multiply(a, b) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            a[i][j] *= b;
        }
    }
    return a;
}

function divide(a, b) {
    return multiply(a, 1/b);
}

function plus(a, b) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            a[i][j] += b;
        }
    }
    return a;
}

function minus(a, b) {
    return plus(a, -b);
}

function display(m) {
    for (var i = 0; i < m.length; ++i) {
        console.log(m[i].join(' '));
    }
}

var a = [[8, 3], [2, 4], [3, 6]],
    b = [[1, 2, 3], [4, 6, 8]];


X = [[0,0,1], [0,1,1], [1,0,1], [1,1,1]];
y = transpose([[0,1,1,0]]);

display(X);
display(y);
display(multiply(X, 2));
display(zeros(4, 4));




