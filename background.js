// chrome.runtime.onInstalled.addListener(function () {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([duckduckgoHomePage]);
//     });
// });

// var duckduckgoHomePage = {
//     conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { 
//                 urlMatches: '*duckduckgo.com*', schemes: ['https'] 
//             },
//         })
//     ],
//     actions: [new chrome.declarativeContent.ShowPageAction()]
// };

// chrome.runtime.onMessage.addListener(
//     function (message, callback) {
//         if (message == "hello") {
//             // chrome.tabs.executeScript({
//             //     file: './scripts/search_google.js'
//             // });
//             return 'Hello from the other side!';
//         }
//     });
