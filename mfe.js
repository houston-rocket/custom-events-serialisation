mfe = {};

const scopedValue = 'Mfe';

class MyTypedMfeClass {
    #greeting = 'hello from';

    #getScopedValue() {
        return scopedValue;
    }

    getMfeText() {
        return `${this.#greeting} ${this.#getScopedValue()}`;
    }
}

mfe.bootstrap = function(dispatcher) {
    dispatcher(new MyTypedMfeClass);
}