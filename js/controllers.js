app.controller('ProjectsController', ProjectsController)
ProjectsController.$inject = []
function ProjectsController(){
	var pC = this;
  pC.active = 0;

	pC.slides = [{
		image:'assets/shaker.png',
		projectName:"Shak'r",
		projectDescription: "React Native based Android and Iphone mixology application. Uses a custom built API built in Python/Flask.",
		id: 0
	},{
		image:'assets/linguo.png',
		projectName:"Linguo",
		projectDescription: "A language-oriented web application that connects users based on their location and proficiency, and facilitates direct communication via chat to enable opportunities for shared teaching and learning experiences. Built in four days, in collaboration with Andrew Furth and Ken Korcal. The stack includes Javascript, Node.js, Express, PostgreSQL, Jade, Knex and Passport OAuth.",
		id: 1
	}]

}



app.controller('AboutController', AboutController)
AboutController.$inject = []
function AboutController(){
	var aC = this;
}