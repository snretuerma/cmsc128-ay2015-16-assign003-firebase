'use strict' 

 function retrieve(first, middle, last, email, contact){
        var ref = new Firebase('https://guestattendance.firebaseio.com/');
        //console.log("hello");
        ref.once("value", function(snapshot){
            //var snap = snapshot.child('name/firstName').val();
            //alert(snap);
            console.log("hello2");
            snapshot.forEach(function(childSnapshot){
                console.log(childSnapshot.child('name/firstName').val());
                var checkname = (childSnapshot.child('name/firstName').val() === first) && (childSnapshot.child('name/firstName').val() === middle) && (childSnapshot.child('name/firstName').val() === last);
                var checkcontact = (childSnapshot.child('email').val() === email) && (childSnapshot.child('contactNumber').val() === contact);
                var union = checkname && checkcontact;
                console.log(checkname + " " + checkname + " " + union);
                if(union === false){
                    return true;
                }
            });
        });
        return false;
    }

window.onload = function(){
    var firebaseReference = new Firebase('https://guestattendance.firebaseio.com/');
    var firstNameRef = $('#firstname');
    var middleNameRef = $('#middlename');
    var lastNameRef = $('#lastname');
    //var organizationRef = document.getElementById("organization").defaultValue = "";
   	var orgnizationRef = $('#organization');	
    var emailRef = $('#emailaddress');
    var numberRef =$('#number');
   
    $("#nameForm").submit(function(){
        var reference = new Firebase('https://guestattendance.firebaseio.com/');
        var checker = true;
        var first = firstNameRef.val();
        var middle = middleNameRef.val();
        var last = lastNameRef.val();
        var org = orgnizationRef.val();
        var email = emailRef.val();
        var contact = numberRef.val();

        checker = retrieve(first, middle, last, email, contact);
        //console.log(checker);

        //alert(check);
        if(checker==false){
            reference.push({name:{firstName: first, middleName: middle, lastName: last}, organization: org, email: email, contactNumber: contact});
        }

    });
   
};

 