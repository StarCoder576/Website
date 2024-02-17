// Variables ########################################################################################################################
let homemode = true
let chairmode = false;
let tablemode = false;
let stoolmode = false;
let darkmode = false;
let legcount = 4;

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
    home.style.display = 'inline-block';
    backbutton.style.display = 'none';
    homemode = true;
    chairmode = false;
    tablemode = false;
    stoolmode = false;
    display.style.display = 'none'
    chairtitle.style.display = 'none'
    tabletitle.style.display = 'none'
    stooltitle.style.display = 'none'
}

// Dark Mode/ Light Mode Button ##################################################################

function modechange () {
    if (darkmode === true) {
        darkmode = false;
        lightmodebutton.style.display = 'none'
        darkmodebutton.style.display = 'inline-block'
        document.body.style.backgroundColor = "#FFD59A"
        colorblock.style.backgroundColor = '#4d4d4d'


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
    
    if (darkmode === false) {
        darkmode = true;
        lightmodebutton.style.display = 'inline-block'
        darkmodebutton.style.display = 'none'
        document.body.style.backgroundColor = "#5e1ed6";
        colorblock.style.backgroundColor = '#696969'

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
    home.style.display = 'none'
    chairmode = true;
    homemode = false;
    display.style.display = 'inline-block'
    chairtitle.style.display = 'inline-block'
    legcount = 4
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
    home.style.display = 'none'
    tablemode = true;
    homemode = false;
    display.style.display = 'inline-block'
    tabletitle.style.display = 'inline-block'
    legcount = 4
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
    home.style.display = 'none'
    display.style.display = 'inline-block'
    stoolmode = true
    homemod = false; 
    stooltitle.style.display = 'inline-block'
    legcount = 3
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
}

function beechS() {
    allwoodoff();
    beech.style.display = 'inline-block';
}

function acaciaS() {
    allwoodoff()
    acacia.style.display = 'inline-block'
}

function mahoganyS() {
    allwoodoff()
    mahogany.style.display = 'inline-block'
}

function teekS() {
    allwoodoff()
    teek.style.display = 'inline-block'
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
    legcount = 4
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
    stoolfivielegDARK.style.display = 'inline-block'
    legcount = 5
}





