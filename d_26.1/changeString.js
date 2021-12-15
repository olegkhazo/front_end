function showVerticalMessage(str) {
    let finalString = "";

    const FIRST_LETTER = "м";
    const MAX_LENGTH = 10;

    if (str[0] === FIRST_LETTER) {
        finalString = str[0].toUpperCase() + str.slice(1);
    }

    if (str.length > MAX_LENGTH) {
        finalString = str.substr(0, MAX_LENGTH);
    }

    for(let key of finalString) {
        console.log(key);
    }
};

showVerticalMessage('марафон');
