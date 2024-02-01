"use strict";

const EmptyCartException = require('./EmptyCartException.js');
const UpdateCartException = require('./UpdateCartException.js');

module.exports = class Cart {

    //region private attributes
    _items;
    constructor(items = []) {
        this._items = items;
    }

    get items() {
        if (this._items.length === 0) {
            throw new EmptyCartException();
        }
        return this._items;
    }

}