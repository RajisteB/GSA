const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

// Influencer Schema 
const InfluencerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  influencerName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Instagram Schema
const InstagramSchema = new Schema({
  _id: Schema.Types.ObjectId,
  followers: {
    count: Number,
  },
  followed: {
    count: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Social Score Schema
const SocialSchema = new Schema({
  _id: Schema.Types.ObjectId,
  score: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// User Schema 
const UserSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  igName: {
    type: String,
  },
  igPass: {
    type: String,
  },
  referralCode:  {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  isPaidAccount: {
    type: Boolean,
    default: false,
  },
  influencers: [{ type: Schema.Types.ObjectId, ref: 'Influencer' }],
  stats: [{ type: Schema.Types.ObjectId, ref: 'Instagram' }],
  social: [{ type: Schema.Types.ObjectId, ref: "Social" }]
});

var Influencer = mongoose.model("Influencer", InfluencerSchema);
var User = mongoose.model("User", UserSchema);
var Instagram = mongoose.model("Instgram", InstagramSchema);
var SocialScore = mongoose.model("Social", SocialSchema);

module.exports = {
  Influencer,
  User,
  Instagram,
  SocialScore
}