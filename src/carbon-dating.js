const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof(sampleActivity)!="string" || parseFloat(sampleActivity)>MODERN_ACTIVITY || parseFloat(sampleActivity)<1 || isNaN(parseFloat(sampleActivity))){
		return false;
	}
	else{
		return Math.ceil(Math.log((MODERN_ACTIVITY/parseFloat(sampleActivity)))/(0.693/HALF_LIFE_PERIOD));
	}
};
