import { Request, Response } from 'express'

export default () => (req: Request, res: Response) => {
  res.render('pages/about', { title: 'About Page' })
}
