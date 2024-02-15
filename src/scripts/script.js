// Variables ########################################################################################################################
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
    chairmode = false;
    tablemode = false;
    stoomode = false;
}
//Home Area  #############################################################################################################

function chairarea() {
    oak.style.display = 'inline-block';
    fourleg.style.display = 'inline-block';
    woodselector.style.display = 'inline-block';
    chairselector.style.display = 'inline-block';
    backbutton.style.display = 'inline-block';
    home.style.display = 'none';
    chairmode = true;
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
}

function leg2() {
    alllegsoff()
    twoleg.style.display= 'inline-block'
}

function leg3() {
    alllegsoff()
    threeleg.style.display= 'inline-block'
}

function leg4() {
    alllegsoff()
    fourleg.style.display= 'inline-block'
}

function leg5() {
    alllegsoff()
    fiveleg.style.display= 'inline-block'
}

function leg1DARK() {
    alllegsoff()
    onelegDARK.style.display = 'inline-block'
}

function leg2DARK() {
    alllegsoff()
    twolegDARK.style.display = 'inline-block'
}

function leg3DARK() {
    alllegsoff()
    threelegDARK.style.display = 'inline-block'
}

function leg4DARK() {
    alllegsoff()
    fourlegDARK.style.display = 'inline-block'
}

function leg5DARK() {
    alllegsoff()
    fivelegDARK.style.display = 'inline-block'
}

//TABLE
function tableleg1() {
    alllegsoff()
    tableoneleg.style.display = 'inline-block'
}

function tableleg2() {
    alllegsoff()
    tabletwoleg.style.display = 'inline-block'
}

function tableleg3() {
    alllegsoff()
    tablethreeleg.style.display = 'inline-block'
}

function tableleg4() {
    alllegsoff()
    tablefourleg.style.display = 'inline-block'
}

function tableleg5() {
    alllegsoff()
    tablefiveleg.style.display = 'inline-block'
}

function tableleg1DARK() {
    alllegsoff()
    tableonelegDARK.style.display = 'inline-block'
}

function tableleg2DARK() {
    alllegsoff()
    tabletwolegDARK.style.display = 'inline-block'
}

function tableleg3DARK() {
    alllegsoff()
    tablethreelegDARK.style.display = 'inline-block'
}

function tableleg4DARK() {
    alllegsoff()
    tablefourlegDARK.style.display = 'inline-block'
}

function tableleg5DARK() {
    alllegsoff()
    tablefivelegDARK.style.display = 'inline-block'
}

//Stool

function stoolleg1 () {
    alllegsoff()
    stooloneleg.style.display = 'inline-block'
}

function stoolleg2 () {
    alllegsoff()
    stooltwoleg.style.display = 'inline-block'
}

function stoolleg3 () {
    alllegsoff()
    stoolthreeleg.style.display = 'inline-block'
}

function stoolleg4 () {
    alllegsoff()
    stoolfourleg.style.display = 'inline-block'
}

function stoolleg5 () {
    alllegsoff()
    stoolfiveleg.style.display = 'inline-block'
}

function stoolleg1DARK () {
    alllegsoff()
    stoolonelegDARK.style.display = 'inline-block'
}

function stoolleg2DARK () {
    alllegsoff()
    stooltwolegDARK.style.display = 'inline-block'
}

function stoolleg3DARK () {
    alllegsoff()
    stoolthreelegDARK.style.display = 'inline-block'
}

function stoolleg4DARK () {
    alllegsoff()
    stoolfourlegDARK.style.display = 'inline-block'
}

function stoolleg5DARK () {
    alllegsoff()
    stoolfivielegDARK.style.display = 'inline-block'
}



