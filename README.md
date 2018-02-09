# README

If you want to run the search functionality, you need an application ID and API_KEY from algolia. you can create a free account on algolia.com, refer to the js documentation for further instructions. Cloudinary also requires an api key. They both offer a generous free tier.

to add the key and id to your application create a .env file in your root folder and paste in the keys.
eg. the environment variables are handled in development mode with the npm package 'dotenv'.

https://github.com/motdotla/dotenv

You need the following env variables to run the application. Note that the nev variables need to be prefixed with REACT_APP_ in order for them to work.

Example .env config below:

REACT_APP_SEARCH_KEY='***'
REACT_APP_APP_ID='***'
REACT_APP_CLOUDINARY_UPLOAD_URL='***'
REACT_APP_CLOUDINARY_UPLOAD_PRESET='***'
