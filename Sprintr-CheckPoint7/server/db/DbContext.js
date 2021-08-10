import mongoose from 'mongoose'
// import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'

class DbContext {

  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
