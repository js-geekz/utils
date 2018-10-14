function pop() {
    if (this._refKeys.length) {
        var lastKey = this._refKeys.pop();
        var valueBeingDeleted = this._ref[lastKey] + ''; // To break the reference
        delete this._ref[lastKey];
        return valueBeingDeleted;
    }

    return null;
}