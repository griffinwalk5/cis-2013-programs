
    var  floatAge, floatDays, intWeek, floatMonths, floatFortnites;
    floatAge= parseFloat(prompt("enter your age"));
    floatDays= floatAge * 365.25;
    floatMonths = floatAge * 12;
    intWeek = floatDays / 7;
    floatFortnites = floatDays / 14;
    alert("Initial Age = " + floatAge + " years: " + " Days lived= " + floatDays + " days: " + " Months Lived= " + floatMonths + " months: " + " Weeks Lived= " + intWeek + " weeks: " + "Fortnights Lived= " + floatFortnites + " fortnights.");
  