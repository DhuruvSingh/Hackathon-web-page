const speakers = [
  {
    image: './icons/speakerimg/speaker_01.png',
    name: 'Yochai Bankler',
    organize: 'Professor at Harvard Low School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept ofco-production based on sharing',
  },
  {
    image: './icons/speakerimg/speaker_02.png',
    name: 'Kilnam Chol',
    organize: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    description: 'By developing Asias first Internet protocol network SDN and leading Koreas first private line Internet connection in 1990.',
  },
  {
    image: './icons/speakerimg/speaker_03.png',
    name: 'Sohyeong Noh',
    organize: 'Art Center Nabi Director, CC Korea Director',
    description: 'As the author of [Digital Art Art of Our Time], he opened Art Center Nabi, Koreas first digital art institution in 2000.',
  },
  {
    image: './icons/speakerimg/speaker_04.png',
    name: 'Julia Reda',
    organize: 'Head of the Young Pirates of Europe',
    description: 'European integration and online youth participation in politics and democracy are major concerns,and a report has been published that will potentially affect.',
  },
  {
    image: './icons/speakerimg/speaker_05.png',
    name: 'Lila Tretikov',
    organize: 'Secretary General of the Wikimedia Foundation',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people',
  },
  {
    image: './icons/speakerimg/speaker_06.png',
    name: 'Ryan Merkley',
    organize: 'Creative Commons CEO, Former Mozilla Foundation COO',
    description: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

document.getElementById('warper').innerHTML = `<h2>Featured Speakers</h2>
            <div class="orangeline"></div>
            <ul>
                <li>
                    <img src="${speakers[0].image}" alt="Yochai Bankler Image">
                    <div>
                        <h3>${speakers[0].name}</h3>
                        <p class="organize" >${speakers[0].organize}</p>
                        <p class="spkr-description">${speakers[0].description}</p>
                    </div>
                </li>
                <li>
                    <img src="${speakers[1].image}" alt="Kilnam Chon Image">
                    <div>
                        <h3>${speakers[1].name}</h3>
                        <p class="organize">${speakers[1].organize}</p>
                        <p class="spkr-description">${speakers[1].description}</p>
                    </div>
                </li>
                <li>
                    <img src="${speakers[2].image}" alt="Sohyeong Noh Image">
                    <div>
                        <h3>${speakers[2].name}</h3>
                        <p class="organize">${speakers[2].organize}</p>
                        <p class="spkr-description">${speakers[2].description}</p>
                    </div>
                </li>
                <li>
                    <img src="${speakers[3].image}" alt="Julia Reda Image">
                    <div>
                        <h3>${speakers[3].name}</h3>
                        <p class="organize">${speakers[3].organize}</p>
                        <p class="spkr-description">${speakers[3].description}</p>
                    </div>
                </li>
                <li>
                    <img src="${speakers[4].image}" alt="Lila Tretikov Image">
                    <div>
                        <h3>${speakers[4].name}</h3>
                        <p class="organize">${speakers[4].organize}</p>
                        <p class="spkr-description">${speakers[4].description}</p>
                    </div>
                </li>
                <li>
                    <img src="${speakers[5].image}" alt="Ryan Merkley Image">
                    <div>
                        <h3>${speakers[5].name}</h3>
                        <p class="organize">${speakers[5].organize}</p>
                        <p class="spkr-description">${speakers[5].description}</p>
                    </div>
                </li>
            </ul>
`;