module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let sum = 1;
		let depth = 1;
		for (let item of arr) {
			if (Array.isArray(item)) {
			depth = depth + this.calculateDepth(item);
		}
		if (depth > sum) {
			sum = depth;
		}
		depth = 1;
	  }
	  return sum;
	}
  };