import axios from "axios";
const baseUrl = "http://wren.in:3200/";

export const handleSignUp = async (payload, type) => {
  try{
    return await axios.post(
      `${baseUrl}api/sign-up/${type === 'Fan SignUp' ? 'fan' : 'talent'}`,
      payload,
    );
  } catch (error) {
    console.log(error);
  }
};