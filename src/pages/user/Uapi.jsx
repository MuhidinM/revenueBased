import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import GenerateApiModal from "../../components/GenerateApi";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../store/actions/bank_accountAction";
import { getGeneratedApiKey } from "../../store/actions/generateApiKeyAction";
import AuthService from "../../services/auth.service";
import Code from "./Code";
import Card from "./Card";
function Uapi() {
  const primaryAccount = [];
  const AccountListData = useSelector((state) => state.accountsList);
  const generatedKey = useSelector((state) => state.apiKey);
  const { loading, error, bankAccounts } = AccountListData;
  const { apiloading, apierror, generatedApiKey } = generatedKey;
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    // setCurrentUser(user);
    dispatch(getGeneratedApiKey());
    // const generatedApiKey = AuthService.getGeneratedApiKey(1);
    // console.log(generatedApiKey);
    dispatch(getAccounts());

    console.log("Bank Accounts:" + bankAccounts);

    // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  }, []);

  if (bankAccounts) {
    for (let index = 0; index < bankAccounts.length; index++) {
      const element = bankAccounts[index];
      console.log(element.primaryAccount);
      if (element.primaryAccount === "1") {
        primaryAccount.push(element.accountNumber);
      }
    }
    console.log(primaryAccount);
    console.log(generatedApiKey.credentialDetail);
    return (
      <>
        <div className="grid gap-4 m-4 md:grid-cols-12 justify-self-auto">
          <div className="col-span-8">
            <GenerateApiModal accountNumber={primaryAccount}></GenerateApiModal>
            <div className="col-span-4 mt-16">
              {generatedApiKey.credentialDetail ? (
                <Code generatedCredential={generatedApiKey.credentialDetail} />
              ) : (
                ""
              )}
            </div>
            {/* <GenerateApiModal></GenerateApiModal> */}
            {/* {modaState && (
            <Modal show={showModal} handleClose={hideModal} page="b">
              <p>Modal</p>
            </Modal>
          )} */}

            <div className="mt-4 overflow-x-auto">
              {/* <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Secrate Key</th>
                    <th>Api key</th>
                    <th>Client Id</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {generatedApiKey.credentialDetail ? (
                    <tr className="hover">
                      <th>1</th>
                      <td>
                        {generatedApiKey.credentialDetail.secrate_key
                          ? generatedApiKey.credentialDetail.secrate_key
                          : "Not Provided"}
                      </td>
                      <td>{generatedApiKey.credentialDetail.key}</td>
                      <td>{generatedApiKey.credentialDetail.client_id}</td>
                      <td>
                        <Link to={"/users/uapi"}>Copy</Link>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Uapi;
