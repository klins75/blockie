// _________________ CONSOLE ENTITIES _____________________
    let monOne            = document.querySelector('.monitor1 .screenValue');
    let monOneScreenKey   = document.querySelector('.monitor1 .screenKeyUpper');
    let monOneL1          = document.querySelector('.monitor1 .legend1');
    let monOneL1k         = document.querySelector('.monitor1 .legend1a');
    let monOneL2          = document.querySelector('.monitor1 .legend2');
    let monOneL2k         = document.querySelector('.monitor1 .legend2a');

    let monTwo            = document.querySelector('.monitor2 .screenValue');
    let monTwoScreenKey   = document.querySelector('.monitor2 .screenKeyUpper');
    let monTwoL1          = document.querySelector('.monitor2 .legend1');
    let monTwoL1k         = document.querySelector('.monitor2 .legend1a');
    let monTwoL2          = document.querySelector('.monitor2 .legend2');
    let monTwoL2k         = document.querySelector('.monitor2 .legend2a');

    let monThree          = document.querySelector('.monitor3 .screenValue');
    let monThreeScreenKey = document.querySelector('.monitor3 .screenKeyUpper');
    let monThreeL1          = document.querySelector('.monitor3 .legend1');
    let monThreeL1k         = document.querySelector('.monitor3 .legend1a');
    let monThreeL2          = document.querySelector('.monitor3 .legend2');
    let monThreeL2k         = document.querySelector('.monitor3 .legend2a');

    let monFour           = document.querySelector('.monitor4 .screenValue');
    let monFourScreenKey  = document.querySelector('.monitor4 .screenKeyUpper');
    let monFourL1          = document.querySelector('.monitor4 .legend1');
    let monFourL1k         = document.querySelector('.monitor4 .legend1a');
    let monFourL2          = document.querySelector('.monitor4 .legend2');
    let monFourL2k         = document.querySelector('.monitor4 .legend2a');

    let monFive           = document.querySelector('.monitor5 .screenValue');
    let monFiveScreenKey  = document.querySelector('.monitor5 .screenKeyUpper');
    let monFiveL1          = document.querySelector('.monitor5 .legend1');
    let monFiveL1k         = document.querySelector('.monitor5 .legend1a');
    let monFiveL2          = document.querySelector('.monitor5 .legend2');
    let monFiveL2k         = document.querySelector('.monitor5 .legend2a');

    let monSix            = document.querySelector('.monitor6 .screenValue');
    let monSixScreenKey   = document.querySelector('.monitor6 .screenKeyUpper');
    let monSixL1          = document.querySelector('.monitor6 .legend1');
    let monSixL1k         = document.querySelector('.monitor6 .legend1a');
    let monSixL2          = document.querySelector('.monitor6 .legend2');
    let monSixL2k         = document.querySelector('.monitor6 .legend2a');

    let monSeven          = document.querySelector('.monitor7 .screenValue');
    let monSevenScreenKey = document.querySelector('.monitor7 .screenKeyUpper');
    let monSevenL1          = document.querySelector('.monitor7 .legend1');
    let monSevenL1k         = document.querySelector('.monitor7 .legend1a');
    let monSevenL2          = document.querySelector('.monitor7 .legend2');
    let monSevenL2k         = document.querySelector('.monitor7 .legend2a');

    let monEight          = document.querySelector('.monitor8 .screenValue');
    let monEightScreenKey = document.querySelector('.monitor8 .screenKeyUpper');
    let monEightL1          = document.querySelector('.monitor8 .legend1');
    let monEightL1k         = document.querySelector('.monitor8 .legend1a');
    let monEightL2          = document.querySelector('.monitor8 .legend2');
    let monEightL2k         = document.querySelector('.monitor8 .legend2a');

    let monNine           = document.querySelector('.monitor9 .screenValue');
    let monNineScreenKey  = document.querySelector('.monitor9 .screenKeyUpper');
    let monNineL1          = document.querySelector('.monitor9 .legend1');
    let monNineL1k         = document.querySelector('.monitor9 .legend1a');
    let monNineL2          = document.querySelector('.monitor9 .legend2');
    let monNineL2k         = document.querySelector('.monitor9 .legend2a');

    let monTen            = document.querySelector('.monitor10 .screenValue');
    let monTenScreenKey   = document.querySelector('.monitor10 .screenKeyUpper');
    let monTenL1          = document.querySelector('.monitor10 .legend1');
    let monTenL1k         = document.querySelector('.monitor10 .legend1a');
    let monTenL2          = document.querySelector('.monitor10 .legend2');
    let monTenL2k         = document.querySelector('.monitor10 .legend2a');
// _________________________________________________________

function startConsole() {


    function highLight(elem, color) {
        let backgroundColor = window.getComputedStyle(elem, null).getPropertyValue("background-color"); 
        if(backgroundColor == 'rgb(255, 255, 255)') {
            elem.style.backgroundColor = color
        } else {
            elem.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }


    // let monOne = document.querySelector('.monitor1 .screenValue');
    // let monTwo = document.querySelector('.monitor2 .screenValue');
    // let monThree = document.querySelector('.monitor3 .screenValue');
    // let monFour = document.querySelector('.monitor4 .screenValue');

    let console1 = document.querySelector('.console1');
    document.addEventListener('click', monitorButtons);
    document.addEventListener('click', metrics);

    

    // buttons on the monitor, so far only control highlighting certain areas
    function monitorButtons(e) {
        let mod = e.target.value;
        let screen = document.querySelector(`.module${mod} .screenValue`);
        let thisButton = e.target.className;
       
        if (thisButton == 'monitorLabel') {
            highLight(screen, 'yellow');
        }
        if (thisButton == 'element1') {
            highLight(screen, 'blue');
        }
    }

} // function startThing() 's ending bracket. Leave alone.

function metrics() {
    setTimeout(function(){
        metrics();
    },100);

    monOne.innerHTML            = `Grid: ${grid.length} (no of columns)`;
    monOneScreenKey.innerHTML   = "grid[]";
    monOneL1.innerHTML          = "type: ";
    monOneL1k.innerHTML         = typeof(grid);
    monOneL2.innerHTML          = "length: ";
    monOneL2k.innerHTML         = grid.length;

    monTwo.innerHTML            = `GRID[${Math.floor(player1.x/GRID_WIDTH)}][${Math.floor(player1.y/GRID_HEIGHT)}]`;
    monTwoScreenKey.innerHTML   = "Current Location";
    monTwoL1.innerHTML          = `X Coord: ${player1.x}`;
    monTwoL1k.innerHTML         = `Y Coord: ${player1.y}`;
    monTwoL2.innerHTML          = "";
    monTwoL2k.innerHTML         = "";

    monThree.innerHTML          = mapModeEdit;
    monThreeScreenKey.innerHTML = "In Edit Mode?";
    monThreeL1.innerHTML             = "type: ";
    monThreeL1k.innerHTML            = typeof(mapModeEdit);
    monThreeL2.innerHTML             = " ";
    monThreeL2k.innerHTML            = "";

    // monFour.innerHTML           = ``;
    // monFourScreenKey.innerHTML  = "numberEntry().name";
    // monFourL1.innerHTML         = "type: ";
    // monFourL1k.innerHTML        = typeof(numberEntry);
    // monFourL2.innerHTML         = "length: ";
    // monFourL2k.innerHTML        = decimal.length;

    monFive.innerHTML           = mouseDown;
    monFiveScreenKey.innerHTML  = "mouse down?";
    // monFiveL1.innerHTML         = '';
    // monFiveL1k.innerHTML        = typeof(opType);
    // monFiveL2.innerHTML         = "length: ";
    // monFiveL2k.innerHTML        = numberEntry().length;

    monSix.innerHTML            = `mouseX: ${mouseMoveCoorX}, mouseY; ${mouseMoveCoorY}`;
    // monSixScreenKey.innerHTML   = "entries";
    // monSixL1.innerHTML          = "type: ";
    // monSixL1k.innerHTML         = typeof(entries);
    // monSixL2.innerHTML          = "length: ";
    // monSixL2k.innerHTML         = entries.length;

    monSeven.innerHTML          = eWhich;
    monSevenScreenKey.innerHTML = "eWhich";
    // monSevenL1.innerHTML        = "type: ";
    // monSevenL1k.innerHTML       = typeof(result);
    // monSevenL2.innerHTML        = "length: ";
    // monSevenL2k.innerHTML       = result.length;

    // monEight.innerHTML          = db;
    // monEightScreenKey.innerHTML = "indexedDB result";
    // monEightL1.innerHTML        = "type: ";
    // monEightL1k.innerHTML       = typeof(prevOp);
    // monEightL2.innerHTML        = "length: ";
    // monEightL2k.innerHTML       = prevOp.length;

    // monNine.innerHTML           = "";
    // monNineScreenKey.innerHTML  = "";
    // monNineL1.innerHTML         = "type: ";
    // monNineL1k.innerHTML        = '';
    // monNineL2.innerHTML         = "";
    // monNineL2k.innerHTML        = '';

    // monTen.innerHTML            = memoryOne;
    // monTenScreenKey.innerHTML   = "memoryOne";
    // monTenL1.innerHTML          = "type: ";
    // monTenL1k.innerHTML         = typeof(memoryOne);
    // monTenL2.innerHTML          = "length: ";
    // monTenL2k.innerHTML         = decimal.length;


}
// Metrics Updater
setTimeout(function(){
    metrics();
  }, 1000);