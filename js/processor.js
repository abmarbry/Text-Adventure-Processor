//Line 2 or 4, which one is better?
//var Processor = {};

function Processor (){};

Processor.prototype.translate = function(json){
	var body = json.body;
	var bodyPos = 0;
	
	var fetcher = new WordFetcher(body[bodyPos]);

	while(bodyPos < body.length){
		
		var fetcher = new WordFetcher(body[bodyPos]);
		while(!fetcher.isEmpty()){
			var word = fetcher.next();
			console.log(word);
		}
		
		bodyPos++;
	}
	
	/*
		1) Fetch word in "body"
		2) If end of String, make paragraph break
			a) If no other Strings in the array, mark exit condition true.
		3) Else if choice, process choice consequences
		4) Else if variable, insert variable accordingly
		5) Else, normal word, paste accordingly
		6) Go to 1) until exit condition is met
	*/
 };


//WORD FETCHER
function WordFetcher(string){
	this.string = string;
	this.pos = 0;
}

WordFetcher.prototype.next = function(){
	var wordFound = false;
	var pos = this.pos;
	var string = this.string;
	
	while(!wordFound && pos < string.length) {
		var c = string.charAt(pos);
		if(c === ' '){
			pos++;
			c = string.charAt(pos);
		}
		else {
			wordFound = true;
		}
	}
	
	if(!wordFound){
		return "";
	}
	else{
		var end = pos;
		while(c !== ' ' && end < string.length){
			c = string.charAt(end);
			end++;
		}
		
		var word = string.substring(pos, end);
		this.pos = end;
		
		return word;
	}
}

WordFetcher.prototype.isEmpty = function(){
	return !(this.pos < this.string.length);
}
//WORD FETCHER END
 

export default Processor;