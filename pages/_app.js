import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "../modals/AuthContext";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider template={AlertTemplate} {...options}>
        <Layout>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </Provider>
    </AuthContextProvider>
  );
}
