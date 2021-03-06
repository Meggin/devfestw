var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Chrome Apps',
    subtitle: 'Bridge between Native and the Web',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/chrome-logo-tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Inconsolata'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Meggin Kearney',
    gplus: 'http://plus.google.com/1234567890',
    title: 'Technical Writer',
    company: 'Google Chrome',
    github: 'https://github.com/Meggin'
  }]
};

