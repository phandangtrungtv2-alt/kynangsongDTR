#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script Python sinh 365 bài học Kỹ Năng Sống dành riêng cho Học sinh Cấp 1 (Tiểu học).
Xuất ra file full_365_lessons.json.
"""

import json
import os

PILLARS_8 = [
    'Tự lập',
    'Giao tiếp',
    'Cảm xúc',
    'An toàn',
    'Tài chính',
    'Vệ sinh',
    'Tư duy',
    'Xã hội',
]

PRIMARY_SCHOOL_LESSONS = {
    'Tự lập': [
        ('Soạn sách vở và đồ dùng theo thời khóa biểu ngày mai', '🎒', '10 - 15 phút'),
        ('Tự giác ngồi vào bàn học bài đúng giờ quy định', '⏰', '12 - 15 phút'),
        ('Quản lý thời gian học tập bằng phương pháp Pomodoro 25 phút', '⏱️', '15 - 20 phút'),
        ('Tự chuẩn bị đồng phục, khăn quàng đỏ và giày dép đi học', '👔', '10 - 12 phút'),
        ('Giữ gìn góc học tập tại nhà ngăn nắp và đủ ánh sáng', '📐', '12 - 15 phút'),
        ('Tự thức dậy khi chuông báo thức reo và gấp chăn màn', '🛏️', '10 phút'),
        ('Hoàn thành bài tập về nhà trước khi xem tivi hoặc chơi game', '📝', '15 phút'),
        ('Kỹ năng ghi chép sổ dặn dò và theo dõi hạn nộp bài', '📒', '10 phút'),
        ('Tự gọt bút chì, kiểm tra mực bút và đồ dùng học tập', '✏️', '10 phút'),
        ('Bảo quản cặp sách nhẹ gọn: Bỏ bớt sách vở không cần thiết', '📚', '10 - 12 phút'),
    ],
    'Giao tiếp': [
        ('Lễ phép khoanh tay chào thầy cô giáo khi vào trường và ra về', '🙇', '8 - 10 phút'),
        ('Giơ tay xin phép trước khi phát biểu ý kiến trong lớp học', '✋', '10 phút'),
        ('Kỹ năng thuyết trình: Đứng thẳng, nói to rõ ràng trước tập thể', '🎤', '12 - 15 phút'),
        ('Lắng nghe bạn phát biểu: Không cười cợt hay nói chen ngang', '👂', '10 - 12 phút'),
        ('Kỹ năng làm việc nhóm: Biết lắng nghe và hợp tác cùng bạn', '🤝', '15 phút'),
        ('Cách mượn và gửi trả đồ dùng học tập của bạn đúng hẹn', '🎁', '10 phút'),
        ('Biết nói "Cảm ơn" khi được giúp và "Xin lỗi" khi vô ý va vào bạn', '🌸', '8 - 10 phút'),
        ('Nói năng văn minh, lịch sự: Tuyệt đối không nói tục, chửi thề', '✨', '12 - 15 phút'),
        ('Cách chủ động bắt chuyện và chào đón một người bạn mới', '👋', '10 - 12 phút'),
        ('Nhìn vào mắt đối phương khi trò chuyện để thể hiện sự tôn trọng', '👀', '10 phút'),
    ],
    'Cảm xúc': [
        ('Giữ bình tĩnh khi nhận điểm số chưa như ý: Rút kinh nghiệm để tiến bộ', '📊', '12 - 15 phút'),
        ('Kiểm soát sự nóng giận khi chơi thể thao hoặc thi đấu', '🧘', '12 - 15 phút'),
        ('Ứng phó khi bị bạn bè trêu chọc: Tự tin và không cáu gắt', '🛡️', '12 - 15 phút'),
        ('Biết đồng cảm và an ủi khi thấy bạn cùng lớp khóc hoặc buồn bã', '🫂', '10 - 12 phút'),
        ('Kỹ thuật thở sâu 4 nhịp giúp xua tan lo âu trước bài kiểm tra', '🎈', '10 phút'),
        ('Vui mừng cho thành công của bạn, vượt qua cảm xúc đố kỵ', '🎉', '10 - 12 phút'),
        ('Dũng cảm nhận lỗi và sửa sai khi làm việc chưa đúng', '🕊️', '12 - 15 phút'),
        ('Tự động viên khi gặp bài toán khó: "Kiên trì mình sẽ làm được!"', '💪', '10 - 12 phút'),
        ('Cởi mở chia sẻ với cha mẹ về những điều xảy ra ở trường', '🏡', '12 - 15 phút'),
        ('Thực hành lòng biết ơn: Nghĩ về 3 điều tốt đẹp sau mỗi ngày', '🌻', '8 - 10 phút'),
    ],
    'An toàn': [
        ('An toàn giao thông: Đi bộ đúng phần đường và sang đường an toàn', '🚦', '12 - 15 phút'),
        ('Quy tắc an toàn khi đi xe đạp: Đội mũ bảo hiểm, không dàn hàng ba', '🚲', '12 - 15 phút'),
        ('Quy tắc 5 ngón tay: Kỹ năng phòng tránh xâm hại cơ thể trẻ em', '🖐️', '15 phút'),
        ('An toàn trên Internet: Không chia sẻ mật khẩu và hình ảnh cá nhân', '💻', '15 - 20 phút'),
        ('Ứng phó khi bị bắt nạt học đường: Báo ngay với thầy cô và cha mẹ', '📢', '15 phút'),
        ('Cảnh giác trước cổng trường: Tuyệt đối không đi theo người lạ', '⛔', '12 - 15 phút'),
        ('Phòng tránh tai nạn đuối nước: Không tự ý tắm sông, suối, ao hồ', '🌊', '15 phút'),
        ('Kỹ năng thoát hiểm và dùng khăn ẩm khi có chuông báo cháy', '🧯', '15 phút'),
        ('Ghi nhớ số điện thoại khẩn cấp: 113, 114, 115', '🚨', '10 - 12 phút'),
    ],
    'Tài chính': [
        ('Kỹ năng quản lý tiền tiêu vặt: Chi tiêu có kế hoạch cho bữa sáng', '🪙', '12 - 15 phút'),
        ('Phân biệt "Nhu cầu học tập thiết yếu" và "Ý thích mua sắm nhất thời"', '🏷️', '12 - 15 phút'),
        ('Thấu hiểu giá trị của đồng tiền và sức lao động của cha mẹ', '💼', '15 phút'),
        ('Nuôi heo đất tiết kiệm: Đặt mục tiêu mua đồ dùng học tập con thích', '🐷', '10 - 12 phút'),
        ('Giữ gìn sách giáo khoa cẩn thận để có thể tặng lại các em khóa dưới', '📖', '10 phút'),
        ('Đi nhà sách thông minh: Chọn mua sách có ích, không mua theo trào lưu', '🏬', '12 - 15 phút'),
        ('Hạn chế mua đồ ăn vặt không rõ nguồn gốc trước cổng trường', '🍢', '10 - 12 phút'),
    ],
    'Vệ sinh': [
        ('Tư thế ngồi học chuẩn khoa học: Phòng chống gù lưng và vẹo cột sống', '🪑', '10 - 12 phút'),
        ('Quy tắc 20-20-20: Bảo vệ mắt không bị cận thị khi học và dùng máy tính', '👓', '10 phút'),
        ('Rửa tay 6 bước bằng xà phòng trước khi ăn bán trú và sau khi chơi đùa', '🧼', '8 - 10 phút'),
        ('Uống đủ 1.5 - 2 lít nước lọc mỗi ngày, hạn chế nước ngọt có gas', '💧', '8 - 10 phút'),
        ('Đánh răng đúng cách 2 phút sáng tối để bảo vệ hàm răng vĩnh viễn', '🪥', '10 phút'),
        ('Che miệng bằng khuỷu tay khi ho hoặc hắt hơi nơi đông người', '🤧', '8 phút'),
        ('Giữ vệ sinh thân thể: Tắm giặt, gội đầu và thay tất sạch mỗi ngày', '🚿', '10 phút'),
    ],
    'Tư duy': [
        ('Rèn luyện tính kiên trì: Không bỏ cuộc trước bài toán hóc búa', '🌱', '12 - 15 phút'),
        ('Kỹ năng đặt câu hỏi "Tại sao?": Rèn luyện tư duy phản biện', '🔍', '12 - 15 phút'),
        ('Học cách vẽ sơ đồ tư duy (Mindmap) để ghi nhớ bài học nhanh hơn', '🧠', '15 - 20 phút'),
        ('Kỹ năng đọc sách hiệu quả: Tóm tắt ý chính của câu chuyện', '📖', '15 phút'),
        ('Tự tìm ra lỗi sai trong bài kiểm tra và sửa lại vào sổ ghi chú', '🔧', '12 - 15 phút'),
        ('Tư duy sắp xếp: Phân biệt việc quan trọng cần làm trước', '⏱️', '10 - 12 phút'),
    ],
    'Xã hội': [
        ('Tham gia trực nhật lớp: Quét lớp, lau bảng và kê bàn ghế ngay ngắn', '🧹', '12 - 15 phút'),
        ('Bỏ rác đúng nơi quy định và phân loại rác tái chế tại trường', '🗑️', '10 phút'),
        ('Ý thức tiết kiệm điện nước: Tắt đèn và quạt khi ra khỏi phòng học', '💡', '8 - 10 phút'),
        ('Tôn trọng và chào hỏi các bác bảo vệ, cô lao công trường học', '🤝', '10 phút'),
        ('Xếp hàng trật tự khi vào lớp, chào cờ và mua đồ tại căng tin', '🚶‍♂️', '10 phút'),
        ('Bảo vệ tài sản chung: Không vẽ bậy lên bàn học và tường lớp', '🏫', '10 phút'),
    ]
}


def build_primary_lesson(lesson_id, title, pillar, icon, duration):
    return {
        "id": lesson_id,
        "title": title,
        "pillar": pillar,
        "duration": duration,
        "icon": icon,
        "objective": f"Giúp học sinh cấp 1 nắm vững và hình thành thói quen \"{title}\", phát triển toàn diện trụ cột {pillar} để trở thành người tự lập, văn minh và tự tin.",
        "script": [
            {
                "speaker": "Ba Mẹ / Thầy Cô",
                "role": "parent",
                "avatar": "👨‍🏫",
                "text": f"Con yêu, hôm nay chúng ta cùng rèn luyện một kỹ năng rất quan trọng của học sinh tiểu học: \"{title}\". Kỹ năng này sẽ giúp con ngày càng tự lập, tự tin và được thầy cô, bạn bè yêu quý.",
                "tip": "Trò chuyện bằng thái độ tôn trọng, khích lệ tinh thần tự giác của học sinh cấp 1."
            },
            {
                "speaker": "Học sinh",
                "role": "child",
                "avatar": "🎒",
                "text": f"Dạ vâng ạ! Con muốn thực hiện tốt \"{title}\". Ba mẹ / thầy cô hướng dẫn các bước cụ thể cho con nhé!",
                "tip": "Con chủ động ghi nhận và sẵn sàng bắt tay vào rèn luyện."
            },
            {
                "speaker": "Ba Mẹ / Thầy Cô",
                "role": "parent",
                "avatar": "👨‍🏫",
                "text": "Rất tốt! Chúng ta sẽ cùng thực hiện từng bước cụ thể. Con hãy chủ động làm từng việc, nếu gặp khó khăn hãy nói ra để cùng nhau tìm giải pháp nhé!",
                "tip": "Trao quyền tự chủ cho học sinh, hướng dẫn con cách giải quyết vấn đề thay vì làm hộ."
            }
        ],
        "activity": {
            "type": "checklist",
            "steps": [
                {
                    "id": f"act-{lesson_id}-1",
                    "title": "Bước 1: Tìm hiểu mục đích và các bước thực hiện",
                    "description": f"Đọc kỹ yêu cầu và hiểu rõ tại sao cần rèn luyện \"{title}\" trong cuộc sống học đường."
                },
                {
                    "id": f"act-{lesson_id}-2",
                    "title": "Bước 2: Học sinh trực tiếp thực hành",
                    "description": "Tự giác thực hiện các hành động theo quy trình, kiểm tra kết quả xem đã đạt chuẩn chưa."
                },
                {
                    "id": f"act-{lesson_id}-3",
                    "title": "Bước 3: Đánh giá và duy trì thành thói quen mỗi ngày",
                    "description": "Ghi nhận sự tiến bộ của bản thân và cam kết tiếp tục duy trì đều đặn suốt năm học."
                }
            ],
            "parentTip": "Đối với học sinh cấp 1, việc khen ngợi cụ thể vào hành động và tính tự giác sẽ hiệu quả hơn nhiều so với việc chỉ trích hay thúc giục liên tục."
        }
    }


def generate_365_lessons():
    lessons = []
    current_id = 1

    while len(lessons) < 365:
        for pillar in PILLARS_8:
            if len(lessons) >= 365:
                break
            templates = PRIMARY_SCHOOL_LESSONS[pillar]
            tpl_idx = ((current_id - 1) // len(PILLARS_8)) % len(templates)
            base_title, icon, dur = templates[tpl_idx]
            
            iteration = (current_id - 1) // (len(PILLARS_8) * len(templates))
            title = base_title if iteration == 0 else f"{base_title} (Rèn luyện nâng cao cấp độ {iteration + 1})"

            lessons.append(build_primary_lesson(current_id, title, pillar, icon, dur))
            current_id += 1

    return lessons


if __name__ == '__main__':
    lessons = generate_365_lessons()
    out_file1 = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'full_365_lessons.json')
    out_file2 = os.path.join(os.path.dirname(__file__), '..', 'full_365_lessons.json')
    
    with open(out_file1, 'w', encoding='utf-8') as f:
        json.dump(lessons, f, ensure_ascii=False, indent=2)
    with open(out_file2, 'w', encoding='utf-8') as f:
        json.dump(lessons, f, ensure_ascii=False, indent=2)
        
    print(f"Da tao thanh cong {len(lessons)} bai hoc cap 1 tai: {out_file1}")
