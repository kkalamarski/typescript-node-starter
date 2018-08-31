import { Request, Response } from 'express'

export default () => (req: Request, res: Response) => {
  res.send(`<h1>Hello from typescript!</h1>`)
}
