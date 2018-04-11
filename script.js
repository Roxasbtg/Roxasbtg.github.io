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
(function() { // resizes all iframes based on content height
    var e = document.getElementsByTagName("iframe"); // get every iframe
    for (let i of e) { // go through all iframes
        if (i.getAttribute('noanimationresize') !== null) continue; // if 'noanimationresize' exists, skip element
        i.setAttribute("scrolling", "no"); // don't show scrollbar while animating
        i.addEventListener("load", function() { // when content loads,
            this.style.height = Math.max( // set iframe to content height
                this.contentWindow.document.documentElement.scrollHeight,
                this.contentWindow.document.body.scrollHeight
            ) + "px";
            this.style.opacity = 1; // make visible

            this.addEventListener('transitionend', function() { // when animation is doen
                this.setAttribute("scrolling", "auto"); // allow scrolling if needed
            });
        });
    }
}());

// TPYJKEJ JASH CODEWD
document.getElementById("demo").innerHTML = "Roxasbtg is kewl";