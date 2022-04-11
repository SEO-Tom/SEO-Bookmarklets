let links = document.querySelectorAll("nav a");
let arrayOfBrokenURLs = [];
let consoleMessage = [];
window.copyMessage = [];



async function processLinks(linksArray) {
  for (const link of linksArray) {
    if (link.href) {
      await testLink(link);
    }
  }
  if (arrayOfBrokenURLs.length) {
    arrayOfBrokenURLs.forEach((brokenLink) => {
      copyMessage.push(`\n Anchor: ${brokenLink.innerText} - Href: ${brokenLink.href} `);
      consoleMessage.push(`\n Anchor: ${brokenLink.innerText} - Href: ${brokenLink.href}`);
    });
    console.log(consoleMessage);
    createButton();
  }
}
async function testLink(link) {
  let request = new Request(link);
  let headers = new Headers({ "User-Agent": "MY-UA-STRING" });
  try {
    await fetch(request, {
      method: "GET",
      headers: headers,
    }).then((response) => {
      if (response.ok && response.redirected == false) {
        link.style.color = "green";
      } else {
        link.style.color = "red";
        arrayOfBrokenURLs.push(link);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

if(!window.copyToClipboard){
    window.copyToClipboard = function(str){
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        console.log("Broken Links Copied");
    }
}

function createButton() {
  const copyButton = `<div><button style="display:block; margin-left:auto; margin-top:20px;" type="submit" onclick="copyToClipboard(copyMessage);">Copy</button</div>`;
  document.body.insertAdjacentHTML("afterbegin", copyButton);
}
processLinks(links);
