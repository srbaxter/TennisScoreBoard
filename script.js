window.onload = function() {

	var teams = {
		teamA: {
			name: "Team A",
			points: 0,
			games: 0,
			sets: 0		
		},
		teamB: {
			name: "Team B",
			points: 0,
			games: 0,
			sets: 0		
		}
	};

	/* Display all scores */
	function setScore() {
		for (var team in teams) {
			document.getElementById(team + "Name").innerHTML = "<h1>" + teams[team].name + "</h1>";
			document.getElementById(team + "Points").innerHTML = "<span>" + teams[team].points + "</span";		
			document.getElementById(team + "Games").innerHTML = "<span>" + teams[team].games + "</span";		
			document.getElementById(team + "Sets").innerHTML = "<span>" + teams[team].sets + "</span";	
		}
	}
	setScore();

	function checkwin() {
		if (teams["teamA"].sets === 2) {
			alert(teams["teamA"].name + " has won!");
		} else if (teams["teamB"].sets === 2) {
			alert(teams["teamB"].name + " has won!");
		}
	}

	// function changeScore() {
	// 	for (var team in teams) {
	// 		if (teams[team].points === 0) {
	// 			teams[team].points = 15;		
	// 		} else if (teams[team].points === 15) {
	// 			teams[team].points = 30;
	// 		} else if (teams[team].points === 30) {
	// 			teams[team].points = 40;
	// 		}
	// 		setScore();				
	// 	}
	// }


	document.getElementById("teamAPoints").onclick = function() {
		if (teams["teamA"].points === 0) {
			teams["teamA"].points = 15;		
		} else if (teams["teamA"].points === 15) {
			teams["teamA"].points = 30;
		} else if (teams["teamA"].points === 30) {
			teams["teamA"].points = 40;
		} else if (teams["teamA"].points === 40) {
			teams["teamA"].points = 0;
			teams["teamA"].games += 1;
			if (teams["teamA"].games >= 6 && ( teams["teamA"].games - teams["teamB"].games) >= 2) {
				teams["teamA"].sets += 1;
				teams["teamA"].games = 0;	
			}
		}
		setScore();					
		checkwin();	
	};
	document.getElementById("teamBPoints").onclick = function() {
		if (teams["teamB"].points === 0) {
			teams["teamB"].points = 15;		
		} else if (teams["teamB"].points === 15) {
			teams["teamB"].points = 30;
		} else if (teams["teamB"].points === 30) {
			teams["teamB"].points = 40;
		} else if (teams["teamB"].points === 40) {
			teams["teamB"].points = 0;
			teams["teamB"].games += 1;		
			if (teams["teamB"].games >= 6 && ( teams["teamB"].games - teams["teamA"].games) >= 2) {
				teams["teamB"].sets += 1;
				teams["teamB"].games = 0;	
			}		
		}
		setScore();			
		checkwin();	
	};



	/* Reset all scores when "Reset Score" button is clicked */
	document.getElementById("reset").onclick = function() {	
		for (var team in teams) {
			teams[team].points = 0;
			teams[team].games = 0;
			teams[team].sets = 0;		
		} 
		setScore();
	}	
}
