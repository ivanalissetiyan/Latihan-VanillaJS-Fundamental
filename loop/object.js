const Person = {
    firstName: "Ivan",
    lastName: "Alissetiyan",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }, 
    weight: 65,
    height: 172,
    isWeightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return (heightMinus100 - (heightMinus100 * 10) / 100) <
        this.weight;
    },
};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());

const countries = {
      ID: {
          province: ['bali', 'jawa tengah', 'jawa timur'],
          city: ['singaraje', 'gianyar', 'negare', 'bandung']
      },
      MY: {},
      TH: {
          province: [],
      }
};

console.log(countries?.TH?.province ?? "not found");
