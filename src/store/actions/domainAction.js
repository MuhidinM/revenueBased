import { ADD_DOMAIN, ADD_DOMAIN_ERROR } from "../types";
import AuthService from "../../services/auth.service";
import DomainServices from "../../services/domain.services";
// import BankAccountServices from "../../services/bank-account.services";
export const addDomain = (user_id, bankName, bankCode) => async (dispatch) => {
 
  try {
    const addedUrls = await DomainServices.addUrls(user_id, bankName, bankCode);
    console.log(addedUrls);
    // dispatch(gateBanks());
    dispatch({
      type: ADD_DOMAIN,
      payload: addedUrls,
    });
  } catch (error) {
    dispatch({
      type: ADD_DOMAIN_ERROR,
      payload: error,
    });
  }
};
// export const gateBanks = () => async (dispatch) => {
//   try {
//     const getBank = await BankServices.getBank();
//     console.log(getBank);
//     // dispatch(getGeneratedApiKey());
//     dispatch({
//       type: GET_BANK,
//       payload: getBank,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_BANK_ERROR,
//       payload: error,
//     });
//   }
// };
