const loadCategory = async () => {
    const loadingSpinner = document.getElementById("loadingSpinner");
    loadingSpinner.classList.remove("hidden");
    const response = await fetch("https://openapi.programming-hero.com/api/levels/all");
    const data = await response.json();
    loadingSpinner.classList.add("hidden");
    showCat(data.data);
}
const showCat = (names) => {
    names.forEach((element) => {
        const catCon = document.getElementById('category-section');
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="loadInfo('${element.level_no}')" id="btn${element.level_no}" class="btn hover:bg-[#422ad5] border-[#422ad5] text-[#422ad5] hover:text-white w-fit"><i class="fa-solid fa-book-open"></i>Lesson-${element.level_no}</button>
        `
        catCon.appendChild(div);
    });
}

const loadInfo = async (id) => {

    try {
        const loadingSpinner = document.getElementById("loadingSpinner2");
        loadingSpinner.classList.remove("hidden");
        const res = await fetch(`https://openapi.programming-hero.com/api/level/${id}`);
        const d2 = await res.json()
        loadingSpinner.classList.add("hidden");
        if (d2.data == 0) {
            throw new Error('No Data');
        }
        document.getElementById("leessonPre").classList.add("hidden");

        const allButtons = document.querySelectorAll('#category-section button');
        allButtons.forEach(btn => btn.classList.remove('bg-[#422ad5]', 'text-white'));

        const clbtn = document.getElementById(`btn${id}`);
        clbtn.classList.add('bg-[#422ad5]', 'text-white');

        const card = document.getElementById("innerLesson");
        card.innerHTML = "";

        const div = document.createElement("div");
        div.className = "grid mx-auto max-md:grid-cols-1 max-md:w-fit max-lg:grid-cols-2 grid-cols-3 gap-8 p-5";
        const data = d2.data;

        data.forEach(info => {
            const word = info.word || "No Word available";
            const mean = info.meaning || "কোনো অর্থ নেই !";
            const pronun = info.pronunciation || "কোনো উচ্চারণ নেই !";
            const id = info.id || "No ID available";

            const cardElement = `
        <div class="card w-full hover:bg-[#e8fdfe] bg-white text-black shadow-2xl ">
            <div class="card-body items-center text-center max-md:w-fit mx-auto p-3">
                <h2 class="font-bold max-md:text-xl text-3xl">${word}</h2>
                <p class="text-xl max-md:text-base font-medium ">Meaning/Pronunciation</p>
                <p class=" max-md:text-base text-2xl font-semibold">${mean}/${pronun}</p>
                <div class="flex justify-between items-center w-full">
                    <button class="btn bg-[#e8f3fe]" onclick="openModal(${id})"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn  bg-[#e8f3fe]" onclick="pronounceWord('${info.word}')"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        </div>`;
            div.innerHTML += cardElement;
        });

        card.appendChild(div);

    } catch (error) {
        const allButtons2 = document.querySelectorAll('#category-section button');
        allButtons2.forEach(btn => btn.classList.remove('bg-[#422ad5]', 'text-white'));

        const clbtn2 = document.getElementById(`btn${id}`);
        clbtn2.classList.add('bg-[#422ad5]', 'text-white');

        const card2 = document.getElementById("innerLesson");
        document.getElementById("leessonPre").classList.add("hidden");
        card2.innerHTML = "";
        card2.innerHTML = `
            <div class="card p-10">
                <figure>
                    <img src="assets/alert-error.png" class="rounded-xl" />
                </figure><br>
                <div class="items-center text-center">
                    <p class="text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p><br>
                    <h2 class="text-4xl font-medium">নেক্সট Lesson এ যান</h2>
                </div>
            </div>
        `;
    }
};


const openModal = async (id) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
    const data2 = await response.json();
    const word1 = data2.data.word || "No Word available";
    const mean1 = data2.data.meaning || "কোনো অর্থ নেই !";
    const pronun1 = data2.data.pronunciation || "কোনো উচ্চারণ নেই !";
    const sentence1 = data2.data.sentence || "No Sentence available";
    document.getElementById("modal-word").innerHTML = `${word1}(<i class="fa-solid fa-microphone-lines"></i>:${pronun1} )`;
    document.getElementById('modal-meaning-ban').textContent = mean1;
    document.getElementById('modal-content').textContent = sentence1;

    const newdata = data2.data.synonyms;
    showSynonyms(newdata);
    document.getElementById('my_modal_5').showModal();

};

const showSynonyms = (synonyms) => {
    const synContainer = document.getElementById('btn-syn');
    synContainer.innerHTML = "";

    if (synonyms.length === 0) {
        synContainer.innerHTML = "<p class='btn text-gray-500'>No synonyms available</p>";
        return;
    }
    synonyms.forEach((syn) => {
        const button = document.createElement("button");
        button.innerText = syn;
        button.classList.add("btn", "m-2");
        synContainer.appendChild(button);
    });
};

function pronounceWord(word1) {
    const utterance = new SpeechSynthesisUtterance(word1);
    utterance.lang = 'en-GB'; 
    window.speechSynthesis.speak(utterance);
}


loadCategory();