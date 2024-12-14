import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const cookieStore = await cookies();
  const nicknameCookie = cookieStore.get("userName");

  if (!nicknameCookie) {
    res.status(500).json({ message: "There is no nickname" });
  } else {
    res.status(200).json({ message: nicknameCookie.value });
  }
}
