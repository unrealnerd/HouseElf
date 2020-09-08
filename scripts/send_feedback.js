function send_feedback() {
    $("#feedbackform").remove();

    var feedbackform = document.createElement('div');
    feedbackform.id = 'feedbackform';
    feedbackform.className = 'chat-popup form-container';


    var feedbackText = document.createElement('textarea')
    feedbackText.id = 'feedbackText'
    feedbackText.rows = 8;

    var feedbackSend = document.createElement('button');
    feedbackSend.innerText = 'Send';
    feedbackSend.id = 'feedbackSend';
    feedbackSend.className = 'send-feedback'

    var feedbackCancel = document.createElement('button');
    feedbackCancel.innerText = 'Cancel';
    feedbackCancel.id = 'feedbackCancel';
    feedbackCancel.className = 'cancel-feedback'

    feedbackform.appendChild(feedbackText);
    feedbackform.appendChild(feedbackSend);
    feedbackform.appendChild(feedbackCancel);

    document.querySelector('body').appendChild(feedbackform);
    $("#feedbackSend").click(function () {
        $("#feedbackform").hide();
        report($("#feedbackText").val());
        $("#feedbackform").remove();
    });
    $("#feedbackCancel").click(function () {
        $("#feedbackform").remove();
    });
}
function report(msg) {
    chrome.runtime.sendMessage({ command: 'screenshot', message: msg});
}; 