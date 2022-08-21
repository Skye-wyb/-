let LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
}

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else {
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
  this.cache.set(key, value)
}
