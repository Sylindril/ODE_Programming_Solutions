/**
 * f_k = f(u[k], t[k])
    u_star = u[k] + dt*f_k
    u[k+1] = u[k] + 0.5*dt*f_k + 0.5*dt*f(u_star, t[k+1])

 */
 function ForwardEuler_HeunsMethod(f, U0, T, n){
     /**
      * Solve u'=f(u,t), u(0)=U0, with n steps until t=T.
      * Uses the Heun's method
      */
     var T_Array = [];
     var U_Array = [];
     U_Array[0] = U0;
     T_Array[0] = 0;
     dT = T/n;

     var k;
     for(k = 0; k< n; k++){
        var f_k = f(U_Array[k], T_Array[k])
        var u_star = U_Array[k] + dT*f_k
        T_Array[k+1] = T_Array[k] + dT;
        U_Array[k+1] = U_Array[k] + 0.5*dT*f_k + 0.5*dT*f(u_star, T_Array[k+1]);
     }
     return {
     U_Array,
     T_Array
     };
 }

 function f(u,t){
     return u;
 }