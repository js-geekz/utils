import forEach from '../operations/forEach';
import map from '../operations/map';
import push from '../operations/push';
import pop from '../operations/pop';

function ArrayFy(object) {
 
    var keys = Object.keys(object);

    return {
        _ref: object,
        _refKeys: keys,
        forEach: forEach,
        map: map,
        length: keys.length,
        push: push,
        pop: pop
    };

}