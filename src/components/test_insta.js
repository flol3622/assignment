import React from 'react'

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/144739378_217653310072682_3893451848994302191_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=lalRYVLXsmIAX-241ds&edm=AABBvjUBAAAA&ccb=7-4&oh=783f0ce7a04c8e5a4c5612872d63c064&oe=61A6BE5C&_nc_sid=83d603", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
const myHTML = ``;

const Insta = () => <div dangerouslySetInnerHTML={{ __html: myHTML }} />;

export default Insta
// embed
//https://www.instagram.com/p/CK_EOsOF_wK/embed

// Thumbnail
//https://www.instagram.com/p/CK_EOsOF_wK/media/?size=t
// Medium
//https://www.instagram.com/p/CK_EOsOF_wK/media/?size=m
// Large
//https://www.instagram.com/p/CK_EOsOF_wK/media/?size=l

//JSON file:
//https://www.instagram.com/p/CK_EOsOF_wK/?__a=1
