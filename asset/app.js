var list = document.getElementById('list');
function addItem(){
var todoItem = document.getElementById('todo-Item')
console.log(todoItem.value);
// todoItem .value =""
var li = document.createElement('li')
var liText = document.createTextNode(todoItem)
li.appendChild(liText)
list.appendChild(li)
console.log(list);

// delete btn

var delBtn=document.createElement('button')
var delText =document.createTextNode('Delete')
delBtn.setAttribute('class','delBtn')
delBtn.setAttribute('onclick','deleteItem(this)')
delBtn.appendChild(delText)
list.appendChild(delBtn)
var editBtn = document.createElement('button')
var editText = document.createTextNode('Edit')
editBtn.appendChild(editText)
list.appendChild(editBtn)
editBtn.setAttribute('onclick','edit(this)')
todoItem .value =""
}
function deleteItem(e){
e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML=''
}
function edit(e){
    var val = prompt('Enter updated todo',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}
