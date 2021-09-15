import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";
import styles from "../../styles/Users.module.css"

interface UsersProps {
    dataUsers: Array<any>
}
export default function Users(props: UsersProps) {
    const router = useRouter()
    const { dataUsers } = props

    return (
        <Layout pageTitle={"Users Page"}>
            {dataUsers.map((user) => {
                return (
                    <div key={user.id} onClick={()=>{router.push(`/users/${user.id}`)}} className={styles.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()

    return {
        props: {
            dataUsers
        }
    }
}
