import React from 'react';
import A from "../Components/A"
import MainContener from "../Components/MainContener";

const Users = ({users}) => {

    return (
        <MainContener keyWords={"users"}>
            <h1>Users</h1>
            <ul>
                {users.map(m => <li key={m.id}>
                    <A href={`/users/${m.id}`} text={m.name}/>
                </li>)
                }
            </ul>
        </MainContener>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
        props: {users},
    }
}