import Instafeed from 'instafeed.js'

const userFeed = new Instafeed({
    get: 'user',
    userId: process.env.REACT_APP_USER_ID,
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    sortBy: 'most-recent',
    template: '<div class="column gallery-item instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
})
userFeed.run();

export default userFeed;