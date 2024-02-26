function popup_box() {
  div_2.style.display = "block";
  div_3.style.display = "block";
}
function clo() {
  event.preventDefault();
  div_2.style.display = "none";
  div_3.style.display = "none";
}
function Add() {
  event.preventDefault();
  var inp_n = document.getElementById("Name").value.trim()
  var inp_a = document.getElementById("author").value.trim()
  var text = document.getElementById("dis").value.trim()
  var Div = document.createElement("div");
  Div.setAttribute("id", "div_element");
  Div.innerHTML = `<h1 id="b_n">Book   : ${inp_n}</h1>
  <h2 id="ida_n">Author :${inp_a}</h2>
  <p id="disp">Discription : ${text}</p>
  <button id="del" onclick="del(event)">Delete</button>`
  if(inp_n !== "" && inp_a !== "" && text !== "")
  {
  div_4.append(Div);
  Name.value=""
  author.value=""
  dis.value="" 
  div_2.style.display = "none";
  div_3.style.display = "none";
  }
  if(inp_n === "" && inp_a === "" && text === "")
  {
    alert("Enter the Book Details")
  }
}
function del(event)
{
  var Delete=window.confirm("Delete the Book Details ?")
  if(Delete)
  {
  event.target.parentElement.remove()
  }
}
