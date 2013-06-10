// JavaScript Document
 $("#wrapper").live('pageinit', function() 

{
            $("#forward").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {drive: "1"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#forward").bind('vmouseup', 

function (event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {drive: 

"0"});
    return false;
            });
        });
		
	//drive backward
	  $("#wrapper").live('pageinit', 

function() {
            $("#backward").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {drive: "2"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#backward").bind('vmouseup', 

function (event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {drive: 

"0"});
    return false;
            });
        });	
		
		//drive left
		  $("#wrapper").live('pageinit', 

function() {
            $("#left").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {drive: "3"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#left").bind('vmouseup', function 

(event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {drive: 

"0"});
    return false;
            });
        }); 
		
		//drive right
		  $("#wrapper").live('pageinit', 

function() {
            $("#right").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {drive: "4"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#right").bind('vmouseup', function 

(event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {drive: 

"0"});
    return false;
            });
        });
   
   
   
	//drive forward
        $("#wrapper").live('pageinit', function() 

{
            $("#top_s").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {camera: 

"1"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#top_s").bind('vmouseup', function 

(event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {camera: 

"0"});
    return false;
            });
        });
		
	//servo backward
	  $("#wrapper").live('pageinit', 

function() {
            $("#bottom_s").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {camera: 

"2"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#bottom_s").bind('vmouseup', 

function (event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {camera: 

"0"});
    return false;
            });
        });	
		
		//drive left
		  $("#wrapper").live('pageinit', 

function() {
            $("#left_s").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {camera: 

"3"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#left_s").bind('vmouseup', 

function (event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {camera: 

"0"});
    return false;
            });
        }); 
		
		//drive right
		  $("#wrapper").live('pageinit', 

function() {
            $("#right_s").bind('vmousedown', 

function (event) {
               timeout = setInterval(function(){
       $.post("write_to_file.php", {camera: 

"4"});
    }, 200);

    return false;
            });
        });


 $("#wrapper").live('pageinit', function() {
            $("#right_s").bind('vmouseup', 

function (event) {
                clearInterval(timeout);
	$.post("write_to_file.php", {camera: 

"0"});
    return false;
            });
        });
		
		
		$(document).ready(function(){
  $('#camera_button').click(function(){
    $('#camera_data').toggle();
  });
  
   $('#sensors_button').click(function(){
    $('#sensors_data').toggle();
  });
});

