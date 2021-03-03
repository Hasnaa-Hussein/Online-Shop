var FElement = document.forms['contact'];
if(FElement){
	FElement.addEventListener('submit', function (event) {
	event.preventDefault(); 

	var name = FElement['name'].value,
		email = FElement['email'].value,
		subject = FElement['subject'].value,
		message = FElement['message'].value;
	
	var data = {
		name,
		email,
		subject,
		message
	};

	//console.log(data);
	var myS = new XMLHttpRequest();
	myS.open("post", "http://js.vacsera.com/api/final-project");
	myS.onreadystatechange=function(){
		//console.log(myServer.readyState);
		if(myS.readyState == 4){
			//console.log("hello");
			console.log(this.responseText);
		}
	}
	myS.setRequestHeader("Content-Type", "application/json");
	myS.send(JSON.stringify(data));	
});
}
