// Variables ########################################################################################################################
let homemode = true
let chairmode = false;
let tablemode = false;
let stoolmode = false;
let darkmode = false;
let legcount = 4;
let woodmode = 'oak'
let cartcounter = 0
let furnituremode = ''
let cartValue = {}

//Back Button #############################################################################################################

function back() {
    allwoodoff();
    alllegsoff();
    woodselector.style.display = 'none';
    chairselector.style.display = 'none';
    chairselectorDARK.style.display = 'none';
    tableselector.style.display = 'none';
    tableselectorDARK.style.display = 'none';
    stoolselectorDARK.style.display = 'none';
    stoolselector.style.display = 'none';
    backbutton.style.display = 'none';
    homemode = true;
    chairmode = false;
    tablemode = false;
    stoolmode = false;
    display.style.display = 'none';
    chairtitle.style.display = 'none';
    tabletitle.style.display = 'none';
    stooltitle.style.display = 'none';
    homeheading.style.display = 'inline-block';
    homebuttons.style.display = 'inline-block';
    heading.style.display = 'none';
    checkout.style.display = 'none';
}

// Dark Mode/ Light Mode Button ##################################################################

function darkmodechange () {

    
    darkmode = true;
    lightmodebutton.style.display = 'inline-block'
    darkmodebutton.style.display = 'none'
    document.body.style.backgroundColor = "#696969"
    colorblock.style.backgroundColor = '#000000'
   

    if (chairmode === true) {
        chairselectorDARK.style.display = 'inline-block'
        chairselector.style.display = 'none'

        if (legcount == 1) {
            leg1DARK()
        } 

        if (legcount == 2) {
            leg2DARK()
        }

        if (legcount == 3) {
            leg3DARK()
        }

        if (legcount == 4) {
            leg4DARK()
        }

        if (legcount == 5) {
            leg5DARK()
        }
    }

    if (tablemode === true) {
        tableselectorDARK.style.display = 'inline-block'
        tableselector.style.display = 'none'
        if (legcount == 1) {
            tableleg1DARK()
        }

        if (legcount == 2) {
            tableleg2DARK()
        }

        if (legcount == 3) {
            tableleg3DARK()
        }

        if (legcount == 4) {
            tableleg4DARK()
        }

        if (legcount == 5) {
            tableleg5DARK()
        } 
    }

    if (stoolmode === true) {
        stoolselector.style.display = 'none'
        stoolselectorDARK.style.display = 'inline-block'
        if (legcount == 1) {
            stoolleg1DARK()
        }

        if (legcount == 2) {
            stoolleg2DARK()
        }

        if (legcount == 3) {
            stoolleg3DARK()
        }

        if (legcount == 4) {
            stoolleg4DARK()
        }

        if (legcount == 5) {
            stoolleg5DARK()
        }
    }

}

function lightmodechange () {

    darkmode = false;
    lightmodebutton.style.display = 'none'
    darkmodebutton.style.display = 'inline-block'
    document.body.style.backgroundColor = "#FFD59A";
    colorblock.style.backgroundColor = '#18ed78'


    if (chairmode === true) {
        chairselectorDARK.style.display = 'none'
        chairselector.style.display = 'inline-block'

        if (legcount == 1) {
            leg1()
        }

        if (legcount == 2) {
            leg2()
        }

        if (legcount == 3) {
            leg3()
        }

        if (legcount == 4) {
            leg4()
        }

        if (legcount == 5) {
            leg5()
        }
    }

    if (tablemode === true) {
        tableselectorDARK.style.display = 'none'
        tableselector.style.display = 'inline-block'
        if (legcount == 1) {
            tableleg1()
        }

        if (legcount == 2) {
            tableleg2()
        }

        if (legcount == 3) {
            tableleg3()
        }

        if (legcount == 4) {
            tableleg4()
        }

        if (legcount == 5) {
            tableleg5()
        }
    }

    if (stoolmode === true) {
        stoolselector.style.display = 'inline-block'
        stoolselectorDARK.style.display = 'none'
        if (legcount == 1) {
            stoolleg1()
        }

        if (legcount == 2) {
            stoolleg2()
        }

        if (legcount == 3) {
            stoolleg3()
        }

        if (legcount == 4) {
            stoolleg4()
        }

        if (legcount == 5) {
            stoolleg5()
        }
    }

}


//Home Area  #############################################################################################################

function chairarea() {

    if (darkmode === true) {
        fourlegDARK.style.display = 'inline-block'
        chairselectorDARK.style.display = 'inline-block'
    } 

    if (darkmode === false) {
        fourleg.style.display = 'inline-block'
        chairselector.style.display = 'inline-block'
    }
    oak.style.display = 'inline-block';
    woodselector.style.display = 'inline-block'
    backbutton.style.display = 'inline-block'
    backbutton.style.left = '6vw'
    chairmode = true;
    homemode = false;
    display.style.display = 'inline-block'
    chairtitle.style.display = 'inline-block'
    legcount = 4

    homeheading.style.display = 'none'
    homebuttons.style.display = 'none'
    heading.style.display = 'inline-block'
    furnituremode = 'chair'
}

function tablearea() {
    if (darkmode === true) {
        tablefourlegDARK.style.display = 'inline-block'
        tableselectorDARK.style.display = 'inline-block'
    }

    if (darkmode === false) {
        tablefourleg.style.display = 'inline-block'
        tableselector.style.display = 'inline-block'
    }
    oak.style.display = 'inline-block';
    woodselector.style.display = 'inline-block'
    backbutton.style.display = 'inline-block'
    backbutton.style.left = '6vw'
    tablemode = true;
    homemode = false;
    display.style.display = 'inline-block'
    tabletitle.style.display = 'inline-block'
    legcount = 4

    homeheading.style.display = 'none'
    homebuttons.style.display = 'none'
    heading.style.display = 'inline-block'
    furnituremode = 'table'
}

function stoolarea () {
    if (darkmode === true) {
        stoolthreelegDARK.style.display = 'inline-block';
        stoolselectorDARK.style.display = 'inline-block'
    }

    if (darkmode === false) {
        stoolthreeleg.style.display = 'inline-block'
        stoolselector.style.display = 'inline-block'
    }
    oak.style.display = 'inline-block';
    woodselector.style.display = 'inline-block'
    backbutton.style.display = 'inline-block'
    backbutton.style.left = '6vw'
    display.style.display = 'inline-block'
    stoolmode = true
    homemode = false; 
    stooltitle.style.display = 'inline-block'
    legcount = 3

    homeheading.style.display = 'none'
    homebuttons.style.display = 'none'
    heading.style.display = 'inline-block'
    furnituremode = 'stool'
}





//Turns all Legs Off ################################################################################################
function alllegsoff() {

    //Light Mode Chair
    oneleg.style.display= 'none';
    twoleg.style.display= 'none';
    threeleg.style.display= 'none';
    fourleg.style.display= 'none';
    fiveleg.style.display= 'none';
    
    //Dark Mode Chair
    onelegDARK.style.display= 'none';
    twolegDARK.style.display= 'none';
    threelegDARK.style.display= 'none';
    fourlegDARK.style.display= 'none';
    fivelegDARK.style.display= 'none';

    //Light Mode Table
    tableoneleg.style.display= 'none';
    tabletwoleg.style.display= 'none';
    tablethreeleg.style.display= 'none';
    tablefourleg.style.display= 'none';
    tablefiveleg.style.display= 'none';

    //Dark Mode Table
    tableonelegDARK.style.display= 'none';
    tabletwolegDARK.style.display= 'none';
    tablethreelegDARK.style.display= 'none';
    tablefourlegDARK.style.display= 'none';
    tablefivelegDARK.style.display= 'none';

    //Light Mode Stool
    stooloneleg.style.display= 'none';
    stooltwoleg.style.display= 'none';
    stoolthreeleg.style.display= 'none';
    stoolfourleg.style.display= 'none';
    stoolfiveleg.style.display= 'none';

    //Dark Mode Stool
    stoolonelegDARK.style.display= 'none';
    stooltwolegDARK.style.display= 'none';
    stoolthreelegDARK.style.display= 'none';
    stoolfourlegDARK.style.display= 'none';
    stoolfivelegDARK.style.display= 'none';
    legcount = 0;
}




// WOOD UNDERLAY
function allwoodoff() {
    
    oak.style.display= 'none';
    beech.style.display= 'none';
    acacia.style.display= 'none';
    mahogany.style.display= 'none';
    teek.style.display= 'none';
    
}

function oakS() {
    allwoodoff();
    oak.style.display = 'inline-block';
    woodmode = 'oak'
}

function beechS() {
    allwoodoff();
    beech.style.display = 'inline-block';
    woodmode = 'beech'
}

function acaciaS() {
    allwoodoff()
    acacia.style.display = 'inline-block'
    woodmode = 'acacia'
}

function mahoganyS() {
    allwoodoff()
    mahogany.style.display = 'inline-block'
    woodmode = 'mahogany'
}

function teekS() {
    allwoodoff()
    teek.style.display = 'inline-block'
    woodmode = 'teek'
}


// CHAIR ####################################################################################

function leg1() {
    alllegsoff()
    oneleg.style.display= 'inline-block';
    legcount = 1;
}

function leg2() {
    alllegsoff()
    twoleg.style.display= 'inline-block'
    legcount = 2;
}

function leg3() {
    alllegsoff()
    threeleg.style.display= 'inline-block'
    legcount = 3
}

function leg4() {
    alllegsoff()
    fourleg.style.display= 'inline-block'
    legcount = 4
}

function leg5() {
    alllegsoff()
    fiveleg.style.display= 'inline-block'
    legcount = 5
}

function leg1DARK() {
    alllegsoff()
    onelegDARK.style.display = 'inline-block'
    legcount = 1
}

function leg2DARK() {
    alllegsoff()
    twolegDARK.style.display = 'inline-block'
    legcount = 2
}

function leg3DARK() {
    alllegsoff()
    threelegDARK.style.display = 'inline-block'
    legcount = 3
}

function leg4DARK() {
    alllegsoff()
    fourlegDARK.style.display = 'inline-block'
    legcount = 4
}

function leg5DARK() {
    alllegsoff()
    fivelegDARK.style.display = 'inline-block'
    legcount = 5
}

//TABLE
function tableleg1() {
    alllegsoff()
    tableoneleg.style.display = 'inline-block'
    legcount = 1
}

function tableleg2() {
    alllegsoff()
    tabletwoleg.style.display = 'inline-block'
    legcount = 2
}

function tableleg3() {
    alllegsoff()
    tablethreeleg.style.display = 'inline-block'
    legcount = 3
}

function tableleg4() {
    alllegsoff()
    tablefourleg.style.display = 'inline-block'
    legcount = 4
}

function tableleg5() {
    alllegsoff()
    tablefiveleg.style.display = 'inline-block'
    legcount = 5
}

function tableleg1DARK() {
    alllegsoff()
    tableonelegDARK.style.display = 'inline-block'
    legcount = 1
}

function tableleg2DARK() {
    alllegsoff()
    tabletwolegDARK.style.display = 'inline-block'
    legcount = 2
}

function tableleg3DARK() {
    alllegsoff()
    tablethreelegDARK.style.display = 'inline-block'
    legcount = 3
}

function tableleg4DARK() {
    alllegsoff()
    tablefourlegDARK.style.display = 'inline-block'
    legcount = 4
}

function tableleg5DARK() {
    alllegsoff()
    tablefivelegDARK.style.display = 'inline-block'
    legcount = 5
}

//Stool

function stoolleg1 () {
    alllegsoff()
    stooloneleg.style.display = 'inline-block'
    legcount = 1
}

function stoolleg2 () {
    alllegsoff()
    stooltwoleg.style.display = 'inline-block'
    legcount = 2
}

function stoolleg3 () {
    alllegsoff()
    stoolthreeleg.style.display = 'inline-block'
    legcount = 3
}

function stoolleg4 () {
    alllegsoff()
    stoolfourleg.style.display = 'inline-block'
    legcount = 4
}

function stoolleg5 () {
    alllegsoff()
    stoolfiveleg.style.display = 'inline-block'
    legcount = 5
}

function stoolleg1DARK () {
    alllegsoff()
    stoolonelegDARK.style.display = 'inline-block'
    legcount = 1
}

function stoolleg2DARK () {
    alllegsoff()
    stooltwolegDARK.style.display = 'inline-block'
    legcount = 2
}

function stoolleg3DARK () {
    alllegsoff()
    stoolthreelegDARK.style.display = 'inline-block'
    legcount = 3
}

function stoolleg4DARK () {
    alllegsoff()
    stoolfourlegDARK.style.display = 'inline-block'
    legcount = 4
}

function stoolleg5DARK () {
    alllegsoff()
    stoolfivelegDARK.style.display = 'inline-block'
    legcount = 5
}




// Cart Code ############################################################################################################

function cartarea () {
    allwoodoff();
    alllegsoff();
    woodselector.style.display = 'none';
    chairselector.style.display = 'none';
    chairselectorDARK.style.display = 'none';
    tableselector.style.display = 'none';
    tableselectorDARK.style.display = 'none';
    stoolselectorDARK.style.display = 'none';
    stoolselector.style.display = 'none';
    backbutton.style.left = '21vw';
    backbutton.style.display = 'inline-block';
    homemode = false;
    chairmode = false;
    tablemode = false;
    stoolmode = false;
    display.style.display = 'none';
    chairtitle.style.display = 'none';
    tabletitle.style.display = 'none';
    stooltitle.style.display = 'none';
    homeheading.style.display = 'none';
    homebuttons.style.display = 'none';
    cartbutton.style.display = 'none'
    checkout.style.display = 'inline-block';
}

function calculatePrice () {
    let itemPrice = 0

    if (furnituremode === 'chair') {
        itemPrice += 150
    }

    if (furnituremode === 'table') {
        itemPrice += 250
    }

    if (furnituremode === 'stool') {
        itemPrice += 350
    }


    if (woodmode === 'oak') {
        itemPrice += 425
    }

    if (woomode === 'beech') {
        itemPrice += 375
    }

    if (woodmode === 'acacia') {
        itemPrice += 400
    }

    if (woodmode === 'mahogany') {
        itemprice += 475
    }

    if (woodmode === 'teek') {
        itemPrice += 350
    }

    if (legcount === 1) {
        itemPrice += 50
    }

    if (legcount === 2) {
        itemPrice += 100
    }

    if (legcount === 3) {
        itemPrice += 150
    }

    if (legcount ===41) {
        itemPrice += 200
    }

    if (legcount === 5) {
        itemPrice += 250
    }
}
  
function addtocart() {

    // Element Creation and Labelling
    const elementId = `dynamic-element-${cartcounter}`;
    const deleteFunctionName = `deleteElement${cartcounter}`;

    const dynamicElement = document.createElement('div');
    dynamicElement.id = elementId;
    dynamicElement.className = 'dynamic-element';
    dynamicElement.textContent = `${woodmode} ${legcount}-legged ${furnituremode}   Cost: ${itemPrice}`;
        
    const deleteButton = document.createElement('span');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => window[deleteFunctionName]());

    const priceID = `item-${cartcounter}`;
    cartValue[priceID] = itemPrice;


    dynamicElement.appendChild(deleteButton);
    document.getElementById('cartitems').appendChild(dynamicElement);

    window[deleteFunctionName] = function() {
        const elementToRemove = document.getElementById(elementId);
        if (elementToRemove) {
            elementToRemove.remove();
            delete window[deleteFunctionName];
            delete cartValue[priceID];
        }
    };

    cartcounter++;
    
}



