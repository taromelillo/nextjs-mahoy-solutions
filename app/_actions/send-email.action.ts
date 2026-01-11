"use server";

interface SendEmailActionResponse {
  success: boolean;
}

export const sendEmailAction = async (): Promise<SendEmailActionResponse> => {
  return { success: true };
};
