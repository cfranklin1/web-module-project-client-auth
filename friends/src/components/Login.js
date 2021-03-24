import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    state = {
        values: {
            username: '',
            password: ''
        },
        isLoading: false
    };

    onChange = e => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault()
        
        axios
            .post('http://localhost:5000/api/login', this.state.values)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
                
            })
            .catch(err=> {
                console.log(err.respnse)
            });

    }


    render() {

        return (
            <div>
                <form onSubmit={this.login}>

                    <input 
                        name='username'
                        type='text'
                        value={this.state.values.username}
                        onChange={this.onChange}
                        placeholder='type a username..'
                  
                    />

                    <input 
                        name='password'
                        type='password'
                        value={this.state.values.password}
                        onChange={this.onChange}
                        placeholder='********'
                    
                    />
                    <button>Log-in</button>

                </form>
            </div>
        )
    }


}



export default Login;