// in ra cac so gap doi trong array
// const array = [1,2,3,4,5,6]
// const newarray = array.map ((num,index) => num * 2);
// console.log(newarray);

// in ra array gap doi array cu, va cac so do phai >4
// const array = [1,2,3,4,5,6]
// const newarray = array.map ((num,index) => num * 2);
// console.log(newarray);
// const newarray1 = array.filter ((num,index) => num > 4);
// console.log(newarray1);

// in ra cac so index lon nhat va 
// const array = [1,2,3,4,5,6]
// const newarray = array.filter((num,index) => array[array.length - 1] % num === 0 );
// console.log(newarray);


// hien 1 prompt cho ng dung nhap so, thoa man dieu kien so do >5
// const value = prompt('enter here');
// if(+value > 5){
//     console.log('>5'
//     );
// } else {
//     console.log( 'ko dat');
// }


// lap 1 function voi nhiem vu la nhận 2 tham số đầu vào, in ra nếu tổng 2 tham số đó >10

const sum (a , b) => {
    if (a+b > 10)
    console.log(a+b);
}else {
    console.log('no');
}
;
sum(4,4);
