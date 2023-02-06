// JavaScript tabulate utility
document.getElementById("tabulateButton").addEventListener("click", function () {
    var jsonText = document.getElementById("jsonText").value;
    var logs = JSON.parse(jsonText);
    var logTable = document.getElementById("logTable");
    logTable.innerHTML = "<tr><th>Type</th><th>Time</th><th>ID</th><th>Text</th><th>Source</th></tr>";

    for (var i = 0; i < logs[0].log.length; i++) {
        var log = logs[0].log[i];
        var row = logTable.insertRow();

        var typeCell = row.insertCell(0);
        typeCell.innerHTML = log.type;

        var timeCell = row.insertCell(1);
        timeCell.innerHTML = log.time;

        var idCell = row.insertCell(2);
        idCell.innerHTML = log.id;

        var textCell = row.insertCell(3);
        textCell.innerHTML = log.text;

        var sourceCell = row.insertCell(4);
        sourceCell.innerHTML = log.source;
    }
});
