console.log("inside js file")
let guestname;
let designation;
let qualities;
let hotelName;
let signature;
let body = document.getElementById('body');
const id = document.getElementById('responseId')


function generateResponse(){
    guestname = document.getElementById('guestName').value
    designation = document.getElementById('designation').value
    signature = document.getElementById('signature').value
    qualities = document.getElementById('qualities').value
    hotelName = document.getElementById('hotelName').value
    console.log("response generated");
    console.log("guestname ", guestname);
    console.log("designation", designation);
    console.log("qualities", qualities);
    console.log("hotelName", hotelName);
    console.log("completed");

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-KEY': '1651d11b-ba44-4a96-81d3-ca1305b359c1'
        },
        body: JSON.stringify({ enable_google_results: 'true', enable_memory: false, input_text: `Generate a welcome letter for our VVIP guest ${guestname} , i am ${signature}, ${designation} of the ${hotelName},${qualities ? 'our guest is '+qualities : ''} so write accordingly and make it engaging` })
    };

    fetch('https://api.writesonic.com/v2/business/content/chatsonic?engine=premium', options)
        .then(response => response.json())
        .then((response) => {
            // id.innerHTML = response.message
            body.value = response.message
            console.log(`Generate a welcome letter for our VVIP guest ${guestname} , i am ${designation} of the ${hotelName},${qualities ? 'our guest is '+qualities : ''} so write accordingly and make it engaging`);
            console.log(response.detail);
        })
        .catch(err => console.error(err));

}
