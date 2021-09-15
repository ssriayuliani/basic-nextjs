import { useRouter } from 'next/dist/client/router'
import Layout from '../../components/layout'

interface User {
    id: number
    name: string
    email: string
    phone: string
    website: string
}

interface UserDetailProps {
    user: User
}

export default function UsersDetail(props: UserDetailProps) {
    const router = useRouter()
    const { user } = props

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <Layout pageTitle={'Users Detail'}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    // path berisi list dari user2 dan generate halaman-halaman static html sejumlah jumlah user yang ada
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()

    const paths = dataUsers.map((user: User) => ({
        params: {
            id: user.id.toString()
        },
    }))
    return {
        paths,
        fallback: false
    }
}

interface GetStaticProps {
    params: {
        id: string
    }
}
export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()

    return {
        props: {
            user
        }
    }
}