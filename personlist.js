function addPerson()
{
    var yourname = document.getElementById("yourname");
    console.log("Adding a person: " + yourname.value); 

    var list = document.getElementById("p_list");
    list.innerHTML += "<p>" + yourname.value + "</p>" ;
}