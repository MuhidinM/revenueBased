import React from "react";
import Card from "./Card";
import Table from "../../components/Table";
// import Banner from "./Banner";
import Stat from "./Stat";

function Home() {
  return (
    <>
      {/* <Banner /> */}
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
