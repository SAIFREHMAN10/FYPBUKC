google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);


/////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////
//////////// AdminDashboard top-Counters


// const counter = document.querySelectorAll('.counter')
// counter.forEach(counter = () {
//     const target = counter.getAttribute('data-target')

// })





////////////////////////////////////////////////
//////////// AdminDashboard graphs

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Ahmed', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function drawChart1() {

    var data1 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Ahmed', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options1 = {
        title: 'My Daily Activities'
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));

    chart1.draw(data1, options1);
}


function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Ahmed', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart.draw(data, options);
}


////////////////////////////////////////
///////// Add teacher CRUD Function


// var form = document.getElementById('teacherSubmitBUtton');
// form.addEventListener()

function onFormSubmit() {

    var retreivedFormData = retreiveNewTeacherData();
    newTeacherRecord(retreivedFormData);
}

function retreiveNewTeacherData() {
    var newTeacherData = {};
    newTeacherData["newTeacherName"] = document.getElementById("newTeacherName").value;
    newTeacherData["teacherProgram"] = document.getElementById("teacherProgram").value;
    newTeacherData["teacherQualification"] = document.getElementById("teacherQualification").value;
    newTeacherData["teacherCourse"] = document.getElementById("teacherCourse").value;
    newTeacherData["teacherEmail"] = document.getElementById("teacherEmail").value;

    return newTeacherData;

}


function newTeacherRecord(data) {
    var table = document.getElementById("teachersList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.newTeacherName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.teacherProgram;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.teacherQualification;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.teacherCourse;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.teacherEmail;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = "<a>Edit</a>";
    cell5.pro
        // cell1 = newRow.insertCell(6);
        // cell1.innerHTML = `<a>del</a>`;
}