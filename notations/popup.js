const buttonClicked = () => {
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            createAlarm: true, 
            message: document.getElementById('messageInput').value,
            date: document.getElementById('dateInput').value,
            time: document.getElementById('timeInput').value},
            (response) => {
            console.log('message arrived');
        })
    })
    
    let message = document.getElementById('messageInput').value;
    let timeNow = new Date();
    let timeToSet = new Date(document.getElementById('dateInput').value + ' ' + document.getElementById('timeInput').value);
    let estimatedMiliseconds = timeToSet.getTime() - timeNow.getTime();
    
    chrome.alarms.create(message, {when: Date.now() + estimatedMiliseconds})
    
}

document.getElementById('submitButton').addEventListener('click', buttonClicked);








