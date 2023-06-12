fetch('./data.json').then(response => response.json()).then(
    data => {
        ;

        let dailyBtn = document.getElementById("dailyBtn");
        let weeklyBtn = document.getElementById("weeklyBtn");
        let monthlyBtn = document.getElementById("monthlyBtn");
        let currentHrsH1s = document.getElementsByClassName("currentHrs");
        let previousHrsPs = document.getElementsByClassName("previousHrs");
        let allTimeFramesBtns = document.querySelectorAll(".timeFramesBtn");
        console.log(allTimeFramesBtns);

        
        // Check whether a button is selected
        let btnIsClicked = false;
        let selectedBtn = false;
        for (let i = 0; i < allTimeFramesBtns.length; i++) {

            allTimeFramesBtns[i].addEventListener('click', () => {
                if (selectedBtn == true) {
                    selectedBtn.style.color = " ";
                }
                selectedBtn = allTimeFramesBtns[i];
                selectedBtn.style.color = "white"

                console.log(selectedBtn);

                // btnIsClicked = true;
                // if (btnIsClicked) {
                //     allTimeFramesBtns[i].style.color = "white";
                // } 
            })
            
        }
       
        
        

        dailyBtn.addEventListener('click', () => {
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

        weeklyBtn.addEventListener('click', () => {
            // Weekly time frame
            for (let i = 0; i < data.length; i++) {

                let weeklyCurrentHrs = data[i].timeframes.weekly.current;

                currentHrsH1s[i].innerText = weeklyCurrentHrs + 'hrs';

            }

            // Previous Weekly

            for (i = 0; i < data.length; i++) {

                let weeklyPreviousHrsPs = data[i].timeframes.weekly.previous;
                previousHrsPs[i].innerText = 'Previous ' + ' - ' + weeklyPreviousHrsPs + 'hrs'

            }

            

        })


        monthlyBtn.addEventListener('click', () => {
            // Monthly time frame
            for (let i = 0; i < data.length; i++) {

                let monthlyCurrentHrs = data[i].timeframes.monthly.current;

                currentHrsH1s[i].innerText = monthlyCurrentHrs + 'hrs';

            }

            // Previous Monthly

            for (i = 0; i < data.length; i++) {

                let monthlyPreviousHrsPs = data[i].timeframes.monthly.previous;
                previousHrsPs[i].innerText = 'Previous ' + ' - ' + monthlyPreviousHrsPs + 'hrs'

            }

        })

    })