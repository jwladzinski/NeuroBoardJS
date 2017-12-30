function zeros(n, m) {
    let c = new Array(n);
    for (let i = 0; i < n; i++) {
        c[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            c[i][j] = 0;
        }
    }
    return c;
}

function random(n, m) {
    let c = zeros(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            c[i][j] = Math.random();
        }
    }
    return c;
}

Array.prototype.dot = function(b) {
    let a = this;
    let c = zeros(a.length, b[0].length);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < a[0].length; ++k) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
};

Array.prototype.T = function() {
    let a = this;
    let c = zeros(a[0].length, a.length);
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            c[j][i] = a[i][j];
        }
    }
    return c;
};

Number.prototype.add = function(b) {
    let a = this;
    let c = zeros(b.length, b[0].length);
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            c[i][j] = a + b[i][j];
        }
    }
    return c;
};

Number.prototype.subtract = function(b) {
    let a = this;
    let c = zeros(b.length, b[0].length);
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            c[i][j] = a - b[i][j];
        }
    }
    return c;
};

Number.prototype.multiply = function(b) {
    let a = this;
    let c = zeros(b.length, b[0].length);
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            c[i][j] = a * b[i][j];
        }
    }
    return c;
};

Number.prototype.divide = function(b) {
    let a = this;
    let c = zeros(b.length, b[0].length);
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            c[i][j] = a / b[i][j];
        }
    }
    return c;
};

Array.prototype.add = function(b) {
    let i, j;
    let a = this;
    let c = zeros(a.length, a[0].length);

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
    let i, j;
    let a = this;
    let c = zeros(a.length, a[0].length);

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
    let i, j;
    let a = this;
    let c = zeros(a.length, a[0].length);

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
    let i, j;
    let a = this;
    let c = zeros(a.length, a[0].length);

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
    let a = this;
    let c = zeros(a.length, a[0].length);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            c[i][j] = Math.exp(a[i][j]);
        }
    }
    return c;
};

Array.prototype.minus = function() {
    let a = this;
    let c = zeros(a.length, a[0].length);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            c[i][j] = -a[i][j];
        }
    }
    return c;
};




function display(m) {
    for (let i = 0; i < m.length; ++i) {
        console.log(m[i].join(' '));
    }
    console.log();
}

class Net {
    constructor() {
        this.layers = [];
    }

    add(layer) {
        this.layers.push(layer);
    }

    train(X, y, epochs) {

        this.w = [];
        for (let j = 0; j < this.layers.length; j++) {
            this.w.push(random(3, 1).multiply(2).subtract(1))
        }

        for (let i = 0; i < epochs; i++) {

            this.activate();
            this.backprop();
        }

        display(this.layers[this.layers.length - 1].output);
    }

    static sigmoid(x) {
        return 1..divide(1..add(x.minus().exp()));
    }

    static sigmoid_deriv(x) {
        return x.dot(1..subtract(x));
    }

    activate() {
        for (let j = 0; j < this.layers.length; j++) {

            if (j === 0) {
                this.layers[j].output = Net.sigmoid(X.dot(this.w[j]))
            } else {
                this.layers[j].output = Net.sigmoid(this.layers[j - 1].output.dot(this.w[j]))
            }
        }
    }

    backprop() {
        let prevDelta = [];
        for (let j = this.layers.length - 1; j >= 0; j--) {

            let error;
            if (j === this.layers.length - 1) {
                error = y.subtract(this.layers[j].output);
            } else {
                error = prevDelta.dot(this.w[j].T());
            }
            let delta = error.multiply(Net.sigmoid_deriv(this.layers[j].output));
            if (j === 0) {
                this.w[j] = this.w[j].add(X.T().dot(delta));
            } else {
                this.w[j] = this.w[j].add(this.layers[j - 1].output.T().dot(delta));
            }
            prevDelta = delta;
        }
    }
}

class Layer {
    constructor() {
        this.output = [];
    }
}

const X = [[0,0,1], [0,1,1], [1,0,1], [1,1,1]];
const y = [[0,0,1,1]].T();

let net = new Net();
net.add(new Layer());
net.train(X, y, epochs = 1000);