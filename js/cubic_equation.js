/**
 * Created by Family on 28.06.2015.
 */

function cuEq() {
    var a = document.getElementById("val_a_c").value;
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

    var p = (3*a*c - b*b)/(3*a*a);

    var q = (2*b*b*b - 9*a*b*c + 27*a*a*d)/(27*a*a*a);

    var roots;

    function cuberoot(x) {
        var y = Math.pow(Math.abs(x), 1/3);
        return x < 0 ? -y : y;
    }
    // p = 0 -> t^3 = -q -> t = -q^1/3
    if (Math.abs(p) < 1e-8) {
        roots = [cuberoot(-q)];
    // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
    } else if (Math.abs(q) < 1e-8) {
        roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
    } else {
        var D = q*q/4 + p*p*p/27;
        valDesc = "Discriminant = " + "<strong>" + D + "</strong><br />";
        // D = 0 -> two roots
        if (Math.abs(D) < 1e-8) {
            roots = [-1.5*q/p, 3*q/p];
        // Only one real root
        } else if (D > 0) {
            var u = cuberoot(-q/2 - Math.sqrt(D));
            roots = [u - p/(3*u)];
        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
        } else {
            var u = 2*Math.sqrt(-p/3);
            // D < 0 implies p < 0 and acos argument in [-1..1]
            var t = Math.acos(3*q/p/u)/3;
            var k = 2*Math.PI/3;
            roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
        }
    }

    for (var i = 0; i < roots.length; i++){
        roots[i] -= b/(3*a);
        valRoot = "Roots:<br>" + "x<sub>" + (i+1) + "</sub> = " + "<strong>" + roots[i] + "</strong><br />";
        sol.innerHTML = valRoot;
    }

    desc.innerHTML = valDesc;
}