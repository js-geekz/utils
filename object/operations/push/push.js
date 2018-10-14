export function push(key, value) {
    if (this._ref[key]) {
        return false;
    }

    this._ref[key] = value;

    this._refKeys.push(key);

    return true;
}
