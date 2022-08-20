/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */



var mergeTwoLists = function (list1, list2) {
  // instantiate new array
  let mergedList = [];

  // while list1 and list2 are not empty
  while (list1[0] != null && list2[0] != null) {
    // if head of list 1 is smaller than or equal to head of list 2, push it to the array.
    if (list1[0] <= list2[0]) {
      mergedList.push(list1.shift());
    }
    // else push head of list 2 to the array
    else {
      mergedList.push(list2.shift());
    }
  }
  while (list1.length != 0) mergedList.push(list1.shift());

  while (list2.length != 0) mergedList.push(list2.shift());

  return mergedList;
};

let list1 = [1, 2, 4, 4, 9, 23];
let list2 = [3, 4, 22];

mergeTwoLists(list1, list2);
