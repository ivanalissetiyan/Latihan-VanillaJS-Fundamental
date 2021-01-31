const anchestor = [
    {
        name: "Buah Warna merah",
        child: [
            {
                name: "Apel",
                child: [
                    {
                        name: "Ceri",
                    },
                    {
                        name: "Semangka",
                    },
                    {
                        name: "Stroberi",
                        child: [
                            {
                                name: "Jambu",
                            },
                        ],
                    },
                    {
                        name: "Rambutan",
                    },
                ],
            },
            {
                name: "Buah Warna Hijau",
                child: [
                    {
                        name: "Mangga",
                        child: [{ name: "Sirsak"}],
                    },
                    {
                        name: "Kedondong",
                    },
                    {
                        name: "Jambu Biji",
                    },
                ],
            },
        ],
    },
];

console.log(anchestor);
function randerAnchestor(node, depth = 0) {
    let inheritance = "", space =""

    for (let i = 0; i < depth; i++) {
        inheritance+= "-"
        space += " "
        
    }

    node.forEach(function(item){
        console.log(`${depth > 0 ? space + "└" + inheritance + "" : ""}${item.name}`);

        if(item.child) randerAnchestor(item.child, depth += 1)
    })
}

randerAnchestor(anchestor, 0);