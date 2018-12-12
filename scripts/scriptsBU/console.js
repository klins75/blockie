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
    monTwoScreenKey.innerHTML   = "Current Grid";
    monTwoL1.innerHTML          = '';
    monTwoL1k.innerHTML         = '';
    monTwoL2.innerHTML          = "";
    monTwoL2k.innerHTML         = "";

    monThree.innerHTML          = `X: ${player1.x}, Y: ${player1.y}`;
    monThreeScreenKey.innerHTML = "Current in x, y";
    // monThreeL1.innerHTML             = "type: ";
    // monThreeL1k.innerHTML            = typeof(mapModeEdit);
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

    monSeven.innerHTML          = busy;
    monSevenScreenKey.innerHTML = "busy t/f";
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

  
  <div id="col2">
  <div id="myConsole">
    <!-- the console -->
    <div class = "console1">
        <div class = "row" id = "row1">   
        
            <div class = "module module1">
            
                <div class = "monitor monitor1">

                    <div class = "screen">
                        
                        <div class = "screenKey">
                            <div class= "screenKeyUpper">
                                <!-- little gray label in white area-->
                            </div>
                            
                            <div class = "screenKeyLower">
                                <!-- white screen small area to the left -->
                            </div>
                        </div>

                        <div class = "screenValue">
                            <!-- white screen large area to the right -->
                        </div>

                    </div>
                    
                    <div class = "legend"> <!-- little green screen -->
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="1">1</button>
                    <button class = "element2" type="number" value="2">2</button>
                    <button class = "element3" type="number" value="3">3</button>
                    <button class = "element4" type="number" value="4">4</button>
                    <button class = "element5" type="number" value="5">5</button>
                    <button class = "element6" type="number" value="6">6</button>
                    <button class = "element7" type="number" value="7">7</button>
                    <button class = "element8" type="number" value="8">8</button>
                    <button class = "element9" type="number" value="9">9</button>
                    <button class = "element10" type="number" value="0">0</button>
                    <button class = "element11" type="number" value="10">A</button> <!-- INVISIBLE -->
                    <button class = "element12" type="number" value="11">B</button> <!-- INVISIBLE -->
                    <button class = "element13" type="number" value="12">?</button>
                    <button class = "element14" type="number" value="13">D</button> <!-- INVISIBLE -->
                    <button class = "element15" type="number" value="14">E</button> <!-- INVISIBLE -->

                    <button class="monitorLabel" type="number" value="1">1</button>
                            
                </div>
                
                <div class = "label"></div>
            </div>
            
            <div class = "module module6">
                <div class = "monitor monitor6">
                    <div class = "screen">
                        <div class = "screenKey">
                                <div class= "screenKeyUpper">
                                    
                                </div>
                                    
                                <div class = "screenKeyLower"></div>
                            </div>
        
                            <div class = "screenValue">
                                
                            </div>
                    </div>
                        
                    <div class = "legend">
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="6"></button>
                    <button class = "element2" type="number" value="6"></button>
                    <button class = "element3" type="number" value="6"></button>
                    <button class = "element4" type="number" value="6"></button>
                    <button class = "element5" type="number" value="6"></button>
                    <button class = "element6" type="number" value="6"></button>
                    <button class = "element7" type="number" value="6"></button>
                    <button class = "element8" type="number" value="6"></button>
                    <button class = "element9" type="number" value="6"></button>
                    <button class = "element10" type="number" value="6"></button>
                    <button class = "element11" type="number" value="6"></button>
                    <button class = "element12" type="number" value="6"></button>
                    <button class = "element13" type="number" value="6"></button>
                    <button class = "element14" type="number" value="6"></button>
                    <button class = "element15" type="number" value="6"></button>

                    <button class="monitorLabel" type="number" value="6">6</button>
                </div>
                <div class = "label">

                </div>
            </div>
            
        </div>
        <div class = "row" id = "row2">   
        
            <div class = "module module2">
            
                <div class = "monitor monitor2">

                    <div class = "screen">
                        
                        <div class = "screenKey">
                            <div class= "screenKeyUpper">
                                
                            </div>
                                
                            <div class = "screenKeyLower"></div>
                        </div>

                        <div class = "screenValue">
                            
                        </div>

                    </div>
                    
                    <div class = "legend">
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="2"></button>
                    <button class = "element2" type="number" value="2"></button>
                    <button class = "element3" type="number" value="2"></button>
                    <button class = "element4" type="number" value="2"></button>
                    <button class = "element5" type="number" value="2"></button>
                    <button class = "element6" type="number" value="2"></button>
                    <button class = "element7" type="number" value="2"></button>
                    <button class = "element8" type="number" value="2"></button>
                    <button class = "element9" type="number" value="2"></button>
                    <button class = "element10" type="number" value="2"></button>
                    <button class = "element11" type="number" value="2"></button>
                    <button class = "element12" type="number" value="2"></button>
                    <button class = "element13" type="number" value="2"></button>
                    <button class = "element14" type="number" value="2"></button>
                    <button class = "element15" type="number" value="2"></button>

                    <button class="monitorLabel" type="number" value="2">2</button>
                                
                </div>
                
                <div class = "label"></div>
            </div>
            
            <div class = "module module7">
            <div class = "monitor monitor7">
                <div class = "screen">
                    <div class = "screenKey">
                        <div class= "screenKeyUpper">
                            
                        </div>
                            
                        <div class = "screenKeyLower"></div>
                    </div>

                    <div class = "screenValue">
                        
                    </div>
                </div>
                        
                <div class = "legend">
                    <div class =  "legend1 legendKey">
                        
                    </div>
                    <div class = "legend1a legendValue">
                        
                    </div>
                    <div class =  "legend2 legendKey">
                        
                    </div>
                    <div class = "legend2a legendValue">
                        
                    </div>
                    <div class =  "legend3 legendKey">
                        
                    </div>
                    <div class = "legend3a legendValue">
                        
                    </div>
                    <div class =  "legend4 legendKey">
                        
                    </div>
                    <div class = "legend4a legendValue">
                        
                    </div>
                    <div class =  "legend5 legendKey">
                        
                    </div>
                    <div class = "legend5a legendValue">
                        
                    </div>
                    <div class =  "legend6 legendKey">
                        
                    </div>
                    <div class = "legend6a legendValue">
                        
                    </div>
                    <div class =  "legend7 legendKey">
                        
                    </div>
                    <div class = "legend7a legendValue">
                        
                    </div>
                    <div class =  "legend8 legendKey">
                        
                    </div>
                    <div class = "legend8a legendValue">
                        
                    </div>
                    <div class =  "legend9 legendKey">
                        
                    </div>
                    <div class = "legend9a legendValue">
                        
                    </div>
                </div>
                
                <button class = "element1" type="number" value="7"></button>
                <button class = "element2" type="number" value="7"></button>
                <button class = "element3" type="number" value="7"></button>
                <button class = "element4" type="number" value="7"></button>
                <button class = "element5" type="number" value="7"></button>
                <button class = "element6" type="number" value="7"></button>
                <button class = "element7" type="number" value="7"></button>
                <button class = "element8" type="number" value="7"></button>
                <button class = "element9" type="number" value="7"></button>
                <button class = "element10" type="number" value="7"></button>
                <button class = "element11" type="number" value="7"></button>
                <button class = "element12" type="number" value="7"></button>
                <button class = "element13" type="number" value="7"></button>
                <button class = "element14" type="number" value="7"></button>
                <button class = "element15" type="number" value="7"></button>

                <button class="monitorLabel" type="number" value="7">7</button>
            </div>
            <div class = "label">

            </div>
            </div>
                
            </div>

        <div class = "row" id = "row3">   

            <div class = "module module3">
            
                <div class = "monitor monitor3">

                    <div class = "screen">
                        
                        <div class = "screenKey">
                            <div class= "screenKeyUpper">
                                
                            </div>
                                
                            <div class = "screenKeyLower"></div>
                        </div>

                        <div class = "screenValue">
                            
                        </div>

                    </div>
                    
                    <div class = "legend">
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="3"></button>
                    <button class = "element2" type="number" value="3"></button>
                    <button class = "element3" type="number" value="3"></button>
                    <button class = "element4" type="number" value="3"></button>
                    <button class = "element5" type="number" value="3"></button>
                    <button class = "element6" type="number" value="3"></button>
                    <button class = "element7" type="number" value="3"></button>
                    <button class = "element8" type="number" value="3"></button>
                    <button class = "element9" type="number" value="3"></button>
                    <button class = "element10" type="number" value="3"></button>
                    <button class = "element11" type="number" value="3"></button>
                    <button class = "element12" type="number" value="3"></button>
                    <button class = "element13" type="number" value="3"></button>
                    <button class = "element14" type="number" value="3"></button>
                    <button class = "element15" type="number" value="3"></button>

                    <button class="monitorLabel" type="number" value="3">3</button>
                                
                </div>
                
                <div class = "label"></div>
            </div>
            
                <div class = "module module8">
                    <div class = "monitor monitor8">
                        <div class = "screen">
                            <div class = "screenKey">
                                <div class= "screenKeyUpper">
                                    
                                </div>
                                        
                                <div class = "screenKeyLower"></div>
                            </div>
            
                            <div class = "screenValue">
                                
                            </div>
                        </div>
                                
                        <div class = "legend">
                            <div class =  "legend1 legendKey">
                                
                            </div>
                            <div class = "legend1a legendValue">
                                
                            </div>
                            <div class =  "legend2 legendKey">
                                
                            </div>
                            <div class = "legend2a legendValue">
                                
                            </div>
                            <div class =  "legend3 legendKey">
                                
                            </div>
                            <div class = "legend3a legendValue">
                                
                            </div>
                            <div class =  "legend4 legendKey">
                                
                            </div>
                            <div class = "legend4a legendValue">
                                
                            </div>
                            <div class =  "legend5 legendKey">
                                
                            </div>
                            <div class = "legend5a legendValue">
                                
                            </div>
                            <div class =  "legend6 legendKey">
                                
                            </div>
                            <div class = "legend6a legendValue">
                                
                            </div>
                            <div class =  "legend7 legendKey">
                                
                            </div>
                            <div class = "legend7a legendValue">
                                
                            </div>
                            <div class =  "legend8 legendKey">
                                
                            </div>
                            <div class = "legend8a legendValue">
                                
                            </div>
                            <div class =  "legend9 legendKey">
                                
                            </div>
                            <div class = "legend9a legendValue">
                                
                            </div>
                        </div>
                        
                        <button class = "element1" type="number" value="8"></button>
                        <button class = "element2" type="number" value="8"></button>
                        <button class = "element3" type="number" value="8"></button>
                        <button class = "element4" type="number" value="8"></button>
                        <button class = "element5" type="number" value="8"></button>
                        <button class = "element6" type="number" value="8"></button>
                        <button class = "element7" type="number" value="8"></button>
                        <button class = "element8" type="number" value="8"></button>
                        <button class = "element9" type="number" value="8"></button>
                        <button class = "element10" type="number" value="8"></button>
                        <button class = "element11" type="number" value="8"></button>
                        <button class = "element12" type="number" value="8"></button>
                        <button class = "element13" type="number" value="8"></button>
                        <button class = "element14" type="number" value="8"></button>
                        <button class = "element15" type="number" value="8"></button>

                        <button class="monitorLabel" type="number" value="8">8</button>
                    </div>
                    <div class = "label">
        
                    </div>
                </div>
                
            </div> 
            
        <div class = "row" id = "row4">   

                <div class = "module module4">
                
                    <div class = "monitor monitor4">
        
                        <div class = "screen">
                            
                            <div class = "screenKey">
                                <div class= "screenKeyUpper">
                                    
                                </div>
                                    
                                <div class = "screenKeyLower"></div>
                            </div>
        
                            <div class = "screenValue">
                                
                            </div>
        
                        </div>
                        
                        <div class = "legend">
                            <div class =  "legend1 legendKey">
                                
                            </div>
                            <div class = "legend1a legendValue">
                                
                            </div>
                            <div class =  "legend2 legendKey">
                                
                            </div>
                            <div class = "legend2a legendValue">
                                
                            </div>
                            <div class =  "legend3 legendKey">
                                
                            </div>
                            <div class = "legend3a legendValue">
                                
                            </div>
                            <div class =  "legend4 legendKey">
                                
                            </div>
                            <div class = "legend4a legendValue">
                                
                            </div>
                            <div class =  "legend5 legendKey">
                                
                            </div>
                            <div class = "legend5a legendValue">
                                
                            </div>
                            <div class =  "legend6 legendKey">
                                
                            </div>
                            <div class = "legend6a legendValue">
                                
                            </div>
                            <div class =  "legend7 legendKey">
                                
                            </div>
                            <div class = "legend7a legendValue">
                                
                            </div>
                            <div class =  "legend8 legendKey">
                                
                            </div>
                            <div class = "legend8a legendValue">
                                
                            </div>
                            <div class =  "legend9 legendKey">
                                
                            </div>
                            <div class = "legend9a legendValue">
                                
                            </div>
                        </div>
                        
                        <button class = "element1" type="number" value="4"></button>
                        <button class = "element2" type="number" value="4"></button>
                        <button class = "element3" type="number" value="4"></button>
                        <button class = "element4" type="number" value="4"></button>
                        <button class = "element5" type="number" value="4"></button>
                        <button class = "element6" type="number" value="4"></button>
                        <button class = "element7" type="number" value="4"></button>
                        <button class = "element8" type="number" value="4"></button>
                        <button class = "element9" type="number" value="4"></button>
                        <button class = "element10" type="number" value="4"></button>
                        <button class = "element11" type="number" value="4"></button>
                        <button class = "element12" type="number" value="4"></button>
                        <button class = "element13" type="number" value="4"></button>
                        <button class = "element14" type="number" value="4"></button>
                        <button class = "element15" type="number" value="4"></button>
        
                        <button class="monitorLabel" type="number" value="4">4</button>
                                    
                    </div>
                    
                    <div class = "label"></div>
                </div>
                
                <div class = "module module9">
                    <div class = "monitor monitor9">
                        <div class = "screen">
                            <div class = "screenKey">
                                <div class= "screenKeyUpper">
                                    
                                </div>
                                        
                                <div class = "screenKeyLower"></div>
                            </div>
            
                            <div class = "screenValue">
                                
                            </div>
                        </div>
                            
                    <div class = "legend">
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="9"></button>
                    <button class = "element2" type="number" value="9"></button>
                    <button class = "element3" type="number" value="9"></button>
                    <button class = "element4" type="number" value="9"></button>
                    <button class = "element5" type="number" value="9"></button>
                    <button class = "element6" type="number" value="9"></button>
                    <button class = "element7" type="number" value="9"></button>
                    <button class = "element8" type="number" value="9"></button>
                    <button class = "element9" type="number" value="9"></button>
                    <button class = "element10" type="number" value="9"></button>
                    <button class = "element11" type="number" value="9"></button>
                    <button class = "element12" type="number" value="9"></button>
                    <button class = "element13" type="number" value="9"></button>
                    <button class = "element14" type="number" value="9"></button>
                    <button class = "element15" type="number" value="9"></button>

                    <button class="monitorLabel" type="number" value="9">9</button>
                </div>
                <div class = "label">

                </div>
            </div>
                
            </div>

        <div class = "row" id = "row5">   

            <div class = "module module5">
            
                <div class = "monitor monitor5">

                    <div class = "screen">
                        
                        <div class = "screenKey">
                            <div class= "screenKeyUpper">
                                
                            </div>
                                
                            <div class = "screenKeyLower"></div>
                        </div>

                        <div class = "screenValue">
                            
                        </div>

                    </div>
                    
                    <div class = "legend">
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="5"></button>
                    <button class = "element2" type="number" value="5"></button>
                    <button class = "element3" type="number" value="5"></button>
                    <button class = "element4" type="number" value="5"></button>
                    <button class = "element5" type="number" value="5"></button>
                    <button class = "element6" type="number" value="5"></button>
                    <button class = "element7" type="number" value="5"></button>
                    <button class = "element8" type="number" value="5"></button>
                    <button class = "element9" type="number" value="5"></button>
                    <button class = "element10" type="number" value="5"></button>
                    <button class = "element11" type="number" value="5"></button>
                    <button class = "element12" type="number" value="5"></button>
                    <button class = "element13" type="number" value="5"></button>
                    <button class = "element14" type="number" value="5"></button>
                    <button class = "element15" type="number" value="5"></button>

                    <button class="monitorLabel" type="number" value="5">5</button>
                                
                </div>
                
                <div class = "label"></div>
            </div>
            
            <div class = "module module10">
                <div class = "monitor monitor10">
                    <div class = "screen">
                            <div class = "screenKey">
                        <div class= "screenKeyUpper">
                            
                        </div>
                                
                        <div class = "screenKeyLower"></div>
                        </div>

                        <div class = "screenValue">
                            
                        </div>
                    </div>
                        
                    <div class = "legend">
                        <div class =  "legend1 legendKey">
                            
                        </div>
                        <div class = "legend1a legendValue">
                            
                        </div>
                        <div class =  "legend2 legendKey">
                            
                        </div>
                        <div class = "legend2a legendValue">
                            
                        </div>
                        <div class =  "legend3 legendKey">
                            
                        </div>
                        <div class = "legend3a legendValue">
                            
                        </div>
                        <div class =  "legend4 legendKey">
                            
                        </div>
                        <div class = "legend4a legendValue">
                            
                        </div>
                        <div class =  "legend5 legendKey">
                            
                        </div>
                        <div class = "legend5a legendValue">
                            
                        </div>
                        <div class =  "legend6 legendKey">
                            
                        </div>
                        <div class = "legend6a legendValue">
                            
                        </div>
                        <div class =  "legend7 legendKey">
                            
                        </div>
                        <div class = "legend7a legendValue">
                            
                        </div>
                        <div class =  "legend8 legendKey">
                            
                        </div>
                        <div class = "legend8a legendValue">
                            
                        </div>
                        <div class =  "legend9 legendKey">
                            
                        </div>
                        <div class = "legend9a legendValue">
                            
                        </div>
                    </div>
                    
                    <button class = "element1" type="number" value="10"></button>
                    <button class = "element2" type="number" value="10"></button>
                    <button class = "element3" type="number" value="10"></button>
                    <button class = "element4" type="number" value="10"></button>
                    <button class = "element5" type="number" value="10"></button>
                    <button class = "element6" type="number" value="10"></button>
                    <button class = "element7" type="number" value="10"></button>
                    <button class = "element8" type="number" value="10"></button>
                    <button class = "element9" type="number" value="10"></button>
                    <button class = "element10" type="number" value="10"></button>
                    <button class = "element11" type="number" value="10"></button>
                    <button class = "element12" type="number" value="10"></button>
                    <button class = "element13" type="number" value="10"></button>
                    <button class = "element14" type="number" value="10"></button>
                    <button class = "element15" type="number" value="10"></button>

                    <button class="monitorLabel" type="number" value="10">10</button>
                </div>
                <div class = "label">

                </div>
            </div>
                
        </div>

    </div>

  </div>
  <div id="underConsole">
      <!-- console controls (not used yet) -->
      <input id="inputBox" type="text">
      <button id='submitButton'>SUBMIT</button>
    </div>
</div>   
