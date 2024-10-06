let text = document.getElementById('box-text')

setInterval(function time(){
    
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    if (hr >= 0 &&  hr < 10) hr = '0'+hr
    if (seg >= 0 && seg < 10) seg = '0'+seg
    if (min >= 0 && min <10) min = '0'+min

    text.textContent = `RavenSense | ${hr} : ${min} : ${seg}`
})

