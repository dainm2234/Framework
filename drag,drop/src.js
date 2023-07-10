function allowDrop(ev){
    console.log("allowdrop");
    ev.preventDefault();
}

function drag(ev){
    console.log("Bắt đầu lên");
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    console.log("Phần tử đã đc thả vào thành công");
    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}