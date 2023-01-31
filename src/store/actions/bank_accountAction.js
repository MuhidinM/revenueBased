import { GET_ACCOUNTS, ACCOUNTS_ERROR, CREATE_BAK_ACCOUNT } from "../types";
import AuthService from "../../services/auth.service";
import BankAccountServices from "../../services/bank-account.services";
export const getAccounts = () => async (dispatch) => {
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const bankAccountByID = await BankAccountServices.getBankAccountById(
        user.id
      );
      console.log(bankAccountByID);
      dispatch({
        type: GET_ACCOUNTS,
        payload: bankAccountByID,
      });
    }
  } catch (error) {
    dispatch({
      type: ACCOUNTS_ERROR,
      payload: error,
    });
  }
};

export const createTutorial =
  (accountHolderName, accountNumber, bankName, userId) => async (dispatch) => {
    try {
      const res = await BankAccountServices.CreateBankAccount(
        accountHolderName,
        accountNumber,
        bankName,
        userId
      );
      console.log(res);
      dispatch(getAccounts());
      dispatch({
        type: CREATE_BAK_ACCOUNT,
        payload: res,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
