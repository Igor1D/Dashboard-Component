fetch('./data.json').then(response => response.json()).then(
    data => {
        ;
        let currentHrsH1s = document.getElementsByClassName("currentHrs");
        let previousHrsPs = document.getElementsByClassName("previousHrs");
        let allTimeFramesBtns = document.querySelectorAll(".timeFramesBtn");


        for (let i = 0; i < allTimeFramesBtns.length; i++) {

            allTimeFramesBtns[i].addEventListener('click', () => {

                // Which btn is clicked

                let timeStrings = ['daily', 'weekly', 'monthly'];
                for (let l = 0; l < allTimeFramesBtns.length; l++) {

                    allTimeFramesBtns[l].classList.remove('activeBtn');
                }

                allTimeFramesBtns[i].classList.add('activeBtn');

                //Current

                for (let j = 0; j < data.length; j++) {

                    let currentHrs = data[j].timeframes[timeStrings[i]].current;
                    currentHrsH1s[j].innerText = currentHrs + 'hrs';

                }

                // Previous 

                for (k = 0; k < data.length; k++) {

                    let previousHrs = data[k].timeframes[timeStrings[i]].previous;
                    previousHrsPs[k].innerText = 'Previous ' + ' - ' + previousHrs + 'hrs'
                }
            })
        }
    });