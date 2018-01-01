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

Array.prototype.size = function () {
    return [this.length, this[0].length];
};

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

Array.prototype.relu = function() {
    let a = this;
    let c = zeros(a.length, a[0].length);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            c[i][j] = Math.max(a[i][j], 0);
        }
    }
    return c;
};

Array.prototype.relu_deriv = function() {
    let a = this;
    let c = zeros(a.length, a[0].length);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] > 0 ? 1 : 0;
        }
    }
    return c;
};

function display(s, m) {
    console.log(s);
    console.log(JSON.stringify(m, null, 1));
    console.log('');
}

class Net {
    constructor(alpha) {
        this.layers = [];
        this.alpha = alpha;
    }

    add(layer) {
        this.layers.push(layer);
    }

    static randomWeights(n, m) {
        return random(n, m).multiply(2).subtract(1);
    }

    train(X, y, epochs) {

        this.layers[-1] = new Layer(X[0].length, 'sigmoid');
        this.layers[-1].output = X;
        this.w = [];
        this.b = [];

        for (let j = 0; j < this.layers.length; j++) {

            let n = this.layers[j - 1].m;
            let m = j === this.layers.length - 1 ? y[0].length : this.layers[j].m;
            this.w.push(Net.randomWeights(n, m))

        }

        for (let i = 0; i < epochs; i++) {
            this.activate();
            this.backprop();
        }
        console.log(this.layers[this.layers.length - 1].output)
    }

    activate() {
        for (let j = 0; j < this.layers.length; j++) {
            this.layers[j].output = this.layers[j].activation_fn(this.layers[j - 1].output.dot(this.w[j]));
        }
    }

    backprop() {

        let prevDelta = [];
        for (let j = this.layers.length - 1; j >= 0; j--) {
            let error;
            if (j === this.layers.length - 1) {
                error = y.subtract(this.layers[j].output);
            } else {
                error = prevDelta.dot(this.w[j + 1].T());
            }

            let deriv = this.layers[j].activation_deriv(this.layers[j].output);
            let delta = error.multiply(deriv);
            let dw = alpha.multiply(this.layers[j - 1].output.T().dot(delta));
            this.w[j] = this.w[j].add(dw);
            prevDelta = delta;
        }
    }
}

class Layer {
    constructor(m = 0, activation_function_name = 'sigmoid') {
        this.m = m;
        this.output = [];
        if (activation_function_name === 'sigmoid') {
            this.activation_fn = Layer.sigmoid;
            this.activation_deriv = Layer.sigmoid_deriv;
        } else if (activation_function_name === 'relu') {
            this.activation_fn = Layer.relu;
            this.activation_deriv = Layer.relu_deriv;
        }
    }
    static sigmoid(x) {
        return 1..divide(1..add(x.minus().exp()));
    }

    static sigmoid_deriv(x) {
        return x.multiply(1..subtract(x));
    }

    static relu(x) {
        return x.relu()
    }

    static relu_deriv(x) {
        return x.relu_deriv();
    }
}

const X = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]];
const y = [[0, 1, 1, 0]].T();

let net = new Net(alpha=0.5);
net.add(new Layer(6));
net.add(new Layer());
net.train(X, y, epochs = 10000);