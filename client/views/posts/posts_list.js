var postsData;

postsData = [
  {
    title: 'IAMX',
    url: 'http://iamxmusic.com/'
  }, {
    title: 'My Beautiful Playlist',
    url: 'https://www.youtube.com/playlist?list=PLGKrghb-9eAB4x84PNSQukU9VaRMbvQu6'
  }
];

Template.postsList.helpers({
  posts: postsData
});
