// whole list
var groceryList = document.querySelector('ul');
// ADD NEW ITEM TO END OF LIST
var newItem = document.createElement('li');
newItem.appendChild(document.createTextNode('cream'));
groceryList.appendChild(newItem);
// ADD NEW ITEM START OF LIST
newItem = document.createElement('li');
newItem.appendChild(document.createTextNode('kale'));
groceryList.insertBefore(newItem, groceryList.firstChild);
// ADD A CLASS OF COOL TO ALL LIST ITEMS
var groceries = document.getElementsByTagName('li');
for (var i = 0; i < groceries.length; i++) {
  groceries[i].className = 'cool';
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
newItem = document.createElement('span');
newItem.appendChild(document.createTextNode(groceries.length));
heading.appendChild(newItem);
