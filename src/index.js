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

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `...now writing a poem for you about ${instructionsInput.value}...`;

	console.log("Generating poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	//Make a call to the API
	axios.get(apiURL).then(displayPoem);
}
/*
//emoji randomizer
const emoji = [];

async function getEmoji() {
	let response = await fetch(
		"https://emoji-api.com/emojis?access_key=e905b2c8e6f0321c0cdebcae6aa87c929b48918f"
	);

	data = await response.json();
	console.log(data);
	for (let i = 300; i < 500; i++) {
		emoji.push({
			emojiName: data[i].character,
		});
	}
	const randomNum = Math.floor(Math.random() * emoji.length);

	let emojiSlotFiller = document.querySelector("#emojiSlot");
	emojiSlotFiller.innerHTML = emoji[randomNum].emojiName;
}

getEmoji();
*/
function updateEmoji() {
	function getRandomEmoji() {
		const emojiLibrary = [
			"\u{1F601}",
			"\u{1F60D}",
			"\u{1F42D}",
			"\u{1F303}",
			"\u{1F434}",
			"\u{1F434}",
			"\u{1F429}",
			"\u{1F430}",
			"\u{1F433}",
			"\u{1F437}",
			"\u{1F442}",
			"\u{1F440}",
			"\u{1F431}",
		];
		const randomIndex = Math.floor(Math.random() * emojiLibrary.length);
		return emojiLibrary[randomIndex];
	}
	const emojiContainer = document.querySelector("#emojiSlot");
	emojiContainer.innerHTML = getRandomEmoji();
}
setInterval(updateEmoji, 3000);

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
