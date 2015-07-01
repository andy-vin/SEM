/**
 * Created by Family on 23.06.2015.
 */
function sqEq() {
    var a = document.getElementById("val_a").value;
    var b = document.getElementById("val_b").value;
    var c = document.getElementById("val_c").value;

    var sol = document.getElementById("sqEqSol");
    var desc = document.getElementById("sqEqDesc");

    if (a == '' || b == '') {
        sol.innerHTML = "<strong><span style='color: red'>Error: </span>Form is empty.<br />Enter value in form, please.</strong>";
        return;
    } else if (a == '0'){
        sol.innerHTML = "<strong>This is not a square equation</strong>";
        return;
    } else if (a == '0' & b == '0'){
        sol.innerHTML = "<strong>This is not a square equation</strong>";
        return;
    } else if (a == '0' & b == '0' & c == '0'){
        sol.innerHTML = "<strong>This is not a square equation</strong>";
        return;
    }

    var d = b * b - 4 * a * c;

    if ( d < 0 ) {
        valDesc = "Discriminant = <strong>" + d + "</strong><br />";
        valRoot = "<strong>No real roots</strong><br>It has complex roots:<br>x<sub>1</sub> = <strong>" + (- b / ( 2 * a ));
        valRoot += " + i x </strong><strong>" + Math.sqrt( -d ) / ( 2 * a ) + "</strong>,<br />x<sub>2</sub> = ";
        valRoot += "<strong>" + (- b / ( 2 * a)) + " - i x </strong><strong>" +  Math.sqrt( -d ) / ( 2 * a );
        valRoot += "</strong>.";
    } else {
        if ( d == 0 ) {
            valDesc = "Discriminant = <strong>0</strong><br />";
            valRoot = "Roots:<br>x<sub>1</sub> = x<sub>2</sub> = <strong>" + (-b / ( 2 * a )) + "</strong>.";
        } else {
            valDesc = "Discriminant = <strong>" + d + "</strong><br />";
            valRoot = "Roots:<br />x<sub>1</sub> = <strong>" + (-b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a ));
            valRoot += "</strong>,<br />x<sub>2</sub> = <strong>" + (-b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a ));
            valRoot += "</strong>.";
        }
    }

    desc.innerHTML = valDesc;

    sol.innerHTML = valRoot;
}