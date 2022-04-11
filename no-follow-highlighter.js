(function(){
  if(!document.getElementById("noFollowStyles")){
    const styles = `<style id = "noFollowStyles"> .nofollow-link-border { border : 3px dashed red !important } </style>`;   
    document.body.insertAdjacentHTML("afterbegin",styles);
  }
  document.querySelectorAll("a[rel=\'nofollow\']").forEach( (linkNode) => linkNode.classList.toggle("nofollow-link-border"))
 })();
