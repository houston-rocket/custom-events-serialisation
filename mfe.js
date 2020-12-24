mfe = {};

const scopedValue = 'Mfe';

class MyTypedMfeClass {
    #value = `hello from ${scopedValue}`;

    getMfeText() {
        return this.#value;
    }
}

mfe.bootstrap = function(dispatcher) {
    dispatcher(new MyTypedMfeClass);
}