/* questions-english.js — verified English questions (synonyms, antonyms, grammar, vocabulary).
   Format: { q, options:[4], answer:index, explanation }  Add more in the same shape. */
(function (global) {
  var EN = {
    easy: [
      { q: 'Choose the synonym of \u201cHappy\u201d.', options: ['Sad', 'Joyful', 'Angry', 'Tired'], answer: 1, explanation: '\u201cJoyful\u201d means happy.' },
      { q: 'Choose the antonym of \u201cBig\u201d.', options: ['Huge', 'Large', 'Small', 'Tall'], answer: 2, explanation: 'The opposite of big is small.' },
      { q: 'What is the plural of \u201cChild\u201d?', options: ['Childs', 'Childes', 'Children', 'Childrens'], answer: 2, explanation: 'The plural of child is children.' },
      { q: 'What is the past tense of \u201cGo\u201d?', options: ['Goed', 'Gone', 'Went', 'Going'], answer: 2, explanation: 'The simple past of go is went.' },
      { q: 'Choose the synonym of \u201cFast\u201d.', options: ['Slow', 'Quick', 'Heavy', 'Late'], answer: 1, explanation: '\u201cQuick\u201d means fast.' },
      { q: 'Choose the antonym of \u201cBegin\u201d.', options: ['Start', 'Open', 'End', 'Continue'], answer: 2, explanation: 'The opposite of begin is end.' },
      { q: 'Fill in: \u201cShe ___ to school every day.\u201d', options: ['go', 'goes', 'going', 'gone'], answer: 1, explanation: 'Singular subject takes \u201cgoes\u201d.' },
      { q: 'One word: a place where books are kept.', options: ['Gallery', 'Library', 'Museum', 'Studio'], answer: 1, explanation: 'A library stores books.' },
      { q: 'Choose the antonym of \u201cDay\u201d.', options: ['Morning', 'Noon', 'Night', 'Evening'], answer: 2, explanation: 'The opposite of day is night.' },
      { q: 'Choose the synonym of \u201cBrave\u201d.', options: ['Timid', 'Courageous', 'Weak', 'Fearful'], answer: 1, explanation: '\u201cCourageous\u201d means brave.' },
      { q: 'Choose the correctly spelt word.', options: ['Neccessary', 'Necesary', 'Necessary', 'Necessery'], answer: 2, explanation: 'The correct spelling is \u201cnecessary\u201d.' },
      { q: 'Fill in: \u201c___ apple a day keeps the doctor away.\u201d', options: ['A', 'An', 'The', 'No article'], answer: 1, explanation: 'Use \u201can\u201d before a vowel sound.' },
      { q: 'Choose the antonym of \u201cLove\u201d.', options: ['Like', 'Care', 'Hate', 'Adore'], answer: 2, explanation: 'The opposite of love is hate.' },
      { q: 'What is the plural of \u201cMouse\u201d?', options: ['Mouses', 'Mice', 'Mouse', 'Mices'], answer: 1, explanation: 'The plural of mouse is mice.' },
      { q: 'Choose the synonym of \u201cSmart\u201d.', options: ['Dull', 'Clever', 'Lazy', 'Rude'], answer: 1, explanation: '\u201cClever\u201d means smart.' }
    ],
    medium: [
      { q: 'Choose the synonym of \u201cAbundant\u201d.', options: ['Scarce', 'Plentiful', 'Empty', 'Rare'], answer: 1, explanation: '\u201cPlentiful\u201d means abundant.' },
      { q: 'Choose the antonym of \u201cGenerous\u201d.', options: ['Kind', 'Stingy', 'Giving', 'Noble'], answer: 1, explanation: 'The opposite of generous is stingy.' },
      { q: 'One word: a person who knows many languages.', options: ['Linguist', 'Polyglot', 'Orator', 'Scholar'], answer: 1, explanation: 'A polyglot knows many languages.' },
      { q: 'The idiom \u201ca piece of cake\u201d means:', options: ['Very tasty', 'Very easy', 'Very costly', 'Very rare'], answer: 1, explanation: 'It means something very easy.' },
      { q: 'Fill in: \u201cHe is senior ___ me.\u201d', options: ['than', 'to', 'from', 'of'], answer: 1, explanation: '\u201cSenior\u201d is followed by \u201cto\u201d.' },
      { q: 'Fill in: \u201cNeither of the boys ___ present.\u201d', options: ['were', 'was', 'are', 'have'], answer: 1, explanation: '\u201cNeither\u201d takes a singular verb \u2013 \u201cwas\u201d.' },
      { q: 'Choose the synonym of \u201cDiligent\u201d.', options: ['Lazy', 'Hardworking', 'Careless', 'Slow'], answer: 1, explanation: '\u201cDiligent\u201d means hardworking.' },
      { q: 'Choose the antonym of \u201cOptimistic\u201d.', options: ['Hopeful', 'Pessimistic', 'Cheerful', 'Positive'], answer: 1, explanation: 'The opposite of optimistic is pessimistic.' },
      { q: 'One word: something that cannot be believed.', options: ['Incredible', 'Invisible', 'Inevitable', 'Incurable'], answer: 0, explanation: '\u201cIncredible\u201d means hard to believe.' },
      { q: 'The idiom \u201cbite the bullet\u201d means:', options: ['To eat fast', 'To face a hard situation bravely', 'To get angry', 'To stay quiet'], answer: 1, explanation: 'It means to endure something difficult bravely.' },
      { q: 'Choose the correctly spelt word.', options: ['Embarass', 'Embarrass', 'Embaras', 'Embbarrass'], answer: 1, explanation: 'The correct spelling is \u201cembarrass\u201d.' },
      { q: 'Choose the synonym of \u201cBrief\u201d.', options: ['Long', 'Concise', 'Detailed', 'Wide'], answer: 1, explanation: '\u201cConcise\u201d means brief.' },
      { q: 'Fill in: \u201cI have been living here ___ 2010.\u201d', options: ['for', 'since', 'from', 'by'], answer: 1, explanation: 'Use \u201csince\u201d with a point in time.' },
      { q: 'Choose the antonym of \u201cExpand\u201d.', options: ['Grow', 'Contract', 'Widen', 'Stretch'], answer: 1, explanation: 'The opposite of expand is contract.' },
      { q: 'One word: a doctor who treats animals.', options: ['Botanist', 'Veterinarian', 'Surgeon', 'Zoologist'], answer: 1, explanation: 'A veterinarian treats animals.' }
    ],
    hard: [
      { q: 'Choose the synonym of \u201cEphemeral\u201d.', options: ['Permanent', 'Short-lived', 'Strong', 'Ancient'], answer: 1, explanation: '\u201cEphemeral\u201d means short-lived.' },
      { q: 'Choose the antonym of \u201cBenevolent\u201d.', options: ['Kind', 'Malevolent', 'Generous', 'Gentle'], answer: 1, explanation: 'The opposite of benevolent is malevolent.' },
      { q: 'One word: fear of confined spaces.', options: ['Acrophobia', 'Claustrophobia', 'Hydrophobia', 'Xenophobia'], answer: 1, explanation: 'Claustrophobia is the fear of confined spaces.' },
      { q: 'The idiom \u201conce in a blue moon\u201d means:', options: ['Very often', 'Very rarely', 'At night', 'Suddenly'], answer: 1, explanation: 'It means something that happens very rarely.' },
      { q: 'Choose the synonym of \u201cUbiquitous\u201d.', options: ['Rare', 'Omnipresent', 'Hidden', 'Local'], answer: 1, explanation: '\u201cUbiquitous\u201d means present everywhere.' },
      { q: 'Choose the antonym of \u201cVerbose\u201d.', options: ['Wordy', 'Concise', 'Loud', 'Talkative'], answer: 1, explanation: 'The opposite of verbose is concise.' },
      { q: 'One word: the scientific study of birds.', options: ['Botany', 'Ornithology', 'Zoology', 'Ecology'], answer: 1, explanation: 'Ornithology is the study of birds.' },
      { q: 'Fill in: \u201cHe objected ___ the proposal.\u201d', options: ['on', 'to', 'against', 'for'], answer: 1, explanation: '\u201cObject\u201d is followed by \u201cto\u201d.' },
      { q: 'Choose the synonym of \u201cCandid\u201d.', options: ['Secretive', 'Frank', 'Shy', 'Rude'], answer: 1, explanation: '\u201cCandid\u201d means frank or honest.' },
      { q: 'The idiom \u201cburn the midnight oil\u201d means:', options: ['To waste money', 'To work late into the night', 'To sleep early', 'To cook food'], answer: 1, explanation: 'It means to study or work late at night.' },
      { q: 'Choose the antonym of \u201cFrugal\u201d.', options: ['Thrifty', 'Extravagant', 'Careful', 'Simple'], answer: 1, explanation: 'The opposite of frugal is extravagant.' },
      { q: 'One word: government by the people.', options: ['Monarchy', 'Democracy', 'Oligarchy', 'Anarchy'], answer: 1, explanation: 'Democracy is government by the people.' },
      { q: 'Choose the synonym of \u201cReluctant\u201d.', options: ['Eager', 'Unwilling', 'Ready', 'Willing'], answer: 1, explanation: '\u201cReluctant\u201d means unwilling.' },
      { q: 'Choose the correctly spelt word.', options: ['Concientious', 'Conscientious', 'Consciencious', 'Conscientous'], answer: 1, explanation: 'The correct spelling is \u201cconscientious\u201d.' },
      { q: 'Choose the antonym of \u201cTransparent\u201d.', options: ['Clear', 'Opaque', 'Glassy', 'Bright'], answer: 1, explanation: 'The opposite of transparent is opaque.' }
    ]
  };
  global.QUESTIONS_EN = EN;
})(window);
