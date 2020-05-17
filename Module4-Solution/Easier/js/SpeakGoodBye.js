console.log("");
console.log("/**************** SpeakGoodBye Output **************/");
(function (window){
	var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	};
	byeSpeaker.speak("Ajay");
	window.byeSpeaker = byeSpeaker;
})(window);