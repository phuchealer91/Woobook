const Message = require('../models/message.model')
const Conversation = require('../models/conversation.model')
const User = require('../models/user.model')
class APIfeatures {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  paginating() {
    const page = this.queryString.page * 1 || 1
    const limit = this.queryString.limit * 1 || 9
    const skip = (page - 1) * limit
    this.query = this.query.skip(skip).limit(limit)
    return this
  }
}
module.exports.createMessage = async (req, res) => {
  try {
    const { recipient, text, medias } = req.body
    const user = await User.findOne({ email: req.user.email }).exec()
    if (!recipient || (!text.trim() && medias.length === 0)) return
    const newConversation = await Conversation.findOneAndUpdate(
      {
        $or: [
          { recipients: [user._id, recipient] },
          { recipients: [recipient, user._id] },
        ],
      },
      {
        recipients: [user._id, recipient],
        text,
        medias,
      },
      { new: true, upsert: true }
    ).exec()
    const newMessage = new Message({
      conversation: newConversation._id,
      sender: user._id,
      recipient,
      text,
      medias,
    })
    await newMessage.save()
    return res.status(201).json({ messages: newMessage })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
module.exports.getConversation = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec()
    const features = new APIfeatures(
      Conversation.find({
        recipients: user._id,
      }),
      req.query
    ).paginating()
    const conversations = await features.query
      .sort('updatedAt')
      .populate('recipients', 'photoURL name email')
    return res.status(200).json({ conversations, result: conversations.length })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
module.exports.getMessage = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec()
    const features = new APIfeatures(
      Message.find({
        $or: [
          { sender: user._id, recipient: req.params.id },
          { sender: req.params.id, recipient: user._id },
        ],
      }),
      req.query
    ).paginating()
    const messages = await features.query.sort('-createdAt').exec()
    return res.status(200).json({ messages, result: messages.length })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}