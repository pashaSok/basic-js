module.exports = function createDreamTeam(members) {
  let arr=[];
  if(members){
    for(let i=0;i<members.length;i++){
      if(typeof(members[i])=="string") arr.push(members[i].trim().substr(0,1).toUpperCase());
    }
  }
  return arr.sort().join('');
};
