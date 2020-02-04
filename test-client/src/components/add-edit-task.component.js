import React, { useEffect, useState } from 'react'


export default function ({ data, setData, setShow, priorities }) {
    const [task, setTask] = useState(data);
    const [name, setName] = useState(data.name);
    const [priority, setPriority] = useState(data.priority);
    const [description, setDescription] = useState(data.description);

    useEffect(() => {

    }, []);

    return (<div className="popup">
        <form >
            <input placeholder="Name" type="text" required value={name} onChange={(e) => { setName(e.target.value) }} />
            <input placeholder="Description" type="text" required value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <div >
                <label>Priority: </label>
                <select placeholder="Priority" value={priority.toString()} onChange={(e) => { setPriority(+e.target.value) }}>
                    {priorities.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </select>
            </div>
            <input className="formBtn" type="submit" onClick={(e) => {
                setData(Object.assign(task, { name: name, description: description, priority: priority }));
                setShow(false);
            }} />
        </form>
    </div>)
}