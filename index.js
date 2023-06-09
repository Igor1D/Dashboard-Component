fetch('./data.json').then(response => response.json()).then(
    data => {;

        let dailyBtn = document.getElementsByClassName("dailyBtn");
        let weeklyBtn = document.getElementsByClassName("weeklyBtn");
        let monthlyBtn = document.getElementsByClassName("monthlyBtn");
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

    





        // // Weekly time frame
        
        // for (let i = 0; i < data.length; i++) {

        // let weeklyCurrentHrs = data[i].timeframes.weekly.current;
        
    
        // currentHrsH1s[i].innerText = weeklyCurrentHrs + 'hrs';
        // }

        // // Previous weekly

        // for (i = 0; i < data.length; i++) {

        // let weeklyPreviousHrsPs = data[i].timeframes.weekly.previous;
        // previousHrsPs[i].innerText = 'Previous ' + ' - ' + weeklyPreviousHrsPs + 'hrs'

        // }

        // // Monthly time frame

        // for (let i = 0; i < data.length; i++) {

        // let monthlyCurrentHrs = data[i].timeframes.monthly.current;
            
        
        // currentHrsH1s[i].innerText = monthlyCurrentHrs + 'hrs';
        // }
    
        // // Previous monthly
    
        // for (i = 0; i < data.length; i++) {
    
        // let monthlyPreviousHrsPs = data[i].timeframes.monthly.previous;
        // previousHrsPs[i].innerText = 'Previous ' + ' - ' + monthlyPreviousHrsPs + 'hrs'
    
        // }

























    })