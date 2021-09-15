import Layout from "../components/layout";
import Image from 'next/image'

export default function Home() {
  return (
    <Layout pageTitle={"Home page"}>
      <Image src="/vercel.svg" width={200} height={200} />
      <h1>Welcome page</h1>
    </Layout>
  );
}

