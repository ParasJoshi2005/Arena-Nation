let form = document.querySelector("form");
let inp = document.querySelector(".input1");
let btn = document.querySelector(".button1");
let ul = document.querySelector(".ul1");

form.addEventListener("submit",function(event){
    event.preventDefault();
});

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    console.log(inp.value);
    ul.append(li);
    inp.value = null;
    li.classList.add("white");
    // li.classList.add("li1");
    // let btn = document.createElement("button");
    // btn.innerText = "delete";
    // btn.classList.add("delete");
    // li.append(btn);
});

// let del = document.querySelectorAll(".delete");

// for(b of del)
// {
//     b.addEventListener("click" , function(){
//         // console.log("element Deleted");
//         // this.remove();
//         this.parent.remove();
//     })
// }
