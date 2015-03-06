function fc(ind){
	var h=$('#book_'+ ind).height();
	console.log($('#book_1').height());
	if(ind==12){
	var interval = setInterval(function(){
		if($('#book_1').height()){
		var newHeight = $('#book_1').height();
		var maxHeight = 0;
		for(var i=1;i<=12;i++){
			newHeight = $('#book_'+i).height();
			if(newHeight>maxHeight){
				maxHeight = newHeight;
			}
		}
		$('.grid').css('min-Height',maxHeight+30);
		$('.grid').css('max-Height',maxHeight+30);

		clearInterval(interval);
	}
},500);
	}
}