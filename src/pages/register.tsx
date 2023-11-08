import {useState} from "react";
import axios from "axios";

export default function register() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [confirm, setConfirm] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isError, setError] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [message, setMessage] = useState("")



    function register(e: any) {
        e.preventDefault();
        setError(false);
        setMessage("");
        if (password !== confirm) {
            setError(true);
            setMessage("Le password ne correponds pas");
            return;
        }

        axios.post('/api/register', {
            name: name,
            email: email,
            password: password
        }).then(() => {
            setMessage("Vous pouvez maintenant vous connecter");
        }).catch(() => {
            setError(true);
            setMessage("Une erreur lors de l'inscription c'est produit");
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
                    <h1 className="text-2xl font-semibold mb-4 text-gray-500">Register</h1>
                    <form onSubmit={register}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="username" name="username" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}
                                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                        </div>
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
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm
                                password</label>
                            <input type="password" id="confirm-password" name="confirm-password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
                                   placeholder="Confirm Password"
                                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                        </div>
                        <button type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Register
                        </button>
                    </form>
                    <div className="text-gray-500 text-sm mt-10">
                        <p>Vous pouvez aussi vous connecter :</p>
                        <a href="/login" className="text-blue-500 hover:text-blue-600">Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}
