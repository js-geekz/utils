export default function(funcRef, timeout) {
  let lastTimeoutRef = null;

  return function() {
    const args = arguments;
    clearTimeout(lastTimeoutRef);
    lastTimeoutRef = setTimeout(() => {
      funcRef.apply(this, args);
    }, timeout);
  };
}
