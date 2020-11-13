var Item = [
  {
    id: 1,
    name: 'Hieu'
  },
  {
    id: 2,
    name: 'Canh'
  },
  {
    id: 3,
    name: 'Tue'
  },
  {
    id: 2,
    name: 'Linh'
  },
  {
    id: 4,
    name: 'Tuan'
  },
  {
    id:5,
    name: 'Duyen'
  }
]


//Remove Items
var ids = [0,1,3];
const removeItemByIds= (arr,ids) => {
  return arr.filter(item => ids.indexOf(item.id) === -1);
}

const removeItem = removeItemByIds(Item, ids);
console.log(removeItem);


// Edit Items
const item2Edit = {
  id: 4,
  name: "name4"
}
//truc tiep
// const editItem = removeItem.map(obj =>
//   obj.id === item2Edit.id ? { ...obj, name: item2Edit.name } : obj
// );

//Tao mang moi, sau do goi laji de su dung
const editItem = (arr, arrAdd) => {
  return arr.map(obj => obj.id === arrAdd.id? { ...obj, name: arrAdd.name } : obj);
}

const editedItem = editItem(removeItem, item2Edit);
console.log(editedItem); // nameD -> name4

// sort Items
// const sortItem = Item.sort((a, b) => 
//   a.name.localeCompare(b.name)
// );

const sortItemByName = arr => {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}
const sortedItem = sortItemByName(Item)

console.log(sortedItem);