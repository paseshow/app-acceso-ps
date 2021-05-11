//import './auth.scss';
import React from 'react';

function Auth() {

    return (
        <div>
            <h1>LOGIN</h1>
        </div>
    );
}

export default Auth;

/*

    api para loguarse


    https://www.paseshow.com.ar/test/usuarios/authenticate
    METHOD: POST

    HEADERS:
    Content-Type : application/x-www-form-urlencoded
    Accept : application/json

    datos tipo: form-data
    password=miguel01
    username=25858046

    RESPUESTA ---->
                    token: dni : tiempo de expiracion : hash de seguridad
*/