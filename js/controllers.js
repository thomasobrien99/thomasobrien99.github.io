app.controller('ProjectsController', ProjectsController)
ProjectsController.$inject = []
function ProjectsController(){
	var pC = this;
  pC.active = 0;

	pC.slides = [{
		image:'assets/shaker.png',
		projectName:"Shak'r",
		projectDescription: "React Native based Android and Iphone mixology application. Uses a custom built API built in Python/Flask.",
		liveURL:"https://play.google.com/store/apps/details?id=com.shakr&hl=en",
		githubURL:"https://github.com/thomasobrien99/shaker",
		id: 0
	},{
		image:'assets/linguo.png',
		projectName:"Linguo",
		projectDescription: "A language-oriented web application that connects users based on their location and proficiency, and facilitates direct communication via chat to enable opportunities for shared teaching and learning experiences. Built in four days, in collaboration with Andrew Furth and Ken Korcal. The stack includes Javascript, Node.js, Express, PostgreSQL, Jade, Knex and Passport OAuth.",
		liveURL:"https://linguoisdead.herokuapp.com/",
		githubURL:"https://github.com/Anketo/q2_project",
		id: 1
	}]

}



app.controller('AboutController', AboutController)
AboutController.$inject = []
function AboutController(){
	var aC = this;
}