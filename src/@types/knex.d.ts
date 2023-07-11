// eslint-disable-next-line no-unused-vars
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transaction: {
      id: string
      title: string
      amount: number
      create_at: string
      session_id?: string
    }
  }
}
