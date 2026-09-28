import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 8 Trụ cột kỹ năng sống chuẩn cho Học sinh Cấp 1 (Tiểu học - Lớp 1 đến Lớp 5)
export const PILLARS_8 = [
  'Tự lập',
  'Giao tiếp',
  'Cảm xúc',
  'An toàn',
  'Tài chính',
  'Vệ sinh',
  'Tư duy',
  'Xã hội',
];

// Danh sách các kỹ năng sống cốt lõi thiết kế riêng cho học sinh Tiểu học
const PRIMARY_SCHOOL_LESSONS = {
  'Tự lập': [
    { title: 'Soạn sách vở và đồ dùng theo thời khóa biểu ngày mai', icon: '🎒', dur: '10 - 15 phút' },
    { title: 'Tự giác ngồi vào bàn học bài đúng giờ quy định', icon: '⏰', dur: '12 - 15 phút' },
    { title: 'Quản lý thời gian học tập bằng phương pháp Pomodoro 25 phút', icon: '⏱️', dur: '15 - 20 phút' },
    { title: 'Tự chuẩn bị đồng phục, khăn quàng đỏ và giày dép đi học', icon: '👔', dur: '10 - 12 phút' },
    { title: 'Giữ gìn góc học tập tại nhà ngăn nắp và đủ ánh sáng', icon: '📐', dur: '12 - 15 phút' },
    { title: 'Tự thức dậy khi chuông báo thức reo và gấp chăn màn', icon: '🛏️', dur: '10 phút' },
    { title: 'Hoàn thành bài tập về nhà trước khi xem tivi hoặc chơi game', icon: '📝', dur: '15 phút' },
    { title: 'Kỹ năng ghi chép sổ dặn dò và theo dõi hạn nộp bài', icon: '📒', dur: '10 phút' },
    { title: 'Tự gọt bút chì, kiểm tra mực bút và chuẩn bị đồ dùng học tập', icon: '✏️', dur: '10 phút' },
    { title: 'Bảo quản cặp sách nhẹ gọn: Bỏ bớt sách vở không cần thiết', icon: '📚', dur: '10 - 12 phút' },
    { title: 'Tự bảo quản đồ dùng cá nhân: Không làm rơi mất bút, tẩy, thước', icon: '📏', dur: '10 phút' },
    { title: 'Tự sắp xếp quần áo cá nhân vào ngăn tủ riêng của mình', icon: '👕', dur: '12 - 15 phút' },
    { title: 'Tự biết chuẩn bị áo mưa hoặc ô trong cặp phòng khi trời mưa', icon: '☂️', dur: '8 - 10 phút' },
    { title: 'Tự chuẩn bị bình nước uống cá nhân mang theo đến trường', icon: '💧', dur: '8 - 10 phút' },
    { title: 'Tự dọn dẹp và cất khay ăn bán trú đúng nơi quy định', icon: '🍽️', dur: '10 phút' },
  ],
  'Giao tiếp': [
    { title: 'Lễ phép khoanh tay chào thầy cô giáo khi vào trường và ra về', icon: '🙇', dur: '8 - 10 phút' },
    { title: 'Giơ tay xin phép trước khi phát biểu ý kiến trong lớp học', icon: '✋', dur: '10 phút' },
    { title: 'Kỹ năng thuyết trình: Đứng thẳng, nói to rõ ràng trước tập thể', icon: '🎤', dur: '12 - 15 phút' },
    { title: 'Lắng nghe bạn phát biểu: Không cười cợt hay nói chen ngang', icon: '👂', dur: '10 - 12 phút' },
    { title: 'Kỹ năng làm việc nhóm: Biết lắng nghe và hợp tác cùng bạn', icon: '🤝', dur: '15 phút' },
    { title: 'Cách mượn và gửi trả đồ dùng học tập của bạn đúng hẹn', icon: '🎁', dur: '10 phút' },
    { title: 'Biết nói "Cảm ơn" khi được giúp và "Xin lỗi" khi vô ý va vào bạn', icon: '🌸', dur: '8 - 10 phút' },
    { title: 'Nói năng văn minh, lịch sự: Tuyệt đối không nói tục, chửi thề', icon: '✨', dur: '12 - 15 phút' },
    { title: 'Cách chủ động bắt chuyện và chào đón một người bạn mới', icon: '👋', dur: '10 - 12 phút' },
    { title: 'Kỹ năng gọi điện thoại hoặc nhắn tin lịch sự khi xin nghỉ học', icon: '📞', dur: '10 phút' },
    { title: 'Khen ngợi và chúc mừng khi bạn đạt điểm tốt hoặc thành tích cao', icon: '⭐', dur: '10 phút' },
    { title: 'Nói âm lượng vừa phải, giữ trật tự trong thư viện và lớp học', icon: '🤫', dur: '8 - 10 phút' },
    { title: 'Nhìn vào mắt đối phương khi trò chuyện để thể hiện sự tôn trọng', icon: '👀', dur: '10 phút' },
    { title: 'Dùng kính ngữ "Dạ, Thưa" khi giao tiếp với người lớn tuổi', icon: '💬', dur: '8 - 10 phút' },
    { title: 'Cách nói lời từ chối lịch thiệp khi bị bạn rủ rê làm việc sai', icon: '🙅', dur: '12 - 15 phút' },
  ],
  'Cảm xúc': [
    { title: 'Giữ bình tĩnh khi nhận điểm số chưa như ý: Rút kinh nghiệm để tiến bộ', icon: '📊', dur: '12 - 15 phút' },
    { title: 'Kiểm soát sự nóng giận khi chơi thể thao hoặc thi đấu', icon: '🧘', dur: '12 - 15 phút' },
    { title: 'Ứng phó khi bị bạn bè trêu chọc: Tự tin và không cáu gắt', icon: '🛡️', dur: '12 - 15 phút' },
    { title: 'Biết đồng cảm và an ủi khi thấy bạn cùng lớp khóc hoặc buồn bã', icon: '🫂', dur: '10 - 12 phút' },
    { title: 'Kỹ thuật thở sâu 4 nhịp giúp xua tan lo âu trước bài kiểm tra', icon: '🎈', dur: '10 phút' },
    { title: 'Vui mừng cho thành công của bạn, vượt qua cảm xúc đố kỵ', icon: '🎉', dur: '10 - 12 phút' },
    { title: 'Dũng cảm nhận lỗi và sửa sai khi làm việc chưa đúng', icon: '🕊️', dur: '12 - 15 phút' },
    { title: 'Tự động viên khi gặp bài toán khó: "Kiên trì mình sẽ làm được!"', icon: '💪', dur: '10 - 12 phút' },
    { title: 'Cởi mở chia sẻ với cha mẹ về những điều xảy ra ở trường', icon: '🏡', dur: '12 - 15 phút' },
    { title: 'Thực hành lòng biết ơn: Nghĩ về 3 điều tốt đẹp sau mỗi ngày', icon: '🌻', dur: '8 - 10 phút' },
    { title: 'Học cách chấp nhận lời phê bình đúng đắn từ thầy cô', icon: '👂', dur: '10 - 12 phút' },
    { title: 'Xây dựng sự tự tin: Nhận biết những điểm mạnh của bản thân', icon: '🌟', dur: '12 - 15 phút' },
    { title: 'Cách giải tỏa căng thẳng sau những giờ học tập căng thẳng', icon: '🎨', dur: '15 phút' },
  ],
  'An toàn': [
    { title: 'An toàn giao thông: Đi bộ đúng phần đường và sang đường an toàn', icon: '🚦', dur: '12 - 15 phút' },
    { title: 'Quy tắc an toàn khi đi xe đạp: Đội mũ bảo hiểm, không dàn hàng ba', icon: '🚲', dur: '12 - 15 phút' },
    { title: 'Quy tắc 5 ngón tay: Kỹ năng phòng tránh xâm hại cơ thể trẻ em', icon: '🖐️', dur: '15 phút' },
    { title: 'An toàn trên Internet: Không chia sẻ mật khẩu và hình ảnh cá nhân', icon: '💻', dur: '15 - 20 phút' },
    { title: 'Ứng phó khi bị bắt nạt học đường: Báo ngay với thầy cô và cha mẹ', icon: '📢', dur: '15 phút' },
    { title: 'Cảnh giác trước cổng trường: Tuyệt đối không đi theo người lạ', icon: '⛔', dur: '12 - 15 phút' },
    { title: 'Phòng tránh tai nạn đuối nước: Không tự ý tắm sông, suối, ao hồ', icon: '🌊', dur: '15 phút' },
    { title: 'Kỹ năng thoát hiểm và dùng khăn ẩm khi có chuông báo cháy', icon: '🧯', dur: '15 phút' },
    { title: 'An toàn khi sử dụng compa, kéo và dao rọc giấy thủ công', icon: '✂️', dur: '10 phút' },
    { title: 'Ghi nhớ số điện thoại khẩn cấp: 113 (Công an), 114 (Cứu hỏa), 115 (Cấp cứu)', icon: '🚨', dur: '10 - 12 phút' },
    { title: 'Kỹ năng an toàn khi ở nhà một mình: Khóa cửa cẩn thận', icon: '🔑', dur: '12 - 15 phút' },
    { title: 'Không nghịch ngợm thiết bị điện và ổ cắm trong lớp học', icon: '⚡', dur: '10 phút' },
    { title: 'Biết cách sơ cứu cơ bản khi bị trầy xước nhẹ hoặc chảy máu cam', icon: '🩹', dur: '12 - 15 phút' },
  ],
  'Tài chính': [
    { title: 'Kỹ năng quản lý tiền tiêu vặt: Chi tiêu có kế hoạch cho bữa sáng', icon: '🪙', dur: '12 - 15 phút' },
    { title: 'Phân biệt "Nhu cầu học tập thiết yếu" và "Ý thích mua sắm nhất thời"', icon: '🏷️', dur: '12 - 15 phút' },
    { title: 'Thấu hiểu giá trị của đồng tiền và sức lao động của cha mẹ', icon: '💼', dur: '15 phút' },
    { title: 'Nuôi heo đất tiết kiệm: Đặt mục tiêu mua đồ dùng học tập con thích', icon: '🐷', dur: '10 - 12 phút' },
    { title: 'Giữ gìn sách giáo khoa cẩn thận để có thể tặng lại các em khóa dưới', icon: '📖', dur: '10 phút' },
    { title: 'Đi nhà sách thông minh: Chọn mua sách có ích, không mua theo trào lưu', icon: '🏬', dur: '12 - 15 phút' },
    { title: 'Hạn chế mua đồ ăn vặt không rõ nguồn gốc trước cổng trường', icon: '🍢', dur: '10 - 12 phút' },
    { title: 'Lập sổ tay ghi chép chi tiêu nhỏ của cá nhân học sinh', icon: '📒', dur: '12 - 15 phút' },
    { title: 'Biết trân trọng và giữ gìn đồ dùng để không phải mua mới liên tục', icon: '🎒', dur: '10 phút' },
    { title: 'Ý nghĩa của việc quyên góp tiền tiết kiệm giúp bạn học sinh nghèo', icon: '🧧', dur: '12 - 15 phút' },
  ],
  'Vệ sinh': [
    { title: 'Tư thế ngồi học chuẩn khoa học: Phòng chống gù lưng và vẹo cột sống', icon: '🪑', dur: '10 - 12 phút' },
    { title: 'Quy tắc 20-20-20: Bảo vệ mắt không bị cận thị khi học và dùng máy tính', icon: '👓', dur: '10 phút' },
    { title: 'Rửa tay 6 bước bằng xà phòng trước khi ăn bán trú và sau khi chơi đùa', icon: '🧼', dur: '8 - 10 phút' },
    { title: 'Uống đủ 1.5 - 2 lít nước lọc mỗi ngày, hạn chế nước ngọt có gas', icon: '💧', dur: '8 - 10 phút' },
    { title: 'Đánh răng đúng cách 2 phút sáng tối để bảo vệ hàm răng vĩnh viễn', icon: '🪥', dur: '10 phút' },
    { title: 'Che miệng bằng khuỷu tay khi ho hoặc hắt hơi nơi đông người', icon: '🤧', dur: '8 phút' },
    { title: 'Giữ vệ sinh thân thể: Tắm giặt, gội đầu và thay tất sạch mỗi ngày', icon: '🚿', dur: '10 phút' },
    { title: 'Thói quen ăn nhiều rau xanh và hoa quả để tăng cường sức đề kháng', icon: '🥗', dur: '10 - 12 phút' },
    { title: 'Ngủ đủ 9 tiếng mỗi đêm để phát triển thể chất và trí não tối ưu', icon: '🌙', dur: '10 phút' },
    { title: 'Tập thể dục buổi sáng 15 phút nâng cao thể lực và sức bền', icon: '🏃', dur: '15 phút' },
    { title: 'Giữ gìn vệ sinh chung khi sử dụng nhà vệ sinh của trường học', icon: '🚽', dur: '10 phút' },
  ],
  'Tư duy': [
    { title: 'Rèn luyện tính kiên trì: Không bỏ cuộc trước bài toán hóc búa', icon: '🌱', dur: '12 - 15 phút' },
    { title: 'Kỹ năng đặt câu hỏi "Tại sao?": Rèn luyện tư duy phản biện', icon: '🔍', dur: '12 - 15 phút' },
    { title: 'Học cách vẽ sơ đồ tư duy (Mindmap) để ghi nhớ bài học nhanh hơn', icon: '🧠', dur: '15 - 20 phút' },
    { title: 'Kỹ năng đọc sách hiệu quả: Tóm tắt ý chính của câu chuyện', icon: '📖', dur: '15 phút' },
    { title: 'Tự tìm ra lỗi sai trong bài kiểm tra và sửa lại vào sổ ghi chú', icon: '🔧', dur: '12 - 15 phút' },
    { title: 'Tư duy sắp xếp: Phân biệt việc quan trọng cần làm trước', icon: '⏱️', dur: '10 - 12 phút' },
    { title: 'Chia nhỏ mục tiêu lớn thành các bước hành động cụ thể', icon: '🎯', dur: '12 - 15 phút' },
    { title: 'Rèn luyện khả năng quan sát và mô tả sự vật xung quanh', icon: '🔬', dur: '12 - 15 phút' },
    { title: 'Học cách giải quyết bất đồng ý kiến một cách hòa bình', icon: '⚖️', dur: '12 - 15 phút' },
    { title: 'Phát triển tư duy sáng tạo: Tìm ra nhiều hơn một cách giải quyết', icon: '💡', dur: '15 phút' },
  ],
  'Xã hội': [
    { title: 'Tham gia trực nhật lớp: Quét lớp, lau bảng và kê bàn ghế ngay ngắn', icon: '🧹', dur: '12 - 15 phút' },
    { title: 'Bỏ rác đúng nơi quy định và phân loại rác tái chế tại trường', icon: '🗑️', dur: '10 phút' },
    { title: 'Ý thức tiết kiệm điện nước: Tắt đèn và quạt khi ra khỏi phòng học', icon: '💡', dur: '8 - 10 phút' },
    { title: 'Tôn trọng và chào hỏi các bác bảo vệ, cô lao công trường học', icon: '🤝', dur: '10 phút' },
    { title: 'Chăm sóc bồn hoa, cây xanh trong khuôn viên trường học', icon: '🪴', dur: '10 - 12 phút' },
    { title: 'Xếp hàng trật tự khi vào lớp, chào cờ và mua đồ tại căng tin', icon: '🚶‍♂️', dur: '10 phút' },
    { title: 'Nhường ghế xe buýt cho người già, phụ nữ có con nhỏ và em bé', icon: '🚌', dur: '8 - 10 phút' },
    { title: 'Bảo vệ tài sản chung: Không vẽ bậy lên bàn học và tường lớp', icon: '🏫', dur: '10 phút' },
    { title: 'Tham gia phong trào "Kế hoạch nhỏ": Thu gom giấy vụn giúp bạn nghèo', icon: '📦', dur: '12 - 15 phút' },
    { title: 'Tuân thủ nghiêm túc nội quy học sinh của nhà trường', icon: '📜', dur: '10 - 12 phút' },
  ]
};

// Hàm sinh chi tiết chuẩn sư phạm dành cho học sinh Cấp 1
function buildPrimaryLesson(id, title, pillar, icon, duration) {
  const script = [
    {
      speaker: 'Ba Mẹ / Thầy Cô',
      role: 'parent',
      avatar: '👨‍🏫',
      text: `Con yêu, hôm nay chúng ta cùng rèn luyện một kỹ năng rất quan trọng của học sinh tiểu học: "${title}". Kỹ năng này sẽ giúp con ngày càng tự lập, tự tin và được thầy cô, bạn bè yêu quý.`,
      tip: 'Trò chuyện bằng thái độ tôn trọng, khích lệ tinh thần tự giác của học sinh cấp 1.'
    },
    {
      speaker: 'Học sinh',
      role: 'child',
      avatar: '🎒',
      text: `Dạ vâng ạ! Con muốn thực hiện tốt "${title}". Ba mẹ / thầy cô hướng dẫn các bước cụ thể cho con nhé!`,
      tip: 'Con chủ động ghi nhận và sẵn sàng bắt tay vào rèn luyện.'
    },
    {
      speaker: 'Ba Mẹ / Thầy Cô',
      role: 'parent',
      avatar: '👨‍🏫',
      text: `Rất tốt! Chúng ta sẽ cùng thực hiện từng bước cụ thể. Con hãy chủ động làm từng việc, nếu gặp khó khăn hãy nói ra để cùng nhau tìm giải pháp nhé!`,
      tip: 'Trao quyền tự chủ cho học sinh, hướng dẫn con cách giải quyết vấn đề thay vì làm hộ.'
    }
  ];

  const activity = {
    type: 'checklist',
    steps: [
      {
        id: `act-${id}-1`,
        title: 'Bước 1: Tìm hiểu mục đích và các bước thực hiện',
        description: `Đọc kỹ yêu cầu và hiểu rõ tại sao cần rèn luyện "${title}" trong cuộc sống học đường.`
      },
      {
        id: `act-${id}-2`,
        title: 'Bước 2: Học sinh trực tiếp thực hành',
        description: `Tự giác thực hiện các hành động theo quy trình, kiểm tra kết quả xem đã đạt chuẩn chưa.`
      },
      {
        id: `act-${id}-3`,
        title: 'Bước 3: Đánh giá và duy trì thành thói quen mỗi ngày',
        description: `Ghi nhận sự tiến bộ của bản thân và cam kết tiếp tục duy trì đều đặn suốt năm học.`
      }
    ],
    parentTip: `Đối với học sinh cấp 1, việc khen ngợi cụ thể vào hành động và tính tự giác ("Ba mẹ rất tự hào vì con tự nhớ lịch học!") sẽ hiệu quả hơn nhiều so với việc chỉ trích hay thúc giục liên tục.`
  };

  const objective = `Giúp học sinh cấp 1 nắm vững và hình thành thói quen "${title}", phát triển toàn diện trụ cột ${pillar} để trở thành người tự lập, văn minh và tự tin.`;

  return {
    id,
    title,
    pillar,
    duration: duration || '10 - 15 phút',
    icon: icon || '🌱',
    objective,
    script,
    activity
  };
}

// Hàm sinh 365 bài học xoay vòng 8 trụ cột chuẩn Tiểu học
export function generate365PrimaryLessons() {
  const lessons = [];
  const pillarKeys = PILLARS_8;
  let currentId = 1;

  while (lessons.length < 365) {
    for (const pillar of pillarKeys) {
      if (lessons.length >= 365) break;

      const templates = PRIMARY_SCHOOL_LESSONS[pillar] || [];
      const templateIndex = Math.floor((currentId - 1) / pillarKeys.length) % templates.length;
      const baseTemplate = templates[templateIndex] || {
        title: `Rèn luyện kỹ năng ${pillar} dành cho học sinh tiểu học #${currentId}`,
        icon: '🌱',
        dur: '10 - 15 phút'
      };

      const iteration = Math.floor((currentId - 1) / (pillarKeys.length * templates.length));
      let finalTitle = baseTemplate.title;
      if (iteration > 0) {
        finalTitle = `${baseTemplate.title} (Rèn luyện nâng cao cấp độ ${iteration + 1})`;
      }

      lessons.push(
        buildPrimaryLesson(
          currentId,
          finalTitle,
          pillar,
          baseTemplate.icon,
          baseTemplate.dur
        )
      );

      currentId++;
    }
  }

  return lessons;
}

// Thực thi sinh dữ liệu
const all365Lessons = generate365PrimaryLessons();

// 1. Ghi vào src/data/full_365_lessons.json
const dest1 = path.join(__dirname, '..', 'src', 'data', 'full_365_lessons.json');
fs.writeFileSync(dest1, JSON.stringify(all365Lessons, null, 2), 'utf-8');

// 2. Ghi vào file root: full_365_lessons.json
const dest2 = path.join(__dirname, '..', 'full_365_lessons.json');
fs.writeFileSync(dest2, JSON.stringify(all365Lessons, null, 2), 'utf-8');

console.log(`Da tao thanh cong ${all365Lessons.length} bai hoc cap 1 tai:\n  1. ${dest1}\n  2. ${dest2}`);
