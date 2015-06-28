/**
 * Created by Family on 28.06.2015.
 */

function cuEq() {
    var a = document.getElementById("val_a_c").value;
    //alert(typeof (a));
    alert ('cubic');
    var b = document.getElementById("val_b_c").value;
    var c = document.getElementById("val_c_c").value;
    var d = document.getElementById("val_d_c").value;

    var sol = document.getElementById("cuEqSol");
    var desc = document.getElementById("cuEqDesc");

    if (a == '') {
        sol.innerHTML = "<strong>It's a square equation. Choose another type.</strong>";
    }
    if (a == '' || b == '' || c == '') {
        sol.innerHTML = "<strong><span style='color: red'>Error: </span>Form is empty.<br />Enter value in form, please.</strong>";
        return;
    }

    else if (a == '0'){
        sol.innerHTML = "<strong>It's a square equation. Choose another type.</strong>";
        return;
    } else if (a == '0' & b == '0'){
        sol.innerHTML = "<strong>This is not a cubic equation</strong>";
        return;
    } else if (a == '0' & b == '0' & c == '0'){
        sol.innerHTML = "<strong>This is not a cubic equation</strong>";
        return;
    }

    var pi = 3.14;

    var f, x1, x2, x3, i = 0;

    var p = (3*a*c - (b*b)) / (3 * (a*a));

    var q = 2*((b*b*b) - 9*(a*b*c) + 27*(a*a) * d);

    var s = ((q*q)/4) + ((p*p*p)/27);

    if (q == 0){
        f = pi / 2;
    } else if (q < 0 ){
        f = Math.atan((Math.sqrt(s)) / (q/2));
    } else if (q > 0){
        f = Math.atan((Math.sqrt(s)) / (q/2)) + pi;
    }

    if (s < 0){
        valDesc = "Discriminant = <strong>" + s + "</strong><br />";
        x1 = 2*Math.sqrt(-p/3) * Math.cos(f/3) - (b/(3*a));
        x2 = 2*Math.sqrt(-p/3) * Math.cos((f/3) + ((2*pi)/3)) - (b/(3*a));
        x3 = 2*Math.sqrt(-p/3) * Math.cos((f/3) + ((4*pi)/3)) - (b/(3*a));
        valRoot = "Roots:<br />x<sub>1</sub> = " + x1 + ";<br />" + "x<sub>2</sub> = " + x2 +";<br />" + "x<sub>3</sub> = " + x3 + ";<br />";
    } else if (s > 0){
        valDesc = "Discriminant = <strong>" + s + "</strong><br />";
        i = (Math.sqrt(3) / 2)* (Math.pow(((-q/2)+Math.sqrt(s)), 1/3) - Math.pow(((-q/2)-Math.sqrt(s)), 1/3));
        x1 = Math.pow(((-q/2)+Math.sqrt(s)), 1/3) + Math.pow(((-q/2)-Math.pow(s,1/2)), 1/3) - (b/(3*a));
        x2 = (-1/2) * (Math.pow(((-q/2)+Math.sqrt(s)), 1/3) + Math.pow(((-q/2)-Math.sqrt(s)), 1/3) - (b/(3*a))) + " +i *" + i;
        x3 = (-1/2) * (Math.pow(((-q/2)+Math.sqrt(s)), 1/3) + Math.pow(((-q/2)-Math.sqrt(s)), 1/3) - (b/(3*a))) + " -i *" + i;
        valRoot = "Roots:<br />x<sub>1</sub> = " + x1 + ";<br />" + "x<sub>2</sub> = " + x2 +";<br />" + "x<sub>3</sub> = " + x3 + ";<br />";
    } else if( s == 0) {
        valDesc = "Discriminant = <strong>0</strong><br />";
        x1 =  2 * (Math.pow((-q/2),1/3) - (b/(3*a)));
        valRoot = "Roots:<br>x<sub>1</sub> = x<sub>2</sub> = x<sub>3</sub> = <strong>" + x1+ "</strong>.";
    }

    desc.innerHTML = valDesc;

    sol.innerHTML = valRoot;
}