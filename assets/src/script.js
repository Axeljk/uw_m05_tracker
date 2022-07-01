var timer;

window.onload = () => {
	timer = setInterval(timerDisplay, 1000);
	$("#projectSubmit").click(dataSubmit);
}

function timerDisplay() {
	$("#today").text(moment().format("MMM DD, YYYY [at] hh:mm:ss A"));
}

function dataSubmit() {
	$("#addModal").modal("toggle");

	let projectName = $("<td>").val($("#projectName").val());
	console.log(projectName);
	let projectType = $("<td>").val($("#projectType").val());
	let projectDate = $("<td>").val($("#projectDate").val());
	let projectHourly = $("<td>").val($("#projectPay").val());
	let projectDays = $("<td>").val("Never");
	let projectEarnings = $("<td>").val(projectHourly.val() * 100);
	let project = $("<tr>");

	$("#projectList tbody").append("<tr>").addClass("bg-dark text-light");
	project = $("#projectList tbody").find("tr:last");
	project.append(projectName);
	//project.find("td:last").after(projectType);
	//project.find("td:last").after(projectHourly);
/*
	project.append(projectDate);
	project.append(projectDays);
	project.append(projectEarnings);
	project.append(project); */

	console.log(project);
//	$("#projectList tbody").find("tr:last").after(project);
}