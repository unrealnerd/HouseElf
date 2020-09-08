function chat_with_elf() {
    var person = {
        firstName: "Arjun",
        lastName: "Shetty",
        blogURL: "http://bitsmonkey.in"
    };
    var fetchTemplate = async () => {
        const path = chrome.runtime.getURL("template.html");
        const response = await fetch(path);
        const template = await response.text();
        var html = Mustache.render(template, person);
        var div = document.createElement("div");
        div.innerHTML = html;
        document.body.appendChild(div);
    }

    fetchTemplate();
}


