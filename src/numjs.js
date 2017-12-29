
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

display(a.dot(b));


X = [[0,0,1], [0,1,1], [1,0,1], [1,1,1]];
y = [[0,1,1,0]].T;

display(X);
display(y);
display(multiply(X, 2));
display(zeros(4, 4));

syn0 = minus(multiply(random(3, 4), 2), 1);
syn1 = minus(multiply(random(4, 1), 2), 1);

display(syn0);
display(syn1);




// for j in xrange(60000):
// l1 = 1/(1+np.exp(-(np.dot(X,syn0))))
// l2 = 1/(1+np.exp(-(np.dot(l1,syn1))))
// l2_delta = (y - l2)*(l2*(1-l2))
// l1_delta = l2_delta.dot(syn1.T) * (l1 * (1-l1))
// syn1 += l1.T.dot(l2_delta)
// syn0 += X.T.dot(l1_delta)

