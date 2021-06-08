var n1,n2,score = 0,msg,sign='';<!-- 注意!南屯土龍寫程式 -->
var answer;
var error='',errorTmp= 1;
var allam = [0,0,0,0];
var cor = [0,0,0,0];

function genAdd()
{
	var ref1 = document.getElementById('q1');
	var scoreR = document.getElementById('scoreSpan');

	n1 = Math.floor(Math.random()*21+5);
	n2 = Math.floor(Math.random()*21+3);
	answer = n1+n2;
	ref1.innerHTML=n1+" + "+n2;
	scoreR.innerHTML =score;
}
function genSub()
{
	var ref1 = document.getElementById('q1');
	var scoreR = document.getElementById('scoreSpan');

	n1 = Math.floor(Math.random()*21+5);
	n2 = Math.floor(Math.random()*21+3);
	if(n1<n2)
	{
		n1 ^= n2;
		n2 ^= n1;
		n1 ^= n2;
	}
	answer = n1-n2;
	ref1.innerHTML=n1+" - "+n2;
	scoreR.innerHTML =score;
}
function genMul()
{
	var ref1 = document.getElementById('q1');
	var scoreR = document.getElementById('scoreSpan');

	n1 = Math.floor(Math.random()*10);
	n2 = Math.floor(Math.random()*10);
	answer = n1*n2;
	ref1.innerHTML=n1+" * "+n2;
	scoreR.innerHTML =score;
}
function genDiv()
{
	var ref1 = document.getElementById('q1');
	var scoreR = document.getElementById('scoreSpan');


	n2 = Math.floor(Math.random()*15)+1;
	n1 = n2 * (Math.floor(Math.random()*4)+1);

	answer = n1/n2;
	ref1.innerHTML=n1+" ÷ "+n2;
	scoreR.innerHTML =score;
}

function questionPush()
{
	var questionType = -1;
	questionType = Math.floor(Math.random()*28)+Math.floor(Math.random()*99);
	questionType%=4;
	sign = questionType;
	switch (questionType)
	{
		case 0:
			genAdd();
			break;
		case 1:
			genSub();
			break;
		case 2:
			genMul();
			break;
		case 3:
			genDiv();
			break;
	}
	allam[questionType]++;
	var allRef1 = document.getElementById('allAdd');
	allRef1.innerHTML = allam[0];
	var allRef2 = document.getElementById('allSub');
	allRef2.innerHTML = allam[1];
	var allRef3 = document.getElementById('allMul');
	allRef3.innerHTML = allam[2];
	var allRef4 = document.getElementById('allDiv');
	allRef4.innerHTML = allam[3];
}

function errorCheck()
{
	var errorRef = document.getElementById('errorArea');
	errorRef.innerHTML = error;
}

function check()
{
	var ref2 = document.getElementById('reply');
	var uans = ref2.value;
	var feedback = document.getElementById('fb1');
	var scoreR = document.getElementById('scoreSpan');
	var fbRef = document.getElementById('fbImg');

	if(uans == answer && uans !='')
	{
		msg = "Correct!";
		score += 5;
		fbRef.innerHTML = "<img src='correct.png' width=10%>";
		cor[sign]++;
		var cRef1 = document.getElementById('correctAdd');
		cRef1.innerHTML = cor[0];
		var cRef2 = document.getElementById('correctSub');
		cRef2.innerHTML = cor[1];
		var cRef3 = document.getElementById('correctMul');
		cRef3.innerHTML = cor[2];
		var cRef4 = document.getElementById('correctDiv');
		cRef4.innerHTML = cor[3];
	}
	else
	{
		msg = "Incorrect!";
		score -= 3;
		fbRef.innerHTML = "<img  src='incorrect.png' width=10%>";
		var signArr = [" + "," - "," * "," ÷ "];
		error = error + errorTmp + '.' + " \t " + n1  + signArr[sign] + n2 + ' = ' +'<br>';
		errorTmp++;
		errorCheck();
	}

	scoreR.innerHTML=score;
	feedback.innerHTML = msg;

	questionPush();
	document.getElementById('reply').value='';
}