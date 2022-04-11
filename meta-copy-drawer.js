document.querySelectorAll(".metaBlockModal").forEach(block => block.remove());
let  titleTag = false, 
    titleCount = false,
    metaDescription = false, 
    descriptionCount = false,
    canonical = false,
    canonicalFlag = false,
    metaRobots = false,
    metaRobotsFlag = false;


try{    
    titleTag = document.title;
     titleCount = document.title.length;
    } catch(e) {
        console.log("Error finding title");
    }

try{    
    metaDescription = document.querySelector("meta[name='description']").content;
     descriptionCount = document.querySelector("meta[name='description']").content.length;

    } catch(e) {
        console.log("Error finding Meta Description");
    }

try{    
     canonical = document.querySelector("link[rel='canonical']").href
     canonicalFlag = document.querySelector("link[rel='canonical']").href === window.location.href ? "Pass" : "Fail";

    } catch(e) {
        console.log("Error finding Canonical");
    }
try{    
     metaRobots = document.querySelector("meta[name='robots']").content.toLowerCase();
     metaRobotsFlag = ( metaRobots.innerText.includes("noindex") ||  metaRobots.innerText.includes("nofollow") ) ? false : true ;

    } catch(e) {
        console.log("Error finding Meta Robots");
    }

let modalElement = `
    <div class="metaBlockModal" >
    <span class="metaBlockModal-closeButton" ></span>

    <p><strong>Title</strong>: </p>
    <p>${ titleTag ? titleTag : "No Title Found" } </p>
    <p>Word Count: <span class="titleCount">${ titleCount ? titleCount : "No Title Found" }</span></p>

    <p> <strong>Meta Description</strong>: </p>
    <p>${ metaDescription ? metaDescription : "No Meta Description Found"}</p>
    <p>Word Count: <span class="descriptionCount">${descriptionCount ? descriptionCount : "No Meta Description Found"}</span></p>

    <p><strong>Meta robots</strong>:<span class=${metaRobotsFlag ? "Pass" : "Fail"}>${metaRobotsFlag ? "Pass" : "Fail"}</span></p> 
    <p>${ metaRobots ? metaRobots : "No Meta Robots Found"}</p>

    <p><strong>Canonical</strong>:<span class=${canonicalFlag}>${canonicalFlag}</span></p>
    <p>${ canonical ? canonical : "No Canonical Tag Found"}</p>
    <style>
        .metaBlockModal{
            display: block;
            width: 100%;
            background-color: lightgray;
            z-index: 100000000;
            padding: 30px 0px 20px 30%;
            position:relative;
            line-height: 18px;
            font-size: 16px;
            font-family: helvetica,serif;
        }
        .metaBlockModal p{
            margin-bottom: 10px;
        }
        .metaBlockModal-closeButton{
            position: absolute;
            top: 20px;
            right: 20px;
            border: 1px solid black;
            padding: 10px 15px;
            border-radius:50%;
            cursor:pointer;
            background-color: white;
            
        }
        .metaBlockModal-closeButton:after{
            content: "+";
            font-size: 1rem;
        }
        .metaBlockModal-closeButton:hover{
            transform: rotate(45deg);
            background-color: black;
            color: white;
        }
        .metaBlockModal .Pass{
            background-color: lightgreen;
            padding: 5px 10px;
            border-radius: 15%;
        }
        .metaBlockModal .Fail{
            background-color:#ffcccb;
            padding: 5px 10px;
            border-radius: 15%;
        }
    </style>
    </div>
`;
document.body.insertAdjacentHTML("afterBegin",modalElement);

document.querySelector(".titleCount").innerText = titleCount;
document.querySelector(".descriptionCount").innerText = descriptionCount;
document.querySelector(".metaBlockModal-closeButton").addEventListener("click",(e)=>{
    document.querySelector(".metaBlockModal").remove();
})
