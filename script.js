(function () { // adds links in the table of contents
    var e = document.getElementById("tableOfContents"),
        x = document.getElementsByTagName("h1"),
        ix = 0;

    for (let i of x) {
        let n = document.createElement("li"),
            m = document.createElement("a");

        m.name = ++ix;
        i.parentElement.insertBefore(m, i);

        {
            let c = document.createElement("a");
            c.href = "#" + ix;
            c.innerHTML = i.innerHTML;
            n.appendChild(c);
        }

        e.appendChild(n);
    }
}());

// TPYJKEJ JASH CODEWD
document.getElementById("demo").innerHTML = "Roxasbtg is kewl";