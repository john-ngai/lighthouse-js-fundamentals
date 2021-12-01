const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = (vegetables, metric) => {
  if (vegetables[0].redness > vegetables[1].redness) {
    if (vegetables[0].redness > vegetables[2].redness) {
      return vegetables[0].submitter;
    } else {
      return vegetables[2].submitter;
    }
  } else {
    if (vegetables[1].redness > vegetables[2].redness) {
      return vegetables[1].submitter;
    } else {
      return vegetables[2].submitter;
    }
  }
}

console.log(judgeVegetable(vegetables, metric)); // Returns: "Old Man Franklin"