
const filled = document.querySelector('.filled')
const empties = document.querySelectorAll('.empty')

//Event listeners for fill;

filled.addEventListener('dragstart', dragStart)
filled.addEventListener('dragend', dragEnd)
 
//Drag functions for filled;

function dragStart(){
    setTimeout(()=>(this.className = 'invisible'), 0)
}
function dragEnd(){
    this.className = 'filled'
}
 //Adding drag events to empties

 for (const empty of empties){
     empty.addEventListener('dragover', dragOver)
     empty.addEventListener('dragenter', dragEnter)
     empty.addEventListener('dragleave', dragLeave)
     empty.addEventListener('drop', dragDrop)
 }

//Drag functions for empties

function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave(){
    this.className = ' empty'
}
function dragDrop(){
    this.append(filled)
    this.className = 'empty'  
}