let imageNodes = document.querySelectorAll("img");

for (let image of imageNodes ){
        let attributes = image.attributes;
        for(let attribute of attributes){
            if(attribute.name === "loading"){
                image.style.border = "3px dashed red";
                console.log(image);
            }
        }
 }
