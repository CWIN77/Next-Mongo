import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    console.log("sendBeacon 실행됨");
    res.status(200).json({ data: 'Hello Api' });
  } else {
    res.status(200).json({ data: 'Hello Api' });
  }
}
