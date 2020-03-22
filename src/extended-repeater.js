module.exports = function repeater(str, options) {
	this.repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
    this.separator = options.separator !== undefined ? String(options.separator) : '+';
    this.addition = options.addition !== undefined ? String(options.addition) : '';
    this.additionRepeatTimes = options.additionRepeatTimes != undefined ? options.additionRepeatTimes : 1;
	this.additionSeparator = options.additionSeparator != undefined ? String(options.additionSeparator) : '+';
	


	let newStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
	return new Array(repeatTimes).fill(str+newStr).join(separator);
};
  