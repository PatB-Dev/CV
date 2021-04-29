
var mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {


/********************************************************/
    /*Si la taille de l'écran est superieur à 700px => le hover ouvre en auto les titres (.titre)*/
    if (mediaQuery.matches) {
        $('.titre').mouseenter(function () {
            $(this).children('.deroulant').fadeToggle("slow");
            $(this).width("auto");
        })
        $('.titre1').click(function () {
            $(this).children('.deroulant').fadeToggle("slow");
            $(this).width("auto");
        })

    /*Sinon il faut cliquer pour la version en dessous de 700px*/
    } else {
        $('.titre, .titre1').click(function () {
            $(this).children('.deroulant').fadeToggle("slow");
            
        })
    }
}
/********************************************************/

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);