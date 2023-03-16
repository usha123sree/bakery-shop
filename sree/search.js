 function search(){
    const searchbox = document.getElementById("search-item").value.toLowerCase();
    const data = document.querySelectorAll(".data");
    const pname = document.getElementsByTagName("h3");

    for(var i=0; i < pname.length; i++){
        let match = data[i].getElementsByTagName('h3')[0];

           let value= match.innerHTML || match.innerText || match.textContent;
           
           if(value.toLowerCase().indexOf(searchbox) > -1){
            data[i].style.display = "";
           }else{
            data[i].style.display = "none";
           }
        }
    }