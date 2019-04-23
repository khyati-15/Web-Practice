var button = document.getElementById("btn");
var input = document.getElementById("ipt");
var tbody = document.getElementById("tbody");
var array = [];
button.addEventListener("click", function(abc)
								{
									var value = input.value;
    									document.getElementById("ipt").innerHTML='';

									if(!value)
									{
										alert("Enter a task");
										return;
									}
									array.push(value);
									genrateRows();
								}
);

function genrateRows()
{
	tbody.innerHTML = "";
    var row=document.createElement('tr');
    var srno=document.createElement('th');
    srno.innerHTML="Sr. No.";
    row.appendChild(srno);
     var task=document.createElement('th');
    task.innerHTML="Task";
    row.appendChild(task);
	 var dte=document.createElement('th');
    dte.innerHTML="Date";
    row.appendChild(dte);
     var del=document.createElement('th');
    del.innerHTML="Delete";
    row.appendChild(del);
    tbody.appendChild(row);
    
	for(var i = 0 ; i< array.length; i++)
	{
		var row = document.createElement('tr');
		row.setAttribute("id",i);
		var sr_no = document.createElement('td');
		sr_no.innerHTML = i+1;
		row.appendChild(sr_no);
		var task_no = document.createElement('td');
		task_no.innerHTML = array[i];
		row.appendChild(task_no);
		var date_no = document.createElement('td');
		date_no.innerHTML = new Date().toString();
		row.appendChild(date_no);
		var del_col = document.createElement('td');
		var button = document.createElement('button');
		button.innerHTML = "X";
		button.addEventListener("click",function(e)
		{
			array.splice(e.target.parentNode.parentNode.id, 1);
			genrateRows();
		});
		del_col.appendChild(button);
		row.appendChild(del_col);		
		tbody.appendChild(row);	
	}	
}