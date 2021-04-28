$(document).ready(function(){ 

	var firebaseConfig = {
   		apiKey: "AIzaSyCYY64JikEKS41V5VvsdcpEvry7n5Po5iI",
    	authDomain: "visitors-log-fecab.firebaseapp.com",
    	projectId: "visitors-log-fecab",
    	storageBucket: "visitors-log-fecab.appspot.com",
    	messagingSenderId: "118855005542",
    	appId: "1:118855005542:web:61273de409a322784244a7",
    	measurementId: "G-K5FX1PB71E"
  	};
  	// Initialize Firebase
  	firebase.initializeApp(firebaseConfig);
  	firebase.analytics();

  	var db = firebase.firestore();

	function loadInputs(){
  		db.collection("users_input").get().then((querySnapshot) => {
    	querySnapshot.forEach((doc) => {
     	 	// create divs and add them to the field
     		$("#inputs").append("<div>" + users_input.data() + "</div>")
     		console.log(users_input.data());
    		});
  		})
	}

	//texts fade in on load
	$(".hidden").fadeIn(1000);

	//date
	var interval = setInterval(function() {
        var momentNow = moment();
        $("#date").html(momentNow.format("ddd MMM Do YYYY, hh:mm:ss A"));
    }, 100);

    loadInputs();

	//on hover for about and response page
	$("#back").on('mouseenter', function(){
		$("#back").empty().append("<a href='../index.html'>&#8592; BACK TO HOME</a>");
	});
	$("#back").on('mouseleave', function(){
		$("#back").empty().append("BACK TO HOME");
	});
	$("#about").on('mouseenter', function(){
		$("#about").empty().append("ABOUT &#8592;");
	});
	$("#about").on('mouseleave', function(){
		$("#about").empty().append("ABOUT");
	});

	//popup
  	$("#about2").click(function(){
    	$("#popup").fadeIn();
  	});
  	$("#about").click(function(){
  		$("#popup").fadeIn();
	});
	$("#close_popup").click(function(){
    	$("#popup").fadeOut();
    });

});
