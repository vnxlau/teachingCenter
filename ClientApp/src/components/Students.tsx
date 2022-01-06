import * as     React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Aluno from './Student';
import Student from './Student';

interface Props {
    toggle: boolean;
    toggleHandler: (x: boolean) => void;
}
const Alunos = () => {
    return (
        <div>
            <h1>Alunos</h1>

            <p>Página de apresentacao dos alunos.</p>

            <p>Lista alunos</p>
            <p>
                <Link to={{ pathname: '/Student', state: { student: { name: 'john' } }}}  >Aluno</Link>
            </p>
        </div>
        )
}
    
export default connect()(Alunos);

