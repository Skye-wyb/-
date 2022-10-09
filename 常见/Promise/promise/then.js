Promise.prototype.then = (onResolved, onRejected) => {
	const self = this
	return new Promise((resolve, reject) => {
		const handleCallback = callback => {
			try {
				const res = callback(self.promiseResult)
				if (res instanceof Promise) {
					res.then(val => {
						resolve(val)
					}, err => {
						reject(err)
					})
				} else {
					resolve(res)
				}
			} catch (err) {
				reject(err)
			}
		}
		if (this.promiseState === 'fulfilled') {
			handleCallback(onResolved)
		}
		if (this.promiseState === 'rejected') {
			handleCallback(onRejected)
		}
		if (this.promiseState === 'pending') {
			this.callbackList.push({
				onResolved: () => {
					handleCallback(onResolved)
				},
				onRejected: () => {
					handleCallback(onRejected)
				}
			})
		}
	})
}