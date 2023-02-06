// JavaScript filter functionality
document.getElementById("filterInput").addEventListener("keyup", function () {
    var filterValue = document.getElementById("filterInput").value.toUpperCase();
    var table = document.getElementById("logTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var type = rows[i].getElementsByTagName("td")[0];
        var time = rows[i].getElementsByTagName("td")[1];
        var id = rows[i].getElementsByTagName("td")[2];
        var text = rows[i].getElementsByTagName("td")[3];
        var source = rows[i].getElementsByTagName("td")[4];

        if (type.innerHTML.toUpperCase().indexOf(filterValue) > -1 ||
            time.innerHTML.toUpperCase().indexOf(filterValue) > -1 ||
            id.innerHTML.toUpperCase().indexOf(filterValue) > -1 ||
            text.innerHTML.toUpperCase().indexOf(filterValue) > -1 ||
            source.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});
