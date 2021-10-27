I. Khởi tạo ReactJs và GitHub
1) Các npm thường dùng: npx create-react-app frontend. cd frontend ->
- npm install redux
- npm install react-redux
- npm install @reduxjs/toolkit
- npm install redux-thunk
- npm install react-router
- npm install react-router-dom
- npm install react-bootstrap@next bootstrap@5.1.1
2) Tạo các file chứa data
- src/Data/
- public/images/
- public/videos/
3) Lưu ý nhớ chuyển file .gitignore và README.md ra ngoài folder frontend
4) Github:
- Tạo tài khoản
+ Làm theo các bước hướng dẫn:
- git init
- git add README.md (sau này dùng git add . = lấy tất cả các file)
- git commit -m "first commit" (đặt tên commit cho dễ nhớ)
- git branch -M main
- git remote add origin https://github.com/nguyenthanhsang231195/Website-Ecommerce.git
- git push -u origin main (sau này chỉ dùng git push)

II. HomeScreen Update
1) npm install react-elastic-carousel
2) npm install styled-components(Thằng này nó hơi dị không chơi kiểu css thuần mà kiểu style khi xây dựng Item https://sag1v.github.io/react-elastic-carousel/)

III. ProductScreen
IV. Category
1) Có 2 cái Filter muốn xài cái nào cũng được
- Chủ yếu học hỏi
2) Học hỏi dùng hàm useCallback, cách dùng