// look at the entire document object

//console.dir(document)
//console.log(document.URL);
//console.log(document.title);
//document.title = 123
//console.log(document.title);

//console.log(document.body);
//console.log(document.head);
//console.log(document.all);


//console.log(document.forms[0]);

// GETELEMENTBYID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);

//headerTitle.innerHTML = "Hello"
//headerTitle.innerText = "Goodbye"
//headerTitle.textContent = "hello 1"

//// camel Case 
//headerTitle.style.borderBottom = 'solid 2px #000'

//// GETELEMENTBYCLASSNAME 

//var items = document.getElementsByClassName('list-group-item')
//console.log(items);
////items.style.backgroundColor = 'grey'

//for (var i = 0; i < items.length; i++){
//    items[i].style.backgroundColor = 'grey'
//}

//GETELEMENTBYTAGNAME


//var li = document.getElementsByTagName('li')
//console.log(li);

//for (var i = 0; i < li.length; i++){
//  li[i].style.backgroundColor = '#f4f4f4'
//}

// QUERYSELECTOR

//var header = document.querySelector('#main-header')

//header.style.borderBottom = "solid 4px #ccc"



// QUERYSELECTORALL

//var titles = document.querySelectorAll('.title')

//console.log(titles);


//var odd = document.querySelectorAll('li:nth-child(odd)')
//var even = document.querySelectorAll('li:nth-child(even)')
//// alternate color 
//for (var i = 0; i < odd.length; i++){
//    odd[i].style.backgroundColor = '#f4f4f4'
//    even[i].style.backgroundColor = '#ccc'

//}

// TRANSVERSING THE DOM 

var itemList = document.querySelector('#items');

// parentNode Property  // parentElement
//console.log(itemList.parentNode.parentNode);

//itemList.parentElement.style.backgroundColor = '#f4f4f4'


//childNodes 
// firstChild 
//lastChild

//console.log(itemList.childNodes);

//console.log(itemList.firstChild);
//console.log(itemList.lastChild);


//// previousSibling
////lastSibling 

//console.log(itemList.previousSibling);
//console.log(itemList.nextSibling);


// create new element 

//var newDiv = document.createElement('div')
//// add a class
//newDiv.className = "hello"
//// add id 
//newDiv.id = "hello1"
////add any attr
//newDiv.setAttribute('title', 'Hello Div')

//// create a text node 

//var Texts = document.createTextNode('Hello World')


//// appendChild 

//// add div to the text 

//newDiv.appendChild(Texts)

//console.log(newDiv);








