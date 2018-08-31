import { Request, Response } from 'express'

export default ({ date }: { date: Date }) => (req: Request, res: Response) => {
  res.render('pages/home', {
    slogan: 'From Typescript!',
    date: date.toDateString()
  })
}
