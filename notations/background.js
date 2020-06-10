chrome.alarms.onAlarm.addListener(function( alarm ) {
    console.log("Got an alarm!", alarm);
    let notifOpt = {
                type: 'basic',
                title: 'Your remind note',
                iconUrl: 'icon2.png',
                message: alarm.name,
                contextMessage: 'Notification Extension',
                buttons: [{
                    title: 'confirmed',
                    iconUrl: 'checkbox.jpg'
                }],
                requireInteraction: true
            }
            
            chrome.notifications.create('notificationId', notifOpt, function(id){
            })
  });
 
let closeNotification = () => {
    chrome.notifications.clear('notificationId');
}

chrome.notifications.onButtonClicked.addListener(closeNotification);