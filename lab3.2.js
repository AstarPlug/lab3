function ipToNumber(ip="127.0.0.1"){
    const parts = ip.split(".").map(Number);

    const shifted = [
        parts [0]<< 8 << 8 << 8,
        parts [1]<< 8 << 8 ,
        parts [2]<<8 ,
        parts [3]
    ];
    return shifted.reduce((sum,number)=> sum+number, 0);
}
console.log(ipToNumber("127.0.0.1"));
console.log(ipToNumber("10.0.0.1"));
console.log(ipToNumber("192.168.1.10"));
console.log(ipToNumber("165.225.133.150"));
console.log(ipToNumber("0.0.0.0"));
console.log(ipToNumber("8.8.8.8"));