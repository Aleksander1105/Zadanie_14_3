var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		dsc: 'Film o czarodzieju',
		img: './kiler.png'
	},
	{   
		id: 2,
		title: 'Psy 2',
		dsc: 'Film o Bogusiu Lindzie'
	},
	{   
		id: 3,
		title: 'Nietykalni',
		dsc: 'Film o murzynie'
	},
	{   
		id: 4,
		title: 'Killer',
		dsc: 'Czarek pzura w roli głownej',
	}
];
	
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.dsc)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));