var viewController = new ViewController();

function ViewController()
{
  this.personModel = new PersonModel();

  this.updateView = function()
  {
    var results = document.getElementById("p_list");

    

    if(typeof(Storage) !== "undefined"){
        if(localStorage.fname) {
            localStorage.fname = localStorage.fname + ' ' + name;
            results.innerHTML = localStorage.fname;
            
        }
    }

    for (var i = 0; i < this.personModel.getPersons().length; i++)
    {
      var onePerson = this.personModel.getPersons()[i];
      results.innerHTML += onePerson.name;
    }
  }
  this.addPerson = function(name)
  {
    var newPerson = new Person(name);
    this.personModel.addPerson(newPerson);
    this.updateView();
  }
}