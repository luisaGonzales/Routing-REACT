"use strict";

const teachers = [
	{
	  name: "Angie McAngular",
	  description: "Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!",
	  img: "img/angie.png",
	  id: "1"
	},
	{
	  name: "NodeStradamus",
	  description: "'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.",
	  img: "img/nodestradamus.png",
	  id: "2"
	},
	{
	  name: "Geo 'Lo' Cation",
	  description: "Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.",
	  img: "img/geo.png",
	  id: "3"
	},
	{
	  name: "Ecma Scriptnstuff",
	  description: "Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.",
	  img: "img/ecma.png",
	  id: "4"
	},
	{
	  name: "Jay Query",
	  description: "Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.",
	  img: "img/jay.png",
	  id: "5"
	},
	{
	  name: "Json Babel",
	  description: "All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.",
	  img: "img/json.png",
	  id: "6"
	}
];

class Home extends React.Component {
	render() {
		return (
			<div className="main-content home ">
				<h2>HOME</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}

class Teachers extends React.Component{
	render(){
		let teachersList = teachers.map((teacher) => {
			return (
			<li className="teacher" key={teacher.id} >
				<img className="teacher-img" src={teacher.img} alt="teacher" />
				<h3>{teacher.name}</h3>
				<p>{teacher.description}</p>
			</li>
			);
		}); 
		
		return (
			<div className="main-content">
			<h2>Teachers</h2>
			<ul className="group">
				{teachersList}    
			</ul>
			</div>
		);
	}	
}

class Repos extends React.Component {
	render() {
		const {route} = this.props;
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			default: //'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>REPOS</h2>
					<ul className="course-nav">
						<li><a href='#/repos/html'>HTML</a></li>
						<li><a href='#/repos/css'>CSS</a></li>
						<li><a href='#/repos/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			//<a href="#/about">About</a>
			//<li><a href='#/repos/html'>HTML</a></li>
			console.log ( window.location.hash.substr(1) );

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForRepos = null;
		switch (this.state.route) {
			case '/about':
				Child = About;
				break;
			case '/repos':
				Child = Repos;
				break;
			case '/teachers':
				Child = Teachers;
				break;
			case '/repos/html':
				Child = Repos;
				propsForRepos = 'html';
				break;
			case '/repos/css':
				Child = Repos;
				propsForRepos = 'css';
				break;
			case '/repos/javascript':
				Child = Repos;
				propsForRepos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
         <div>
            {/* <header>App</header>{' '} */}
            <header>
			<span className="logo">
				<i className="material-icons">code</i>
			</span>
               <ul className="main-nav">
					<li>
						<a href="#/">Home</a>
					</li>{' '}
					<li>
						<a href="#/about">About</a>
					</li>{' '}
					<li>
						<a href="#/teachers">Teachers</a>
					</li>{' '}
					<li>
						<a href="#/repos">Courses</a>
					</li>{' '}

               </ul>{' '}
            </header>
	         {
	         	propsForRepos?
			         <Child route = {propsForRepos} />
		         :
			         <Child />
	         }
         </div>
		);
	}
}


ReactDOM.render(<App/>,
	document.getElementById("root"));

