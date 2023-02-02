import { CREATE_USER_PROFILE, CREATE_USER_PROFILE_ERROR } from "../types";
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
