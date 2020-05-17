console.log("");
console.log("/************* SpeakHello.js ************/");
(function (window){
	var speakWord = "Hello";
	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	};
	helloSpeaker.speak("Anil");
	window.helloSpeaker = helloSpeaker;
})(window);

console.log();
