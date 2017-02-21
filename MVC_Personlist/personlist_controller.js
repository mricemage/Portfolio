var viewController = new ViewController();

function ViewController()
{
  this.personModel = new PersonModel();

  this.updateView = function()
  {
    

    
var results = document.getElementById("p_list");
    // if(typeof(Storage) !== "undefined"){
    //     if(localStorage.fname) {
    //         localStorage.fname = localStorage.fname + ' ' + name;
    //         results.innerHTML = localStorage.fname;
            
    //     }
    // }

    for (var i = 0; i < this.personModel.getPersons().length; i++)
    {
      var onePerson = this.personModel.getPersons()[i];
    
      localStorage.server = localStorage.server + onePerson.name;
      results.innerHTML = localStorage.server; 
    }

    
  }
  
  this.addPerson = function(name)
  {
    var newPerson = new Person(name);
    this.personModel.addPerson(newPerson);
    this.updateView();
  }
}