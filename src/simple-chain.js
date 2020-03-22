const chainMaker = {
		chains: [],

	getLength() {
		return this.chains.length;
	},
	addLink(value) {
		this.chains.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (typeof (position) != "number" || position < 1 || position > this.chains.length) {
			this.chains = [];
			throw new Error()
		}
		else {
			this.chains.splice(position - 1, 1);
		}
		return this;
	},
	reverseChain() {
		this.chains.reverse();
		return this;
	},
	finishChain() {
		let chainsFinish = this.chains.slice(0, this.chains.length);
		this.chains = [];
		return chainsFinish.join('~~');
	}
};
module.exports = chainMaker;
