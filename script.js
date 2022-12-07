const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const inp = document.getElementById('input-box');
const form = document.getElementById('search-form');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated');
}

recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    inp.value = transcript;
    form.submit();
    inp.value = "";
    console.log(transcript);
    inp.placeholder = "You searched for "+ transcript;
};

btn.addEventListener('click', () => {
    recognition.start();
    if ($searchText.value !== '') {
        var url = "https://www.amazon.com/s" + $searchText.value;
        window.open(url, '_blank');
        recognition.start();
    }
});