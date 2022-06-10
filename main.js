/*----Bài 1------ */
document.getElementById('btnTinhLuong').onclick = function() {
    //input: nhapSoLuong: number, soNgayLam: number
    var nhapSoLuong = Number(document.getElementById('nhapSoLuong').value);
    var soNgayLam = Number(document.getElementById('soNgayLam').value);
    //ouput: ketQua: string
    var ketQua = '';
    //Xử lý
    ketQua = nhapSoLuong * soNgayLam;

    document.getElementById('ketQua1').innerHTML = ketQua.toLocaleString();
}

/*----Bài 2------ */
document.getElementById('btnTinhTB').onclick = function() {
    //input: soThu1: number, soThu2: number, soThu3: number, soThu4: number, soThu5: number
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);
    var soThu4 = Number(document.getElementById('soThu4').value);
    var soThu5 = Number(document.getElementById('soThu5').value);
    //output: ketQua: string
    var ketQua = '';
    //Xử lý
    ketQua = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

    document.getElementById('ketQua2').innerHTML = ketQua;
}

/*----Bài 3------ */
document.getElementById('btnQuyDoiTien').onclick = function() {
    //input: nhapSoTien: number
    var nhapSoTien = Number(document.getElementById('nhapSoTien').value);
    //output: ketQua: string
    var ketQua = '';
    //Xử lý
    ketQua = nhapSoTien * 23500;

    document.getElementById('ketQua3').innerHTML = ketQua.toLocaleString();
}

/*----Bài 4------ */
document.getElementById('btnTinh').onclick = function() {
    //input: nhapChieuDai: number, nhapChieuRong: number
    var nhapChieuDai = Number(document.getElementById('nhapChieuDai').value);
    var nhapChieuRong = Number(document.getElementById('nhapChieuRong').value);
    //output: dienTich: string, chuVi: string
    var dienTich = '';
    var chuVi = '';
    //xử lý
    dienTich = nhapChieuDai * nhapChieuRong;
    chuVi = (nhapChieuDai + nhapChieuRong) * 2;

    document.getElementById('ketQua4').innerHTML = 'Diện tích: ' + dienTich + ', ' + 'Chu vi: ' + chuVi;
}

/*----Bài 5------ */
document.getElementById('btnTongKySo').onclick = function() {
    //input: nhap2So: number
    var nhap2So = Number(document.getElementById('nhap2So').value);
    //output: hangChuc: string, hangDonVi: string
    var hangChuc = '';
    var hangDonVi = '';
    //xử lý: 
    hangChuc = Math.floor(nhap2So / 10);
    hangDonVi = nhap2So % 10;

    document.getElementById('ketQua5').innerHTML = hangChuc + hangDonVi;
}

