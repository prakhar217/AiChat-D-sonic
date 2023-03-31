console.log("inside js file")
let glance;
let eventTime;
let eventPlace;
let promotion = document.getElementById('promotion');
const id = document.getElementById('responseId')


function generateResponse(){
    glance = document.getElementById('glance').value
    eventTime = document.getElementById('eventTime').value
    eventPlace = document.getElementById('eventPlace').value
    console.log("response generated");
    console.log("glance ", glance);
    console.log("eventTime", eventTime);
    console.log("eventPlace", eventPlace);
    console.log("completed");

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-KEY': '1651d11b-ba44-4a96-81d3-ca1305b359c1'
        },
        body: JSON.stringify({ enable_google_results: 'true', enable_memory: false, input_text: `Generate a promotion of ${glance} , event is from ${eventTime} at ${eventPlace}, so write accordingly and make it influencing` })
    };

    fetch('https://api.writesonic.com/v2/business/content/chatsonic?engine=premium', options)
        .then(response => response.json())
        .then((response) => {
            // id.innerHTML = response.message
            promotion.value = response.message
            console.log(response.detail);
        })
        .catch(err => console.error(err));

}