import { useEffect, useState } from 'react';

function User() {
    const [clickToFetch, setClickToFetch] = useState(false);
    const [users, setUsers] = useState ([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
                    headers: {"x-api-key": "elev-hemlighet-2026","Content-Type": "application/json"},
                })

                if (!response.ok) throw new Error('fel')

                const data = await response.json()
                const onlyPilots = data.filter(user => user.role === 'Pilot')
                setUsers(onlyPilots)
                console.log(onlyPilots)

            } catch (error) {
                console.error(error)
            }}

        fetchData()
    }, [clickToFetch])

    return (
        <>
            <h1>Users - component</h1>
            <button onClick={() => setClickToFetch(!clickToFetch)}>Hämta Användare</button>
            <ul>
             {
                users.map (user => (
                <li key={user.id}>
                    {user.name}-{user.role}
                </li>   
                ))
             }

            </ul>
        </>
    )

}
export default User;


