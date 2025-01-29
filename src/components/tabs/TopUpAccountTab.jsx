import AccountTypeCards from '../AccountTypeCards';
import AccountStatus from '../AccountStatus';

const TopUpAccountTab = () => {
  return (
    <>
      <AccountTypeCards />
      <AccountStatus className="mt-12" />
    </>
  );
};

export default TopUpAccountTab;
