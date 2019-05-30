const request = require('request-promise');
const cheerio = require('cheerio');
const URL = 'https://www.instagram.com/';

const getProfile = async username => {
  const address = await URL + username;
  const htmlResponse = await request.get(address);
  const cheerioLoad = cheerio.load(htmlResponse);
  return cheerioLoad;
}

const extractProfileData = async username => {
  let $ = await getProfile(username);
  const data = $('script').eq(4).html();
  let { entry_data: {ProfilePage: {[0] : {graphql : {user} }} } } = JSON.parse(/window\._sharedData = (.+);/g.exec(data)[1]);
  return user;
}

const parseProfile = async username => {
  let user = await extractProfileData(username);
  let profile = await {
    name: user.full_name,
    username: user.username,
    bio: user.biography,
    followers: user.edge_followed_by.count,
    following: user.edge_follow.count,
    isBusiness: user.is_business_account,
    category: user.business_category_name,
    isVerified: user.is_verified,
    avatar: user.profile_pic_url
  }
  return profile;
}

const validateIgFollowers = async (username) => {
  let profileStats = await parseProfile(username);
  return profileStats.followers < 500 ? true : false;
}

module.exports = {
  parseProfile,
  validateIgFollowers
}
