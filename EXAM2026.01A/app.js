// $(function() {}) = viết tắt của $(document).ready()
// Nghĩa là: đợi HTML load xong rồi mới chạy JS
$(function () {
  // Lấy thẻ <dialog> bằng JS thuần (vì jQuery không hỗ trợ showModal)
  const dialog = document.getElementById("popup");

  // Lấy dữ liệu từ localStorage (dạng string)
  let dataString = localStorage.getItem("students");

  // Nếu có dữ liệu → parse JSON
  // Nếu không → gán mảng rỗng []
  let students = dataString ? JSON.parse(dataString) : [];

  // Nếu localStorage chưa có dữ liệu
  if (students.length === 0) {
    // Gán dữ liệu mẫu (mockData)
    students = [...mockData];

    // Lưu lại vào localStorage
    localStorage.setItem("students", JSON.stringify(students));
  }

  // ========================
  // HÀM RENDER TABLE
  // ========================
  function renderTable() {
    // Lấy keyword từ input search
    let keyword = $("#search").val().toLowerCase();

    // Biến chứa HTML
    let htmlContent = "";

    // Duyệt toàn bộ danh sách sinh viên
    students.forEach(function (student, index) {
      // Kiểm tra tên có chứa keyword không
      let matchName = student.name.toLowerCase().includes(keyword);

      // Kiểm tra email có chứa keyword không
      let matchSpeaker = student.email.toLowerCase().includes(keyword);

      // Nếu match 1 trong 2 (tên hoặc email)
      if (matchName || matchSpeaker) {
        // Tạo HTML cho từng dòng
        htmlContent += `
          <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.date}</td>
            <td>${student.locate}</td>
            <td>
              <!-- data-id lưu index để biết đang thao tác với phần tử nào -->
              <button class="edit-btn" data-id="${index}">Sửa</button>
              <button class="delete-btn" data-id="${index}">Xóa</button>
            </td>
          </tr>
        `;
      }
    });

    // Nếu không có dữ liệu nào khớp
    if (htmlContent === "") {
      // Hiển thị thông báo
      htmlContent = `
        <tr>
          <td colspan="4" style="text-align:center; padding:15px;">
            Không có dữ liệu
          </td>
        </tr>
      `;
    }

    // Đổ HTML vào bảng
    $("#studentTable").html(htmlContent);
  }

  // ========================
  // EVENT: SEARCH
  // ========================
  // Khi gõ input → render lại bảng
  $("#search").on("input", renderTable);

  // ========================
  // EVENT: THÊM SỰ KIỆN
  // ========================
  $("#btnAdd").on("click", function () {
    // Reset form về ban đầu
    $("#studentForm")[0].reset();

    // Xóa lỗi
    $(".error").text("");

    // Reset editIndex (rỗng = thêm mới)
    $("#editIndex").val("");

    // Đổi title
    $("#formTitle").text("Add new");

    // Mở popup
    dialog.showModal();
  });

  // ========================
  // EVENT: ĐÓNG POPUP
  // ========================
  $("#btnClose").on("click", function () {
    dialog.close();
  });

  // ========================
  // EVENT: SỬA
  // ========================
  // Dùng $(document).on vì button được tạo động
  $(document).on("click", ".edit-btn", function () {
    // Lấy id từ data-id
    let id = $(this).data("id");

    // Lấy sinh viên tương ứng
    let student = students[id];

    // Xóa lỗi cũ
    $(".error").text("");

    // Gán index vào hidden input
    $("#editIndex").val(id);

    // Đổ dữ liệu vào form
    $("#name").val(student.name);
    $("#email").val(student.email);
    $("#phone").val(student.phone);
    $("#date").val(student.date);
    $("#locate").val(student.locate);
    // Đổi title
    $("#formTitle").text("Fix Event");

    // Mở popup
    dialog.showModal();
  });

  // ========================
  // EVENT: XÓA
  // ========================
  $(document).on("click", ".delete-btn", function () {
    // Lấy id
    let id = $(this).data("id");

    // Confirm trước khi xóa
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sự kiện này?");

    if (confirmDelete) {
      // Xóa phần tử trong mảng
      students.splice(id, 1);

      // Lưu lại localStorage
      localStorage.setItem("students", JSON.stringify(students));

      // Render lại bảng
      renderTable();
    }
  });

  // ========================
  // EVENT: SUBMIT FORM
  // ========================
  $("#studentForm").on("submit", function (e) {
    // Ngăn reload trang
    e.preventDefault();

    // Xóa lỗi cũ
    $(".error").text("");

    let isValid = true;

    // Lấy dữ liệu từ form
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let date = $("#date").val().trim();
    let locate = $("#locate").val().trim();

    // ===== VALIDATE NAME =====

    if (name === "") {
      $("#errName").text("Vui lòng nhập sự kiện");
      isValid = false;
    }

    // ===== VALIDATE SPEAKER =====
    if (email === "") {
      $("#errEmail").text("Vui lòng nhập họ tên");
      isValid = false;
    }

    
    // ===== VALIDATE EMAIL =====
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phone === "") {
      $("#errPhone").text("Vui lòng nhập email");
      isValid = false;
    } else if (!emailRegex.test(phone)) {
      $("#errPhone").text("Email không đúng định dạng");
      isValid = false;


      // ===== VALIDATE LOCATE =====
    if (locate === "") {
      $("#errLocate").text("Vui lòng nhập địa chỉ");
      isValid = false;
    }
    //   / ===== VALIDATE EMAIL =====
    // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (email === "") {
    //   $("#errEmail").text("Vui lòng nhập email");
    //   isValid = false;
    // } else if (!emailRegex.test(email)) {
    //   $("#errEmail").text("Email không đúng định dạng");
    //   isValid = false;
    // }
    // // ===== VALIDATE PHONE =====
    // let phoneRegex = /^\d{10}$/;

    // if (/\D/.test(phone)) {
    //   $("#errPhone").text("Số điện thoại không đúng định dạng");
    //   isValid = false;
    // } else if (!phoneRegex.test(phone)) {
    //   $("#errPhone").text("Số điện thoại phải đúng 10 số");
    //   isValid = false;
    // }

    // ===== NẾU HỢP LỆ =====
    if (isValid) {
      // Lấy index (nếu có)
      let editIndex = $("#editIndex").val();

      // Tạo object mới
      let newStudent = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        locate: locate,
      };

      // Nếu không có index → thêm mới
      if (editIndex === "") {
        students.push(newStudent);
      } else {
        // Ngược lại → sửa
        students[editIndex] = newStudent;
      }

      // Lưu localStorage
      localStorage.setItem("students", JSON.stringify(students));

      // Render lại
      renderTable();

      // Đóng popup
      dialog.close();
    }
  });

  // ========================
  // CHẠY LẦN ĐẦU
  // ========================
  renderTable();
});
