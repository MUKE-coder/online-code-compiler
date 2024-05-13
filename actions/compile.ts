"use server";

import axios from "axios";

export async function compileCode(requestData: any) {
  const endpoint = "https://emkc.org/api/v2/piston/execute";

  try {
    const response = await axios.post(endpoint, requestData);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
