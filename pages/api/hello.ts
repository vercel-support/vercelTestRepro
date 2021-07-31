// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const sleep = require('util').promisify(setTimeout);

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await sleep(1000);
    res.status(200).json({ name: 'John Doe' });
}
