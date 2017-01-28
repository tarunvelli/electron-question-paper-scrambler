var fs = require('fs')

var n = new Array();
var c=0;
var fso;
var s;
n[0]=0;

function counter() {
	c=c+1;
	n[c]=0;
	}

function prebuild(setno) {
	build(setno);
	alert("Done!");
}


function build(setno) {
	document.getElementById("center").innerHTML="Question Paper  " + setno;
	document.getElementById("maintab").setAttribute("border","0");

	var txt=document.getElementById("tabdiv").innerHTML;

  fs.writeFileSync("./output/QuestionPaper_" + setno +".docx", txt);

	document.getElementById("maintab").setAttribute("border","1");
	document.getElementById("center").innerHTML="Question Paper";
}

function removesect() {
	document.qs.removeChild(document.getElementById("Section" + c));
	document.qs.removeChild(document.getElementById("i"+c));
	document.qs.removeChild(document.getElementById("ri"+c));
	document.qs.removeChild(document.getElementById("chkbox"+c));
	document.qs.removeChild(document.getElementById("cbs"+c));
	document.qs.removeChild(document.getElementById("p"+c));

	document.getElementById("tab").removeChild(document.getElementById("t"+c));
	document.getElementById("tab").removeChild(document.getElementById("te"+c));

	c=c-1;
}

function addsect() {
	counter();
	var fr=document.createElement("input");
	fr.setAttribute("value"," Section " + c );
	fr.setAttribute("id","Section" + c );
	fr.setAttribute("size","10");
	fr.setAttribute("onkeyup","show()");

	var qr=document.createElement("input");
	qr.setAttribute("type","button")
	qr.setAttribute("value","add question")
	qr.setAttribute("OnClick","addques("+c+")");
	qr.id="i"+c;

	var rqr=document.createElement("input");
	rqr.setAttribute("type","button")
	rqr.setAttribute("value","remove question")
	rqr.setAttribute("OnClick","removeques("+c+")");
	rqr.id="ri"+c;

	var chkbox=document.createElement("input");
	chkbox.setAttribute("type","checkbox");
	chkbox.setAttribute("id","chkbox"+c);
	chkbox.setAttribute("checked",true);

	var cbs=document.createElement("span");
	cbs.innerHTML=" scramble";
	cbs.id="cbs"+c;

	var pr =document.createElement("p");
	pr.id="p"+c;

	document.qs.appendChild(fr);
	document.qs.appendChild(qr);
	document.qs.appendChild(rqr);
	document.qs.appendChild(cbs);
	document.qs.appendChild(chkbox);
	document.qs.appendChild(pr);

	//table append

	var tr=document.createElement("tr");
	var te=document.createElement("tr");

	tr.id="t"+c;
	te.id="te"+c;

	var td=document.createElement("td");
	var tde=document.createElement("td");
	td.innerHTML="Section "+c;
	td.id="td"+c;
	tde.id="tde"+c;

	document.getElementById("tab").appendChild(tr);
	document.getElementById("tab").appendChild(te);

	document.getElementById("t"+c).appendChild(td);
	document.getElementById("te"+c).appendChild(tde);

	var tabe=document.createElement("table");
	var tabbe=document.createElement("tbody");

	tabe.id="tabe"+c;
	tabbe.id="tabbe"+c;

	//tabe.setAttribute("border","1");
	tabe.setAttribute("width","100%");
	document.getElementById("tde"+c).appendChild(tabe);
	document.getElementById("tabe"+c).appendChild(tabbe);
}

function removeques(ex) {
	document.getElementById("p"+ex).removeChild(document.getElementById("in" + ex + "." + n[ex]));
	document.getElementById("p"+ex).removeChild(document.getElementById("tx" + ex + "." + n[ex]));
	document.getElementById("p"+ex).removeChild(document.getElementById("brr" + ex + "." + n[ex]));

	document.getElementById("tabe"+ex).removeChild(document.getElementById("trn" + ex + "." + n[ex]));
	//document.getElementById("trn" + ex + "." + n[ex]).removeChild(document.getElementById("tdne" + ex + "." + n[ex]));
	//document.getElementById("trn" + ex + "." + n[ex]).removeChild(document.getElementById("tdn" + ex + "." + n[ex]));
	n[ex]=n[ex]-1;
}

function addques(ex) {
	n[ex]=n[ex]+1;

	var tx=document.createElement("input");
	tx.setAttribute("value","Q "+n[ex]+")");
	tx.setAttribute("size",3);
	tx.setAttribute("onKeyUp","show()");
	tx.id="tx" + ex + "." +n[ex];

	var inx=document.createElement("input");
	inx.setAttribute("id","in" + ex + "." + n[ex]);
	inx.setAttribute("name","not");
	inx.setAttribute("size","30");
	inx.setAttribute("onfocus","blurrer(),this.name='act'");
	inx.setAttribute("onkeyup","show()");

	var brr=document.createElement("br");
	brr.id="brr" + ex + "." + n[ex];

	document.getElementById("p"+ex).appendChild(tx);
	document.getElementById("p"+ex).appendChild(inx);
	document.getElementById("p"+ex).appendChild(brr);

	var trn=document.createElement("tr");
	trn.id="trn" + ex + "." + n[ex];

	var tdne=document.createElement("td");
	tdne.innerHTML="Q "+n[ex]+") ";
	tdne.setAttribute("valign","top");
	tdne.id="tdne" + ex + "." + n[ex];

	tdne.setAttribute("width","10%");

	var tdn=document.createElement("td");
	tdn.id="tdn" + ex + "." + n[ex];

	document.getElementById("tabe"+ex).appendChild(trn);
	document.getElementById("trn" + ex + "." + n[ex]).appendChild(tdne);
	document.getElementById("trn" + ex + "." + n[ex]).appendChild(tdn);
}

var p;
var q;

function show() {
	for (p=1;p<=c;p++){
		document.getElementById("td"+p).innerHTML=document.getElementById("Section" + p).value;
		for (q=1;q<=n[p];q++) {
			document.getElementById("tdne" + p + "." + q).innerHTML = document.getElementById("tx" + p + "." + q).value;
			document.getElementById("tdn" + p + "." + q).innerHTML = document.getElementById("in" + p + "." + q).value;
		}
	}
}

var i;
var j;
var dope;

function blurrer() {
	for (i=1;i<=c;i++) {
		for (j=1;j<=n[i];j++) {
			document.getElementById("in" + i + "." + j).setAttribute("name","not");
		}
	}
}

function addsymb(sym) {
	var oldtxt = document.getElementsByName('act')[0].value;
	//document.getElementsByName('act').value = oldtxt + sym;
	document.getElementsByName('act')[0].value = oldtxt + sym;
	document.getElementsByName('act')[0].focus();
}

function addNewLine() {
	var oldtxt = document.getElementsByName('act')[0].value;
	document.getElementsByName('act')[0].value = oldtxt + "<br>";
	document.getElementsByName('act')[0].focus();
}

function superScript() {
	var oldtxt = document.getElementsByName('act')[0].value;
	document.getElementsByName('act')[0].value = oldtxt + "<sup>"+document.getElementById("sup").value+"</sup>" ;
	document.getElementsByName('act')[0].focus();
}

function subScript() {
	var oldtxt = document.getElementsByName('act')[0].value;
	document.getElementsByName('act')[0].value = oldtxt + "<sub>"+document.getElementById("sub").value+"</sub>" ;
	document.getElementsByName('act')[0].focus();
}
/*

*****************DO NOT EDIT****************

function addImg() {
	var h=document.getElementById("iheight").value;
	var w=document.getElementById("iwidth").value;
	var path = document.getElementById("myImg").value;

	var oldtxt = document.getElementsByName('act')[0].value;

	document.getElementsByName('act')[0].value = oldtxt + "<img src="+"'" +path+"'" +" "+"height="+h+" "+"width="+w+" "+">" ;

	document.getElementsByName('act')[0].focus();
}

********************************************

*/

function scramble4() {
	for (var scrm=1;scrm <=4; scrm++) {
	show();
	scramble();
	build(scrm);
	}
	alert("Done!");
}

var mx;
var nx;

var tmp = [[]];

function check() {
	for (mx=1;mx<=c;mx++) {
	for (nx=1;nx<=n[mx];nx++) {
		if(!swap)
		document.getElementById("tdn" + mx + "." + nx).innerHTML=document.getElementById("in" + mx + "." + nx).value;
		else
		document.getElementById("tdn" + mx + "." + nx).innerHTML=tmp[mx][nx];
		}
	}
}

var t;
var swap;

function  scramble() {
for (mx=1;mx<=c;mx++) {
		tmp[mx]=[];
			for (nx=1;nx<=n[mx];nx++) {
				tmp[mx][nx]  = document.getElementById("tdn" + (mx) + "." + (nx)).innerHTML;
				if (document.getElementById("chkbox"+mx).checked == true) {
				t=Math.ceil(Math.random()*nx);
				}
				else {
				t=nx;
				}
				swap = tmp[mx][nx];
				tmp[mx][nx]=tmp[mx][t];
				document.getElementById("tdn" + (mx) + "." + (nx)).innerHTML = tmp[mx][nx];
				tmp[mx][t]=swap;
				document.getElementById("tdn" + (mx) + "." + (t)).innerHTML = tmp[mx][t];
			}
	}
}
