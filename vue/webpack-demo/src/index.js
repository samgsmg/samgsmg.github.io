import _ from "lodash";
import printMe from "./print.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}else{
    console.log("we are in production mode!");
}
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
