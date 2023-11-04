var taskinput = document.querySelector("#fname");
var button = document.querySelector("#b");
var arrow= document.querySelector('#arrow');
var image=document.querySelector("img");
var flex=document.querySelector(".flex-container")





button.addEventListener("click", function () {
    const todo_input = taskinput.value;
    if (todo_input === "") {
        alert("Please enter your list");
    } 
    else {
       

        // Create li element and button for the new task
        const li_element = document.createElement('p2');
        li_element.textContent = todo_input;

        const button_element = document.createElement('button');
        button_element.textContent = "Deleteme";

        const para = document.createElement('p');
        para.textContent = "Deleteme";

       
        const deleted_items = document.querySelector("#remove");
   
       
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("width", "16");
        svgElement.setAttribute("height", "16");
        svgElement.setAttribute("fill", "currentColor");
        svgElement.setAttribute("class", "bi bi-trash");
        svgElement.setAttribute("viewBox", "0 0 16 16");
        
        // Create the first path element
        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z");
        
        // Create the second path element
        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z");
        
        // Append path elements to the SVG element
        svgElement.appendChild(path1);
        svgElement.appendChild(path2);
        
        // Append the SVG element to the document body or any other desired location
        
    
        
        const target2 = document.querySelector("#list")

        target2.appendChild(li_element);
        target2.appendChild(svgElement);
     

    
       
       
        button_element.className= "btn btn-danger";
        li_element.classList.add("liclass");
        para.classList.add("p1");
        svgElement.classList.add('delete');
        

        svgElement.addEventListener("click", function () {
            target2.removeChild(li_element);
            target2.removeChild(svgElement);
           
        });
        
        

        svgElement.addEventListener('mouseover', function () {
            const header=document.querySelector("h1")
            li_element.style.marginLeft="140%";
            li_element.style.color = "red";
            svgElement.style.height="50px";
            svgElement.style.width="50px";
            li_element.style.width="100px";
            li_element.style.height="100px";
            li_element.style.fontSize="large";
            svgElement.style.color="red";
            var timeout1= setTimeout(function() {
                header.style.color="red";
                li_element.style.display="none";
                
           

            }, 100);

            svgElement.addEventListener('mouseout', function () {
                clearTimeout(timeout1);
                header.style.color="green";
                li_element.style.color = "green";
                li_element.style.gridColumn ="1";
                svgElement.style.height="30px";
                svgElement.style.width="30px";
                li_element.style.display="block";
                li_element.style.marginLeft="60%";
                li_element.style.marginTop="10%";
                li_element.style.height="30px";
                li_element.style.width="30px";
              
            });
    
        });

        const header=document.querySelector("h1")
        
        taskinput.value = "";
        header.style.color="black"
        button.addEventListener("click",function () {
            header.style.color="green";
        })
    }
});