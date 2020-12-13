// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
return {
    specimenNum,
    dna,
    mutate() {
     let randIndex = Math.floor(Math.random() * 15);
     let newBase = returnRandBase();
     while (newBase === dna[randIndex]) {
      newBase = returnRandBase();
     }
     dna[randIndex] = newBase;
     return dna;
    },

    compareDna(pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) {
          counter++;
        }
      }
      let percentCommon = Math.round((counter / 15) * 100);
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentCommon} DNA in common.`)
      return percentCommon;
    },

    willLikelySurvive() {
      let sumStrongDna = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          sumStrongDna++;
        }
      }
      //console.log(sumStrongDna);
      let percentSurval = Math.round((sumStrongDna / 15) *100);
      //console.log(percentSurval);
      if (percentSurval >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let pool = () => {
  let sampleArray = [];
  while (sampleArray.length < 30) {
    let i = 1;
    let sample = pAequorFactory(i, mockUpStrand());
    sample = pAequorFactory(i, mockUpStrand());
    if (sample.willLikelySurvive()) {
      sampleArray.push(sample.dna);
    }
    i++;
  }
  return sampleArray;
}

console.log(pool());

//Testing willLikelySurvive method
let testDna = mockUpStrand();
console.log(testDna);
let survivalRate = pAequorFactory(1, testDna).willLikelySurvive();
console.log(survivalRate);

//Testing pAquorFactory fuction
let newDna = mockUpStrand();
console.log(newDna);

//Testing mutate method
//let mutateDna = pAequorFactory(1, newDna).mutate();
//console.log(mutateDna);

//Testing compareDna method
/*let newDnaOne = mockUpStrand();
let newDnaTwo = mockUpStrand();
console.log(newDnaOne);
console.log(newDnaTwo);

let testDnaOne = pAequorFactory(1, newDnaOne).compareDna(pAequorFactory(2, newDnaTwo));

let compareTest = testDnaOne
console.log(compareTest);*/

//Below is just a git test using the integrated git features in VS Code
let stepOne = 'Create a new git branch';
console.log(stepOne);

