import { ReactNode } from "react"

import Header from "../Header"
import Footer from "../Footer"
import Head from "next/dist/shared/lib/head"

import styles from "./Layout.module.css"

interface LayoutProps {
    children: ReactNode
    pageTitle: string
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>NextJs Basic | {pageTitle}</title>
                <meta name="description" content="Website NextJs Basic" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </>
    )
}
