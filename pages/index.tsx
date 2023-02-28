import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';

interface Props {}

const HomePage: NextPage = (props: Props) => {
  return (
    <Default pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;
