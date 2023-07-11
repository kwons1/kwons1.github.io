class Group {
  static from(table){
    this.t = table;
  }

  has(num){
    if(num in this.t){
      return true;
    }
    
    return false;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// -> false