/*
    JS used for the Guest Handler
    Author: Shannon Francis N. Retuerma
    Section: AB-4L
    Notes: Includes functions for retrieving and adding data to the Firebase server
*/

var ref = new Firebase('https://guestattendance.firebaseio.com/guests');              // firebase reference
$(document).ready(function(){
    var fullname;
    var organization;
    var email;
    var contact;

    function GetFormData(){                                                     // getting the html form data
            fullname = document.getElementById("fullname").value;
            organization = document.getElementById("organization").value;
            email = document.getElementById("emailaddress").value;
            contact = document.getElementById("number").value;
    }

    function PushData(){                                                        // pushing the data to the firebase server
          var newpath = ref.child(fullname);
              newpath.set({organization: organization, email: email, contactNumber: contact});
    }

    function ReloadPage(){                                                      // reloading the page
        window.location.reload();
    }

    $("#nameForm").submit(function(event){                                      // event of submitting the form
            GetFormData(),
            PushData(),
            ReloadPage()
            return false;
    });

});

/*
    Note:
    Other than these functions, some other functions are called in the jquery.big-slide.js
    The following functions are used in:

    'beforeOpen': function () {                                                 before opening the side nav, get the database elements and append it to the html DOM element
        var ref = new Firebase('https://guestattendance.firebaseio.com/');
        ref.on("child_added", function(snapshot) {
            var nameSnapshot = snapshot.child("name");
            var fname = nameSnapshot.child("firstName");
            var mname = nameSnapshot.child("middleName");
            var lname = nameSnapshot.child("lastName");
            var dbfullname = fname.val() + " " + mname.val() + " " + lname.val();
            console.log(fname.val() + " " + mname.val() + " " + lname.val());
            $("#list").append("<li>" + dbfullname+"</li>");
        });
    }

    'afterClose': function() {                                                  after closing the side nav, clear the <li> elements of the side nav
        $("li").remove();
    }

*/
