import { fetchAPI } from "../hooks/useApi";
import { Posts } from "../components/Posts";
import { ISeo } from "../components/Seo";

type HomeProps = {
  seo: ISeo;
};

const Home = ({ seo }: HomeProps) => {
  return <Posts global={seo} />;
};

Home.getInitialProps = async () => {
  const seo = await fetchAPI("/global");
  return { seo };
};

export default Home;
