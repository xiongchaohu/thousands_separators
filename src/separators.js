'use strict';

function thousands_separators(num) {

	var num=num.toString();
		var result='';
		var arr=[];
		var arr=num.split('.');

		result=arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

		if(arr.length==2)
		{

			if(arr[1]!='0')
			{
				result=result+'.'+arr[1];
			}
		}
		
		return result;
  
}

module.exports = thousands_separators;
