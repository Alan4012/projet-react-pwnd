import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Email invalide",
    pass: "Mot de passe invalide"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value='Connexion'/>
        </div>
      </form>
    </div>
  );

  const renderFormRegister = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Nom</label>
          <input type="text" name="noun" required />
          <label>Prénom</label>
          <input type="text" name="name" required />
          <label>Année scolaire</label>
          <select>
            <option>E1</option>
            <option>E2</option>
            <option>E3e</option>
            <option>E4e</option>
            <option>E5e</option>
          </select>
          <label>Email</label>
          <input type="text" name="email" required />
          <label>Mot de passe</label>
          <input type="text" name="mot-de-passe" required />
          <label>Confirmer mot de passe</label>
          <input type="text" name="conf-mdp" required />
          <div className="button-container">
          <input type="submit" value='Inscription'/>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <body>
      <h1>Projet Web</h1>
      <div className="app">
        <div className="login-form">
          <div className="title">Connexion</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
        <div className='register-form'> 
          <div className='title'>Inscription</div>
          {renderFormRegister}
        </div>
      </div>
    </body>
  );
}

export default App;
