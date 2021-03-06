var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts,stringFinalGrade, intGradeOption, floatTotalPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts= parseFloat($("mid_pts").value);
    floatFinPts= parseFloat ($("fin_pts").value);
    floatTotalPts= parseFloat (floatHwPts + floatMidPts + floatFinPts);
    intGradeOption = parseInt ($("grade_option").value);
    
   if (intGradeOption === 1)
   {
        if (floatTotalPts >=80)
        {
            stringFinalGrade = "Pass";
        }
        else
         {
            stringFinalGrade = "Fail";
         }
    
   }
    else {
            switch (intGradeOption===2)
            {
                case floatTotalPts >= 90:
                    stringFinalGrade = "A";
                    break;
                case floatTotalPts >= 80:
                    stringFinalGrade= "B";
                    break;
                case floatTotalPts >= 70:
                     stringFinalGrade= "C";
                    break;
                case floatTotalPts >= 60:
                     stringFinalGrade= "D";
                    break;
                case floatTotalPts < 60:
                     stringFinalGrade= "F";
                    break;
            }
            
        }
     $("final_grade").value= stringFinalGrade;
};


window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};