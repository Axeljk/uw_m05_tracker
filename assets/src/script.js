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



	let project = $("<tr>");

	$("#projectList tbody").append("<tr>").addClass("bg-dark text-light");
	project = $("#projectList tbody").find("tr:last");
	let projectName = $("<td>").text($("#projectName").val()).appendTo(project);
	let projectType = $("<td>").text($("#projectType").val()).appendTo(project);
	let projectHourly = $("<td>").text($("#projectPay").val()).appendTo(project);
	let projectDate = $("<td>").text($("#projectDate").val()).appendTo(project);
	let daysPaid = Math.ceil((moment(projectDate.text()).unix() - moment().unix()) / 86400);
	let projectDays = $("<td>").text(daysPaid).appendTo(project);
	let projectEarnings = $("<td>").text(projectHourly.text() * 8 * daysPaid).appendTo(project);
	let projectRemove = $("<td>").text("").appendTo(project);
	console.log(project);
//	project.append(projectName);
	//project.find("td:last").after(projectType);
	//project.find("td:last").after(projectHourly);
/*
	project.append(projectDate);
	project.append(projectDays);
	project.append(projectEarnings);
	project.append(project); */

//	$("#projectList tbody").find("tr:last").after(project);
}