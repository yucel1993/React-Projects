import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState("");
    const [remember, setRemember] = useState("");

    //? useState (hook) functions
    //* userName
    const handleName = (e) => {
        setName(e.target.value);
    };
    //****E-mail****
    const handleMail = (e) => {
        setMail(e.target.value);
    };
    //****Password****
    const handlePassword = (e) => {
        setPassword("e.target.value");
    };
    //****Country****
    const handleCountry = (e) => {
        setCountry(e.target.value);
    };
    //****Country****
    const handleRmember = (e) => {
        setRemember(e.target.checked);
    };

    //****Submit****
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            ` name: ${name};
        mail: ${mail};
        password: ${password};
        country: ${country}
    `
        );
        setName("");
        setMail("");
        setPassword("");
        setCountry("");
        setRemember("");
    };

    return (
        <div className="text-center p-3">
            <form onSubmit={handleSubmit} action="" method="post">
                <div>
                    <p>Username:{name}</p>
                    <label htmlFor="name">
                        <strong>Username:</strong>
                    </label>
                    <input
                        placeholder="username"
                        onChange={handleName}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                </div>
                <div>
                    <p>E-mail:{mail}</p>
                    <label htmlFor="email">
                        <strong>E-mail:</strong>
                    </label>
                    <input
                        onChange={handleMail}
                        value={mail}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="   example@gmail.com"
                        required
                    />
                </div>
                <div>
                    <p>Password:{password}</p>
                    <label htmlFor="password">
                        <strong>Password:</strong>
                    </label>
                    <input
                        onChange={handlePassword}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div>
                    <p>Country:{country}</p>
                    <label htmlFor="password">
                        <strong>Country:</strong>
                    </label>
                    <select
                        onChange={handleCountry}
                        value={country}
                        name=""
                        id=""
                    >
                        <optgroup label="Europe">
                            <option value="Germany">Germany</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="France">France</option>
                        </optgroup>
                        <optgroup label="Asia">
                            <option value="China">China</option>
                            <option value="Tailand">Tailand</option>
                            <option value="Japan">Japan</option>
                        </optgroup>
                    </select>
                </div>
                <div>
                    <p>Remember me:{remember ? "Yes" : "No"}</p>
                    <label htmlFor="remember">
                        <strong>Remember me:</strong>
                    </label>
                    <input
                        onChange={handleRmember}
                        value={remember}
                        type="checkbox"
                        name="remember"
                        id="remember"
                    />
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
            
        </div>
    );
};

export default Form;