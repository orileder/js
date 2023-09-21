const func = () => {
    dt = new(Date)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[dt.getDay()];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = months[dt.getMonth()];
    return ('today is ' + day + ' the ' + dt.getDate() + ' of ' + month + ' ' + dt.getFullYear())
}
console.log(func());