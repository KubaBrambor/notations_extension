chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if(request.createAlarm){
            console.log(request.time);
            console.log(request.date);
            console.log(new Date(request.date + ' ' + request.time).getTime())
            console.log(new Date().getTime());
            console.log(new Date(request.date + ' ' + request.time).getTime() - new Date().getTime())
        }
        setTimeout(function(){alert(request.message)}, new Date(request.date + ' ' + request.time).getTime() - new Date().getTime());
    }
)

console.log('working content.js')