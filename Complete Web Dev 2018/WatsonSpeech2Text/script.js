var token = {
  "url": "https://stream.watsonplatform.net/speech-to-text/api",
  "username": "a71e74ed-b149-40d2-afad-e3b144f2ca2b",
  "password": "PHOL3Oj0epIp"
}

fetch('https://stream.watsonplatform.net/speech-to-text/api')
.then(function(response) {
    return response.text();
}).then(function(_token) {
    token = _token;
}).catch(function(error) {
    console.log(error);
});


document.querySelector('#button').onclick = function () {
    var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        outputElement: '#output' // CSS selector or DOM Element
    });

    stream.on('error', function(err) {
        console.log(err);
    });

    document.querySelector('#stop').onclick = function() {
      stream.stop();
    };
};
