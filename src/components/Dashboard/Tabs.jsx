import React, { useState } from "react";
// import TabNavItem from "./TabNavItem";
// import TabContent from "./TabContent";
// import { UpdateUserSetting } from "./update/UpdateUser";
import {
  TabContent,
  TabContentItem,
  DashCard,
  TabElement,
} from "../../styles/DashboardStyles/TabStyles/TabStyles";
import Withdraw from "./TabContent/Withdraw";
import TransferAirTime from "./TabContent/TransferAirTime";
import { ManageAcount } from "../../pages/ManageAcount";
import DashBoardWallet from "./TabContent/DashBoardWallet";
import { DashboardStyle } from "../../styles/DashboardStyles/HomeStyles";
import { TransactionHistory } from "./TabContent/TransactionHistory";
import WithdrawalHistory from "./TabContent/WithdrawalHistory";

const Tabs = () => {
  const tabs = [
    "Transfer",
    "Withdraw balance",
    "Manage Bank Account",
    "Withdrawal History",
    "Transaction History",
  ];
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <DashboardStyle>
        <div className="top"></div>
        <div className="dashboard">
          {(active === tabs[0] || active === tabs[1]) && <DashBoardWallet />}
          {active === tabs[2] && <h1>Manage Bank</h1>}
          {active === tabs[3] && <h1>Withdrawals</h1>}
          {active === tabs[4] && <h1>Transactions</h1>}

          <DashCard>
            <TabContent>
              {tabs.map((tab, index) => (
                <TabElement
                  key={index}
                  id="nav"
                  active={active === tab}
                  onClick={() => setActive(tab)}
                >
                  {tab}
                </TabElement>
              ))}
            </TabContent>

            <TabContentItem>
              {active === tabs[0] ? (
                <TransferAirTime />
              ) : active === tabs[1] ? (
                <Withdraw />
              ) : active === tabs[2] ? (
                <ManageAcount />
              ) : active === tabs[3] ? (
                <WithdrawalHistory />
              ) : (
                <TransactionHistory />
              )}
            </TabContentItem>
          </DashCard>
        </div>
      </DashboardStyle>
    </>
  );
};
export default Tabs;
