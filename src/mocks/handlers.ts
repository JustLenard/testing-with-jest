import { rest } from 'msw'

export const testUserArr = [
  {
    name: 'Joe',
  },
  { name: 'Garnt' },
  { name: 'Connor' },
]

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testUserArr))
  }),
]
