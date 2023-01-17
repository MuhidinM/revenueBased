import React from "react";
import Fileinput from "../../components/Fileinput";
import Input from "../../components/Input";
import Selectinput from "../../components/Selectinput";
import Textarea from "../../components/Textarea";

const region = [
  { label: "Afar", value: "af" },
  { label: "Amhara", value: "am" },
  { label: "Benishangul", value: "bg" },
  { label: "Fedral", value: "fd" },
  { label: "Gambela", value: "gm" },
  { label: "Harar", value: "hr" },
  { label: "Oromia", value: "or" },
  { label: "Sidama", value: "sd" },
  { label: "Somalia", value: "sm" },
  { label: "SNNPR", value: "sn" },
  { label: "Tigray", value: "tg" },
];
const incorporation = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const industry = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const category = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];
const staffsize = [
  { label: "Up to 5", value: "5" },
  { label: "6 to 15", value: "15" },
  { label: "16 to 50", value: "50" },
  { label: "Above 50", value: "a50" },
];
const transaction = [
  { label: "Below 10,000", value: "10000" },
  { label: "10,000 to 50,000", value: "50000" },
  { label: "50,000 to 100,000", value: "100000" },
  { label: "Above 100,000", value: "a100000" },
];

function Business() {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
        Business In Formation
      </h2>
      <div className="w-full">
        <Input
          label="lgname"
          title="Legal Name"
          type="text"
          name="lgname"
          id="lgname"
          place="Egate S.C"
          required=""
        />
      </div>
      <div className="w-full">
        <Selectinput
          arr={incorporation}
          id="incorporation"
          title="Type of Incorporation"
        />
      </div>
      <div className="w-full">
        <Selectinput arr={industry} id="industry" title="Industry" />
      </div>
      <div>
        <Selectinput arr={category} id="category" title="Category" />
      </div>
      <div>
        <Selectinput arr={staffsize} id="regstaffsizeion" title="Staff size" />
      </div>
      <div>
        <Selectinput
          arr={transaction}
          id="transaction"
          title="Monthly Transaction Amount"
        />
      </div>
      <div>
        <Input
          label="tinno"
          title="Tin Number"
          type="number"
          name="tinno"
          id="tinno"
          place="FM48496469"
          required=""
        />
      </div>
      <div>
        <Input
          label="bno"
          title="Business Registration Number"
          type="text"
          name="bno"
          id="bno"
          place="FM48496469"
          required=""
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          label="waddress"
          title="Website Address"
          type="text"
          name="waddress"
          id="waddress"
          place="egate.com"
          required=""
        />
      </div>
      <div className="">
        <Fileinput lable="trdlicence" title="Trade Licence" />
      </div>
      <div className="">
        <Fileinput lable="tinlicence" title="Tin Number" />
      </div>
      <div className="sm:col-span-2">
        <Textarea label="description" title="Description Of Company" />
      </div>
      <div className="divider sm:col-span-2"></div>
      <h2 className="mb-4 text-xl font-bold text-gray-900 sm:col-span-2 dark:text-white">
        Business Address
      </h2>
      <div>
        <Selectinput arr={region} id="region" title="Region" />
      </div>
      <div>
        <Input
          label="bcity"
          title="City"
          type="text"
          name="bcity"
          id="bcity"
          place="Adama"
          required=""
        />
      </div>
      <div>
        <Input
          label="bkifleketema"
          title="Kifle Ketema"
          type="text"
          name="bkifleketema"
          id="bkifleketema"
          place="Lugo"
          required=""
        />
      </div>
      <div>
        <Input
          label="bworeda"
          title="Woreda"
          type="text"
          name="bworeda"
          id="bworeda"
          place="Adama"
          required=""
        />
      </div>
      <div>
        <Input
          label="bkebele"
          title="Kebele"
          type="text"
          name="bkebele"
          id="bkebele"
          place="03"
          required=""
        />
      </div>
      <div>
        <Input
          label="hno"
          title="House Number"
          type="text"
          name="hno"
          id="hno"
          place="G67-32"
          required=""
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          label="location"
          title="Friendly Location"
          type="text"
          name="location"
          id="location"
          place="Near Dembel City Mall"
          required=""
        />
      </div>
      <div className="sm:col-span-2">
        <Fileinput lable="proof" title="Proof of Address" />
      </div>
    </>
  );
}

export default Business;
