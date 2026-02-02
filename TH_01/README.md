
**Học phần:** Nền tảng phát triển Web
**Đối tượng:** K66

## BÀI TẬP 01: Làm quen GITHUB

**Mục tiêu:** Thiết lập môi trường lưu trữ bài tập và làm quen lệnh Git cơ bản.

1. **Hoạt động chuẩn bị (15 phút):**
    
    - Đăng ký tài khoản Github (nếu chưa có).
        
    - Tạo Repository với tên bắt buộc theo định dạng: `2026_CSE391_66Tênlớp_Fullname`.
        
        - _Ví dụ:_ `2026_CSE391_66TTNT1_HieuTaChi`.
            
    - Tổ chức thư mục, đặt tên file/biến khoa học.
        
    - Khai báo link Github vào GoogleSheet của lớp.
        
2. **Hoạt động thực hành (30 phút):**
    
    - Thực hiện các lệnh cơ bản: `git add`, `git commit`, `git push`, `git pull`.
        
    - Tạo cấu trúc dự án, tạo nhánh, đồng bộ dữ liệu.
        

## BÀI TẬP 02: Dựng Layout Web (Khóa học)

**Yêu cầu:**

- Thảo luận xác định bố cục và các phần tử cần thiết.
    
- Lập trình trang web hiển thị danh sách các khóa học (như hình mẫu trong PDF trang 1).
    
- Nội dung bao gồm: Hình ảnh, tên khóa học, mô tả, ưu đãi/học phí, thời gian khai giảng.
    
- **Gợi ý:** Sử dụng thư viện icon (Font Awesome, Bootstrap Icon...) cho các biểu tượng.
    

## BÀI TẬP 03: HTML Table (Bảng điểm)

**Yêu cầu:**

- Sử dụng thẻ `<table>` trong HTML.
    
- Trình bày dữ liệu bảng điểm sinh viên đúng theo mẫu (Trang 2).
    
- Chú ý xử lý các ô gộp dòng/cột (colspan, rowspan) phức tạp ở phần tiêu đề (Exam, 2nd Exam, Final Grade).
    

## BÀI TẬP 04: HTML Form (Thông tin nhân viên)

**Yêu cầu:**

- Phân tích bố cục và xác định các kiểu phần tử Form.
    
- Lập trình trang web chứa Form nhập liệu "Basic Info" (như hình mẫu trang 3).
    
- **Các trường thông tin bao gồm:**
    
    - Basic Info: ID, Name, Gender (Radio), Title, BirthDate, HireDate, Reports To (Select).
        
    - Contact Info: Email, Address, City, Region, Postal Code, Country, Phone, Photo upload.
        
    - Optional Info: Notes (Rich text editor UI), Preferred Shift (Checkbox), Captcha.
        

## BÀI TẬP 05: Giao diện Quản lý nhân sự (HR Management)

**Yêu cầu:** Xây dựng giao diện danh sách và thêm mới nhân viên (Trang 4).

1. **Trang danh sách (Employee List):**
    
    - Header: HR Management menu, thanh tìm kiếm (Search).
        
    - Nút "+ Add".
        
    - Bảng hiển thị: ID, Name, Email, Phone, Position.
        
    - Cột Action: Các nút Edit (Vàng), Delete (Đỏ).
        
2. **Modal/Form Thêm mới (New Employee):**
    
    - Các trường nhập: Name, Email, Phone, Position (Dropdown: Staff, Manager, CEO), Sex (Male/Female).
        
    - Nút chức năng: Save, Cancel.