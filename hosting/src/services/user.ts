import { request } from "utils/api";
import { SERVER_ENDPOINT } from "utils/endpoint";

export const loginGetOTP = async (phone: any) => {
  return await request({
    method: "POST",
    url: `${SERVER_ENDPOINT}/auth/login/otp`,
    data: {
      phone,
    },
  });
};

export const loginWithOTP = async (phone: string, otp: string) => {
  return await request({
    method: "POST",
    url: `${SERVER_ENDPOINT}/auth/login/otp-verify`,
    data: {
      phone,
      otp: String(otp),
    },
  });
};

export const registerGetOTP = async (body: any) => {
  if (body.userId) {
    return await request({
      method: "POST",
      url: `${SERVER_ENDPOINT}/auth/register/refer`,
      data: {
        phone: body.phone,
        userId: body.userId,
      },
    });
  } else {
    return await request({
      method: "POST",
      url: `${SERVER_ENDPOINT}/auth/register/otp`,
      data: {
        phone: body.phone,
      },
    });
  }
};

export const registerWithOTP = async (body: any) => {
  if (body.userId) {
    return await request({
      method: "POST",
      url: `${SERVER_ENDPOINT}/auth/register/refer/otp-verify`,
      data: {
        ...body,
        phone: `0${body.phone}`,
        otp: String(body.otp),
      },
    });
  } else {
    return await request({
      method: "POST",
      url: `${SERVER_ENDPOINT}/auth/register/otp-verify`,
      data: {
        ...body,
        phone: `0${body.phone}`,
        otp: String(body.otp),
      },
    });
  }
};

export const getUserDetails = async () => {
  return await request({
    method: "GET",
    url: `${SERVER_ENDPOINT}/users/me`,
  });
};
