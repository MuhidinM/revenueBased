import React, { useEffect } from "react";
import GenerateApiModal from "../../components/GenerateApi";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../store/actions/bank_accountAction";
import { getGeneratedApiKey } from "../../store/actions/generateApiKeyAction";
import Code from "./Code";
import jwtDecode from "jwt-decode";
function Uapi() {
  const primaryAccount = [];
  const AccountListData = useSelector((state) => state.accountsList);
  const generatedKey = useSelector((state) => state.apiKey);
  const { loading, error, bankAccounts } = AccountListData;
  const { apiloading, apierror, generatedApiKey } = generatedKey;
  const tokenInfo = useSelector((state) => state.userProfile);
  const { token } = tokenInfo;
  const user_token = jwtDecode(token);
  const user_id = user_token?.user_id;

  const dispatch = useDispatch();
  useEffect(() => {
    // setCurrentUser(user.user);
    dispatch(getGeneratedApiKey(user_id));
    // const generatedApiKey = AuthService.getGeneratedApiKey(1);
    // console.log(generatedApiKey);
    dispatch(getAccounts(user_id));

    console.log("Bank Accounts:" + bankAccounts);

    // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  }, []);

  // if (bankAccounts) {
  for (let index = 0; index < bankAccounts?.length; index++) {
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
      <div className="grid gap-4 md:grid-cols-12 justify-self-auto">
        <div className="col-span-8">
          <GenerateApiModal accountNumber={primaryAccount}></GenerateApiModal>
          <div className="col-span-4 mt-16">
            {generatedApiKey.credentialDetail ? (
              <Code generatedCredential={generatedApiKey.credentialDetail} />
            ) : (
              ""
            )}
          </div>
          <div className="mt-4 overflow-x-auto"></div>
        </div>
      </div>
    </>
  );
  // }
}

export default Uapi;
