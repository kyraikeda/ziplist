function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  // return _.map(list1, list2, _.zip);
  return _.flatten(_.zip(list1, list2));
}

const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
