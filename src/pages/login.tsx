import {useState} from "react";
import axios from "axios";
import {User} from "../dto/user";

export default function register() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isError, setError] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [message, setMessage] = useState("")



    function login(e: any) {
        e.preventDefault();
        setError(false);
        setMessage("");

        axios.post('/api/login', {
            email: email,
            password: password
        }).then((data) => {
            setMessage("Vous etes maintenant connecté");
            const user: User = data.data;
            localStorage.setItem("user", JSON.stringify(user));
        }).catch(() => {
            setError(true);
            setMessage("Une erreur lors de la connection c'est produit");
        });
    }

    return (
        <>
            {isError && (
                <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
                    {message}
                </div>
            )}
            {!isError && message && (
                <div className="bg-green-100 text-green-600 p-2 rounded mb-4">
                    {message}
                </div>
            )}
            <div className="bg-red min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h1 className="text-2xl font-semibold mb-4 text-gray-500">Login</h1>
                    <form onSubmit={login}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                        </div>
                        <button type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Login
                        </button>
                    </form>
                    <div className="text-gray-500 text-sm mt-10">
                        <p>Vous pouvez aussi vous register :</p>
                        <a href="/register" className="text-blue-500 hover:text-blue-600">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}
