const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"];

function getFormValues() {
	let obj = {};
	fields.forEach(function(field, index) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});
	return obj;
}

function handleButton() {
  $.getJSON(dataURL,handleData);
}

function handleData(data) {
	let finalMesage = "";
	let obj = getFormValues();
	data["text"].forEach(function(line, index) {
		for (key in obj) {
			line = line.replace("{" + key + "}", obj[key]);
		}
		
		finalMesage = finalMesage + line + "<br>";
	}
	);
$("div#result").html("<hr>" + finalMesage + "<hr>");
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
