import { Request, Response } from 'express'

interface IDependencies {
  date: Date;
}

export default (deps: IDependencies) => (req: Request, res: Response): void => {
  res.render('pages/home', {
    slogan: 'From Typescript!',
    date: deps.date.toDateString()
  })
}
