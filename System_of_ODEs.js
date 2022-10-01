var beta, m, k;

function F(t){
return 0;
}
function f(u,t){
    var f_return = [];
    f_return[0] = u[0];
    f_return[1] = (F(t)/m - k*u[0]/m - beta*u[1]/m)
    return f_return
}

var U0 = [0.1, 0];

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

       for (var i = 0; i< U0.length; i++){
           var Ustar = [];
           Ustar[i] = U_Array[k][i] + dT* f(U_Array[k], T_Array[k])[i];
           U_Array[k+1] = Ustar

       }
       
        
    

    }
    return {
    U_Array,
    T_Array
    };
}



/// Testing
m = 1;
k = 1;
beta = 1;

var u;
var t;
var combined;
 combined = ForwardEuler(f, U0, 4, 20);
 u = combined.U_Array;
 t = combined.T_Array;
 console.log(u)


 ///TODO - figure out how to deal with nested arrays