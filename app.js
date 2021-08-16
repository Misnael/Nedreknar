setInterval(function(){



    let TimeNow = new Date();

    let goal = new Date("12/31/2021");

    let TimeLeft = goal.getTime() - TimeNow.getTime();

    document.getElementById("Sekund").innerHTML = "Sekunder: " + Math.floor( (TimeLeft % (1000 * 60)) / 1000);

    document.getElementById("Minut").innerHTML = "Minuter: " + Math.floor( (TimeLeft % (1000 * 60 * 60)) / (1000 * 60) );

    document.getElementById("Timme").innerHTML = "Timmar: " + Math.floor( (TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );

    document.getElementById("Dag").innerHTML = "Dagar: " + Math.floor(TimeLeft / (1000 * 60 * 60 * 24) );


}, 1000);

