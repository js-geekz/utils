export default function(funcRef, timeout) {
  let lastTimeoutRef = null;

  return function() {
    clearTimeout(lastTimeoutRef);
    lastTimeoutRef = setTimeout(funcRef.bind(null, arguments), timeout);
  };
}
