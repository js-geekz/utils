function forEach(callback) {
    for (var i = 0; i < this._refKeys.length; i++) {
        var key = this._refKeys[i];
        callback(this._ref[key], key);
    }
}