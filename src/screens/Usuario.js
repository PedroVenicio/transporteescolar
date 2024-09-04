import React, {useState} from 'react';
import axios from 'axios';

function Usuario() {

    const [nome, setNome] = useState('');
    const [horarioida, setHorarioida] = useState('');
    const [horariovolta, setHorariovolta] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');


    function cadastrarUsuario() {
        if (nome, horarioida, horariovolta, endereco, bairro, cidade, login, senha, cpf, telefone, email !== ''){
            try{
                axios.post('http://localhost:3000/usuario',
                    {
                        nome: nome,
                        horarioida: horarioida,
                        horariovolta: horariovolta,
                        endereco: endereco,
                        bairro: bairro,
                        cidade: cidade,
                        login: login,
                        senha: senha,
                        cpf: cpf,
                        telefone: telefone,
                        email: email
                    },
                )
                alert('Usuario cadastrado')
                setNome('')
                setHorarioida('')
                setHorariovolta('')
                setEndereco('')
                setBairro('')
                setCidade('')
                setLogin('')
                setSenha('')
                setCpf('')
                setTelefone('')
                setEmail('')
            }
            catch (e) {
                console.log(e);
                alert('Erro ao cadastrar')
            }
        }
        else{
            alert('Insira dados aos')
        }
    }

    return (
        <div>
            <h1>Cadastro usuário</h1>
            <input type='text' value={nome} placeholder='nome' onChange={event => setNome(event.target.value)}/>
            <input type='text' value={horarioida} placeholder='horario ida' onChange={event => setHorarioida(event.target.value)}/>
            <input type='text' value={horariovolta} placeholder='horario volta' onChange={event => setHorariovolta(event.target.value)}/>
            <input type='text' value={endereco} placeholder='endereco' onChange={event => setEndereco(event.target.value)}/>
            <input type='text' value={bairro} placeholder='bairro' onChange={event => setBairro(event.target.value)}/>
            <input type='text' value={cidade} placeholder='cidade' onChange={event => setCidade(event.target.value)}/>
            <input type='text' value={login} placeholder='login' onChange={event => setLogin(event.target.value)}/>
            <input type='text' value={senha} placeholder='senha' onChange={event => setSenha(event.target.value)}/>
            <input type='text' value={cpf} placeholder='cpf' onChange={event => setCpf(event.target.value)}/>
            <input type='text' value={telefone} placeholder='telefone' onChange={event => setTelefone(event.target.value)}/>
            <input type='text' value={email} placeholder='email' onChange={event => setEmail(event.target.value)}/>
            
        </div>
    );
}

export default Usuario;