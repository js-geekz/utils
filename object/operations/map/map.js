function map(callback) {
    var values = [];

    for (var i = 0; i < this._refKeys.length; i++) {
        var key = this._refKeys[i];
        values.push(callback(this._ref[key], key));
    }

    return values;
}