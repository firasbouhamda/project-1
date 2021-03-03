import React,{useState, useEffect} from 'react';
import axios from 'axios';
function UserList () {
   const [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const result = await axios.get('https://jsonplaceholder.typicode.com/users');
            setlistOfUSer(result.data);
            console.log(result);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>
                User List
            </h1>
            <u1>
                {listOfUSer.map(user => (
                    <h1 >  
                        <div className = 'usere'>                          
                    {user.id}.{user.name}</div>
                    <h6>email:{user.email}</h6>
                    </h1> 
                ))}
            </u1>
        </div>
    );
} 
export default UserList;