function printTable(name){
        var printContent = document.getElementById(name).innerHTML;
        var originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent;

        window.print();

        document.body.innerHTML = originalContent;
}
