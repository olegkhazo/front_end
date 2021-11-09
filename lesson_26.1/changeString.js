function showVerticalMessage(str) {
    if ( !str ) return;
    str = str[0].toUpperCase() + str.slice(1, 10);
    for ( let i = 0; i < str.length; i++ ) {
        console.log(str[i]);
    }
}
showVerticalMessage('');
