import React, { useEffect, useState } from 'react'
import httpService from '../services/http.service'
import Popup from './add-edit-task.component'

var _ = require('lodash');

export default function () {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [currenTask, setCurrenTask] = useState({ priority: 1, description: "", name: "" });
    const priorities = [{ name: "High", value: 1 }, { name: "Middle", value: 2 }, { name: "Low", value: 3 }];

    useEffect(() => {
        httpService.get('tasks').then(s =>
            setData(s));
    }, []);

    function remove(task) {
        httpService.remove('tasks', `?id=${task.id}`).then(res => {
            if (res) {
                var index = data.indexOf(task);
                data.splice(index, 1);
                setData([...data]);
            }
        })
    }
    function add(task) {
        if (task.id) {
            httpService.put('tasks', task).then(res => {
                if (res) {
                    var index = data.indexOf(data.find(d => d.id == res));
                    data.splice(index, 1);
                    data.push(task);
                    setData([..._.orderBy(data, ['isDone', 'priority', 'created'], ['asc', 'asc', 'desc'])]);

                }
            })
        } else {
            httpService.post('tasks', task).then(res => {
                if (res) {
                    data.push(res);
                    setData([..._.orderBy(data, ['isDone', 'priority', 'created'], ['asc', 'asc', 'desc'])]);
                }
            })
        }
        setCurrenTask({ priority: 1, description: "", name: "" });
    }


    return <div>
        {showPopup ? <Popup data={currenTask} setData={add} setShow={setShowPopup} priorities={priorities} /> : ""}
        <table>
            <thead>
                <tr>
                    <th colSpan="6">List Tasks</th>
                    <th ><button onClick={() => { setShowPopup(!showPopup) }}>add</button></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th >Name</th>
                    <th >Description</th>
                    <th >Created</th>
                    <th >Priority</th>
                    <th >IsDone</th>
                    <th ></th>
                </tr>
            </thead>
            <tbody>
                {data.map(d =>
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.description}</td>
                        <td>{new Date(d.created).toLocaleString()}</td>
                        <td>{priorities.find(p => p.value == d.priority).name}</td>
                        <td>{d.isDone ? "Done" : <button onClick={() => { d.isDone = true; add(d); }} >Done</button>}</td>
                        <td>
                            <i className="material-icons button edit" onClick={() => { setCurrenTask(d); setShowPopup(!showPopup); }}>edit</i>

                            <i className="material-icons button delete" onClick={() => { remove(d) }}>delete</i>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

