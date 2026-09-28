# Bài rèn luyện qua tình huống

App `kynangsongDTR-main anti` sử dụng trình tự:

1. Nêu mục tiêu rèn luyện.
2. Đọc tình huống thực tế, cho bé suy nghĩ.
3. Chọn một trong bốn đáp án A, B, C, D rồi bấm **Trả lời và xem giải thích**. Bé có thể xem gợi ý trước khi trả lời và thử lại sau khi xem phản hồi.
4. Bấm **Rút ra bài học** để xem kết luận, tổng kết tình huống và gợi ý áp dụng. Sau đó có thể **Hoàn thành bài học** để ghi nhận vào nhật ký như trước.

Đáp án và tổng kết được ẩn trước khi bé gửi câu trả lời. Cả đáp án đúng và chưa phù hợp đều cho phép xem tổng kết: mục đích là học cách xử lý, không ép bé phải trả lời đúng mới được học tiếp. Mỗi lần mở bài sẽ bắt đầu một lượt trả lời mới.

365 bài dùng 97 tình huống tương ứng 97 kỹ năng trong 8 trụ cột; các vòng tiếp theo luyện lại kỹ năng. ID và thứ tự bài được giữ như dữ liệu trước đây. Không xóa hay đổi định dạng nhật ký đã lưu. Các lựa chọn và lượt thử hiện tại không được ghi vào nhật ký.

## Chạy và cập nhật nội dung

```powershell
npm run dev -- --host 127.0.0.1
npm run build
npm run lint
```

Nguồn nội dung được dùng bởi bản cập nhật: `scripts/core_skills_catalog.js` và `scripts/additional_skills_catalog.js`. Sinh lại hai bản JSON bằng:

```powershell
node scripts/generate_365_lessons.js
```

Generator kiểm tra đủ A–D, đúng một lựa chọn phù hợp và đủ phản hồi, mục tiêu, tình huống, tổng kết cho toàn bộ 365 bài. Các generator cũ `.py` và `generate_comprehensive_lessons.cjs` không phải nguồn của bản cập nhật này.

Một số tên bài về uống nước, ngủ và báo cháy được chỉnh để tránh áp một lượng nước hoặc số giờ ngủ cho mọi bé, và tránh trì hoãn thoát hiểm để tìm khăn. Nội dung được đối chiếu với [AAP về nước uống](https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Choose-Water-for-Healthy-Hydration.aspx), [AAP về giấc ngủ](https://www.healthychildren.org/English/healthy-living/sleep/Pages/healthy-sleep-habits-how-many-hours-does-your-child-need.aspx), [Red Cross về thoát hiểm](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire.html) và [NHS về chảy máu mũi](https://www.nhs.uk/conditions/nosebleed/).
