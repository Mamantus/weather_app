let time = document.getElementById("current-time");
let date = document.getElementById("current-date");


    setInterval(() => {

        let t = new Date();

        time.innerHTML = t.toLocaleTimeString();
        
    },1000)

    setInterval(() => {

        let d = new Date()

        date.innerHTML = d.toLocaleDateString();

        console.log(date)
        
    },1000)

    


    