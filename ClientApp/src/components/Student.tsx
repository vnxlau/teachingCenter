import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

const Aluno = (props) => {
    const student = useState();
    console.log(student);
    return(
        <div>
            <h1>Joãozinho</h1>
            <p>Página de apresentacao do aluno.</p>
        </div >
        )
    }
;


export default Aluno;
