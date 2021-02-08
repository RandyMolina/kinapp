import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import GET_MEMBERS from "../lib/queries/getMembers";
import { initializeApollo } from "../lib/apollo";
import Members from "./components/Members";
import Image from "next/image";
// const client = ...

export default function Home() {
  const { data, error, loading } = useQuery(GET_MEMBERS);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data === 0) return <h2>404 | Not Found</h2>;

  console.log(data.members);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto space-y-4 p-4">
        <h1 className="text-8xl text-center">Kin Spaces</h1>
        <div className="flex justify-center  ">
          {" "}
          <div className="text-2xl">
            {" "}
            <Members data={data} error={error} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_MEMBERS,
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
