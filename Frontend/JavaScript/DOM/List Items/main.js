// add items, delete items, search for items 


var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event 
form.addEventListener('submit', addItem)

//delete event
itemList.addEventListener('click', removeItem)

// add items
function addItem(e) {
    e.preventDefault()
    //console.log(1);

    // get the value of the input 

    var newItem = document.getElementById('item').value;

    // create a new li element 
    var li = document.createElement('li')
    // add class
    li.className = 'list-group-item'
    // create a text node 
    var text = document.createTextNode(newItem)
    // adding text node to the list 

    li.appendChild(text);

    // create delete button 
    var deleteBtn = document.createElement('button')
    // add class to btn
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    
    // create a text node 
    deleteBtn.appendChild(document.createTextNode('X'))
    // append btn to list 

    li.appendChild(deleteBtn)

    // add li to the list 
    
    itemList.appendChild(li)
}


function removeItem(e) {
    //
}

