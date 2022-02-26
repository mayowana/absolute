const settings = {
  "name": "my-blog",
  "state": {
    "frontity": {
      "url": "https://absolutedotng.wordpress.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "absolute-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://absolutedotng.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
