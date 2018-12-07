let container = document.getElementById('container');

// MONITOR CLASS
class Monitor {
  constructor(parentDiv){
    this.parentDiv = parentDiv;
    
    this.build = function() {
      
      this.module = document.createElement('div');
      parentDiv.append(this.module)        //(this.module, this.parentDiv);
      this.module.style.height = '20%';
      this.module.style.width = '50%';
      this.module.style.display = 'flex'; 
      this.module.style.flexDirection = 'row';
      this.module.style.border = '1px solid black';
      this.module.style.backgroundColor = '#338';
            
      this.panel = document.createElement('div');
      this.module.appendChild(this.panel);
      this.panel.style.height = '100%';
      this.panel.style.width = '100%';
      this.panel.style.display = 'grid';
      this.panel.style.gridTemplateRows = 'repeat(10, 10%)';
      this.panel.style.gridTemplateColumns = 'repeat(20, 5%)';
      this.panel.style.backgroundColor = '#606060';
      this.panel.style.border = '1px solid #a0a0b0';
      this.panel.setAttribute('className','panel');
      
      this.screen = document.createElement('div');
      this.panel.appendChild(this.screen);
      this.screen.style.gridArea = '1/1/span 5/span 17';
      this.screen.style.display = 'flex';
      this.screen.style.flexDirection = 'row';
      this.screen.style.margin = '1px';
      this.screen.style.backgroundColor = 'white';
      this.screen.style.border = '1px solid black';
      this.screen.setAttribute('className','screen');
      
      this.screenKey = document.createElement('div');
      this.screen.appendChild(this.screenKey);
      this.screenKey.style.height = '100%';
      this.screenKey.style.width = '30%';
      this.screenKey.style.fontSize = '1em';
      this.screenKey.style.fontWeight = 'bold';
      this.screenKey.style.display = 'flex';
      this.screenKey.style.flexDirection = 'column';
      this.screenKey.setAttribute('className','screenKey');
      
      this.screenKeyUpper = document.createElement('div');
      this.screenKey.appendChild(this.screenKeyUpper);
      this.screenKeyUpper.style.height = '35%';
      this.screenKeyUpper.style.width  = '100%';
      this.screenKeyUpper.style.fontSize = '1em';
      this.screenKeyUpper.style.textAlign = 'center';
      this.screenKeyUpper.style.backgroundColor = 'rgb(214, 214, 214)';
      this.screenKeyUpper.style.fontFamily = 'monospace';
      this.screenKeyUpper.setAttribute('className','screenKeyUpper');
      
      this.screenKeyLower = document.createElement('div');
      this.screenKey.appendChild(this.screenKeyLower);
      this.screenKeyLower.style.height = '65%';
      this.screenKeyLower.style.width = '100%';
      this.screenKeyLower.style.backgroundColor = 'white';
      this.screenKeyLower.setAttribute('className', 'screenKeyLower');
      
      this.screenKeyValue = document.createElement('div');
      this.screen.appendChild(this.screenKeyValue);
      this.screenKeyValue.style.height = '100%';
      this.screenKeyValue.style.width = '70%';
      this.screenKeyValue.style.fontSize = '1.4em';
      this.screenKeyValue.style.textAlign = 'left';
      this.screenKeyValue.style.padding = '8px 0 0 6px';
      this.screenKeyValue.style.fontFamily = '"Droid Sans"';
      this.screenKeyValue.style.backgroundColor = 'white';
      this.screenKeyValue.style.color = '#06005a';
      this.screenKeyValue.setAttribute('className','screenKeyValue');
      
      this.legend = document.createElement('div');
      this.panel.appendChild(this.legend);
      this.legend.style.gridArea = '6/1/span 5/span 17';
      this.legend.style.display = 'grid';
      this.legend.style.gridTemplateRows = 'repeat(3, 33.3333%)';
      this.legend.style.gridTemplateColumns = 'repeat(25, 4%)';
      this.legend.style.backgroundColor = '#115511';
      this.legend.style.color = '#aaeeaa';
      this.legend.style.borderStyle = 'inset';
      this.legend.style.margin = '1px 2px 1px 1px';
      this.legend.style.borderColor = '#558855';
      this.legend.style.fontFamily = 'monospace';
      this.legend.style.fontSize = '.8em';
      this.legend.style.textAlign = 'left';
      this.legend.setAttribute('className','legend');
      
      this.button1 = document.createElement('button');
      this.panel.appendChild(this.button1);
      this.button1.style.gridArea = ' 1/ 18/span 2 /span 1';
      this.button1.style.backgroundColor = 'darkgray';
      this.button1.style.border = '1px solid groove';
      this.button1.style.margin = '1px 2px 2px 0';
      this.button1.setAttribute('className', 'button1');
      
      this.button4 = document.createElement('button');
      this.panel.appendChild(this.button4);
      this.button4.style.gridArea = ' 3/ 18/ span 2/span 1 ';
      this.button4.style.backgroundColor = 'darkgray';
      this.button4.style.border = '1px solid groove';
      this.button4.style.margin = '1px 2px 2px 0';
      this.button4.setAttribute('className', 'button4');
      
      this.button7 = document.createElement('button');
      this.panel.appendChild(this.button7);
      this.button7.style.gridArea = ' 5/ 18/ span 2/span 1 ';
      this.button7.style.backgroundColor = 'darkgray';
      this.button7.style.border = '1px solid groove';
      this.button7.style.margin = '1px 2px 2px 0';
      this.button7.setAttribute('className', 'button7');
      
      this.button10 = document.createElement('button');
      this.panel.appendChild(this.button10);
      this.button10.style.gridArea = '7/ 18/ span 2/span 1 ';
      this.button10.style.backgroundColor = 'darkgray';
      this.button10.style.border = '1px solid groove';
      this.button10.style.margin = '1px 2px 2px 0';
      this.button10.setAttribute('className', 'button10');
      
      this.button13 = document.createElement('button');
      this.panel.appendChild(this.button13);
      this.button13.style.gridArea = ' 9/ 18/ span 2/span 1 ';
      this.button13.style.backgroundColor = 'darkgray';
      this.button13.style.border = '1px solid groove';
      this.button13.style.margin = '1px 2px 2px 0';
      this.button13.setAttribute('className', 'button13');
      
      this.button2 = document.createElement('button');
      this.panel.appendChild(this.button2);
      this.button2.style.gridArea = ' 1/ 19/ span 2/span 1 ';
      this.button2.style.backgroundColor = 'wheat';
      this.button2.style.border = '1px solid groove';
      this.button2.style.margin = '1px 2px 2px 0';
      this.button2.setAttribute('className', 'button2');
      
      this.button5 = document.createElement('button');
      this.panel.appendChild(this.button5);
      this.button5.style.gridArea = ' 3/ 19/ span 2/span 1 ';
      this.button5.style.backgroundColor = 'wheat';
      this.button5.style.border = '1px solid groove';
      this.button5.style.margin = '1px 2px 2px 0';
      this.button5.setAttribute('className', 'button5');
      
      this.button8 = document.createElement('button');
      this.panel.appendChild(this.button8);
      this.button8.style.gridArea = ' 5/ 19/ span 2/span 1 ';
      this.button8.style.backgroundColor = 'wheat';
      this.button8.style.border = '1px solid groove';
      this.button8.style.margin = '1px 2px 2px 0';
      this.button8.setAttribute('className', 'button8');
      
      this.button11 = document.createElement('button');
      this.panel.appendChild(this.button11);
      this.button11.style.gridArea = ' 7/ 19/ span 2/span 1 ';
      this.button11.style.backgroundColor = 'darkgray';
      this.button11.style.border = '1px solid groove';
      this.button11.style.margin = '1px 2px 2px 0';
      this.button11.setAttribute('className', 'button11');
      
      this.button14 = document.createElement('button');
      this.panel.appendChild(this.button14);
      this.button14.style.gridArea = ' 9/ 19/ span 2/span 1 ';
      this.button14.style.backgroundColor = 'darkgray';
      this.button14.style.border = '1px solid groove';
      this.button14.style.margin = '1px 2px 2px 0';
      this.button14.setAttribute('className', 'button14');
      
      this.button3 = document.createElement('button');
      this.panel.appendChild(this.button3);
      this.button3.style.gridArea = ' 1/ 20/ span 2/span 1 ';
      this.button3.style.backgroundColor = 'cadetblue';
      this.button3.style.border = '1px solid groove';
      this.button3.style.margin = '1px 2px 2px 0';
      this.button3.setAttribute('className', 'button3');
      
      this.button6 = document.createElement('button');
      this.panel.appendChild(this.button6);
      this.button6.style.gridArea = ' 3/ 20/ span 2/span 1 ';
      this.button6.style.backgroundColor = 'cadetblue';
      this.button6.style.border = '1px solid groove';
      this.button6.style.margin = '1px 2px 2px 0';
      this.button6.setAttribute('className', 'button6');
      
      this.button9 = document.createElement('button');
      this.panel.appendChild(this.button9);
      this.button9.style.gridArea = ' 5/ 20/ span 2/span 1 ';
      this.button9.style.backgroundColor = 'cadetblue';
      this.button9.style.border = '1px solid groove';
      this.button9.style.margin = '1px 2px 2px 0';
      this.button9.setAttribute('className', 'button9');
      
      this.button12 = document.createElement('button');
      this.panel.appendChild(this.button12);
      this.button12.style.gridArea = ' 7/ 20/ span 2/span 1 ';
      this.button12.style.backgroundColor = 'darkgray';
      this.button12.style.border = '1px solid groove';
      this.button12.style.margin = '1px 2px 2px 0';
      this.button12.setAttribute('className', 'button12');
      
      this.button15 = document.createElement('button');
      this.panel.appendChild(this.button15);
      this.button15.style.gridArea = ' 9/ 20/ span 2/span 1 ';
      this.button15.style.backgroundColor = 'darkgray';
      this.button15.style.border = '1px solid groove';
      this.button15.style.margin = '1px 2px 2px 0';
      this.button15.setAttribute('className', 'button15');
      
      this.panelLabel = document.createElement('button');
      this.panel.appendChild(this.panelLabel);
      this.panelLabel.style.gridArea = '7/ 19/ span 4/ span 2';
      this.panelLabel.style.zIndex = '1';
      this.panelLabel.style.margin = '0 2px 3px 0';
      this.panelLabel.style.backgroundColor = 'rgb(70, 109, 141)';
      this.panelLabel.style.border = '1px solid groove';
      this.panelLabel.style.fontSize = '1.7em';
      this.panelLabel.style.fontFamily = 'Gautami';
      this.panelLabel.style.color = 'rgb(0, 24, 41)';
      this.panelLabel.style.outline = 'none';
      this.panelLabel.setAttribute('className','monitorLabel');
    }
  }
}

const makeMonitors = (num) => {
  let monitors = [];
  for(let i=1; i<num+1; i++){
    monitors.push([`monitor${[i]}`]); 
  } return monitors;
  
}


makeMonitors(10).forEach((monitor, index) => {
  monitor = new Monitor(container);
  monitor.build();
  container.lastElementChild.setAttribute('id', `monitor${index+1}`);
  container.lastElementChild.setAttribute('className', `monitor${index+1}`);

});


function startThing() {

  console.log('console started...');

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

  // let console1 = document.querySelector('.console1');
  container.addEventListener('click', monitorButtons);

  


  function monitorButtons(e) {
    let mod = e.target.value;
    console.log(e.target.className);
    let screen = document.querySelector(`.module${mod} .screenValue`);
    let thisButton = e.target.className;
    console.log(`button class: ${thisButton}`);
    if (thisButton == 'monitorLabel') {
        highLight(screen, 'yellow');
    }
    if (thisButton == 'button1') {
        highLight(screen, 'blue');
    }
  }


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
  // ===================================================================

  
function metrics() {
  monOne.innerHTML            = keyMemory;
  monOneScreenKey.innerHTML   = "keyMemory[]";
  monOneL1.innerHTML          = "type: ";
  monOneL1k.innerHTML         = typeof(keyMemory);
  monOneL2.innerHTML          = "length: ";
  monOneL2k.innerHTML         = keyMemory.length;

  monTwo.innerHTML            = decimal;
  monTwoScreenKey.innerHTML   = "decimal[]";
  monTwoL1.innerHTML          = "type: ";
  monTwoL1k.innerHTML         = typeof(decimal);
  monTwoL2.innerHTML          = "length: ";
  monTwoL2k.innerHTML         = decimal.length;

  monThree.innerHTML          = decActive;
  monThreeScreenKey.innerHTML = "decActive";
  monThreeL1.innerHTML             = "type: ";
  monThreeL1k.innerHTML            = typeof(decActive);
  monThreeL2.innerHTML             = "length: ";
  monThreeL2k.innerHTML            = decimal.length;

  monFour.innerHTML           = numberEntry();
  monFourScreenKey.innerHTML  = "numberEntry().name";
  monFourL1.innerHTML         = "type: ";
  monFourL1k.innerHTML        = typeof(numberEntry);
  monFourL2.innerHTML         = "length: ";
  monFourL2k.innerHTML        = decimal.length;

  monFive.innerHTML           = opType;
  monFiveScreenKey.innerHTML  = "opType";
  monFiveL1.innerHTML         = "type: ";
  monFiveL1k.innerHTML        = typeof(opType);
  monFiveL2.innerHTML         = "length: ";
  monFiveL2k.innerHTML        = numberEntry().length;

  monSix.innerHTML            = entries;
  monSixScreenKey.innerHTML   = "entries";
  monSixL1.innerHTML          = "type: ";
  monSixL1k.innerHTML         = typeof(entries);
  monSixL2.innerHTML          = "length: ";
  monSixL2k.innerHTML         = entries.length;

  monSeven.innerHTML          = result;
  monSevenScreenKey.innerHTML = "result";
  monSevenL1.innerHTML        = "type: ";
  monSevenL1k.innerHTML       = typeof(result);
  monSevenL2.innerHTML        = "length: ";
  monSevenL2k.innerHTML       = result.length;

  monEight.innerHTML          = prevOp;
  monEightScreenKey.innerHTML = "prevOp";
  monEightL1.innerHTML        = "type: ";
  monEightL1k.innerHTML       = typeof(prevOp);
  monEightL2.innerHTML        = "length: ";
  monEightL2k.innerHTML       = prevOp.length;

  monNine.innerHTML           = "";
  monNineScreenKey.innerHTML  = "";
  monNineL1.innerHTML         = "type: ";
  monNineL1k.innerHTML        = '';
  monNineL2.innerHTML         = "";
  monNineL2k.innerHTML        = '';

  monTen.innerHTML            = memoryOne;
  monTenScreenKey.innerHTML   = "memoryOne";
  monTenL1.innerHTML          = "type: ";
  monTenL1k.innerHTML         = typeof(memoryOne);
  monTenL2.innerHTML          = "length: ";
  monTenL2k.innerHTML         = decimal.length;


}

} // function startThing() 's ending bracket. Leave alone.












