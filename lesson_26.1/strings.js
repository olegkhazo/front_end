function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}

// ucFirst('вася');

function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes('viagra') || str.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}

// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");


function truncate(str, maxlength) {
    let adding = "...";
    if (str.length >= maxlength) {
        str = str.slice(0, maxlength) + adding;
    }
    return str;
}

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
// truncate("Всем привет!", 20);


function extractCurrencyValue(str) {
   return +str.slice(1);
}

console.log(extractCurrencyValue("$123"));