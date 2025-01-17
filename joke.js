async function joke() {
  try {
    var response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    var json = await response.json();
    return [json.setup, json.punchline];
  } catch (error) {
    console.error(error.message);
    return ["Error", "Failed to fetch joke"];
  }
}

joke().then((jokeArray) => {
  alert(jokeArray[0]);
  alert(jokeArray[1]);
});
