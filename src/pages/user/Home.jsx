import React, { useEffect, useState } from "react";
import Card from "./Card";
import Table from "../../components/Table";
import Banner from "./Banner";
import Stat from "./Stat";
import AuthService from "../../services/auth.service";

function Home() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <>
      {currentUser.secrate_key == null ? <Banner /> : ""}

      <div className="p-4">
        <Stat />
        <div className="grid gap-4 mt-4 md:grid-cols-12 justify-self-auto">
          <div className="col-span-8">
            <Table />
          </div>
          <div className="flex col-span-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
