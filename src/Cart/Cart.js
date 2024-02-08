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
        if (this._items === null || this._items.length === 0) {
            throw new EmptyCartException();
        }
        return this._items;
    }

    get total() {
        if (this._items === null || this._items.length === 0) {
            throw new EmptyCartException();
        }
        let total = 0;
        this._items.forEach(item => {
            total += item.total;
        });
        return total;
    }
    count(distinct = false) {
        if (this._items === null || this._items.length === 0) {
            throw new EmptyCartException();
        }
        if (distinct) {
            return this._items.length;
        }
        let count = 0;
        this._items.forEach(item => {
            count += item.quantity;
        });
        return count;
    }
    add(items) {
        if (this._items === null) {
            this._items = [];
        }
        if (items === null || items.length === 0) {
            throw new UpdateCartException();
        }
        items.forEach(item => {
            //this._items.push(item);
        });
    }

}