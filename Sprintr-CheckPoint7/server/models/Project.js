// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId= Schema.Types.ObjectId

export const ProjectSchema= new Schema(
  {
    subs: [{ type: String, unique: true }],
    name: { type: String, required: true },
    description: { type: String, required: true},
    creatorId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
    ProjectSchema.virtual('account', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: 'id',
    justOne: true
  })
  
  export default ProjectSchema