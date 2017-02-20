function doStuff() 
{
	$.ajax({	// Bắt buộc phải có dấu chấm
		dataType: "jsonp", 
		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
	});
}

function jsonCallback(json)	// Đường link trên file json cũng có tên là jsonCallback
{
	console.log(json);
}