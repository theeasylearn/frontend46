function $(tagId) {
    return document.getElementById(tagId);
}
let val = function (tagId, text = undefined) {
    if (text === undefined) {
        return $(tagId).value;
    }
    else {
        $(tagId).value = text;
    }
}