fetch('./data.json').then(response => response.json()).then(
    data => {;

        let currentHrsH1s = document.getElementsByClassName("currentHrs");
        let previousHrsPs = document.getElementsByClassName("previousHrs");
        

        // Daily time frame
        for (let i = 0; i < data.length; i++) {

        let dailyCurrentHrs = data[i].timeframes.daily.current;

        currentHrsH1s[i].innerText = dailyCurrentHrs + 'hrs';

    }

        // Previous daily

        for (i = 0; i < data.length; i++) {

        let dailyPreviousHrsPs = data[i].timeframes.daily.previous;
        previousHrsPs[i].innerText = 'Previous ' + ' - ' + dailyPreviousHrsPs + 'hrs'
        
    }

























    })