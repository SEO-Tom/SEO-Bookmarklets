let nodes = document.querySelectorAll("h3.LC20lb");
let nodesAsArray = Array.from(nodes);
nodesAsArray.forEach(node => {
    node.insertAdjacentHTML("beforeBegin",`<p class="serp-numbers">${nodesAsArray.indexOf(node) + 1}</p>`);
});

document.body.insertAdjacentHTML("beforeBegin",`<style>
.serp-numbers {
  float: left;
  padding: 5px;
  color: blue;
  background-color: lightgray;
  margin-right: 10px; 
}
</style>`);
