import React from "react";
import ReactDOM from "react-dom";

const ul = ul.createElement("ul");
const li = li.createElement("li");
li.appendChild(li);
li.appendChild(document.createTextNode("Hey"));

// function App() {
//   return (
//     <div>
//       <Header />
//       <div className="dummy">
//         <p> this is a dummy page</p>
//         console.log("this is dummy page")
//       </div>
//     </div>
//     );
// }
const amIAbove16 = true;

function Header() {
  return (
    <Header>
      <h1>
        I am above 16 {amIAbove16 ? <p>I am above 16</p> : <p>i am older </p>}
      </h1>
    </Header>
  );
}

export default Header;
