// global variables to keep track of the request and the function to call when done

var ajaxreq = false, ajaxCallback;

// ajaxRequest: sets up a request 
// This function handles all the steps necessary to create and send a request. First it creates the XMLHttpRequest object. As it causes problems for older browsers, try and catch are used to create the request. Standard method is used first and ActiveX method is used if it doesn't work. If both doesn't work, ajaxreq variable is set to false to indicate AJAX is not supported

function ajaxRequest(filename) {
  try {
    // Firefox / IE7 / Others
    ajaxreq = new XMLHttpRequest();
  } catch (error) {
    try {
      // IE5 / IE6
      ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (error) {
      return false;
    }
  }
	ajaxreq.open("GET", filename);
  ajax.onreadystatechange = ajaxResponse;
  ajaxreq.send (null);
}

// ajaxResponse: Waits for response and calls a function
// This function is used as an event handler upon ready state. The function checks the readyState property for the value of 4 and returns without doing anything if the value is something else.
// It then checks for the status property for a value of 200, which indicates if the request was successful. If it's successful, it runs the function stored in ajaxCallback variable. If not, the error message is shown in the alert box.

function ajaxResponse(){
	if (ajaxreq.readyState !=4) return;
  if (ajaxreq.status==200) {
  	// if the request succeeded..
    if (ajaxCallback) ajaxCallback();
  }
  else alert("Request failed: " + ajaxreq.statusText);
  return true;
}
