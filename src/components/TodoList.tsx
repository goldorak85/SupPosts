import { useState } from "react";

function Counter() {
    const [list, setList] = useState([]);

    function addList(content: string) {
        setList([...list, content]);
    }

    function removeList(content: string) {
        setList(list.filter((item) => item !== content));
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
            <div className="bg-amber-500 rounded p-4 m-8">
                <ul>
                    {list.map((item) => (
                        <li key={item} className="flex items-center justify-between py-2">
                            <span>{item}</span>
                            <button className="bg-amber-400 rounded p-2 ml-4" onClick={() => removeList(item)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <input
                className="bg-amber-600 rounded p-2 m-8"
                type="text"
                placeholder="Ajouter un élément"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addList(e.currentTarget.value);
                        e.currentTarget.value = "";
                    }
                }}
            />
        </div>

    );
}

export default Counter;
