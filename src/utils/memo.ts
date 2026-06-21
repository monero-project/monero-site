// Memoize a single-arg loader by its key (caches the returned promise/value).
export const memo = <K, V>(fn: (k: K) => V): ((k: K) => V) => {
  const cache = new Map<K, V>();
  return (k) => {
    if (!cache.has(k)) cache.set(k, fn(k));
    return cache.get(k)!;
  };
};
