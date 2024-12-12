function displayPoem(response) {
	console.log("poem generated");
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 2,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();

	//build the API URL
	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
	let prompt = `User instructions: Please generate a poem about ${instructionsInput.value}`;
	let context =
		"You are a witty children's poet who loves to write short, funny poems aimed at children under the age of 18. Your mission is to generate a 4 line poem using basic HTML formatting (but not showing the code) and separate each line with a <br />. Make sure to follow the user instructions provided. Sign the end of each poem with '~SheCodes AI' inside a <strong> element";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	console.log("Generating poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	//Make a call to the API
	axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
