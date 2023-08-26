import * as UploadApi from "../requests/Uploadrequest";

export const UploadFile = (data) => async (dispatch) => {
  try {
    await UploadApi.Uploadimage(data);
    
  } catch (error) {
    console.log(error);
  }
};
