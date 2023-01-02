// Array containing all financial information

var finances = [
    {month: 'Jan-2010', profit: 867884},
    {month: 'Feb-2010', profit: 984655},
    {month: 'Mar-2010', profit: 322013},
    {month: 'Apr-2010', profit: -69417},
    {month: 'May-2010', profit: 310503},
    {month: 'Jun-2010', profit: 522857},
    {month: 'Jul-2010', profit: 1033096},
    {month: 'Aug-2010', profit: 604885},
    {month: 'Sep-2010', profit: -216386},
    {month: 'Oct-2010', profit: 477532},
    {month: 'Nov-2010', profit: 893810},
    {month: 'Dec-2010', profit: -80353},
    {month: 'Jan-2011', profit: 779806},
    {month: 'Feb-2011', profit: -335203},
    {month: 'Mar-2011', profit: 697845},
    {month: 'Apr-2011', profit: 793163},
    {month: 'May-2011', profit: 485070},
    {month: 'Jun-2011', profit: 584122},
    {month: 'Jul-2011', profit: 62729},
    {month: 'Aug-2011', profit: 668179},
    {month: 'Sep-2011', profit: 899906},
    {month: 'Oct-2011', profit: 834719},
    {month: 'Nov-2011', profit: 132003},
    {month: 'Dec-2011', profit: 309978},
    {month: 'Jan-2012', profit: -755566},
    {month: 'Feb-2012', profit: 1170593},
    {month: 'Mar-2012', profit: 252788},
    {month: 'Apr-2012', profit: 1151518},
    {month: 'May-2012', profit: 817256},
    {month: 'Jun-2012', profit: 570757},
    {month: 'Jul-2012', profit: 506702},
    {month: 'Aug-2012', profit: -1022534},
    {month: 'Sep-2012', profit: 475062},
    {month: 'Oct-2012', profit: 779976},
    {month: 'Nov-2012', profit: 144175},
    {month: 'Dec-2012', profit: 542494},
    {month: 'Jan-2013', profit: 359333},
    {month: 'Feb-2013', profit: 321469},
    {month: 'Mar-2013', profit: 67780},
    {month: 'Apr-2013', profit: 471435},
    {month: 'May-2013', profit: 565603},
    {month: 'Jun-2013', profit: 872480},
    {month: 'Jul-2013', profit: 789480},
    {month: 'Aug-2013', profit: 999942},
    {month: 'Sep-2013', profit: -1196225},
    {month: 'Oct-2013', profit: 268997},
    {month: 'Nov-2013', profit: -687986},
    {month: 'Dec-2013', profit: 1150461},
    {month: 'Jan-2014', profit: 682458},
    {month: 'Feb-2014', profit: 617856},
    {month: 'Mar-2014', profit: 824098},
    {month: 'Apr-2014', profit: 581943},
    {month: 'May-2014', profit: 132864},
    {month: 'Jun-2014', profit: 448062},
    {month: 'Jul-2014', profit: 689161},
    {month: 'Aug-2014', profit: 800701},
    {month: 'Sep-2014', profit: 1166643},
    {month: 'Oct-2014', profit: 947333},
    {month: 'Nov-2014', profit: 578668},
    {month: 'Dec-2014', profit: 988505},
    {month: 'Jan-2015', profit: 1139715},
    {month: 'Feb-2015', profit: 1029471},
    {month: 'Mar-2015', profit: 687533},
    {month: 'Apr-2015', profit: -524626},
    {month: 'May-2015', profit: 158620},
    {month: 'Jun-2015', profit: 87795},
    {month: 'Jul-2015', profit: 423389},
    {month: 'Aug-2015', profit: 840723},
    {month: 'Sep-2015', profit: 568529},
    {month: 'Oct-2015', profit: 332067},
    {month: 'Nov-2015', profit: 989499},
    {month: 'Dec-2015', profit: 778237},
    {month: 'Jan-2016', profit: 650000},
    {month: 'Feb-2016', profit: -1100387},
    {month: 'Mar-2016', profit: -174946},
    {month: 'Apr-2016', profit: 757143},
    {month: 'May-2016', profit: 445709},
    {month: 'Jun-2016', profit: 712961},
    {month: 'Jul-2016', profit: -1163797},
    {month: 'Aug-2016', profit: 569899},
    {month: 'Sep-2016', profit: 768450},
    {month: 'Oct-2016', profit: 102685},
    {month: 'Nov-2016', profit: 795914},
    {month: 'Dec-2016', profit: 60988},
    {month: 'Jan-2017', profit: 138230},
    {month: 'Feb-2017', profit: 671099},
    ];

// variable to calculate total profit
var totalProfit = finances.reduce((accumulator, object) => {
    return accumulator + object.profit;
}, 0);
    
console.log(totalProfit);

// variable to calculate number of months
var numOfMonths = finances.length;

console.log(numOfMonths);

// variable to calculate average profit made
var averageProfit = totalProfit / numOfMonths;

console.log(averageProfit.toFixed(2));
