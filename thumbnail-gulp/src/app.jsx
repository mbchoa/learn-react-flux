var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages',
    imageURL: 'http://formatjs.io/img/react.svg'
  },
  {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageURL: 'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.target'));
