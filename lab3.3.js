const iface = {
    m1: x => [x],
    m2: function (x,y){
        return [x,y];

    },
    m3(x,y,z){
        return[x,y,z];
    },
    name: "Ivan",
    age: 18,
    number: 123
};




const result = [];
for(const key in iface){
    if(typeof iface [key]==="function"){
        result.push([key,iface[key].lenght]);
    }
}
console.log(result);