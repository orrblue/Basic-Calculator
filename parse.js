
//var indicator = false;

function parse(indicator, text, word)
{
	console.log("text: " + text);
	console.log("made it into parse");
	// Look for "F" in the text
	
	//count number of hashtags
	for(var i = 0; i < text.length; i++)
	{
		if(text.charAt(i) == '#')
		{
			hash_count++;
			console.log("Found a #");
		}
	}
	
	var basicWordsRemain = true;
	var searchInd = 0;
	
	while(basicWordsRemain && searchInd < text.length)
	{
		var basicInd = text.indexOf(word,searchInd);
		console.log("Word we want: " + word);
		
		if(basicInd == -1){
			console.log("Breaking");
			break; //couldn't find the word; so stop searching
		} 
		
		console.log("Found the word " + word);
		indicator.value = true; 
		searchInd = basicInd + 1;
		basic_count++;	
	}

	console.log("Ryan Gosling hotness: " + basic_count);
	
}
