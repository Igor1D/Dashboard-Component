fetch('./data.json').then(response => response.json()).then(
    data => { console.log(data);
        let currentHrsH1s = document.getElementsByClassName("currentHrs");

        let dailyCurrentHrs = data[0].timeframes.daily.current;
        currentHrsH1s[0].innerText = dailyCurrentHrs + 'hrs';




















    })