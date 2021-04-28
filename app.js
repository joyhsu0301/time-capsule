$(document).ready(function(){

	console.log("it's working");

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

  	$("#submit").click(function(){
  		const textToSave = $("#user_input").val();
  		console.log("saving " + textToSave + " to firestore");
  		db.collection("users_input").add({
  			visitorsInput: textToSave
  		}).then(function(){
  			console.log("saved successfully!");
  			$("#prompt").html("Thanks for submitting your response!");
  			$("#form").css({"display": "none"});
  			$("#compiled").fadeOut();
  			$("#about").fadeOut();
  			$(".after_sub").fadeIn();
  			// window.location.reload();
  		}).catch(function(error){
  			console.log("got an error: ", error);
  		})
  	});

    $("#submit2").click(function(){
      window.location.reload();
    });

  //date
  var interval = setInterval(function() {
    var momentNow = moment();
    $("#date").html(momentNow.format("ddd MMM Do YYYY, hh:mm:ss A"));
    }, 100);

  //corner texts fade in
	$(".hidden").fadeIn(1000);

  //on hover for about and response page
	$("#compiled").on('mouseenter', function(){
		$("#compiled_text").empty().append("<a href='responses/responses.html'>&#8594; REPONSES</a>");
	});
	$("#compiled").on('mouseleave', function(){
		$("#compiled_text").empty().append("RESPONSES");
	});

	$("#about").on('mouseenter', function(){
		$("#about_text").empty().append("ABOUT &#8592;");
	});
	$("#about").on('mouseleave', function(){
		$("#about_text").empty().append("ABOUT");
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