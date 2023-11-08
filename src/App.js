import './App.css';
import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((jsonData) => {
                setUsers(jsonData.users);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Dummy Data</h1>
            <table>
                <tr>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            <img src={user.image}></img>
                        </td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.domain}</td>
                        <td>{user.ip}</td>
                        <td>{user.university}</td>
                    </tr>
                ))}
            </table>
            
        </div>
    );
}

export default App;
