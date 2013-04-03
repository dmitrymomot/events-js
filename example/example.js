
// Event One
var one = {
	callBackOne : function(e) {
		alert("Called listener ONE: " + e.message);
	}   
};

// event two
var two = {
	callBackTwo : function(e) {
		alert("Called listener TWO: " + e.message);
	}       
};
 
// listener registry
event.addListener( one, "someEventForOne", "callBackOne");
event.addListener( two, "someEventForTwo", "callBackTwo");


// remove listeners
// event.removeListener(one, "someEventForOne", "callBackOne");

document.getElementById('trigger').onclick = function() {
	// trigger events
	event.triggerEvent("someEventForOne", {message : "i am one event"});
	event.triggerEvent("someEventForTwo", {message : "i am two event"});
	
	return false;
}
