var numArray = [];
function themSo(){
    var num = Number(document.querySelector("#txtNum").value);
    //thêm phần tử vào mảng
    numArray.push(num);
    console.log(numArray);
    document.getElementById("themSo").innerHTML = "Mảng [ " + numArray+" ]";
}

document.querySelector("#btnAdd").onclick = themSo;


// đếm có bao nhiêu số dương
document.querySelector("#btnCount").onclick = function(){
    //các code chạy khi click
    var count = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            //số dương
            count++;
        }
    }
    console.log(count);
    document.getElementById("tongSoDuong").innerHTML = "Có tổng cộng : " + count + " số dương";
}

// tính tổng các số dương
document.querySelector("#btnSum").onclick = function(){
    //Các code xử lý click button
    var total = 0;
    // i (index): vị trí của phần tử trong mảng
    for(var i = 0; i <numArray.length;i++){
        if(numArray[i] > 0){
            //là số âm
            //total(mới) = total(cũ) + numArray[i]
            total += numArray[i];
        }
    }

    // console.log("Tổng số âm: " + total);
        document.getElementById("tongSoDuong").innerHTML = "Tổng số dương : " + total;

}


// tìm số nhỏ nhất
function timMin() {
    var viTri = 0;
    var min = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
            viTri = i;
        }
    }

    console.log(min);
    document.getElementById("tongSoDuong").innerHTML = "Số nhỏ nhất : " + min;


}


// tìm số dương nhỏ nhất
function timMax() {
    var viTri = 0;
    var max = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            max = numArray[i];
            viTri = i;
            break;
        }
    }

    console.log(max);
    document.getElementById("tongSoDuong").innerHTML = "Số dương nhỏ nhất : " + max;


}


// tìm số chẵn cuối cùng trong mảng
function timSoDuongCuoi() {
    var soChan = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChan = numArray[i];
            document.getElementById("tongSoDuong").innerHTML = "Số chẵn cuối cùng : " + soChan;
            break;

        }else {
            soChan = -1;
            document.getElementById("tongSoDuong").innerHTML = "Số chẵn cuối cùng : " + soChan;
        }
    }

    console.log(soChan);


}



// dổi chỗ hai giá trị ***************





// sắp xếp theo thứ tự tăng dần
function sapXepTangDan() {
    for(var i = 1; i < numArray.length; i++) {
        for (var j = 0 ; j < numArray.length - 1; j++) {
            if(numArray[j] > numArray[j+1]) {
                //nếu giá trị bên trái lớn hơn bên phải => hoán đổi
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp ;
            }
        }
    }

    console.log(numArray);
    document.getElementById("tongSoDuong").innerHTML ="Theo thứ tự tăng dần của mảng là : "+ numArray;
}

// tìm số nguyên tố đầu tiên  ***************
function timNguyenToDau() {
    var nguyenTo = numArray[0];
    for(var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 1 && numArray[i] % numArray[i] == 0) {
            nguyenTo = numArray[i];
            break;
            
        }else {
            nguyenTo = -1;
        }
    }
    document.getElementById("tongSoDuong").innerHTML ="Số nguyên đầu tiên : " + nguyenTo;




}


//Nhập thêm 1 mảng số thực,tìm xem trong mảng có bao nhiêu số nguyên?
document.querySelector("#btnSoNguyen").onclick = function(){
    //các code chạy khi click
    var count = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] == parseInt(numArray[i])){
            //số dương
            count++;
        }
    }
    console.log(count);
    document.getElementById("tongSoDuong").innerHTML = "Có tổng cộng : " + count + " số nguyên";
}


// so sánh nguyên dương và nguyên âm
document.querySelector("#btnSo").onclick = function(){
    //các code chạy khi click
    var soDuong = 0;
    var soAm = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            //số dương
            soDuong++;
        }else {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById("tongSoDuong").innerHTML ="Có " + soDuong + " số dương và " + soAm + " số âm => số dương >= số âm";
    }else{
        document.getElementById("tongSoDuong").innerHTML ="Có " + soDuong + " số dương và " + soAm + " số âm => số dương <= số âm";

    }
}

