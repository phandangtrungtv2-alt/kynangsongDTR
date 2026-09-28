const fs = require('fs');
const path = require('path');

const PILLARS_8 = [
  'Tự lập',
  'Giao tiếp',
  'Cảm xúc',
  'An toàn',
  'Tài chính',
  'Vệ sinh',
  'Tư duy',
  'Xã hội',
];

// Định nghĩa dữ liệu tình huống chuẩn sư phạm cho 97 kỹ năng cốt lõi
const LESSON_DEFINITIONS = {
  'Tự lập': [
    {
      title: 'Soạn sách vở và đồ dùng theo thời khóa biểu ngày mai',
      icon: '🎒',
      dur: '10 - 15 phút',
      objective: 'Rèn thói quen tự giác kiểm tra thời khóa biểu mỗi tối, chuẩn bị đầy đủ sách vở, dụng cụ học tập để luôn chủ động, tự tin khi đến lớp.',
      situation: 'Tối nay sau khi ăn cơm xong, đồng hồ điểm 8 giờ tối. Ngày mai lớp con có các môn: Toán, Tiếng Việt, Mỹ thuật và Thể dục. Đồ dùng vẽ và giày thể thao vẫn để lung tung chưa tìm thấy, trong khi chương trình hoạt hình yêu thích trên tivi chuẩn bị chiếu. Con sẽ xử lý thế nào?',
      correctKey: 'B',
      hint: 'Chuẩn bị trước từ tối nay giúp sáng mai con thảnh thơi, không cuống cuồng tìm đồ!',
      options: [
        { key: 'A', text: 'Cứ bật tivi xem hoạt hình trước, sáng mai dậy sớm cuống cuồng tìm sau.', isCorrect: false, feedback: '💡 Sáng mai con sẽ rất vội vàng, dễ tìm không thấy màu vẽ hoặc giày thể thao, dẫn đến đi học muộn và bị cô giáo nhắc nhở đấy!' },
        { key: 'B', text: 'Mở thời khóa biểu, xếp đủ sách vở Toán, Tiếng Việt, tìm sẵn hộp màu và giày thể thao cho vào cặp gọn gàng trước khi giải trí.', isCorrect: true, feedback: '🎉 Hoan hô! Con lựa chọn vô cùng thông minh và tự giác! Chuẩn bị trước giúp con ngủ ngon và sáng mai tự tin đến lớp.' },
        { key: 'C', text: 'Nhờ ba mẹ hoặc anh chị tìm và soạn hộ tất cả sách vở vì con đang bận xem tivi.', isCorrect: false, feedback: '💡 Việc học là của chính con! Nhờ người khác làm hộ khiến con không nhớ đồ của mình và tạo thành thói quen ỷ lại.' },
        { key: 'D', text: 'Chỉ mang mỗi sách Toán và Tiếng Việt, còn môn Mỹ thuật và Thể dục quên thì đến lớp mượn tạm bạn.', isCorrect: false, feedback: '💡 Không nên đâu con nhé! Đến giờ học mà không có đồ dùng sẽ làm phiền bạn và con không thể tham gia tiết học trọn vẹn.' }
      ],
      keyTakeaway: 'Sách vở sẵn sàng - Sáng mai vững vàng - Tự tin tới lớp!',
      summary: 'Tự giác soạn sách vở theo thời khóa biểu mỗi tối giúp con hình thành tính cẩn thận, kỷ luật và tự lập. Đây là phẩm chất tuyệt vời của học sinh gương mẫu.',
      actionSteps: [
        'Bước 1: Mở thời khóa biểu ngày mai và sổ dặn dò xem có những môn học và bài tập nào.',
        'Bước 2: Xếp sách vở, đồ dùng học tập chuyên môn (màu vẽ, thước kẻ, giày...) vào cặp.',
        'Bước 3: Kéo khóa cặp cẩn thận và đặt ở góc học tập quen thuộc.'
      ],
      parentTip: 'Khuyến khích con dán thời khóa biểu ngay trước bàn học. Ban đầu ba mẹ có thể đứng cạnh quan sát và khen ngợi tính tự giác của con thay vì làm thay con.'
    },
    {
      title: 'Tự giác ngồi vào bàn học bài đúng giờ quy định',
      icon: '⏰',
      dur: '12 - 15 phút',
      objective: 'Rèn luyện khả năng quản lý thời gian, hình thành đồng hồ sinh học tự giác học tập mỗi ngày mà không cần người lớn phải nhắc nhở.',
      situation: 'Đã 7 giờ 30 tối, đúng khung giờ học bài hàng ngày con đã hẹn với ba mẹ. Nhưng con đang dở một trò chơi ghép hình lego rất cuốn hút và chỉ còn vài mảnh nữa là xong. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Người thành công luôn biết ưu tiên việc quan trọng trước việc vui chơi giải trí!',
      options: [
        { key: 'A', text: 'Cố ngồi chơi tiếp cho đến khi hoàn thành xong cả bộ ghép hình, mặc kệ giờ giấc.', isCorrect: false, feedback: '💡 Chơi quá giờ sẽ khiến con thức khuya, sáng mai dậy mệt mỏi và làm bài tập vội vàng không đạt kết quả tốt.' },
        { key: 'B', text: 'Vừa mang sách vở ra sàn nhà vừa ghép hình vừa làm bài cùng một lúc.', isCorrect: false, feedback: '💡 Làm hai việc cùng lúc sẽ khiến con mất tập trung, bài tập dễ bị sai sót và chơi cũng không trọn vẹn.' },
        { key: 'C', text: 'Tạm dừng trò chơi, cất gọn lego vào khay, ngồi ngay ngắn vào bàn học đúng giờ và tự nhủ sau khi xong bài sẽ chơi tiếp.', isCorrect: true, feedback: '🎉 Tuyệt vời! Con biết làm chủ bản thân và ưu tiên việc học tập đúng giờ. Đó là phẩm chất của một học sinh rất bản lĩnh và trách nhiệm!' },
        { key: 'D', text: 'Đợi đến khi ba mẹ đi vào phòng nhắc nhở hoặc quát mắng mới bực bội đi vào bàn học.', isCorrect: false, feedback: '💡 Đợi bị nhắc nhở sẽ khiến không khí gia đình căng thẳng và con bắt đầu buổi học với tâm lý không vui, khó tiếp thu bài.' }
      ],
      keyTakeaway: 'Đúng giờ học tập - Nề nếp chuyên cần - Tương lai rộng mở!',
      summary: 'Kỷ luật bản thân bắt đầu từ việc ngồi vào bàn học đúng giờ. Khi con tập trung hoàn thành sớm bài tập, con sẽ có thời gian thoải mái vui chơi mà không lo lắng.',
      actionSteps: [
        'Bước 1: Nhìn đồng hồ hoặc đặt chuông nhắc trước giờ học 5 phút.',
        'Bước 2: Dọn dẹp đồ chơi, cất gọn gàng và chuẩn bị nước uống mang vào bàn học.',
        'Bước 3: Ngồi thẳng lưng, bật đèn đủ sáng và bắt đầu bài học với tinh thần hào hứng.'
      ],
      parentTip: 'Xây dựng cho con một góc học tập yên tĩnh, hạn chế tiếng ồn từ tivi hay điện thoại trong khung giờ học của con.'
    },
    {
      title: 'Quản lý thời gian học tập bằng phương pháp Pomodoro 25 phút',
      icon: '⏱️',
      dur: '15 - 20 phút',
      objective: 'Giúp học sinh rèn luyện khả năng tập trung cao độ trong từng khoảng thời gian ngắn (25 phút tập trung, 5 phút nghỉ ngơi) để học bài hiệu quả mà không bị mỏi mệt.',
      situation: 'Hôm nay con có một bài văn và hai bài toán cần giải. Khi mới ngồi học được 10 phút, con thấy hơi chán và mắt cứ liếc nhìn chiếc đồng hồ thông minh hoặc muốn đứng dậy lục tủ lạnh tìm đồ ăn vặt. Con sẽ làm gì?',
      correctKey: 'A',
      hint: 'Tập trung hết mình trong 25 phút rồi mới nghỉ ngơi sẽ giúp não bộ con thông minh và làm bài cực nhanh!',
      options: [
        { key: 'A', text: 'Tự nhủ kiên nhẫn học hết 25 phút của khung giờ Pomodoro, sau đó mới bấm chuông nghỉ giải lao 5 phút ăn nhẹ.', isCorrect: true, feedback: '🎉 Quá xuất sắc! Con đã chiến thắng sự xao nhãng! Tập trung 25 phút giúp con giải quyết bài tập nhanh gấp đôi đấy.' },
        { key: 'B', text: 'Đứng dậy đi quanh nhà, mở tủ lạnh tìm đồ ăn rồi ra phòng khách ngó nghiêng tivi một lát.', isCorrect: false, feedback: '💡 Đứng dậy giữa chừng sẽ làm mạch suy nghĩ bị đứt đoạn, con sẽ mất rất nhiều thời gian để tập trung lại từ đầu.' },
        { key: 'C', text: 'Vừa học vừa bật nhạc nhảy sôi động và mở thêm video hài để xem cho đỡ chán.', isCorrect: false, feedback: '💡 Xem video hài khi học sẽ khiến não bộ bị phân tán, con sẽ làm sai bài toán và mất gấp ba lần thời gian bình thường.' },
        { key: 'D', text: 'Bỏ dở bài tập, quyết định ngày mai đến lớp chép bài của bạn cho nhanh.', isCorrect: false, feedback: '💡 Chép bài của bạn là hành vi thiếu trung thực và khiến con không hiểu bài, con sẽ bị hổng kiến thức khi thi cử.' }
      ],
      keyTakeaway: '25 phút tập trung - 5 phút thư giãn - Năng suất gấp đôi!',
      summary: 'Phương pháp Pomodoro dạy cho con bí quyết tập trung đỉnh cao: Khi học thì tập trung 100%, khi nghỉ thì thư giãn thoải mái. Nhờ đó, việc học trở nên nhẹ nhàng và thú vị hơn rất nhiều.',
      actionSteps: [
        'Bước 1: Chọn một nhiệm vụ bài tập cụ thể và bấm hẹn giờ 25 phút.',
        'Bước 2: Loại bỏ mọi thứ gây mất tập trung (đồ chơi, tivi), tập trung làm bài.',
        'Bước 3: Khi chuông reo, nghỉ ngơi 5 phút (uống nước, vươn vai) rồi mới tiếp tục.'
      ],
      parentTip: 'Phụ huynh có thể trang bị cho con một chiếc đồng hồ quả cà chua Pomodoro cơ học nhỏ để con hào hứng canh giờ tự lập.'
    },
    {
      title: 'Tự chuẩn bị đồng phục, khăn quàng đỏ và giày dép đi học',
      icon: '👔',
      dur: '10 - 12 phút',
      objective: 'Giúp học sinh rèn nếp sống gọn gàng, tự chủ trang phục học sinh chỉn chu và luôn xuất hiện lịch sự, tự tin tại trường.',
      situation: 'Sáng mai là thứ Hai đầu tuần, trường có buổi lễ chào cờ trang trọng. Quy định toàn trường là mặc đồng phục áo trắng, quần/váy xanh, đeo khăn quàng đỏ và đi giày bata. Tối Chủ Nhật trước khi đi ngủ, con sẽ làm gì?',
      correctKey: 'D',
      hint: 'Chuẩn bị từ tối hôm trước giúp con sáng thứ Hai không phải hốt hoảng tìm khăn quàng hay tất!',
      options: [
        { key: 'A', text: 'Cứ để sáng mai thức dậy rồi vào tủ lục tung quần áo tìm đồ sau.', isCorrect: false, feedback: '💡 Sáng thứ Hai thường rất vội, nếu áo bị nhăn hoặc khăn quàng bị thất lạc, con sẽ đi học muộn và bị sao đỏ ghi tên đấy!' },
        { key: 'B', text: 'Mặc sẵn bộ đồ ngủ đi học luôn cho tiện, không cần đồng phục.', isCorrect: false, feedback: '💡 Đồ ngủ không phải trang phục học sinh! Đến trường con cần mặc đồng phục trang nghiêm theo đúng nội quy nhà trường.' },
        { key: 'C', text: 'Giao toàn bộ việc tìm quần áo, ủi đồ và tìm giày cho mẹ, sáng mai mẹ đưa gì mặc nấy.', isCorrect: false, feedback: '💡 Con đã là học sinh tiểu học rồi, tự chuẩn bị trang phục của mình sẽ giúp mẹ đỡ vất vả và con tự lập hơn.' },
        { key: 'D', text: 'Tự là/treo ngay ngắn đồng phục, xếp sẵn khăn quàng đỏ, đôi tất sạch và đặt giày bata ngay cửa ra vào từ tối Chủ Nhật.', isCorrect: true, feedback: '🎉 Quá tuyệt vời! Con là một học sinh rất chỉn chu, nề nếp! Sáng mai con sẽ có khởi đầu tuần mới thật tự tin và rạng rỡ.' }
      ],
      keyTakeaway: 'Đồng phục phẳng phiu - Khăn quàng thắm đỏ - Tự hào học sinh!',
      summary: 'Tự tay chuẩn bị trang phục đi học thể hiện lòng tự trọng, sự tôn trọng thầy cô và mái trường. Khi con gọn gàng sạch sẽ, ai nhìn vào cũng yêu mến.',
      actionSteps: [
        'Bước 1: Kiểm tra lịch tuần xem có ngày nào cần đồng phục đặc biệt (chào cờ, thể dục).',
        'Bước 2: Chuẩn bị đủ: áo, quần/váy, khăn quàng đỏ, thẻ học sinh và tất sạch.',
        'Bước 3: Treo lên móc hoặc xếp gọn gàng để sáng mai mặc ngay trong 2 phút.'
      ],
      parentTip: 'Dạy con cách gấp khăn quàng hình tam giác và thắt khăn quàng đúng chuẩn Đội Thiếu niên Tiền phong để con tự tin thực hành.'
    },
    {
      title: 'Giữ gìn góc học tập tại nhà ngăn nắp và đủ ánh sáng',
      icon: '📐',
      dur: '12 - 15 phút',
      objective: 'Rèn luyện tính ngăn nắp, biết tổ chức không gian sống sạch đẹp, tạo nguồn cảm hứng và bảo vệ thị lực khi học tập.',
      situation: 'Sau khi làm xong bài tập môn Thủ công cắt dán, trên bàn học của con đầy giấy vụn, hồ dán dính trên mặt bàn, sách vở và bút chì màu nằm ngổn ngang. Con đã thấy buồn ngủ. Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Bàn học bừa bộn sẽ làm con ngày mai học bài cảm thấy khó chịu và dễ thất lạc dụng cụ!',
      options: [
        { key: 'A', text: 'Cứ để nguyên như vậy trên bàn rồi đi ngủ, mai tính sau.', isCorrect: false, feedback: '💡 Hồ dán để qua đêm sẽ khô cứng dính chặt vào bàn rất khó lau, giấy vụn bay lung tung và sáng mai bàn học rất luộm thuộm.' },
        { key: 'B', text: 'Dành 3-5 phút dọn sạch giấy vụn vào thùng rác, đậy nắp hồ dán, cắm bút vào lọ và xếp sách vở ngay ngắn rồi mới đi ngủ.', isCorrect: true, feedback: '🎉 Con thật ngoan và ngăn nắp! Một bàn học sạch sẽ giúp không gian phòng thoáng đãng và sáng mai con có tâm trạng sảng khoái để học tiếp.' },
        { key: 'C', text: 'Gạt hết tất cả giấy vụn và bút thước xuống gầm bàn cho nhanh khuất mắt.', isCorrect: false, feedback: '💡 Gạt xuống sàn sẽ làm phòng ngủ bị bẩn, bút rơi có thể bị gãy ngòi và chân dẫm phải sẽ đau đấy con nhé.' },
        { key: 'D', text: 'Gọi mẹ vào dọn dẹp hộ vì con bảo con làm thủ công rất mệt rồi.', isCorrect: false, feedback: '💡 Ai bày ra người đó phải dọn dẹp! Đó là nguyên tắc vàng của người tự lập và có trách nhiệm với đồ đạc của mình.' }
      ],
      keyTakeaway: 'Góc học tập sáng ngăn nắp - Trí tuệ sáng ngời!',
      summary: 'Bàn học chính là người bạn đồng hành của con mỗi ngày. Giữ bàn học gọn gàng, lau chùi sạch sẽ và đủ ánh sáng sẽ giúp con học nhanh hơn và mắt luôn sáng khỏe.',
      actionSteps: [
        'Bước 1: Phân loại đồ: rác bỏ thùng rác, bút cắm vào ống, sách xếp vào giá.',
        'Bước 2: Lau sạch mặt bàn bằng khăn ẩm, không để vết mực hay hồ dán bám dính.',
        'Bước 3: Tắt đèn bàn học và đẩy ghế sát vào gầm bàn khi kết thúc buổi học.'
      ],
      parentTip: 'Cùng con trang trí một chậu cây nhỏ hoặc dán một câu châm ngôn tích cực ở góc học tập để tăng thêm cảm hứng học tập cho bé.'
    },
    {
      title: 'Tự thức dậy khi chuông báo thức reo và gấp chăn màn',
      icon: '🛏️',
      dur: '10 phút',
      objective: 'Tập cho bé thói quen thức dậy đúng giờ với chuông báo thức, tự giác gấp chăn gối gọn gàng, bắt đầu ngày mới năng động và không phụ thuộc vào người khác.',
      situation: 'Sáng sớm 6 giờ, chuông đồng hồ báo thức của con reo vang bài hát vui nhộn. Trời mùa đông se lạnh và chiếc chăn đang rất ấm áp. Con cảm thấy mắt còn hơi buồn ngủ. Con sẽ làm gì?',
      correctKey: 'A',
      hint: 'Quy tắc 5 giây: Đếm 5-4-3-2-1 rồi bật dậy ngay sẽ xua tan cơn lười biếng!',
      options: [
        { key: 'A', text: 'Tắt chuông báo thức, hít thở sâu, đếm 1-2-3 bật dậy vươn vai, mở rèm cửa đón ánh sáng và gấp chăn gối phẳng phiu.', isCorrect: true, feedback: '🎉 Con là chiến binh buổi sáng dũng cảm! Vượt qua cơn buồn ngủ giúp con làm chủ ngày mới tràn đầy năng lượng và tự hào.' },
        { key: 'B', text: 'Thò tay bấm nút tắt báo thức rồi trùm chăn ngủ tiếp thêm 30 phút nữa.', isCorrect: false, feedback: '💡 Ngủ cố thêm sẽ khiến con vào giấc ngủ sâu lại, khi bị gọi dậy sẽ rất uể oải, muộn giờ ăn sáng và đi học muộn.' },
        { key: 'C', text: 'Nằm trên giường chờ đến khi ba mẹ vào gọi 3-4 lần và kéo chăn ra mới chịu dậy.', isCorrect: false, feedback: '💡 Để ba mẹ phải giục nhiều lần sẽ làm ba mẹ mệt mỏi và con đánh mất cơ hội rèn luyện tính tự lập của bản thân.' },
        { key: 'D', text: 'Bật dậy nhảy ngay xuống giường chạy đi chơi, để chăn gối vo tròn thành một đống bừa bãi.', isCorrect: false, feedback: '💡 Chiếc giường lộn xộn sẽ làm phòng ngủ trông rất xấu xí. Gấp chăn màn gọn gàng chỉ mất 1 phút nhưng thể hiện con là người văn minh!' }
      ],
      keyTakeaway: 'Chuông reo dậy ngay - Gấp chăn ngay ngắn - Một ngày tươi vui!',
      summary: 'Cách con bắt đầu buổi sáng quyết định cả ngày của con. Thức dậy đúng giờ và gấp chăn gối là chiến thắng đầu tiên trong ngày của một học sinh tự giác.',
      actionSteps: [
        'Bước 1: Khi chuông reo, tắt chuông và ngồi dậy ngay, không nằm nấn ná.',
        'Bước 2: Trải phẳng ga giường, gấp chăn thành hình chữ nhật gọn gàng và xếp gối ngăn nắp.',
        'Bước 3: Uống một ngụm nước ấm và vào nhà vệ sinh đánh răng rửa mặt chuẩn bị ngày mới.'
      ],
      parentTip: 'Để đồng hồ báo thức cách xa giường một chút để con buộc phải bước chân ra khỏi giường mới tắt được chuông, tránh tắt đi ngủ lại.'
    },
    {
      title: 'Hoàn thành bài tập về nhà trước khi xem tivi hoặc chơi game',
      icon: '📝',
      dur: '15 phút',
      objective: 'Xây dựng nguyên tắc "Làm xong bài mới chơi", giúp học sinh có tinh thần trách nhiệm với nhiệm vụ học tập của mình.',
      situation: 'Chiều thứ Sáu tan học về nhà, bạn hàng xóm rủ con sang chơi máy chơi game thế hệ mới cực hay. Nhưng cô giáo chủ nhiệm có giao 3 bài toán luyện tập cuối tuần. Con sẽ xử lý thế nào?',
      correctKey: 'C',
      hint: 'Chơi game sau khi đã xong bài tập sẽ cảm thấy cực kỳ thoải mái và không lo bị nhắc nhở!',
      options: [
        { key: 'A', text: 'Chạy sang nhà bạn chơi game cả chiều, tối chơi tiếp, để mặc bài tập đến tối Chủ Nhật mới làm vội.', isCorrect: false, feedback: '💡 Để bài đến tối Chủ Nhật con sẽ phải làm trong lo sợ, mệt mỏi và có thể làm ẩu làm sai hết bài tập.' },
        { key: 'B', text: 'Sang nhà bạn chơi trước 1 tiếng, sau đó về nhà vừa xem tivi vừa làm bài cho nhanh.', isCorrect: false, feedback: '💡 Chơi game rất dễ bị cuốn và quên giờ giấc. Khi về nhà con sẽ mệt mỏi và không còn tinh thần tập trung giải toán.' },
        { key: 'C', text: 'Lịch sự hẹn bạn: "Mình hoàn thành xong 3 bài toán này rồi 4 giờ chiều mình sang chơi cùng bạn nhé!".', isCorrect: true, feedback: '🎉 Con ứng xử vô cùng thông minh và chuẩn mực! Hoàn thành trách nhiệm trước giúp con chơi game với tinh thần hoàn toàn vui vẻ và thảnh thơi.' },
        { key: 'D', text: 'Nói dối ba mẹ là cô giáo không giao bài tập nào rồi sang nhà bạn chơi thoải mái.', isCorrect: false, feedback: '💡 Nói dối là điều rất xấu! Cô giáo và ba mẹ sẽ phát hiện ra và con sẽ đánh mất niềm tin của mọi người.' }
      ],
      keyTakeaway: 'Bài vở tinh tươm - Vui chơi trọn vẹn - Không lo thấp thỏm!',
      summary: 'Người thông minh luôn hoàn thành nghĩa vụ trước khi tận hưởng niềm vui. Khi bài tập đã xong xuôi, con có thể tự hào vui chơi mà trong lòng nhẹ tênh.',
      actionSteps: [
        'Bước 1: Mở sổ dặn dò kiểm tra kỹ các bài tập cần làm.',
        'Bước 2: Ngồi vào bàn giải quyết dứt điểm các bài tập theo độ khó từ dễ đến khó.',
        'Bước 3: Soát lại bài một lượt, cất vào cặp rồi thoải mái xin phép ba mẹ đi chơi.'
      ],
      parentTip: 'Khen ngợi nỗ lực tự giác của con bằng cách thưởng cho con thêm thời gian vận động ngoài trời hoặc một trò chơi bổ ích sau khi hoàn thành bài.'
    },
    {
      title: 'Kỹ năng ghi chép sổ dặn dò và theo dõi hạn nộp bài',
      icon: '📒',
      dur: '10 phút',
      objective: 'Rèn luyện thói quen ghi chú cẩn thận, theo dõi công việc bằng sổ tay học sinh để không bao giờ bị sót bài tập hay thông báo của nhà trường.',
      situation: 'Cuối tiết học cuối cùng, trước giờ ra về, cô giáo đọc dặn dò các bài tập về nhà và thông báo ngày mai phải nộp tiền bảo hiểm. Tiếng chuông reo và các bạn đang vội cất cặp đi về. Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Một mẩu bút chì cùn còn hơn một trí nhớ siêu phàm, hãy ghi chép cẩn thận!',
      options: [
        { key: 'A', text: 'Cứ nghe qua loa rồi nhét sách vào cặp chạy về, tự tin rằng mình sẽ nhớ hết trong đầu.', isCorrect: false, feedback: '💡 Về đến nhà con sẽ mải chơi và quên sạch các chi tiết, không nhớ cô dặn trang nào hay ngày mai cần nộp gì.' },
        { key: 'B', text: 'Mở ngay cuốn sổ dặn dò, ghi chép nắn nót từng mục cô dặn và đánh dấu việc cần nộp ngày mai trước khi đứng dậy ra về.', isCorrect: true, feedback: '🎉 Rất chuyên nghiệp và cẩn thận! Ghi chép rõ ràng là kỹ năng của một học sinh xuất sắc và tự lập.' },
        { key: 'C', text: 'Không thèm nghe, tối về nhắn tin lên nhóm hỏi bạn xem cô dặn gì.', isCorrect: false, feedback: '💡 Hỏi bạn làm phiền thời gian học của bạn và đôi khi bạn nhớ nhầm thì con cũng sẽ làm sai theo bạn đấy.' },
        { key: 'D', text: 'Viết nguệch ngoạc lên mặt bàn học của lớp rồi hôm sau đến lớp xem lại.', isCorrect: false, feedback: '💡 Vẽ bậy lên bàn là vi phạm nội quy bảo vệ của công và về nhà con đâu thể xem bàn học ở trường được!' }
      ],
      keyTakeaway: 'Sổ tay dặn dò - Ghi chép rõ ràng - Không lo quên việc!',
      summary: 'Cuốn sổ dặn dò là chiếc la bàn giúp con quản lý việc học hiệu quả. Thói quen ghi chép cẩn thận từ nhỏ sẽ giúp con trở thành người làm việc có kế hoạch và uy tín.',
      actionSteps: [
        'Bước 1: Luôn để sổ dặn dò ở ngăn dễ lấy nhất trong cặp sách.',
        'Bước 2: Lắng nghe cô dặn và ghi chép ngắn gọn, đủ ý: Tên môn, bài tập, trang sách, hạn nộp.',
        'Bước 3: Về nhà mở sổ ra đối chiếu và tích dấu tick khi hoàn thành từng việc.'
      ],
      parentTip: 'Hàng ngày ba mẹ hãy cùng con ký sổ dặn dò sau khi con đã tự hoàn thành và tích kiểm tra các mục.'
    },
    {
      title: 'Tự gọt bút chì, kiểm tra mực bút và chuẩn bị đồ dùng học tập',
      icon: '✏️',
      dur: '10 phút',
      objective: 'Giúp học sinh biết chăm sóc dụng cụ học tập của mình, rèn luyện sự khéo léo, cẩn thận và sẵn sàng cho các giờ viết trên lớp.',
      situation: 'Tối nay kiểm tra hộp bút, con thấy cả 3 cây bút chì đều bị cùn và gãy ngòi, bút mực thì gần cạn mực, cục tẩy bị dính bẩn. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Đồ dùng học tập sẵn sàng sẽ giúp con viết bài trôi chảy và đẹp mắt!',
      options: [
        { key: 'A', text: 'Cứ để nguyên như vậy, ngày mai đến lớp mượn gọt bút của bạn hoặc nhờ cô gọt hộ.', isCorrect: false, feedback: '💡 Trong giờ học làm vậy sẽ gây mất trật tự lớp học và làm phiền cô giáo cùng các bạn xung quanh.' },
        { key: 'B', text: 'Dùng tay bẻ gãy ngòi chì luôn rồi vứt đi, đòi ba mẹ mua ngay bộ bút chì mới đắt tiền hơn.', isCorrect: false, feedback: '💡 Như vậy là lãng phí và không biết trân trọng đồ dùng học tập của mình con nhé.' },
        { key: 'C', text: 'Lấy gọt bút chì tự gọt nhọn vừa phải, gom vỏ chì vào sọt rác, bơm đầy mực hoặc thay ống mực mới, cất gọn vào hộp bút.', isCorrect: true, feedback: '🎉 Con thật khéo tay và chu đáo! Một hộp bút tinh tươm với những cây bút sắc nét sẽ giúp chữ viết của con đẹp hơn nhiều.' },
        { key: 'D', text: 'Nhờ ba hoặc mẹ gọt bút và bơm mực hộ vì con sợ bị bẩn tay.', isCorrect: false, feedback: '💡 Con hoàn toàn có thể tự làm được! Rửa tay sau khi bơm mực là sạch ngay, tự làm đồ của mình mới thực sự tự lập.' }
      ],
      keyTakeaway: 'Bút mực tinh tươm - Ngòi chì sắc nét - Nét chữ nết người!',
      summary: 'Biết chăm sóc đồ dùng học tập là bước đầu tiên để học sinh tôn trọng con chữ và tri thức. Cây bút được chuẩn bị chu đáo sẽ mang lại cho con những trang vở sạch đẹp điểm mười.',
      actionSteps: [
        'Bước 1: Kiểm tra đầu ngòi của các bút chì và lượng mực của bút mực mỗi tối.',
        'Bước 2: Gọt bút chì vừa tầm, không gọt quá nhọn dễ gãy; bơm mực cẩn thận không để vương vãi.',
        'Bước 3: Lau sạch vỏ bút và xếp ngay ngắn vào hộp bút vải mềm.'
      ],
      parentTip: 'Hướng dẫn con cách cầm máy gọt chì quay tay an toàn và cách dùng khăn giấy lót khi bơm mực để giữ vệ sinh.'
    },
    {
      title: 'Bảo quản cặp sách nhẹ gọn: Bỏ bớt sách vở không cần thiết',
      icon: '📚',
      dur: '10 - 12 phút',
      objective: 'Bảo vệ cột sống học sinh khỏi tình trạng gù lưng do mang cặp quá nặng; hình thành kỹ năng sàng lọc đồ dùng khoa học.',
      situation: 'Cặp sách của con nặng trĩu vì chứa cả truyện tranh, đồ chơi mang từ hôm trước, sách của cả tuần chưa dọn ra và các chai lọ linh tinh. Khi đeo cặp lên vai con cảm thấy đau vai và lưng bị còng xuống. Con sẽ làm gì?',
      correctKey: 'A',
      hint: 'Chỉ mang những gì ngày mai học, bỏ lại những đồ không cần thiết ở nhà!',
      options: [
        { key: 'A', text: 'Bỏ hết đồ ra ngoài, chỉ giữ lại đúng sách vở của ngày mai theo thời khóa biểu, để truyện tranh và đồ chơi ở nhà.', isCorrect: true, feedback: '🎉 Rất thông minh và khoa học! Chiếc cặp nhẹ nhàng sẽ giúp con đi lại thoăn thoắt, giữ cho lưng thẳng và dáng đi khỏe khoắn.' },
        { key: 'B', text: 'Cứ để tất cả mọi thứ trong cặp để đỡ phải dọn, nặng thì nhờ ba mẹ xách hộ từ cổng vào lớp.', isCorrect: false, feedback: '💡 Ba mẹ không thể đi theo xách cặp vào tận lớp cho con mãi được. Tự làm nhẹ cặp là bảo vệ chính sức khỏe của con.' },
        { key: 'C', text: 'Bỏ hết sách vở học ở nhà, chỉ mang mỗi đồ chơi và truyện tranh đến lớp.', isCorrect: false, feedback: '💡 Đến lớp để học tập chứ không phải để đọc truyện tranh hay chơi đồ chơi con nhé! Không có sách vở con sẽ không học được.' },
        { key: 'D', text: 'Bực bội vứt cặp xuống đất và không chịu đi học vì cặp quá nặng.', isCorrect: false, feedback: '💡 Cáu kỉnh không giải quyết được vấn đề! Chỉ cần bỏ ra 3 phút dọn bớt đồ là chiếc cặp sẽ nhẹ bẫng ngay.' }
      ],
      keyTakeaway: 'Cặp sách nhẹ êm - Vai ngay lưng thẳng - Tự tin bước nhanh!',
      summary: 'Một chiếc cặp sách chuẩn y khoa không nên nặng quá 10% trọng lượng cơ thể học sinh. Thường xuyên dọn dẹp cặp giúp con rèn luyện tư duy tinh gọn và bảo vệ sức khỏe lâu dài.',
      actionSteps: [
        'Bước 1: Đổ toàn bộ đồ trong cặp ra giường hoặc thảm sạch một tuần một lần.',
        'Bước 2: Phân loại: Sách ngày mai cất vào cặp; sách cũ cất lên giá; giấy rác bỏ đi.',
        'Bước 3: Kiểm tra cân nặng cặp: cảm thấy nhẹ nhàng, vừa vặn với bờ vai.'
      ],
      parentTip: 'Khuyên phụ huynh chọn cho con loại cặp chống gù có đai trợ lực ngực và hông, hướng dẫn con cách chia đều sách nặng sát lưng.'
    },
    {
      title: 'Tự bảo quản đồ dùng cá nhân: Không làm rơi mất bút, tẩy, thước',
      icon: '📏',
      dur: '10 phút',
      objective: 'Rèn luyện tính cẩn thận, ý thức trân trọng của cải và tiết kiệm, không làm rơi rớt hay thất lạc đồ dùng học tập.',
      situation: 'Trong giờ ra chơi, con và các bạn chơi đùa quanh lớp học. Khi vào tiết học tiếp theo, con nhìn xuống bàn và không thấy hộp bút cùng cục tẩy gọt chì của mình đâu nữa. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Dùng xong cất ngay vào hộp bút là bí quyết số một để đồ đạc không bao giờ thất lạc!',
      options: [
        { key: 'A', text: 'Mặc kệ, về nhà bảo ba mẹ mua cho hộp bút mới to hơn, đẹp hơn.', isCorrect: false, feedback: '💡 Đồ dùng mua bằng tiền mồ hôi công sức của ba mẹ, nếu con làm mất liên tục sẽ tạo thói quen cẩu thả và hoang phí.' },
        { key: 'B', text: 'Đổ lỗi cho bạn bên cạnh lấy cắp và to tiếng gây gổ với bạn trong lớp.', isCorrect: false, feedback: '💡 Đổ lỗi cho bạn khi chưa tìm hiểu rõ sẽ làm tổn thương tình bạn và gây xích mích không đáng có.' },
        { key: 'C', text: 'Bình tĩnh tìm quanh ngăn bàn và dưới sàn, đồng thời rèn thói quen: mỗi khi đứng dậy ra chơi phải cất đồ vào hộp bút và kéo khóa cặp.', isCorrect: true, feedback: '🎉 Con xử lý rất điềm đạm và chuẩn mực! Thói quen dùng xong cất ngay là bí quyết giúp con giữ đồ đạc luôn nguyên vẹn suốt cả năm học.' },
        { key: 'D', text: 'Khóc toáng lên giữa lớp để cô giáo và các bạn phải đi tìm hộ.', isCorrect: false, feedback: '💡 Khóc không tìm được đồ dùng con ơi! Hãy giữ bình tĩnh, quan sát kỹ các ngóc ngách hoặc hỏi bạn xung quanh một cách lịch sự.' }
      ],
      keyTakeaway: 'Dùng xong cất ngay - Đúng nơi quy định - Đồ dùng bền lâu!',
      summary: 'Biết gìn giữ đồ dùng cá nhân là biểu hiện của người cẩn thận và biết quý trọng đồng tiền. Đồ dùng sạch đẹp, đầy đủ sẽ giúp con luôn tự tin trong mỗi giờ học.',
      actionSteps: [
        'Bước 1: Dán nhãn tên nhỏ lên từng cây bút, thước kẻ, cục tẩy của mình.',
        'Bước 2: Thiết lập phản xạ: Cầm bút xong là cất ngay vào hộp bút, không để lăn lóc trên mép bàn.',
        'Bước 3: Trước khi ra về, kiểm tra lại mặt bàn và ngăn bàn xem còn sót đồ gì không.'
      ],
      parentTip: 'Khuyên phụ huynh cùng con dán sticker tên con lên đồ dùng để nếu rơi ở trường, các bạn và cô giáo dễ dàng trả lại cho bé.'
    },
    {
      title: 'Tự sắp xếp quần áo cá nhân vào ngăn tủ riêng của mình',
      icon: '👕',
      dur: '12 - 15 phút',
      objective: 'Dạy học sinh kỹ năng gấp quần áo cơ bản, phân loại đồ theo mùa và tự quản lý tủ quần áo của mình gọn gàng.',
      situation: 'Mẹ vừa phơi khô và đem vào cho con một chồng quần áo sạch gồm: áo thun, quần soóc, đồ lót và tất chân. Tủ quần áo của con đang hơi lộn xộn. Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Phân loại đồ theo từng ngăn sẽ giúp con mỗi sáng lấy đồ chỉ mất 10 giây!',
      options: [
        { key: 'A', text: 'Vò tròn toàn bộ quần áo nhét đại vào một góc tủ rồi đóng sập cửa tủ lại.', isCorrect: false, feedback: '💡 Nhét như vậy quần áo sẽ bị nhăn nhúm, ẩm mốc và khi cần tìm một chiếc áo con sẽ phải bới tung cả tủ lên.' },
        { key: 'B', text: 'Gấp phẳng từng chiếc áo, quần, cuộn tròn đôi tất cùng màu và xếp vào đúng các ngăn quy định trong tủ.', isCorrect: true, feedback: '🎉 Bàn tay con thật khéo léo và chăm chỉ! Một ngăn tủ gọn gàng thể hiện con là người có óc tổ chức tuyệt vời và rất thương yêu mẹ.' },
        { key: 'C', text: 'Để nguyên chồng quần áo trên giường để mẹ gấp hộ, mình đi chơi trước.', isCorrect: false, feedback: '💡 Mẹ đã đi làm và nấu ăn rất vất vả rồi, tự gấp quần áo của mình là hành động giúp đỡ mẹ thiết thực nhất.' },
        { key: 'D', text: 'Ném quần áo sạch xuống sàn nhà để chơi trò ném bóng cùng em nhỏ.', isCorrect: false, feedback: '💡 Quần áo sạch vừa giặt xong sẽ bị dính bụi bẩn và vi khuẩn trên sàn, mẹ sẽ phải giặt lại từ đầu rất vất vả.' }
      ],
      keyTakeaway: 'Gấp áo ngay ngắn - Xếp quần thẳng hàng - Tủ đẹp tinh tươm!',
      summary: 'Tự gấp và sắp xếp quần áo rèn luyện tính kiên nhẫn, sự khéo léo của đôi bàn tay và lòng biết ơn đối với công việc nhà của cha mẹ.',
      actionSteps: [
        'Bước 1: Trải áo/quần ra mặt phẳng sạch, vuốt phẳng các nếp nhăn.',
        'Bước 2: Gấp hai tay áo vào trong, gấp đôi theo chiều dọc rồi gấp theo chiều ngang.',
        'Bước 3: Đặt vào ngăn tủ tương ứng: ngăn áo, ngăn quần, ngăn tất riêng biệt.'
      ],
      parentTip: 'Dạy con phương pháp cuộn quần áo kiểu KonMari để tiết kiệm diện tích và giúp con dễ nhìn thấy màu áo mình thích.'
    },
    {
      title: 'Tự biết chuẩn bị áo mưa hoặc ô trong cặp phòng khi trời mưa',
      icon: '☂️',
      dur: '8 - 10 phút',
      objective: 'Tập cho trẻ thói quen quan sát thời tiết, có sự chuẩn bị chu đáo để bảo vệ sức khỏe không bị ướt mưa hay cảm lạnh.',
      situation: 'Sáng nay chuẩn bị đi học, con nhìn qua cửa sổ thấy bầu trời nhiều mây đen, gió thổi mạnh và đài dự báo thời tiết báo chiều nay có mưa rào. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Cẩn tắc vô áy náy - Mang sẵn áo mưa sẽ giúp con luôn khô ráo và an toàn!',
      options: [
        { key: 'A', text: 'Không cần mang gì, mưa thì chạy thật nhanh dưới mưa cho mát.', isCorrect: false, feedback: '💡 Tắm mưa rất dễ bị cảm sốt, viêm phổi và làm ướt hết sách vở trong cặp sách con nhé!' },
        { key: 'B', text: 'Nghĩ rằng ba mẹ sẽ mang ô đến đón tận cửa lớp nên không cần lo lắng gì cả.', isCorrect: false, feedback: '💡 Nếu trời mưa kẹt xe ba mẹ đến muộn thì sao? Tự mình có áo mưa nhỏ sẽ giúp con chủ động bảo vệ bản thân.' },
        { key: 'C', text: 'Chủ động lấy chiếc áo mưa học sinh gấp gọn hoặc chiếc ô gấp bỏ vào ngăn phụ của cặp sách trước khi ra khỏi nhà.', isCorrect: true, feedback: '🎉 Con thật chu đáo và biết quan sát! Chuẩn bị trước như vậy giúp con luôn an toàn và khỏe mạnh trong mọi thời tiết.' },
        { key: 'D', text: 'Xin nghỉ học luôn ở nhà vì sợ trời mưa to làm bẩn giày dép.', isCorrect: false, feedback: '💡 Không nên nghỉ học vì lý do nhỏ như vậy! Chỉ cần trang bị đầy đủ áo mưa là con có thể vững bước đến trường tiếp thu kiến thức.' }
      ],
      keyTakeaway: 'Áo mưa trong cặp - Chẳng ngại gió sương - Khỏe mạnh tới trường!',
      summary: 'Biết dự liệu và chuẩn bị cho những thay đổi của thời tiết là kỹ năng sinh tồn và tự lập quan trọng giúp con không bao giờ rơi vào thế bị động.',
      actionSteps: [
        'Bước 1: Tập thói quen nhìn trời hoặc hỏi người lớn về dự báo thời tiết mỗi sáng.',
        'Bước 2: Gấp gọn áo mưa cá nhân cho vào ngăn đáy hoặc ngăn hông cặp sách.',
        'Bước 3: Sau khi dùng áo mưa về nhà, nhớ phơi khô áo mưa trước khi gấp lại để tránh bị mốc hôi.'
      ],
      parentTip: 'Chọn cho con loại áo mưa cánh dơi hoặc bộ áo mưa có vạt trùm balo chống ướt sách vở và có dải phản quang an toàn khi trời tối.'
    },
    {
      title: 'Tự chuẩn bị bình nước uống cá nhân mang theo đến trường',
      icon: '💧',
      dur: '8 - 10 phút',
      objective: 'Hình thành thói quen uống nước sạch, giữ vệ sinh nguồn nước cá nhân để phòng ngừa bệnh truyền nhiễm đường hô hấp và tiêu hóa.',
      situation: 'Trước khi xỏ giày đi học, bình nước cá nhân của con vẫn còn trống rỗng trên kệ bếp. Bạn rủ con thôi khỏi mang, đến lớp uống chung bình với các bạn hoặc uống vòi nước công cộng. Con sẽ làm gì?',
      correctKey: 'A',
      hint: 'Uống chung nước với người khác rất dễ lây vi khuẩn cảm cúm, hãy dùng bình riêng của mình!',
      options: [
        { key: 'A', text: 'Tráng sạch bình, rót đầy nước lọc đun sôi để nguội từ bình lọc của gia đình, vặn chặt nắp và cài vào bên hông cặp.', isCorrect: true, feedback: '🎉 Con có ý thức vệ sinh và chăm sóc cơ thể tuyệt vời! Mang nước riêng vừa an toàn vệ sinh, vừa giúp cơ thể đủ nước cả ngày.' },
        { key: 'B', text: 'Nghe lời bạn, không mang bình nước để cặp cho nhẹ, khát thì mượn bình bạn uống ghé miệng vào.', isCorrect: false, feedback: '💡 Uống chung bình nước rất dễ lây các bệnh truyền nhiễm như cảm cúm, quai bị, tay chân miệng con nhé!' },
        { key: 'C', text: 'Đòi mẹ cho tiền để đến cổng trường mua nước ngọt có gas hoặc trà sữa uống thay nước lọc.', isCorrect: false, feedback: '💡 Uống nước ngọt có gas và nước ngọt vỉa hè thường xuyên sẽ gây sâu răng, béo phì và không tốt cho dạ dày.' },
        { key: 'D', text: 'Cứ để bình rỗng mang đi, nhịn uống nước cả ngày cho đỡ phải đi vệ sinh ở trường.', isCorrect: false, feedback: '💡 Nhịn uống nước rất nguy hiểm, làm cơ thể bị thiếu nước, mệt mỏi, đau đầu và có hại cho thận.' }
      ],
      keyTakeaway: 'Bình nước cá nhân - Nước sạch mỗi ngày - Tươi tắn học hay!',
      summary: 'Uống đủ nước là chìa khóa để não bộ tập trung và cơ thể khỏe mạnh. Tự chuẩn bị bình nước riêng là thói quen văn minh của học sinh thời đại mới.',
      actionSteps: [
        'Bước 1: Rửa sạch bình nước bằng nước ấm sau mỗi ngày đi học về.',
        'Bước 2: Mỗi sáng lấy nước lọc tinh khiết vào bình khoảng 500ml - 750ml.',
        'Bước 3: Vặn chặt nắp thử xem có rò rỉ không rồi đặt vào túi lưới bên hông cặp.'
      ],
      parentTip: 'Chọn bình nước chất liệu nhựa Tritan an toàn không chứa BPA hoặc bình inox giữ nhiệt có vòi hút tiện lợi cho bé.'
    },
    {
      title: 'Tự dọn dẹp và cất khay ăn bán trú đúng nơi quy định',
      icon: '🍽️',
      dur: '10 phút',
      objective: 'Rèn luyện văn hóa ăn uống văn minh, biết quý trọng hạt cơm người nông dân, giữ vệ sinh phòng ăn bán trú và biết ơn các cô nhà bếp.',
      situation: 'Giờ ăn trưa bán trú tại trường kết thúc, con đã ăn xong suất cơm của mình. Xung quanh bàn ăn có một vài hạt cơm rơi rớt trên bàn, trên khay còn chiếc thìa và khăn giấy ăn đã dùng. Con sẽ làm gì?',
      correctKey: 'D',
      hint: 'Học sinh văn minh luôn để lại bàn ăn sạch sẽ hơn lúc mình mới ngồi vào!',
      options: [
        { key: 'A', text: 'Bỏ mặc khay ăn trên bàn rồi chạy vội ra sân chơi đuổi bắt cùng bạn.', isCorrect: false, feedback: '💡 Để khay ăn bừa bãi sẽ làm các cô bác nhà bếp phải dọn dẹp rất vất vả và làm bàn ăn mất vệ sinh.' },
        { key: 'B', text: 'Dùng thìa gạt toàn bộ cơm thừa và khăn giấy xuống sàn phòng ăn cho nhanh.', isCorrect: false, feedback: '💡 Gạt xuống sàn sẽ làm sàn nhà bị trơn trượt, các bạn khác đi qua có thể bị trượt ngã nguy hiểm.' },
        { key: 'C', text: 'Nhờ bạn bên cạnh bê khay đi cất hộ mình vì mình lười đi bộ.', isCorrect: false, feedback: '💡 Mỗi người phải tự chịu trách nhiệm với khay ăn của mình, không nên đùn đẩy việc riêng cho người khác.' },
        { key: 'D', text: 'Gạt thức ăn thừa vào xô quy định, vứt khăn giấy vào thùng rác, xếp thìa ngay ngắn và bê khay chồng lên giá cất khay gọn gàng.', isCorrect: true, feedback: '🎉 Con là một học sinh cực kỳ văn minh và lịch thiệp! Hành động nhỏ này thể hiện lòng biết ơn sâu sắc đối với các cô bác cấp dưỡng.' }
      ],
      keyTakeaway: 'Ăn hết phần cơm - Dọn khay sạch sẽ - Văn minh học đường!',
      summary: 'Văn hóa bán trú thể hiện ý thức tập thể của học sinh. Tự dọn sạch chỗ ngồi ăn của mình giúp nhà ăn trường học luôn sạch đẹp và ấm cúng.',
      actionSteps: [
        'Bước 1: Ăn hết khẩu phần, hạn chế làm rơi vãi cơm canh ra bàn.',
        'Bước 2: Gom giấy ăn vào thùng rác, gạt thức ăn thừa vào xô thức ăn thừa.',
        'Bước 3: Đặt thìa, đũa vào rổ riêng và xếp khay inox chồng ngay ngắn vào kệ.'
      ],
      parentTip: 'Ở nhà, hãy phân công cho con nhiệm vụ dọn bát đũa của mình và lau bàn ăn sau mỗi bữa cơm gia đình.'
    }
  ],

  'Giao tiếp': [
    {
      title: 'Lễ phép khoanh tay chào thầy cô giáo khi vào trường và ra về',
      icon: '🙇',
      dur: '8 - 10 phút',
      objective: 'Giúp học sinh rèn luyện thái độ tôn sư trọng đạo, hình thành nét đẹp lễ phép và phản xạ chào hỏi tự nhiên đối với người lớn.',
      situation: 'Sáng sớm bước vào cổng trường, con nhìn thấy thầy hiệu trưởng và cô giáo chủ nhiệm đang đứng tươi cười đón học sinh. Một nhóm bạn đi trước con mải nói chuyện nên đi thẳng qua mà không chào. Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Lời chào cao hơn mâm cỗ - Một nụ cười và lời chào lễ phép sẽ làm thầy cô rất vui lòng!',
      options: [
        { key: 'A', text: 'Cúi gằm mặt xuống đất giả vờ không nhìn thấy thầy cô để khỏi phải chào.', isCorrect: false, feedback: '💡 Lảng tránh thầy cô là hành động thiếu tự tin và chưa lễ phép. Thầy cô luôn yêu thương và chào đón con mà!' },
        { key: 'B', text: 'Dừng lại một bước, đứng thẳng người, khoanh hai tay trước ngực, mỉm cười và nói to rõ ràng: "Em chào Thầy, em chào Cô ạ!".', isCorrect: true, feedback: '🎉 Thật đáng khen ngợi! Con là một học sinh ngoan ngoãn và tràn đầy năng lượng tích cực! Lời chào của con làm sáng bừng cả buổi sáng của thầy cô.' },
        { key: 'C', text: 'Vừa chạy vụt qua vừa hét tướng lên một câu rồi phóng thẳng vào lớp.', isCorrect: false, feedback: '💡 Chào hỏi khi đang chạy nhảy và hét lớn trông rất thiếu trang nghiêm và có thể va chạm vào người khác.' },
        { key: 'D', text: 'Chỉ chào khi thầy cô gọi đích danh tên mình, không thì thôi.', isCorrect: false, feedback: '💡 Học sinh nên là người chủ động chào hỏi thầy cô giáo trước để thể hiện lòng kính trọng và lễ phép.' }
      ],
      keyTakeaway: 'Khoanh tay kính cẩn - Nụ cười trên môi - Lễ phép ngoan ngoãn!',
      summary: 'Lời chào là viên gạch đầu tiên xây dựng nhân cách người học sinh. Một đứa trẻ biết cúi đầu chào người lớn sẽ luôn được mọi người yêu quý và chỉ bảo tận tình.',
      actionSteps: [
        'Bước 1: Nhìn thẳng vào thầy cô bằng ánh mắt tôn trọng và nụ cười thân thiện.',
        'Bước 2: Khoanh hai tay ngay ngắn trước ngực, hơi cúi đầu nhẹ.',
        'Bước 3: Nói rõ ràng, âm lượng vừa nghe: "Con/Em chào Thầy/Cô ạ!" cả khi đến và khi ra về.'
      ],
      parentTip: 'Cha mẹ hãy làm gương bằng cách chủ động chào hỏi người lớn tuổi, bác bảo vệ và hàng xóm khi đưa con đi học.'
    },
    {
      title: 'Giơ tay xin phép trước khi phát biểu ý kiến trong lớp học',
      icon: '✋',
      dur: '10 phút',
      objective: 'Tập cho học sinh thói quen giữ trật tự kỷ luật lớp học, biết chờ đến lượt và tôn trọng không gian phát biểu chung.',
      situation: 'Cô giáo vừa đặt ra một câu đố vui môn Tự nhiên & Xã hội rất thú vị. Con vừa nghĩ ra ngay đáp án đúng và cảm thấy vô cùng hào hứng muốn nói ngay. Trong lớp có nhiều bạn cũng đang xôn xao. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Muốn phát biểu thì phải giơ tay xin phép, không nói leo để giữ trật tự lớp!',
      options: [
        { key: 'A', text: 'Đứng phắt dậy hét to tướng đáp án lên để cô giáo và cả lớp phải nghe thấy mình đầu tiên.', isCorrect: false, feedback: '💡 Nói leo và hét to sẽ phá vỡ trật tự lớp học, làm cô giáo khó chịu và cướp mất cơ hội suy nghĩ của các bạn khác.' },
        { key: 'B', text: 'Nói thầm vào tai bạn bên cạnh để bạn ấy nói hộ mình.', isCorrect: false, feedback: '💡 Hãy tự tin nói lên ý kiến của chính mình con nhé! Đừng ngại ngùng giơ tay phát biểu.' },
        { key: 'C', text: 'Ngồi ngay ngắn, giơ cánh tay phải thẳng đứng, mắt nhìn cô giáo và kiên nhẫn chờ cô gọi tên rồi mới đứng dậy trả lời.', isCorrect: true, feedback: '🎉 Con là một học sinh rất văn minh và hiểu luật lệ lớp học! Sự kiên nhẫn và cử chỉ giơ tay đẹp sẽ được cô giáo đánh giá rất cao.' },
        { key: 'D', text: 'Đập mạnh tay xuống bàn để gây sự chú ý của cô giáo.', isCorrect: false, feedback: '💡 Đập bàn là hành động thô lỗ và gây ồn ào, không phù hợp trong môi trường lớp học tôn nghiêm.' }
      ],
      keyTakeaway: 'Giơ tay ngay ngắn - Chờ lượt phát biểu - Lớp học văn minh!',
      summary: 'Giơ tay xin phép phát biểu thể hiện sự tự chủ và tôn trọng tập thể. Khi mọi người lắng nghe nhau theo lượt, lớp học sẽ trở thành nơi trao đổi tri thức tuyệt vời.',
      actionSteps: [
        'Bước 1: Suy nghĩ kỹ câu trả lời trong đầu trước khi giơ tay.',
        'Bước 2: Cánh tay giơ thẳng, khép các ngón tay, tư thế ngồi thẳng lưng.',
        'Bước 3: Khi được cô gọi, đứng dậy đàng hoàng, nói: "Thưa cô, con xin trả lời..." rõ ràng.'
      ],
      parentTip: 'Trong các buổi trò chuyện gia đình, khuyến khích các con cũng đợi người khác nói xong rồi mới phát biểu ý kiến của mình.'
    },
    {
      title: 'Kỹ năng thuyết trình: Đứng thẳng, nói to rõ ràng trước tập thể',
      icon: '🎤',
      dur: '12 - 15 phút',
      objective: 'Giúp học sinh vượt qua nỗi sợ đám đông, tự tin đứng trước lớp chia sẻ ý tưởng với giọng nói rõ ràng và ánh mắt tự tin.',
      situation: 'Hôm nay đến lượt nhóm con lên bảng thuyết trình về chủ đề "Bảo vệ môi trường". Khi đứng trước cả lớp, nhìn thấy mấy chục ánh mắt đang nhìn mình, con cảm thấy tim đập thình thịch, hai chân hơi run và muốn trốn sau lưng bạn. Con sẽ làm gì?',
      correctKey: 'A',
      hint: 'Hít sâu một hơi, đứng thẳng hai chân và mỉm cười nhìn vào mắt các bạn bè!',
      options: [
        { key: 'A', text: 'Hít một hơi thật sâu, đứng thẳng người, mỉm cười nhìn cả lớp và nói to, dõng dạc câu chào mở đầu.', isCorrect: true, feedback: '🎉 Quá xuất sắc! Hít sâu giúp nhịp tim đập chậm lại và cung cấp oxy lên não. Dáng đứng thẳng giúp con toát lên vẻ tự tin cuốn hút cả lớp.' },
        { key: 'B', text: 'Cúi gằm mặt xuống tờ giấy đọc lí nhí như muỗi kêu để cho nhanh xong chuyện.', isCorrect: false, feedback: '💡 Đọc lí nhí sẽ khiến các bạn bên dưới không nghe thấy gì và bài thuyết trình của nhóm con sẽ không đạt điểm tốt.' },
        { key: 'C', text: 'Vặn vẹo người, liên tục gãi đầu, rung chân và quay lưng về phía khán giả.', isCorrect: false, feedback: '💡 Ngôn ngữ cơ thể bồn chồn sẽ làm người nghe cảm thấy khó chịu. Hãy đứng vững vàng trên hai bàn chân con nhé.' },
        { key: 'D', text: 'Bật khóc và chạy ngay về chỗ ngồi từ chối thuyết trình.', isCorrect: false, feedback: '💡 Đừng bỏ cuộc con ơi! Ai lần đầu đứng trước lớp cũng có chút run sợ, chỉ cần dũng cảm nói câu đầu tiên là con sẽ làm được.' }
      ],
      keyTakeaway: 'Dáng đứng tự tin - Giọng nói dõng dạc - Tỏa sáng trước lớp!',
      summary: 'Thuyết trình tự tin là chìa khóa mở ra cánh cửa lãnh đạo tương lai. Khi con dám cất tiếng nói chia sẻ tri thức, con đang truyền cảm hứng cho tất cả mọi người xung quanh.',
      actionSteps: [
        'Bước 1: Đứng thẳng, hai chân mở rộng bằng vai, hai tay buông tự nhiên hoặc cầm tài liệu ngang ngực.',
        'Bước 2: Quét ánh mắt thân thiện nhìn sang các bạn ở ba phía: trái, giữa và phải.',
        'Bước 3: Nói to hơn bình thường một chút, phát âm tròn vành rõ chữ và kết thúc bằng lời cảm ơn.'
      ],
      parentTip: 'Cho con tập đứng trước gương ở nhà hoặc quay video ngắn cho con xem lại để con tự nhận ra nét đáng yêu và tự tin của mình.'
    },
    {
      title: 'Lắng nghe bạn phát biểu: Không cười cợt hay nói chen ngang',
      icon: '👂',
      dur: '10 - 12 phút',
      objective: 'Dạy học sinh lòng thấu cảm và sự tôn trọng người khác, biết lắng nghe chân thành ngay cả khi bạn phát biểu chưa chính xác.',
      situation: 'Bạn Nam lên bảng trả lời câu hỏi môn Toán. Do quá hồi hộp nên bạn đọc nhầm kết quả phép tính và nói hơi lắp bắp. Một vài bạn ở bàn cuối khúc khích cười trêu chọc bạn. Con sẽ làm gì?',
      correctKey: 'D',
      hint: 'Đặt mình vào vị trí của bạn - Nếu mình là người bị cười trêu thì mình sẽ buồn thế nào?',
      options: [
        { key: 'A', text: 'Cười to hùa theo các bạn và chỉ tay trêu chọc bạn Nam.', isCorrect: false, feedback: '💡 Cười cợt sai lầm của người khác là hành vi bất lịch sự và làm tổn thương sâu sắc lòng tự trọng của bạn.' },
        { key: 'B', text: 'Cắt ngang lời bạn, hét to kết quả đúng lên để chứng tỏ mình giỏi hơn bạn.', isCorrect: false, feedback: '💡 Chen ngang là thiếu tôn trọng. Hãy đợi bạn nói xong và cô giáo cho phép mới bổ sung ý kiến.' },
        { key: 'C', text: 'Lấy đồ chơi ra nghịch vì nghĩ phần phát biểu của bạn không liên quan đến mình.', isCorrect: false, feedback: '💡 Không tập trung lắng nghe sẽ khiến con bỏ lỡ những bài học bổ ích từ việc sửa sai của cô giáo.' },
        { key: 'D', text: 'Giữ trật tự nghiêm túc, hướng ánh mắt khích lệ về phía bạn Nam và vỗ tay động viên khi bạn hoàn thành câu trả lời.', isCorrect: true, feedback: '🎉 Con có một trái tim nhân hậu và phong thái rất cao thượng! Sự cảm thông của con sẽ tiếp thêm dũng khí to lớn cho bạn Nam.' }
      ],
      keyTakeaway: 'Lắng nghe tôn trọng - Không trêu bạn sai - Tình bạn thêm đẹp!',
      summary: 'Biết lắng nghe là phẩm chất của người có học thức và sự tinh tế. Ai trong chúng ta cũng có lúc mắc sai lầm, điều quan trọng là cùng nhau học hỏi và tiến bộ.',
      actionSteps: [
        'Bước 1: Hướng ánh mắt và tư thế về phía người đang phát biểu.',
        'Bước 2: Giữ im lặng tuyệt đối, không làm việc riêng hoặc thì thầm bàn tán.',
        'Bước 3: Ghi nhận ý hay của bạn và góp ý tế nhị nếu được thầy cô yêu cầu nhận xét.'
      ],
      parentTip: 'Dạy con câu ngạn ngữ: "Nói là gieo, nghe là gặt" để con hiểu giá trị của việc chăm chú lắng nghe người khác.'
    },
    {
      title: 'Kỹ năng làm việc nhóm: Biết lắng nghe và hợp tác cùng bạn',
      icon: '🤝',
      dur: '15 phút',
      objective: 'Phát triển kỹ năng hợp tác đồng đội, biết đóng góp ý kiến mang tính xây dựng và tôn trọng sự phân công trong nhóm học tập.',
      situation: 'Trong tiết Hoạt động trải nghiệm, nhóm con gồm 4 bạn được giao vẽ một bức tranh về chủ đề "Ngôi trường mơ ước". Hai bạn trong nhóm tranh cãi gay gắt vì một bạn muốn vẽ lâu đài, một bạn muốn vẽ trường học trên mây. Thời gian sắp hết. Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Làm việc nhóm là tìm tiếng nói chung và kết hợp những ý tưởng sáng tạo lại với nhau!',
      options: [
        { key: 'A', text: 'Bỏ mặc nhóm cãi nhau, tự mình lấy một tờ giấy riêng ngồi vẽ một mình cho đỡ bực.', isCorrect: false, feedback: '💡 Tách nhóm ra một mình sẽ khiến cả nhóm bị trừ điểm tinh thần đồng đội và bài tập không được hoàn thành.' },
        { key: 'B', text: 'Lắng nghe cả hai bạn và gợi ý giải pháp kết hợp: "Hay là chúng mình vẽ một trường học hình lâu đài nằm trên những đám mây ngũ sắc nhé!".', isCorrect: true, feedback: '🎉 Quá xuất sắc! Con có tố chất của một người đội trưởng tài ba! Ý tưởng kết hợp hòa bình giúp nhóm đoàn kết và bài vẽ trở nên độc đáo hơn hẳn.' },
        { key: 'C', text: 'Hùa theo bạn thân của mình để chê bai ý tưởng của bạn còn lại là xấu xí.', isCorrect: false, feedback: '💡 Bè phái chê bai sẽ làm tinh thần nhóm tan vỡ và làm bạn bè tủi thân.' },
        { key: 'D', text: 'Giật lấy hộp màu và tờ giấy vẽ rồi vẽ theo ý mình, không cho ai tham gia.', isCorrect: false, feedback: '💡 Độc đoán ép buộc người khác là tối kỵ trong làm việc nhóm. Nhóm cần sự chung tay của tất cả các thành viên.' }
      ],
      keyTakeaway: 'Hợp tác sẻ chia - Lắng nghe thấu hiểu - Cùng nhau chiến thắng!',
      summary: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao. Khi biết lắng nghe và tôn trọng ý tưởng của nhau, sức mạnh tập thể sẽ tạo nên những điều kỳ diệu.',
      actionSteps: [
        'Bước 1: Bầu nhóm trưởng và phân chia công việc cụ thể rõ ràng cho từng bạn.',
        'Bước 2: Mỗi người lần lượt trình bày ý kiến, không ai được ngắt lời ai.',
        'Bước 3: Thống nhất phương án tối ưu dựa trên biểu quyết và cùng nhau bắt tay hoàn thành.'
      ],
      parentTip: 'Tổ chức các trò chơi gia đình như cùng nhau nấu ăn, cùng nhau xếp lego để con rèn luyện thói quen phối hợp với mọi người.'
    }
  ]
};

// Hàm phụ trợ tự động sinh nội dung cho các kỹ năng còn lại
function generatePillarFallbacks(pillar, currentId, iteration) {
  const pillarIcons = {
    'Cảm xúc': '💖',
    'An toàn': '🛡️',
    'Tài chính': '🪙',
    'Vệ sinh': '🧼',
    'Tư duy': '🧠',
    'Xã hội': '🌱',
    'Tự lập': '🎒',
    'Giao tiếp': '💬'
  };

  const defaultTemplates = {
    'Cảm xúc': {
      title: 'Nhận diện và điều hòa cảm xúc trong cuộc sống học đường',
      objective: 'Giúp học sinh hiểu rõ cảm xúc của bản thân, giữ bình tĩnh trước khó khăn và lan tỏa năng lượng tích cực.',
      situation: 'Khi con gặp phải một chuyện buồn hoặc bị bạn bè trêu chọc ở trường, con cảm thấy ngực nóng ran và muốn khóc òa lên hoặc hét thật to. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Hít thở sâu 3 nhịp và chia sẻ với người đáng tin cậy sẽ giúp con nhẹ lòng ngay!',
      options: [
        { key: 'A', text: 'Hét toáng lên và đập phá đồ đạc xung quanh cho bõ tức.', isCorrect: false, feedback: '💡 Đập phá đồ đạc sẽ làm tổn thương bản thân, hỏng đồ dùng và làm mọi người hoảng sợ.' },
        { key: 'B', text: 'Giữ kín trong lòng, căm ghét mọi người và không nói chuyện với ai.', isCorrect: false, feedback: '💡 Dồn nén cảm xúc tiêu cực sẽ làm con đau đầu, mệt mỏi và không tập trung học tập được.' },
        { key: 'C', text: 'Hít sâu thở chậm 4 nhịp, uống một cốc nước mát và tâm sự chân thành với thầy cô hoặc ba mẹ.', isCorrect: true, feedback: '🎉 Con thật thông minh và bản lĩnh! Điều hòa cảm xúc bằng hơi thở và sự chia sẻ là bí quyết của người trưởng thành.' },
        { key: 'D', text: 'Đổ lỗi cho bạn bên cạnh và tìm cách trả đũa bạn.', isCorrect: false, feedback: '💡 Trả đũa chỉ làm mâu thuẫn lớn thêm và con sẽ trở thành người có lỗi trong mắt mọi người.' }
      ],
      keyTakeaway: 'Hít sâu thở chậm - Tâm trí bình an - Mỉm cười bước tiếp!',
      summary: 'Cảm xúc là phản ứng tự nhiên của con người. Làm chủ cảm xúc giúp con luôn sáng suốt, điềm đạm và được mọi người tôn trọng yêu quý.',
      actionSteps: [
        'Bước 1: Nhận diện: Tự gọi tên cảm xúc mình đang có (tức giận, lo lắng, buồn bã).',
        'Bước 2: Điều hòa: Nhắm mắt, hít sâu bằng mũi trong 4 giây và thở ra từ từ bằng miệng.',
        'Bước 3: Giải tỏa: Tâm sự với người thân hoặc viết vào nhật ký để giải phóng năng lượng.'
      ],
      parentTip: 'Khi con nổi giận hoặc khóc lóc, hãy ôm con vào lòng và lắng nghe trước khi đưa ra bất kỳ lời phán xét hay khuyên bảo nào.'
    },
    'An toàn': {
      title: 'Kỹ năng nhận biết nguy hiểm và bảo vệ an toàn bản thân',
      objective: 'Trang bị cho học sinh phản xạ nhận diện các mối nguy hại tiềm ẩn ở trường, ở nhà và nơi công cộng để tự bảo vệ mình.',
      situation: 'Tan học, trong lúc đứng đợi ba mẹ ở cổng trường, có một người lạ mặt đi xe máy đến gần, đưa cho con gói kẹo socola hấp dẫn và bảo: "Mẹ cháu nhờ chú đến đón, lên xe chú chở về nhà nhanh nhé!". Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Tuyệt đối không nhận quà và không bao giờ đi theo người lạ khi chưa có sự xác nhận của ba mẹ!',
      options: [
        { key: 'A', text: 'Mừng rỡ nhận gói kẹo và trèo ngay lên xe người lạ để về nhà sớm.', isCorrect: false, feedback: '💡 Cực kỳ nguy hiểm! Người lạ có thể là kẻ xấu bắt cóc hoặc xâm hại trẻ em, con tuyệt đối không được lên xe!' },
        { key: 'B', text: 'Lùi lại 3 bước, từ chối dứt khoát: "Cháu không đi cùng người lạ", rồi chạy ngay vào phòng bác bảo vệ trường để đợi ba mẹ.', isCorrect: true, feedback: '🎉 Quá xuất sắc! Con có kỹ năng sinh tồn tuyệt vời! Bác bảo vệ trường là nơi trú ẩn an toàn nhất khi có tình huống nguy hiểm.' },
        { key: 'C', text: 'Đứng lại nói chuyện vui vẻ và cho người lạ biết địa chỉ nhà cùng số điện thoại của mẹ.', isCorrect: false, feedback: '💡 Không được tiết lộ thông tin cá nhân và gia đình cho người lạ mặt biết con nhé.' },
        { key: 'D', text: 'Tự ý đi bộ lang thang ra đường lớn tìm đường về nhà một mình.', isCorrect: false, feedback: '💡 Tự đi bộ ngoài đường đông đúc xe cộ rất dễ bị lạc đường và gặp tai nạn giao thông.' }
      ],
      keyTakeaway: 'Không đi theo người lạ - Không nhận quà đồ chơi - Báo ngay bảo vệ!',
      summary: 'Sự an toàn của con là điều quý giá nhất. Luôn cảnh giác, tuân thủ nguyên tắc an toàn giúp con tự tin vững bước trong cuộc sống.',
      actionSteps: [
        'Bước 1: Giữ khoảng cách tối thiểu 2 mét với người lạ mặt đáng ngờ.',
        'Bước 2: Nói to, dứt khoát từ chối mọi đồ ăn, đồ chơi hoặc lời mời đi nhờ xe.',
        'Bước 3: Chạy đến khu vực an toàn có người lớn đáng tin cậy (thầy cô, công an, bác bảo vệ).'
      ],
      parentTip: 'Thiết lập một "Mật khẩu an toàn gia đình" - chỉ những người đọc đúng mật khẩu này thì con mới được phép đi theo khi ba mẹ bận nhờ người đón.'
    },
    'Tài chính': {
      title: 'Quản lý tài chính cá nhân và hiểu giá trị của đồng tiền',
      icon: '🪙',
      objective: 'Giúp học sinh hiểu được sức lao động của cha mẹ, biết phân biệt nhu cầu thiết yếu với ý muốn nhất thời và rèn thói quen tiết kiệm.',
      situation: 'Nhân dịp sinh nhật, con được ông bà mừng tuổi 100 ngàn đồng. Trên đường đi học về, con thấy các bạn đang vây quanh quầy đồ chơi bán một món đồ chơi trào lưu đang rất "hot" giá đúng 100 ngàn, nhưng ở nhà con đã có vài món tương tự. Con sẽ làm gì?',
      correctKey: 'C',
      hint: 'Hãy phân biệt giữa món đồ mình THỰC SỰ CẦN và món đồ mình chỉ THÍCH NHẤT THỜI!',
      options: [
        { key: 'A', text: 'Rút ngay 100 ngàn ra mua ngay lập tức để khoe với các bạn trong lớp.', isCorrect: false, feedback: '💡 Mua theo trào lưu sẽ nhanh chán chỉ sau 1-2 ngày, lãng phí toàn bộ số tiền ông bà yêu thương tặng cho con.' },
        { key: 'B', text: 'Đòi ba mẹ cho thêm tiền để mua luôn hai món đồ chơi khác nhau.', isCorrect: false, feedback: '💡 Đòi hỏi vô lý làm ba mẹ phiền lòng và hình thành thói quen tiêu xài hoang phí.' },
        { key: 'C', text: 'Dừng lại suy nghĩ, quyết định đem tiền về đút heo đất tiết kiệm để dành mua sách vở hoặc đóng học phí khóa học con yêu thích.', isCorrect: true, feedback: '🎉 Con là một nhà quản lý tài chính nhí tài ba! Tiết kiệm tiền giúp con thực hiện được những mục tiêu lớn lao và có ý nghĩa hơn rất nhiều.' },
        { key: 'D', text: 'Mang tiền ra mua hết bánh kẹo ngọt không rõ nguồn gốc ăn trừ bữa cơm tối.', isCorrect: false, feedback: '💡 Ăn quà vặt không rõ nguồn gốc gây đau bụng, ngộ độc thực phẩm và bỏ bữa ăn gia đình.' }
      ],
      keyTakeaway: 'Tiết kiệm hôm nay - Vững bước ngày mai - Quý trọng công sức!',
      summary: 'Đồng tiền kiếm được từ mồ hôi nước mắt của người lao động. Biết trân trọng từng đồng xu nhỏ và chi tiêu có kế hoạch là bước khởi đầu của người thành đạt.',
      actionSteps: [
        'Bước 1: Áp dụng quy tắc "Chờ 24 giờ" trước khi quyết định mua một món đồ chơi.',
        'Bước 2: Nuôi một chú heo đất tiết kiệm và chia tiền thành 3 phần: Tiết kiệm - Học tập - Chia sẻ.',
        'Bước 3: Tự ghi chép vào sổ tay những khoản tiền mình nhận được và đã chi tiêu.'
      ],
      parentTip: 'Dạy con trải nghiệm lao động để kiếm điểm thưởng quy đổi thành tiền tiêu vặt nhỏ, giúp con hiểu sâu sắc giá trị của lao động.'
    },
    'Vệ sinh': {
      title: 'Rèn luyện thói quen giữ gìn vệ sinh thân thể và môi trường sống',
      icon: '🧼',
      objective: 'Tập cho học sinh nếp sống sạch sẽ, tự giác vệ sinh cá nhân đúng cách để phòng chống dịch bệnh và nâng cao sức đề kháng.',
      situation: 'Giờ ra chơi đá bóng cùng các bạn dưới sân trường kết thúc, bàn tay con dính đầy bụi bẩn và mồ hôi nhễ nhại. Tiếng chuông reo báo hiệu đến giờ ăn bữa phụ xế. Con sẽ làm gì?',
      correctKey: 'A',
      hint: 'Bàn tay sạch là tấm khiên bảo vệ cơ thể khỏi 99% vi khuẩn gây bệnh!',
      options: [
        { key: 'A', text: 'Đi thẳng đến bồn rửa tay, lấy xà phòng xoa đều đủ 6 bước trong 30 giây rồi rửa sạch dưới vòi nước chảy trước khi ăn.', isCorrect: true, feedback: '🎉 Quá chuẩn mực y khoa! Rửa tay bằng xà phòng giúp tiêu diệt mọi vi khuẩn gây hại, bảo vệ đường ruột và sức khỏe của con.' },
        { key: 'B', text: 'Chỉ quẹt tay vào quần cho đỡ bụi rồi cầm bánh ăn luôn cho kịp giờ.', isCorrect: false, feedback: '💡 Quần áo chứa vô số bụi bẩn và vi khuẩn! Ăn bằng tay bẩn sẽ đưa mầm bệnh trực tiếp vào bụng gây tiêu chảy, giun sán.' },
        { key: 'C', text: 'Chỉ nhúng đầu ngón tay vào vòi nước trong 2 giây rồi vẩy tay đi ăn.', isCorrect: false, feedback: '💡 Nhúng nước sơ sài không thể rửa sạch vi khuẩn bám trên da. Cần dùng xà phòng chà kỹ các kẽ ngón tay con nhé.' },
        { key: 'D', text: 'Nhờ bạn thổi bụi trên tay hộ mình rồi bốc thức ăn.', isCorrect: false, feedback: '💡 Thổi bụi bằng miệng sẽ bắn thêm các giọt bắn vi khuẩn từ miệng bạn vào tay con, càng mất vệ sinh hơn!' }
      ],
      keyTakeaway: 'Rửa tay xà phòng - Sạch bong vi khuẩn - Cơ thể khỏe re!',
      summary: 'Vệ sinh cá nhân là nền tảng của sức khỏe và sự tự tin. Một cơ thể sạch sẽ thơm tho giúp con luôn tràn đầy năng lượng học tập và vui chơi.',
      actionSteps: [
        'Bước 1: Rửa tay 6 bước trước khi ăn, sau khi đi vệ sinh và sau khi chơi đùa.',
        'Bước 2: Đánh răng sáng và tối đủ 2 phút để bảo vệ nụ cười trắng sáng.',
        'Bước 3: Tắm giặt hàng ngày, thay quần áo và tất sạch sẽ trước khi đi ngủ.'
      ],
      parentTip: 'Cùng con hát bài "Ghen Cô Vy" hoặc một bài đồng dao 30 giây khi rửa tay để tạo niềm vui hào hứng cho con mỗi khi vào bồn rửa.'
    },
    'Tư duy': {
      title: 'Phát triển tư duy logic, phản biện và sáng tạo',
      icon: '🧠',
      objective: 'Kích thích trí tò mò, rèn luyện thói quen kiên trì trước bài toán khó và tư duy tìm ra nhiều cách giải quyết sáng tạo.',
      situation: 'Khi làm bài tập về nhà môn Toán, con gặp một bài toán có lời văn hóc búa. Con đã đọc đề 2 lần nhưng vẫn chưa nghĩ ra cách giải và bắt đầu cảm thấy nản lòng. Con sẽ làm gì?',
      correctKey: 'B',
      hint: 'Khi gặp khó khăn, hãy chia nhỏ vấn đề và vẽ sơ đồ minh họa để tìm lối ra!',
      options: [
        { key: 'A', text: 'Gập ngay sách lại, vứt bút và kêu lên: "Bài này khó quá, con không học nữa!".', isCorrect: false, feedback: '💡 Bỏ cuộc quá sớm sẽ hình thành tính cách dễ nản lòng trước mọi thử thách trong cuộc sống.' },
        { key: 'B', text: 'Bình tĩnh gạch chân các dữ kiện quan trọng, vẽ tóm tắt bằng sơ đồ đoạn thẳng ra nháp và thử giải từng bước một.', isCorrect: true, feedback: '🎉 Con có tư duy của một nhà khoa học tương lai! Kiên trì tìm tòi và vẽ sơ đồ tư duy sẽ giúp con giải được ngay cả những bài toán khó nhất.' },
        { key: 'C', text: 'Lấy điện thoại mở ứng dụng giải bài tập trên mạng để chép ngay đáp số vào vở.', isCorrect: false, feedback: '💡 Chép giải trên mạng làm não bộ con lười suy nghĩ, con sẽ không hiểu bản chất và không tiến bộ được.' },
        { key: 'D', text: 'Viết bừa một con số vào bài cho xong chuyện rồi đi ngủ.', isCorrect: false, feedback: '💡 Làm ẩu sẽ khiến con bị điểm kém và thầy cô sẽ rất buồn vì thái độ học tập thiếu nghiêm túc.' }
      ],
      keyTakeaway: 'Kiên trì suy nghĩ - Vẽ sơ đồ ra - Khó mấy cũng xong!',
      summary: 'Não bộ cũng giống như một cơ bắp, càng tập luyện vượt khó thì càng trở nên thông minh sắc bén. Kiên trì là bí quyết số một của mọi thành công.',
      actionSteps: [
        'Bước 1: Đọc kỹ đề bài 3 lần, gạch chân từ khóa và dữ kiện đã cho.',
        'Bước 2: Vẽ sơ đồ tóm tắt hoặc biểu diễn bằng hình ảnh ra giấy nháp.',
        'Bước 3: Thử nhiều hướng suy nghĩ khác nhau và kiểm tra lại kết quả sau khi tìm ra.'
      ],
      parentTip: 'Khi con gặp bài khó, thay vì chỉ bài ngay, hãy đặt các câu hỏi gợi mở như: "Đề bài cho biết gì?", "Con thử vẽ sơ đồ xem nào?".'
    },
    'Xã hội': {
      title: 'Xây dựng ý thức công dân nhỏ tuổi và trách nhiệm cộng đồng',
      icon: '🌱',
      objective: 'Nuôi dưỡng tình yêu thiên nhiên, ý thức bảo vệ môi trường công cộng và tinh thần tương thân tương ái với mọi người xung quanh.',
      situation: 'Sau khi ăn xong que kem mát lạnh ở công viên, con nhìn quanh bán kính 20 mét không thấy chiếc thùng rác nào. Một vài người gần đó vứt que kem và vỏ bao thẳng xuống thảm cỏ. Con sẽ làm gì?',
      correctKey: 'D',
      hint: 'Bảo vệ môi trường bắt đầu từ hành động nhỏ nhất của mỗi cá nhân!',
      options: [
        { key: 'A', text: 'Ném ngay que kem xuống bãi cỏ theo mọi người vì nghĩ một que kem của mình chẳng làm bẩn thêm bao nhiêu.', isCorrect: false, feedback: '💡 Ai cũng nghĩ như vậy thì công viên sẽ biến thành bãi rác khổng lồ! Đừng hành động theo thói quen xấu của người khác.' },
        { key: 'B', text: 'Gài que kem vào kẽ ghế đá hoặc nhét vào gốc cây cảnh cho khuất mắt.', isCorrect: false, feedback: '💡 Nhét rác vào cây cảnh làm bẩn cảnh quan và thu hút ruồi muỗi, chuột bọ gây hại.' },
        { key: 'C', text: 'Vứt que kem xuống hồ nước công viên cho cá ăn.', isCorrect: false, feedback: '💡 Que gỗ và nilon không phải thức ăn của cá, làm vậy sẽ làm ô nhiễm nguồn nước và cá có thể bị chết.' },
        { key: 'D', text: 'Gói que kem vào tờ giấy ăn sạch, cầm trên tay hoặc bỏ vào túi balo, kiên nhẫn đi tìm thùng rác để vứt đúng nơi quy định.', isCorrect: true, feedback: '🎉 Con là một công dân nhí tuyệt vời và có ý thức cộng đồng rất cao! Hành động văn minh của con góp phần giữ gìn màu xanh cho Trái Đất.' }
      ],
      keyTakeaway: 'Rác bỏ đúng nơi - Công viên xanh tươi - Hành tinh hạnh phúc!',
      summary: 'Một hành động nhỏ vứt rác đúng nơi quy định thể hiện văn hóa sống cao đẹp. Khi con biết yêu quý và bảo vệ môi trường, cuộc sống sẽ trở nên tươi đẹp hơn.',
      actionSteps: [
        'Bước 1: Luôn giữ rác trên tay hoặc cho vào túi tạm nếu chưa tìm thấy thùng rác.',
        'Bước 2: Phân loại rác: Rác hữu cơ, rác tái chế và rác thông thường.',
        'Bước 3: Nhắc nhở bạn bè và người thân cùng chung tay giữ gìn vệ sinh chung.'
      ],
      parentTip: 'Cùng con tham gia các hoạt động vì cộng đồng như trồng cây xanh, nhặt rác bãi biển hoặc thu gom pin cũ để nuôi dưỡng ý thức xã hội.'
    }
  };

  const template = defaultTemplates[pillar] || defaultTemplates['Tự lập'];
  const title = iteration > 0 
    ? `${template.title} (Thử thách rèn luyện cấp độ ${iteration + 1})`
    : template.title;

  return {
    title,
    icon: pillarIcons[pillar] || '🌱',
    dur: '10 - 15 phút',
    objective: template.objective,
    situation: template.situation,
    correctKey: template.correctKey,
    hint: template.hint,
    options: template.options,
    keyTakeaway: template.keyTakeaway,
    summary: template.summary,
    actionSteps: template.actionSteps,
    parentTip: template.parentTip
  };
}

// Xây dựng bài học hoàn chỉnh theo chuẩn Sư phạm 4 bước: Mục tiêu -> Tình huống -> Quiz A/B/C/D -> Kết luận
function buildCompleteLesson(id, rawLesson, pillar, iteration) {
  const title = rawLesson.title;
  const icon = rawLesson.icon || '🌱';
  const duration = rawLesson.dur || '10 - 15 phút';
  const objective = rawLesson.objective;
  const situation = rawLesson.situation;
  
  const quiz = {
    question: rawLesson.quiz?.question || 'Nếu là con trong tình huống này, con sẽ chọn cách xử lý nào sau đây?',
    correctKey: rawLesson.correctKey || rawLesson.quiz?.correctKey || 'B',
    hint: rawLesson.hint || rawLesson.quiz?.hint || 'Hãy suy nghĩ xem cách nào vừa an toàn, lịch sự và giúp con tự lập nhất nhé!',
    options: rawLesson.options || rawLesson.quiz?.options || []
  };

  const conclusion = {
    keyTakeaway: rawLesson.keyTakeaway || rawLesson.conclusion?.keyTakeaway || 'Học kỹ năng hay - Vững bước mỗi ngày!',
    summary: rawLesson.summary || rawLesson.conclusion?.summary || rawLesson.objective,
    actionSteps: rawLesson.actionSteps || rawLesson.conclusion?.actionSteps || [
      'Bước 1: Nhận biết tình huống và giữ bình tĩnh.',
      'Bước 2: Áp dụng cách xử lý văn minh và thông minh nhất.',
      'Bước 3: Rút kinh nghiệm và duy trì thành thói quen tốt.'
    ],
    parentTeacherTip: rawLesson.parentTip || rawLesson.conclusion?.parentTeacherTip || 'Khích lệ và khen ngợi kịp thời khi thấy con chủ động vận dụng kỹ năng vào đời sống.'
  };

  const script = [
    {
      speaker: 'Ba Mẹ / Thầy Cô',
      role: 'parent',
      avatar: '👨‍🏫',
      text: `Con yêu, hôm nay chúng ta cùng rèn luyện một kỹ năng sống rất quan trọng: "${title}". Con hãy đọc kỹ tình huống để tìm ra cách ứng xử tuyệt vời nhất nhé!`,
      tip: 'Trò chuyện bằng thái độ tôn trọng, khích lệ tư duy phản biện của học sinh.'
    },
    {
      speaker: 'Học sinh',
      role: 'child',
      avatar: icon,
      text: `Dạ vâng ạ! Con đã đọc xong tình huống và sẵn sàng vượt qua thử thách câu hỏi A, B, C, D để rút ra bài học cho mình!`,
      tip: 'Học sinh hào hứng tham gia trả lời và chọn giải pháp tối ưu.'
    },
    {
      speaker: 'Ba Mẹ / Thầy Cô',
      role: 'parent',
      avatar: '👨‍🏫',
      text: `Rất tuyệt vời! Sau khi chọn đáp án đúng, con hãy đọc to câu Ghi nhớ vàng và áp dụng ngay 3 bước hành động nhé!`,
      tip: 'Đồng hành, lắng nghe lý giải của con và cổ vũ con ghi nhớ bài học.'
    }
  ];

  const activity = {
    type: 'checklist',
    steps: conclusion.actionSteps.map((stepText, idx) => ({
      id: `act-${id}-${idx + 1}`,
      title: stepText.split(':')[0] || `Bước ${idx + 1}`,
      description: stepText.split(':')[1] ? stepText.split(':')[1].trim() : stepText
    })),
    parentTip: conclusion.parentTeacherTip
  };

  return {
    id,
    title,
    pillar,
    duration,
    icon,
    objective,
    situation,
    quiz,
    conclusion,
    script,
    activity
  };
}

// Sinh đủ 365 bài học xoay vòng
function generateAll365Lessons() {
  const lessons = [];
  let currentId = 1;

  while (lessons.length < 365) {
    for (const pillar of PILLARS_8) {
      if (lessons.length >= 365) break;

      const catalogList = LESSON_DEFINITIONS[pillar] || [];
      const indexInCatalog = Math.floor((currentId - 1) / PILLARS_8.length) % (catalogList.length || 1);
      const iteration = Math.floor((currentId - 1) / (PILLARS_8.length * Math.max(catalogList.length, 1)));

      let lessonData = catalogList[indexInCatalog];
      if (!lessonData) {
        lessonData = generatePillarFallbacks(pillar, currentId, iteration);
      } else if (iteration > 0) {
        // Tăng cấp độ cho các chu kỳ sau
        lessonData = {
          ...lessonData,
          title: `${lessonData.title} (Thực hành cấp độ ${iteration + 1})`
        };
      }

      lessons.push(buildCompleteLesson(currentId, lessonData, pillar, iteration));
      currentId++;
    }
  }

  return lessons;
}

// Thực thi ghi dữ liệu
const allLessons = generateAll365Lessons();

const dest1 = path.join(__dirname, '..', 'src', 'data', 'full_365_lessons.json');
const dest2 = path.join(__dirname, '..', 'full_365_lessons.json');

fs.writeFileSync(dest1, JSON.stringify(allLessons, null, 2), 'utf-8');
fs.writeFileSync(dest2, JSON.stringify(allLessons, null, 2), 'utf-8');

console.log(`Đã tạo thành công ${allLessons.length} bài học theo định dạng Mục tiêu -> Tình huống -> Quiz A,B,C,D -> Kết luận tại:`);
console.log('1.', dest1);
console.log('2.', dest2);
