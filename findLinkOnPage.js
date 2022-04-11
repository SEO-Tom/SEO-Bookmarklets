let urlsToCheck = [], queue = [];
urlsToCheck = prompt("Please provide a comma seperated list of urls you would like to check");

urlsToCheck = urlsToCheck.split(",");

urlsToCheck.forEach(url => {
    let string = `a[href*="${url}"]`;
    let nodes = document.querySelectorAll(string);
    nodes.forEach(node=>{
        queue.push(node);
    });
});

function decorator(link){
    if(link.querySelector(".foundURL")){
        return
    } else {
        if (link.rel.includes("nofollow")) {
            link.style.border = "1px dashed yellow";
            link.style.display = "inline-block";
            link.style.fontSize = "20px";
            link.style.backgroundColor = "red";
            link.style.color = "white";
        } else {
            link.style.border = "1px dashed red";
            link.style.display = "inline-block";
            link.style.fontSize = "20px";
            link.style.backgroundColor = "green";
            link.style.color = "white";
        }

    let span = document.createElement("span");
    let text = document.createTextNode(" - findMe href:");
    let href = document.createTextNode(link.href);
    span.appendChild(text);
    span.classList.add("foundURL");
    span.appendChild(href);
    link.appendChild(span);
}

    }

queue.forEach(node => {
    decorator(node);
});

console.log(queue);
