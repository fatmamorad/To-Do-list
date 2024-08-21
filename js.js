let addButton=document.querySelector('.AddButton')
let inputText=document.querySelector('.Input')
let UlList=document.querySelector('.toDoSection')
let ClearButton=document.querySelector('.clear')
inputText.onkeyup=()=>{
    if(inputText.value.trim().length!==0){
        addButton.classList.add('AddButtonActive')
    }
    else{
        addButton.classList.remove('AddButtonActive')
    }
}
addButton.onclick=()=> {
    let task = inputText.value
    let GetLocalStorage = localStorage.getItem("toDoList")
    if (GetLocalStorage === null) {
        DoList = []
    } else {
        DoList = JSON.parse(GetLocalStorage)
    }
    if (task!== "") {
        DoList.push(task)
        localStorage.setItem("toDoList", JSON.stringify(DoList))
        inputText.value=""
        addButton.classList.remove('AddButtonActive')
    }
    showTasks()
}
function showTasks() {
    let task=inputText.value
    let GetLocalStorage=localStorage.getItem("toDoList")
    if(GetLocalStorage===null){
        DoList=[]
    }
    else{
        DoList=JSON.parse(GetLocalStorage)
    }
    let newArray=Array.from(DoList)

    document.querySelector('.numberOfTAsks').innerHTML= newArray.length

    // show tasks in html
    let LiTag = "";
    newArray.forEach((element, index) => {
        LiTag += `<li class="task-section"><span class="task">${element}</span><span class="icon"><i class="fas fa-trash"></i></span></li>`;

    });
    UlList.innerHTML=LiTag
}

ClearButton.onclick=()=> {

    DoList = []
    localStorage.setItem("toDoList",JSON.stringify(DoList))
    showTasks()

}
document.querySelector('.container').onclick=e=>{

    if(e.target.classList.contains('fa-trash')){
        let allDelete=document.querySelectorAll('.fa-trash')
        let deleteArray=Array.from(allDelete)
        let index=deleteArray.indexOf(e.target)
          console.log(index)

        let GetLocalStorage=localStorage.getItem("toDoList")
        if(GetLocalStorage===null){
            DoList=[]
        }
        else{
            DoList=JSON.parse(GetLocalStorage)
        }
        DoList.splice(index, 1); //delete or remove the li
        localStorage.setItem("toDoList",JSON.stringify(DoList))
    }
    showTasks()
}
showTasks()