function define_selection_in_duckduckgo() {
    // window.location = "https://duckduckgo.com?q=define " + window.getSelection().toString();
    var url = "https://api.wordnik.com/v4/word.json/integrity/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=YOURAPIKEY";
    $.get(url, showResult(res));
}

function showResult(res) {
    alert(res);
}