/*
function validate(){
	var ref = new Firebase('https://guestattendance.firebaseio.com/'); 
	ref.on("child_added", function(snapshot, prevChildKey) {
		  var nameSnapshot = snapshot.child("name");
		  var fname = nameSnapshot.child("firstName");
		  var mname = nameSnapshot.child("middleName");
		  var lname = nameSnapshot.child("lastName");
		  var org = snapshot.child("organization");
		  var email = snapshot.child("email");
		  var number = snapshot.child("contactNumber");
		  console.log("Fname: " + (fname.val() === "Shannon Francis"));
		  console.log("Mname: " + nameSnapshot.hasChild("middleName/Naldo"));
		  console.log("Lname: " + lname.val());
		  console.log("email: " + email.val());
		  console.log("contact: " + number.val());
		  console.log("Org: " + org.val());

	});

}*/
		

window.onload = function(){
	var ref = new Firebase('https://guestattendance.firebaseio.com/'); 
	//var dname = ref.child("name");
	//var eaddress  = ref.child("email");

	var form = document.getElementById("nameForm");
	var button = document.getElementById("submitbtn");
	var data;
	ref.once('value', function(snapshot){
		data = snapshot.export();

	});
	
	button.addEventListener("click", function (event) {
		var firstname = document.getElementById("firstname").value;
		var middlename = document.getElementById("middlename").value;
		var lastname = document.getElementById("lastname").value;
		var organization = document.getElementById("organization").value;
		var emailaddress = document.getElementById("emailaddress").value;
		var contactnumber = document.getElementById("number").value;
		var check = true;
	    var checkf = true;
	    var checkm = true;
	    var checkl = true;

	   	
	    /*
	    if (!document.getElementById("firstname").value || !document.getElementById("middlename").value || !document.getElementById("lastname").value) {
	        ref.on("value", function(snapshot) {
	        	var nameSnapshot = snapshot.child("name");
	        	var fname = nameSnapshot.child("firstName");
			  	var mname = nameSnapshot.child("middleName");
				var lname = nameSnapshot.child("lastName");
				console.log("Fname: " + fname.val());
				console.log("Mname: " + mname.val());
				console.log("Lname: " + lname.val());
	        	
	        });
	       
	    }
	    */
	    if (!document.getElementById("middlename").value) {
	       check = false;
	       return;
	    }
	    if (!document.getElementById("lastname").value) {
	        check = false;
	        return;
	    }
	    if (!document.getElementById("organization").value) {
	        check = false;
	        return;
	    }
	    if (!document.getElementById("emailaddress").value) {
	        check = false;
	        return;
	    }
	    if (!document.getElementById("number").value) {
	        check = false;
	        return;
	    }

	    /*
	    var val = function validate(){
	    	ref.on("child_added", function(snapshot, prevChildKey) {
			  var nameSnapshot = snapshot.child("name");
			  var fname = nameSnapshot.child("firstName");
			  var mname = nameSnapshot.child("middleName");
			  var lname = nameSnapshot.child("lastName");
			  var org = snapshot.child("organization");
			  var email = snapshot.child("email");
			  var number = snapshot.child("contactNumber");
			  console.log("Fname: " + (fname.val() === "Shannon Francis"));
			  console.log("Mname: " + nameSnapshot.hasChild("middleName/Naldo"));
			  console.log("Lname: " + lname.val());
			  console.log("email: " + email.val());
			  console.log("contact: " + number.val());
			  console.log("Org: " + org.val());

			});
	    }
	    */	  
	    
		
	});
	
	





	/*
	document.getElementById("submitbtn").addEventListener("click", function () {
	  	var firstName = document.getElementById("firstname");
		var middlename = document.getElementById("middlename");
		var lastname = document.getElementById("lastname");
		var organization = document.getElementById("organization");
		var emailaddress = document.getElementById("emailaddress");
		var contactnumber = document.getElementById("number");
		console.log(firstName +" "+ middlename +" "+ lastname +" "+ organization + " " + emailaddress +" "+ " " +  contactnumber);

		ref.on("child_added", function(snapshot, prevChildKey) {
		  var nameSnapshot = snapshot.child("name");
		  var fname = nameSnapshot.child("firstName");
		  var mname = nameSnapshot.child("middleName");
		  var lname = nameSnapshot.child("lastName");
		  var org = snapshot.child("organization");
		  var email = snapshot.child("email");
		  var number = snapshot.child("contactNumber");
		  //console.log("Fname: " + fname.val());
		  console.log("Mname: " + mname.val());
		  console.log("Lname: " + lname.val());
		  console.log("email: " + email.val());
		  console.log("contact: " + number.val());
		  console.log("Org: " + org.val());
			
		  if(firstname === fistName){
		  	console.log("ERROR");
		  }

		});

	  
	});
	*/


	

};
