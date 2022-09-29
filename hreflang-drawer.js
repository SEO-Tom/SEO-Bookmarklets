function run(){

    let hreflangs = document.querySelectorAll("[rel='hreflang']");
    if(hreflangs.length === 0 ){
        alert("No HREFLang Values Found");
    } else {
    let drawer = `<div class="metaBlockModal" >
    <span class="metaBlockModal-closeButton" ></span>
    <div class="wrapper">
        <h1 class="bold"> Hreflang List </h1>
            <ul id="results-ul">
            </ul>
    </div>
        <style>
        .bold {
            font-weight: 700;
        }
        .wrapper {
            width: 90%;
            margin: auto;
        }
        .metaBlockModal{
            display: block;
            width: 100%;
            background-color: lightgray;
            z-index: 100000000;
            padding: 30px 0px 20px 0%;
            position:relative;
            line-height: 18px;
            font-size: 16px;
            font-family: helvetica,serif;
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

        .hreflang-link {
            text-decoration: underline;
            color: black;
        }

        .hreflang-link:hover, .hreflang-link:focus {
            text-decoration: underline;
            color: white;
        }
        .results-li {
            margin-bottom: 3px;
            padding: 2px 0px;
        }
        .push-right {
            margin-right: 5px
        }
        .push-left {
            margin-left: 5px
        }
        </style>
        </div>
    </div>`;
    document.body.insertAdjacentHTML("afterbegin",drawer);
    let hrefLangsLis;
    let resultsUL = document.getElementById("results-ul");

    for (let i = 0; i < hreflangs.length; i++){
        hrefLangsLis = `<li class="results-li">
        <span class="bold push-right">Market</span>: <span class="hreflang-val">${hreflangs[i].hreflang}</span> 
        <span class="bold push-left">HREF</span>: <a class="hreflang-link" target="__blank" href="${hreflangs[i].href}"><span class="hreflang-url">${hreflangs[i].href}</span></a>
        </li>`;
        resultsUL.insertAdjacentHTML("afterbegin",hrefLangsLis)

    }
    document.querySelector(".metaBlockModal-closeButton").addEventListener("click",(e)=>{
        document.querySelector(".metaBlockModal").remove();
    });
}
}
run();
