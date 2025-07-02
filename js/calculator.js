export const calculator = {
    add(x, y) {

        if (!(Number.isFinite(x) && Number.isFinite(y))) {
            throw new Error('Invalid type')
        }

        return Math.round((x + y) * 100) / 100;
    },

    subtract(x, y) {

        if (!(Number.isFinite(x) && Number.isFinite(y))) {
            throw new Error('Invalid type')
        }

        return Math.round((x - y) * 100) / 100;
    },

    multiply(x, y) {

        if (!(Number.isFinite(x) && Number.isFinite(y))) {
            throw new Error('Invalid type')
        }

        return Math.round((x * y) * 100) / 100;
    },

    divide(x, y) {

        if (!(Number.isFinite(x) && Number.isFinite(y))) {
            throw new Error('Invalid type')
        }

        return Math.round((x / y) * 100) / 100;
    },
}



