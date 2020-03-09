module.exports = function countCats(matrix) {
	let matrixIndex=[];
	let count = 0;
	for(let i = 0; i < matrix.length; i++){
		let rows = matrix[i];
		for(let j = 0; j<rows.length; j++){
			matrixIndex.push(rows[j]);
		}
	}
	for(let i = 0; i < matrixIndex.length; i++){
		if(matrixIndex[i] === "^^"){
			count++;
		}
	}
	return count;
}
