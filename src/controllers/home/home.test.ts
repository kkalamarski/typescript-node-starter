import makeGet from './makeGet'
import { mock, instance, when, verify } from 'ts-mockito'
import { Response } from 'jest-express/lib/response';

let get: Function, date: Date, mockedDate: Date, res: Response

mockedDate = mock(Date)
when(mockedDate.toDateString()).thenReturn('test')

beforeEach(() => {
  res = new Response()
  date = instance(mockedDate)

  get = makeGet({
    date
  })
})

describe('Should create valid get method', () => {
  it('should call res.render', () => {
    get(null, res)

    verify(mockedDate.toDateString()).called()
    expect(res.render).toHaveBeenCalledWith('pages/home', {
      date: 'test',
      slogan: 'From Typescript!'
    })
  })
})
