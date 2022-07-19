var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
}
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let value = this.cache.get(key)
    // 更新位置
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
    if (this.cache.size > this.capacity) {
      // 删除最早的一条记录
      this.cache.delete(this.cache.keys().next().value)
    }
  }
  this.cache.set(key, value)
}
