
const interval = setInterval(() => {
    const header = document.querySelector('header')
    if(header) {
        clearInterval(interval)

        const input = document.createElement('select')

        var opt0 = document.createElement("option");
        opt0.innerText = "Normal"
        opt0.value = "1"
        input.add(opt0, input.options[0]);

        var opt1 = document.createElement("option");
        opt1.innerText = "1.25x"
        opt1.value = "1.25"
        input.add(opt1, input.options[1]);

        var opt2 = document.createElement("option");
        opt2.innerText = "1.5x"
        opt2.value = "1.5"
        input.add(opt2, input.options[2]);

        var opt3 = document.createElement("option");
        opt3.innerText = "1.75x"
        opt3.value = "1.75"
        input.add(opt3, input.options[3]);

        var opt4 = document.createElement("option");
        opt4.innerText = "2x"
        opt4.value = "2"
        input.add(opt4, input.options[4]);
        
        input.classList.add('advanced-button')

        input.addEventListener('change', (e) => {
            const audios = document.querySelectorAll('audio')

            audios.forEach((audio) => {
                audio.playbackRate = e.target.value
            })
        })
        header.appendChild(input)
    }
}, 1000)