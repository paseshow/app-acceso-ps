//import './auth.scss';
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Redirect } from 'react-router-dom'

function Auth() {

    // funcionalidad 
    const ProtectedComponent = () => {
        return <Redirect to='authentication' />
    }

    return (
        <div>
            <h1>LOGIN</h1>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        NOMBRE USUARIO:
                </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        PASSWORD:
                </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password" id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <Button variant="success" onClick={ProtectedComponent} >INGRESAR</Button>
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