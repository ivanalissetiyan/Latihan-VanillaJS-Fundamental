const Person = {
    firstName: "Ivan",
    lastName: "Alissetiyan",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }, 
    weight: 65,
    height: 172,
    weightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100;
        
    },
    needDiet: function () {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight)  
            return "you need more protein, need more " + (weightIdeal - this.weight) + "kg";
        else if (weightIdeal + 5 < this.weight)
            return ("you need a mayo diet, need reduce weight: " + (this.weight - weightIdeal) + "kg"
            );
        return "you are in a good shape";
    },
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//       ID: {
//           province: ['bali', 'jawa tengah', 'jawa timur'],
//           city: ['singaraje', 'gianyar', 'negare', 'bandung']
//       },
//       MY: {},
//       TH: {
//           province: [],
//       }
// };

// console.log(countries?.TH?.province ?? "not found");
