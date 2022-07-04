import {useRouter} from "next/router"
import MainContener from "../../Components/MainContener";

export default function ({user}) {
    const {query} = useRouter()
    return (
        <MainContener keyWords={"user" + user.name}>
            <h1>{`USER ${query.id} - ${user.name}`}</h1>
        </MainContener>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
    const user = await response.json()
    return {
        props: {user},
    }
}