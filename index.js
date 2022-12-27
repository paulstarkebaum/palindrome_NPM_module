
String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}
String.prototype.blank = function() {
	return !!this.match(/^\s+$/);
};
Array.prototype.last = function() {
	return this.slice(-1);
}
// Defines a Phrase object,
function Phrase(content) {	
	this.content = content;

this.letters() = function letters() {
	return this.content; 	// stub return value
}
	this.processedContent = function processedContent() {
		return this.content.toLowerCase().letters();
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}

// function TranslatedPhrase(content, translation) {
// 	this.content = content;
// 	this.translation = translation;

// 	// Returns translation processed for palindrome testing
// 	this.processedContent = function processedContent() {
// 		// return this.translation.toLowerCase();
// 		return this.processor(this.translation);
// 	}
// }
// TranslatedPhrase.prototype = new Phrase();