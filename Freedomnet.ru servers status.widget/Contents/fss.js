var urlData = "";
var url = new URL();
var offsetV = 39;
var adder = 21;
var starter = 10;
var spacer = 182;
var fontsize = 10;

function shadowedText(name, subname, content, size, color, hLoc, vLoc, alignDir)
{
	shadowName = name + "Shadow";

	eval(shadowName +  subname + " = new Text()");
	eval(shadowName +  subname + ".font = \"Helvetica Bold, Arial\"");
	eval(shadowName +  subname + ".style = \"bold\"");
	eval(shadowName +  subname + ".size = " + size);
	eval(shadowName +  subname + ".color = \"#000000\"");
	eval(shadowName +  subname + ".opacity = \"185\"");
	eval(shadowName +  subname + ".data = \"" + content + "\"");
	eval(shadowName +  subname + ".hOffset = " + hLoc);
	eval(shadowName +  subname + ".vOffset = " + Number(vLoc - 1));
	eval(shadowName +  subname + ".alignment = \"" + alignDir + "\"");

	eval(name + subname + " = new Text()");
	eval(name + subname + ".font = \"Helvetica Bold, Arial\"");
	eval(name + subname + ".style = \"bold\"");
	eval(name + subname + ".size = " + size);
	eval(name + subname + ".color = \"" + color + "\"");
	eval(name + subname + ".data = \"" + content + "\"");
	eval(name + subname + ".hOffset = " + hLoc);
	eval(name + subname + ".vOffset = " + vLoc);
	eval(name + subname + ".alignment = \"" + alignDir + "\"");
}

function addLine(urlHref, name, i)
{
    urlData = url.fetch(urlHref);
    urlData = urlData.replace(/[\r]*\n/g,"");
    urlData = urlData.replace(/OK:\s*/,"");

    eval("Tile" + i + " = new Image()");
    eval("Tile" + i + ".src = \"Resources/all_04.png\"");
    eval("Tile" + i + ".hOffset  = 2");
    eval("Tile" + i + ".vOffset  = " + ((i*adder)+offsetV-16));

    shadowedText("serverName", i, name, fontsize, "#FFFFFF", starter, (i*adder)+offsetV-4, "left");
    shadowedText("serverPopulation", i, urlData, fontsize, "#FFFFFF", spacer, (i*adder)+offsetV-4, "right");
}

function updateAll()
{
	var total = 0;
	
	try {

                addLine("http://proxy.elcom.ru/cgi-bin/cs-players", "Counter-Strike v1.6", 1);
                addLine("http://storm.elcom.ru/wow-players.php", "World Of Warcraft", 2);
                addLine("http://storm.elcom.ru/bnet-players.php", "Battle.Net", 3);
	
                i = 3;	
		main_window.height = ((i+1)*adder)+offsetV-1;		
	} catch(e) {
		alert("There was an error while retrieving data.\n\nPlease check your network connection.");
	}
}

updateAll();
main_window.visible = true;
