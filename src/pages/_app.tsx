import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

import "@/styles/globals.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const headers = [
  {
    name: "Home",
    path: "/home",
    isActive: false,
  },
  {
    name: "Following",
    path: "/following",
    isActive: false,
  },
  {
    name: "Contact Us",
    path: null,
    isActive: false,
  }
]

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  headers.forEach((item, index) => {
    if(item.path === router.pathname) {
      headers[index].isActive = true;
    }
    else{
      headers[index].isActive = false;
    }
  })
  return (
    <ApolloProvider client={apolloClient()}>
      <Layout headers={headers}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
