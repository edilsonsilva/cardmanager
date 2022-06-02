import { useEffect, useState } from "react";
import Balance from "./Balance";
import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import { path } from "../../config/path";

export default function Container() {
  const [datacards, setDataCards] = useState([]);

  useEffect(() => {
    fetch(`${path}/wallet/list/user/628fd4868923b70969f4d6fb`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZkNDg2ODkyM2I3MDk2OWY0ZDZmYiIsInVzZXIiOiJyb2JlcnRvLm1hcnRpbnMiLCJlbWFpbCI6InJvYmVydG8yMDIyQHRlcnJhLmNvbS5iciIsImlhdCI6MTY1NDE5MDY1NiwiZXhwIjoxNjU0MzYzNDU2fQ.U9YtJi4TEHWPpGdhOsN_QyQeKLUp_0x8lVt9ck4Bxpg",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data.payload);
        setDataCards(data.payload);
      })
      .catch((err) => console.error(`Error at loading api -> ${err}`));
  }, []);

  const [balance, setBalance] = useState([]);

  const changeData = (content) => {
    setBalance(content);
  };

  return (
    <div className="container">
      <Cards data={datacards} action={changeData} />
      <Panel />
      <Waitlist />
      <Plans />
      <Balance data={balance} />
    </div>
  );
}
