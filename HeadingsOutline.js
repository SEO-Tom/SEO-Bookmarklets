
document.body.classList.toggle("headingsHighlight");

if(document.querySelector(".headingsHighlight")){
    if(!window.returnText){window.returnText = tagName => `<span class="headingHighlighter"> - ${tagName.toString()}</span>` }
    if(!document.querySelector("#headingsHighlightCSS")){
        const stylesNode = `<style id="headingsHighlightCSS">
        body.headingsHighlight h1, 
        body.headingsHighlight h2, 
        body.headingsHighlight h3, 
        body.headingsHighlight h4,
        body.headingsHighlight h5 {
            color: white;
        }
        body.headingsHighlight h1 {
            background-color: green !important;
        }
        body.headingsHighlight h2{
            background-color : blue !important;
        }
        body.headingsHighlight h3{
            background-color : red !important; 
        }
        body.headingsHighlight h4{
            background-color : purple !important;
        }
        body.headingsHighlight h5{
            background-color : orange !important;
        }
        body.headingsHighlight h6{
            background-color : yellow !important;
        }
        </style>`;
        document.body.insertAdjacentHTML("beforebegin",stylesNode);
    }
    
    let headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    for(heading of headings){
        let headingTag = returnText(heading.nodeName);
        heading.insertAdjacentHTML("beforeend",headingTag);
    }
} else {
    let headingsSpans = document.querySelectorAll(".headingHighlighter");
    for(headingSpan of headingsSpans){
        headingSpan.remove();
    }
}
