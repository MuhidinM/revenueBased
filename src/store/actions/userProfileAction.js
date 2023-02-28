import {
  CREATE_USER_PROFILE,
  CREATE_USER_PROFILE_ERROR,
  LOGGED_IN_USER_DETAIL,
  LOGGED_IN_USER_DETAIL_ERROR,
} from "../types";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";
export const CreateOrUpdate = (formData) => async (dispatch) => {
  try {
    const createdOrUpdated = await UserService.CreateUserProfile(formData);
    console.log(createdOrUpdated);
    dispatch({
      type: CREATE_USER_PROFILE,
      payload: createdOrUpdated,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_PROFILE_ERROR,
      payload: error,
    });
  }
};

export const retrieveLoggedInUser = () => async (dispatch) => {
  try {
    const userDetail = await AuthService.getLoggedInUser();
    console.log("Responded User Detail", userDetail);
    dispatch({
      type: LOGGED_IN_USER_DETAIL,
      payload: userDetail,
    });
  } catch (error) {
    dispatch({
      type: LOGGED_IN_USER_DETAIL_ERROR,
      payload: error,
    });
  }
};
