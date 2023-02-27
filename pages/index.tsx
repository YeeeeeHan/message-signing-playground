import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';

interface Props {}

interface Context {}

export async function getServerSideProps(context: Context) {
  // tslint:disable-next-line: no-console
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const res = await response.json();
  // const jsonRpcProvider = new ethers.providers.JsonRpcProvider(process.env.DEV_ALCHEMY);

  console.log('process.env.DEV_ALCHEMY:', process.env.DEV_ALCHEMY, context);

  return {
    props: {
      test: '@@@@@@@@@@@@@',
    }, // will be passed to the page component as props
  };
}

const HomePage: NextPage = (props: Props) => {
  const jb = process.env.DEV_ALCHEMY;
  console.log(jb, props);

  return (
    <Default pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;
