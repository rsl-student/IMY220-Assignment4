$(function()
{
	let name = "null";
	let prev1 = $('b').eq(0);
	let prev2 = $('span').eq(0);

	$('button').eq(0).on('click', function()
	{		
		$('button').eq(0).html('Update');


		if((prev1.is(':visible')) && (prev2.is(':visible')) )
		{					
			prev1.toggle();
			prev2.toggle();						
			$('<input id="Name" class="col-8">').insertBefore($('button').eq(0));
			$('input').focus();
		}
		else
		{	

			name = $('input').val();			
			prev2.text(name);
			prev1.toggle();
			prev2.toggle();	
			$('#Name').remove();
			$('button').eq(0).html('Edit');
		}

	})
});


$(function()
{
	let sName = "null";
	let prev1 = $('b').eq(1);
	let prev2 = $('span').eq(1);

	$('button').eq(1).on('click', function()
	{		
		$('button').eq(1).html('Update');


		if((prev1.is(':visible')) && (prev2.is(':visible')) )
		{					
			prev1.toggle();
			prev2.toggle();						
			$('<input id="sName" class="col-8">').insertBefore($('button').eq(1));
			$('input').focus();
		}
		else
		{	
			sName = $('input').val();				
			
			prev2.text(sName);
			prev1.toggle();
			prev2.toggle();	
			
			$('#sName').remove();
			$('button').eq(1).html('Edit');
			//console.log(name);
			//alert(name);
		}

	})
});

$(function()
{
	let email = "null";
	let prev1 = $('b').eq(2);
	let prev2 = $('span').eq(2);

	$('button').eq(2).on('click', function()
	{		
		$('button').eq(2).html('Update');


		if((prev1.is(':visible')) && (prev2.is(':visible')) )
		{					
			prev1.toggle();
			prev2.toggle();						
			$('<input id="eMail" type="email" class="col-8">').insertBefore($('button').eq(2));
			$('input').focus();
		}
		else
		{	
			email = $('input').val();					
			
			prev2.text(email);
			prev1.toggle();
			prev2.toggle();	
			
			$('#eMail').remove();
			$('button').eq(2).html('Edit');
			//console.log(name);
			//alert(name);
		}

	})
});

$(function()
{
	let prev1 = $('b').eq(3);
	let prev2 = $('span').eq(3);

	$('button').eq(3).on('click', function()
	{				
		let bDate = "null";
	
		let day = '';
		let month = '';
		let year = '';

		$('button').eq(3).html('Update');


		if((prev1.is(':visible')) && (prev2.is(':visible')) )
		{					
			prev1.toggle();
			prev2.toggle();						
			$('<input id="bDate" type="date" class="col-8">').insertBefore($('button').eq(3));
			$('input').focus();
		}
		else
		{	
			bDate = $('input').val();			
			
			for(var i = 0; i < 4; i++)
			{
				year += bDate[i];
			}
			
			for(let j = 5; j < 7; j++)
			{
				month += bDate[j];
			}

			switch(month)
			{
				case '01':
					month = 'January';
				break;

				case '02':
					month = 'February';
				break;

				case '03':
					month = 'March';
				break;

				case '04':
					month = 'April';
				break;

				case '05':
					month = 'May';
				break;

				case '06':
					month = 'June';
				break;

				case '07':
					month = 'July';
				break;

				case '08':
					month = 'August';
				break;

				case '09':
					month = 'September';
				break;

				case '10':
					month = 'October';
				break;

				case '11':
					month = 'November';
				break;

				case '12':
					month = 'December';

			}
			
			for(let l = 8; l < 10; l++)
			{
				day += bDate[l];
			}


			if(day[0] == '0')
			{
				day = day[1];
			}

			bDate = day + ' ' + month + ' ' + year;
			prev2.text(bDate);

			prev1.toggle();
			prev2.toggle();	
			
			$('#bDate').remove();
			$('button').eq(3).html('Edit');
			//console.log(name);
			//alert(name);
		}

	})
});

