import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Registration() {
    const [loading, setLoading] = useState()
    const [formUsername, setFormUsername] = useState()
    const [formPassword, setFormPassword] = useState()
    const [formFirstName, setFormFirstName] = useState('')
    const [formLastName, setFormLastName] = useState('')
    const [formEmail, setFormEmail] = useState('')
    const [ error, setError] = useState()
    let navigate = useNavigate()

    const submitHandler = e => {
      e.preventDefault();
      setLoading(true);
      fetch(
        '/api/user/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            username: formUsername,
            password: formPassword,
            email: formEmail,
            first_name: formFirstName,
            last_name: formLastName,
          })
        }
      )
        .then(response => {
          if (response.ok) {
              navigate('/')
              return response.json()
          } else {
              throw Error(`Something went wrong: code ${response.status}`)
          }
        })
        .then(({key}) => {
          setError(null)
        })
        .catch(error => {
          setError(`Ошибка, ${error}`)
        })
          .finally(e => {
              setLoading(false)
          })
    }

    return (
      <div className="App">
        {error? <h1>{error}</h1>: null}
        {loading? "Загрузка..." :
          <form className="loginForm" onSubmit={submitHandler}>
            <input type="text" name="username" value={formUsername} onChange={e => setFormUsername(e.target.value)} placeholder="Username"/>
            <input type="password" name="password" value={formPassword} onChange={e => setFormPassword(e.target.value)} placeholder="Password"/>
            <input type="email" name="email" value={formEmail} onChange={e => setFormEmail(e.target.value)} placeholder="example@example.com"/>
            <input type="text" name="firstname" value={formFirstName} onChange={e => setFormFirstName(e.target.value)} placeholder="First name"/>
            <input type="text" name="lastname" value={formLastName} onChange={e => setFormLastName(e.target.value)} placeholder="Last name"/>
            <input type="submit" name="submit" value="Зарегистрироваться"/>
          </form>
        }
      </div>
    );
}

export default Registration;