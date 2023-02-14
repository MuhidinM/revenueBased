import {
  GET_ACCOUNTS,
  ACCOUNTS_ERROR,
  CREATE_BAK_ACCOUNT,
  SET_PRIMARY,
  NAME_ENQ_BY_ACCNO,
  NAME_ENQ_BY_ACCNO_ERROR,
} from "../types";
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

export const nameEnquiryByAccountNumber =
  (criteriaValue) => async (dispatch) => {
    console.log(criteriaValue);
    try {
      const nameResponse = await BankAccountServices.nameEnquiryByAccountNumber(
        criteriaValue
      );
      console.log(nameResponse);
      dispatch({
        type: NAME_ENQ_BY_ACCNO,
        payload: nameResponse,
      });
    } catch (error) {
      dispatch({
        type: NAME_ENQ_BY_ACCNO_ERROR,
        payload: error,
      });
    }
  };

export const setPrimaryAccount = (account_id) => async (dispatch) => {
  console.log(account_id);
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const setPrimaryAccount = await BankAccountServices.setPrimaryAccount(
        user.id,
        account_id
      );
      console.log(setPrimaryAccount);
      dispatch(getAccounts());
      dispatch({
        type: SET_PRIMARY,
        payload: setPrimaryAccount,
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
