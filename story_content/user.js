function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SJeUv6jkk1":
        Script1();
        break;
      case "6VsgbZj9o7m":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzmRBD7oFg9warubkXZqVJHahD4Vk8Wbe-64WcOO3EE1jlLBfg-A10UQ-lv7wwuwRqmbQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbzmRBD7oFg9warubkXZqVJHahD4Vk8Wbe-64WcOO3EE1jlLBfg-A10UQ-lv7wwuwRqmbQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

