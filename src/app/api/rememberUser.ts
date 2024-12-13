import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const userName = req.body?.userName;

  const cookieStore = await cookies();
  cookieStore.set("userName", userName, { maxAge: 60 * 60 * 24 });

  if (!cookieStore.get("userName")) {
    res.status(500).json({ message: "Could not memorize the submitted name" });
  } else {
    res.status(200).json({ message: "Name saved" });
  }
}
