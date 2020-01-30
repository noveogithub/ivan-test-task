import md5 from "js-md5"

/**
 * Caching in run-time singleton
 * takes max cache size (items amount)
 * @example
 * cache.set('someValue', 123)
 * cache.get('someValue')
 */
class Cache {
  constructor(maxSize = 100) {
    if ({}.hasOwnProperty.call(Cache, "instance")) {
      return Cache.instance
    }
    this.values = {}
    this.queue = []
    this.maxSize = maxSize

    Object.defineProperty(Cache, "instance", {
      value: this,
      enumerable: false,
      writable: false,
      configurable: false
    })
  }

  set(key, val) {
    this.enqueue(key)
    this.values[key] = val
  }

  get(key) {
    return this.values[key]
  }

  enqueue(key) {
    if (this.queue.length > this.maxSize) {
      delete this.values[this.queue.shift()]
    }
    this.queue.push(key)
  }
}

export const cache = new Cache()

/**
 * higher order function for caching
 * @param functionToCache
 * @param isAsync whether cached function is async
 */
export const withCache = (functionToCache, isAsync = false) => (...args) => {
  const key = md5(functionToCache.name + JSON.stringify(args))
  const resultFromCache = cache.get(key)
  if (resultFromCache) {
    return isAsync ? Promise.resolve(resultFromCache) : resultFromCache
  }
  const result = functionToCache.call(null, ...args)
  if (isAsync) {
    return result.then(value => {
      cache.set(key, value)
      return Promise.resolve(value)
    })
  }
  cache.set(result)
  return result
}
