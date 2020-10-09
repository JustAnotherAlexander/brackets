module.exports = function check(str, bracketsConfig) {
  console.log ("brackets: "+str);
  console.log ("Brackets config: "+ bracketsConfig);
  str=str.split("");
  console.log("brackets after split: "+str);
  console.log(typeof(str[0]));
  for (let i=0; i<str.length;i++) {

    if (str.length==2) {
     i=0;
      if ((str[0]=='(' && str[1]==')') || (str[i]=='|' && str[i+1]=='|') || (str[i]==='[' && str[i+1]===']') || (str[i]==='{' && str[i+1]==='}')  || (str[i]==1 && str[i+1]==2) || (str[i]==3 && str[i+1]==4) || (str[i]==5 && str[i+1]==6) || (str[i]==7 && str[i+1]==7) || (str[i]==8 && str[i+1]==8)) {
        return true;
      } else return false;
    }
    if ((str[i]==='(' && str[i+1]===')') || (str[i]==='|' && str[i+1]==='|') || (str[i]==='[' && str[i+1]===']') || (str[i]==='{' && str[i+1]==='}') || (str[i]==1 && str[i+1]==2) || (str[i]==3 && str[i+1]==4) || (str[i]==5 && str[i+1]==6) || (str[i]==7 && str[i+1]==7) || (str[i]==8 && str[i+1]==8)) {
      str.splice(i,2);
      console.log("I am in if");
      console.log("str result: "+str);
      console.log("i before: "+i);
      i=0;
      console.log("i after: "+i);
    }
      if (str.length==0) {
         console.log("i am going to return true");
        return true;
      }
      else if (str.length==1) {
        console.log("no way! its false");
        return false;
      }
  }
  return false;
}
