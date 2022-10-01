 function ForwardEuler(f, U0, T, n){
     /**
      * Solve u'=f(u,t), u(0)=U0, with n steps until t=T.
      * Uses the Forward Euler method
      */
     var T_Array = [];
     var U_Array = [];
     U_Array[0] = U0;
     T_Array[0] = 0;
     dT = T/n;

     var k;
     for(k = 0; k< n; k++){
        T_Array[k+1] = T_Array[k] + dT;
        U_Array[k+1] = U_Array[k] + dT*f(U_Array[k], T_Array[k]);
     }
     return {
     U_Array,
     T_Array
     };
 }

 function f(u,t){
     return u;
 }
var u;
var t;
var combined;
 combined = ForwardEuler(f, 1, 4, 20);
 u = combined.U_Array;
 t = combined.T_Array;
 //console.log(u, t)
 test_ForwardEuler_against_hand_calculations();
 
function test_ForwardEuler_against_hand_calculations(){
    var a;
    var x = [];
    
    var error; 
    var success;
    var Hand_Calc = [1, 1.1,  1.21];

    var placeholder = ForwardEuler(f, 1, 0.2, 2);
    a = placeholder.U_Array;
    for(var i = 0;i<=a.length-1;i++)
    x.push(a[i] - Hand_Calc[i]);

    error = Math.abs(Math.max.apply(null,x));

    success =  error < Math.pow(10,-14);
    console.log(success)
     

} 
function test_ForwardEuler_against_linear_solution(){

}