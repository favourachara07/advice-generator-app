const adviceId=document.querySelector('.advice_id')
const advice=document.querySelector('.advice')
const dice=document.querySelector('.circle')
const leftDoubleQuote = '\u201C'; // “
const rightDoubleQuote = '\u201D'; // ”

const getAdvice=()=>{
    function processData(data) {
        // Process the data received from the API
        console.log(data.slip)
        adviceId.textContent=`#${data.slip.id}`
        advice.textContent=`${leftDoubleQuote}${data.slip.advice}${rightDoubleQuote}`
    }

// Send the GET request
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Handle the JSON response
            processData(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        })};
getAdvice()
const newAdvice=()=>{
    getAdvice()
}