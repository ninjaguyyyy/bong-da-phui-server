const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { paginate, toJSON } = require('./plugins');

const conversationSchema = mongoose.Schema(
  {
    members: [
      {
        type: ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    isGroup: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

conversationSchema.plugin(toJSON);
conversationSchema.plugin(paginate);

module.exports = mongoose.model('conversation', conversationSchema);
