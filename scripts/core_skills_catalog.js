// Danh mục chi tiết 97 kỹ năng sống chuẩn Tiểu học với Mục tiêu, Tình huống thực tế, Câu hỏi A-B-C-D và Kết luận sư phạm

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

export const CORE_SKILLS_CATALOG = {
  'Tự lập': [
    {
      title: 'Soạn sách vở và đồ dùng theo thời khóa biểu ngày mai',
      icon: '🎒',
      dur: '10 - 15 phút',
      objective: 'Giúp học sinh rèn thói quen tự giác kiểm tra thời khóa biểu mỗi tối, chuẩn bị đầy đủ sách vở, dụng cụ học tập để luôn chủ động, tự tin khi đến lớp.',
      situation: 'Tối nay sau khi ăn cơm xong, đồng hồ điểm 8 giờ tối. Ngày mai lớp con có các môn: Toán, Tiếng Việt, Mỹ thuật và Thể dục. Hộp màu vẽ và đôi giày bata vẫn để lung tung chưa tìm thấy, trong khi chương trình hoạt hình yêu thích trên tivi chuẩn bị chiếu. Con sẽ xử lý thế nào?',
      quiz: {
        question: 'Nếu là con trong tình huống này, con sẽ chọn cách giải quyết nào sau đây?',
        correctKey: 'B',
        hint: 'Việc chuẩn bị trước sẽ giúp con sáng mai không bị cuống cuồng và quên đồ dùng quan trọng!',
        options: [
          {
            key: 'A',
            text: 'Cứ bật tivi xem hoạt hình trước đã, sáng mai ngủ dậy sớm rồi cuống cuồng tìm sau.',
            isCorrect: false,
            feedback: '💡 Sáng mai con sẽ rất vội vàng, dễ tìm không thấy hộp màu hoặc giày thể thao, dẫn đến đi học muộn và bị cô giáo nhắc nhở đấy!'
          },
          {
            key: 'B',
            text: 'Chủ động mở thời khóa biểu, xếp đủ sách vở Toán, Tiếng Việt, tìm sẵn hộp màu và giày thể thao cho vào cặp gọn gàng trước khi giải trí.',
            isCorrect: true,
            feedback: '🎉 Hoan hô! Con lựa chọn vô cùng thông minh và tự giác! Chuẩn bị trước giúp con yên tâm ngủ ngon và sáng mai tự tin đến lớp với đầy đủ đồ dùng.'
          },
          {
            key: 'C',
            text: 'Nhờ ba mẹ hoặc anh chị tìm và soạn hộ tất cả sách vở vì con đang bận xem tivi.',
            isCorrect: false,
            feedback: '💡 Việc học là của chính con mà! Nếu nhờ người khác làm hộ, con sẽ không nhớ mình có những sách vở gì và tạo thành thói quen ỷ lại.'
          },
          {
            key: 'D',
            text: 'Chỉ mang mỗi sách Toán và Tiếng Việt, còn môn Mỹ thuật và Thể dục quên thì đến lớp mượn tạm bạn.',
            isCorrect: false,
            feedback: '💡 Không nên đâu con nhé! Đến giờ học mà không có đồ dùng sẽ làm phiền bạn và con không thể tham gia tiết học trọn vẹn được.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Sách vở sẵn sàng - Sáng mai vững vàng - Tự tin tới lớp!',
        summary: 'Tự giác soạn sách vở theo thời khóa biểu mỗi tối giúp con hình thành tính cẩn thận, kỷ luật và chủ động. Đây là phẩm chất tuyệt vời của một học sinh tiểu học tự lập.',
        actionSteps: [
          'Bước 1: Mở thời khóa biểu ngày mai và sổ dặn dò xem có những môn học và bài tập nào.',
          'Bước 2: Xếp sách vở, đồ dùng học tập chuyên môn (màu, thước kẻ, compa, giày...) vào cặp.',
          'Bước 3: Kéo khóa cặp cẩn thận và đặt cặp ở góc học tập quen thuộc.'
        ],
        parentTeacherTip: 'Khuyến khích con dán thời khóa biểu ngay trước bàn học. Ban đầu ba mẹ có thể đứng cạnh quan sát và khen ngợi tính tự giác của con thay vì làm thay con.'
      }
    },
    {
      title: 'Tự giác ngồi vào bàn học bài đúng giờ quy định',
      icon: '⏰',
      dur: '12 - 15 phút',
      objective: 'Rèn luyện khả năng quản lý thời gian, hình thành đồng hồ sinh học tự giác học tập mỗi ngày mà không cần người lớn phải nhắc nhở.',
      situation: 'Đã 7 giờ 30 tối, đúng khung giờ học bài hàng ngày con đã hẹn với ba mẹ. Nhưng con đang dở một trò chơi ghép hình lego rất cuốn hút và chỉ còn vài mảnh nữa là xong. Con sẽ làm gì?',
      quiz: {
        question: 'Nếu là con trong tình huống này, con sẽ chọn cách xử lý nào?',
        correctKey: 'C',
        hint: 'Người thành công luôn biết ưu tiên việc quan trọng trước việc vui chơi giải trí!',
        options: [
          {
            key: 'A',
            text: 'Cố ngồi chơi tiếp cho đến khi hoàn thành xong cả bộ ghép hình, mặc kệ giờ giấc.',
            isCorrect: false,
            feedback: '💡 Chơi quá giờ sẽ khiến con thức khuya, sáng mai dậy mệt mỏi và làm bài tập vội vàng không đạt kết quả tốt.'
          },
          {
            key: 'B',
            text: 'Vừa mang sách vở ra sàn nhà vừa ghép hình vừa làm bài cùng một lúc.',
            isCorrect: false,
            feedback: '💡 Làm hai việc cùng lúc sẽ khiến con mất tập trung, bài tập dễ bị sai sót và chơi cũng không trọn vẹn.'
          },
          {
            key: 'C',
            text: 'Tạm dừng trò chơi, cất gọn lego vào khay, ngồi ngay ngắn vào bàn học đúng giờ và tự nhủ sau khi xong bài sẽ chơi tiếp.',
            isCorrect: true,
            feedback: '🎉 Tuyệt vời! Con biết làm chủ bản thân và ưu tiên việc học tập đúng giờ. Đó là phẩm chất của một học sinh rất bản lĩnh và trách nhiệm!'
          },
          {
            key: 'D',
            text: 'Đợi đến khi ba mẹ đi vào phòng nhắc nhở hoặc quát mắng mới bực bội đi vào bàn học.',
            isCorrect: false,
            feedback: '💡 Đợi bị nhắc nhở sẽ khiến không khí gia đình căng thẳng và con bắt đầu buổi học với tâm lý không vui, khó tiếp thu bài.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Đúng giờ học tập - Nề nếp chuyên cần - Tương lai rộng mở!',
        summary: 'Kỷ luật bản thân bắt đầu từ việc ngồi vào bàn học đúng giờ. Khi con tập trung hoàn thành sớm bài tập, con sẽ có thời gian thoải mái vui chơi mà không phải lo lắng.',
        actionSteps: [
          'Bước 1: Đặt báo thức hoặc để ý đồng hồ trước giờ học 5 phút.',
          'Bước 2: Dọn dẹp đồ chơi, cất gọn gàng và chuẩn bị nước uống mang vào bàn học.',
          'Bước 3: Ngồi thẳng lưng, bật đèn đủ sáng và bắt đầu bài học với tinh thần hào hứng.'
        ],
        parentTeacherTip: 'Xây dựng cho con một góc học tập yên tĩnh, hạn chế tiếng ồn từ tivi hay điện thoại trong khung giờ học của con.'
      }
    },
    {
      title: 'Quản lý thời gian học tập bằng phương pháp Pomodoro 25 phút',
      icon: '⏱️',
      dur: '15 - 20 phút',
      objective: 'Giúp học sinh rèn luyện khả năng tập trung cao độ trong từng khoảng thời gian ngắn (25 phút tập trung, 5 phút nghỉ ngơi) để học bài hiệu quả mà không bị mỏi mệt.',
      situation: 'Hôm nay con có một bài văn và hai bài toán cần giải. Khi mới ngồi học được 10 phút, con thấy hơi chán và mắt cứ liếc nhìn chiếc đồng hồ thông minh hoặc muốn đứng dậy lục tủ lạnh tìm đồ ăn vặt. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ áp dụng phương pháp quản lý thời gian như thế nào?',
        correctKey: 'A',
        hint: 'Tập trung hết mình trong 25 phút rồi mới nghỉ ngơi sẽ giúp não bộ con thông minh và làm bài cực nhanh!',
        options: [
          {
            key: 'A',
            text: 'Tự nhủ kiên nhẫn học hết 25 phút của khung giờ Pomodoro, sau đó mới bấm chuông nghỉ giải lao 5 phút ăn nhẹ.',
            isCorrect: true,
            feedback: '🎉 Quá xuất sắc! Con đã chiến thắng sự xao nhãng! Tập trung 25 phút giúp con giải quyết bài tập nhanh gấp đôi đấy.'
          },
          {
            key: 'B',
            text: 'Đứng dậy đi quanh nhà, mở tủ lạnh tìm đồ ăn rồi ra phòng khách ngó nghiêng tivi một lát.',
            isCorrect: false,
            feedback: '💡 Đứng dậy giữa chừng sẽ làm mạch suy nghĩ bị đứt đoạn, con sẽ mất rất nhiều thời gian để tập trung lại từ đầu.'
          },
          {
            key: 'C',
            text: 'Vừa học vừa bật nhạc nhảy sôi động và mở thêm video hài để xem cho đỡ chán.',
            isCorrect: false,
            feedback: '💡 Xem video hài khi học sẽ khiến não bộ bị phân tán, con sẽ làm sai bài toán và mất gấp ba lần thời gian bình thường.'
          },
          {
            key: 'D',
            text: 'Bỏ dở bài tập, quyết định ngày mai đến lớp chép bài của bạn cho nhanh.',
            isCorrect: false,
            feedback: '💡 Chép bài của bạn là hành vi thiếu trung thực và khiến con không hiểu bài, con sẽ bị hổng kiến thức khi thi cử.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: '25 phút tập trung - 5 phút thư giãn - Năng suất gấp đôi!',
        summary: 'Phương pháp Pomodoro dạy cho con bí quyết tập trung đỉnh cao: Khi học thì tập trung 100%, khi nghỉ thì thư giãn thoải mái. Nhờ đó, việc học trở nên nhẹ nhàng và thú vị hơn rất nhiều.',
        actionSteps: [
          'Bước 1: Chọn một nhiệm vụ bài tập cụ thể và bấm hẹn giờ 25 phút.',
          'Bước 2: Loại bỏ mọi thứ gây mất tập trung (đồ chơi, tivi), tập trung làm bài.',
          'Bước 3: Khi chuông reo, nghỉ ngơi 5 phút (uống nước, vươn vai) rồi mới tiếp tục.'
        ],
        parentTeacherTip: 'Phụ huynh có thể trang bị cho con một chiếc đồng hồ quả cà chua Pomodoro cơ học nhỏ để con hào hứng canh giờ tự lập.'
      }
    },
    {
      title: 'Tự chuẩn bị đồng phục, khăn quàng đỏ và giày dép đi học',
      icon: '👔',
      dur: '10 - 12 phút',
      objective: 'Giúp học sinh rèn nếp sống gọn gàng, tự chủ trang phục học sinh chỉn chu và luôn xuất hiện lịch sự, tự tin tại trường.',
      situation: 'Sáng mai là thứ Hai đầu tuần, trường có buổi lễ chào cờ trang trọng. Quy định toàn trường là mặc đồng phục áo trắng, quần/váy xanh, đeo khăn quàng đỏ và đi giày bata. Tối Chủ Nhật trước khi đi ngủ, con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ chuẩn bị trang phục thứ Hai như thế nào?',
        correctKey: 'D',
        hint: 'Chuẩn bị từ tối hôm trước giúp con sáng thứ Hai không phải hốt hoảng tìm khăn quàng hay tất!',
        options: [
          {
            key: 'A',
            text: 'Cứ để sáng mai thức dậy rồi vào tủ lục tung quần áo tìm đồ sau.',
            isCorrect: false,
            feedback: '💡 Sáng thứ Hai thường rất vội, nếu áo bị nhăn hoặc khăn quàng bị thất lạc, con sẽ đi học muộn và bị sao đỏ ghi tên đấy!'
          },
          {
            key: 'B',
            text: 'Mặc sẵn bộ đồ ngủ đi học luôn cho tiện, không cần đồng phục.',
            isCorrect: false,
            feedback: '💡 Đồ ngủ không phải trang phục học sinh! Đến trường con cần mặc đồng phục trang nghiêm theo đúng nội quy nhà trường.'
          },
          {
            key: 'C',
            text: 'Giao toàn bộ việc tìm quần áo, ủi đồ và tìm giày cho mẹ, sáng mai mẹ đưa gì mặc nấy.',
            isCorrect: false,
            feedback: '💡 Con đã là học sinh tiểu học rồi, tự chuẩn bị trang phục của mình sẽ giúp mẹ đỡ vất vả và con tự lập hơn.'
          },
          {
            key: 'D',
            text: 'Tự là/treo ngay ngắn đồng phục, xếp sẵn khăn quàng đỏ, đôi tất sạch và đặt giày bata ngay cửa ra vào từ tối Chủ Nhật.',
            isCorrect: true,
            feedback: '🎉 Quá tuyệt vời! Con là một học sinh rất chỉn chu, nề nếp! Sáng mai con sẽ có khởi đầu tuần mới thật tự tin và rạng rỡ.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Đồng phục phẳng phiu - Khăn quàng thắm đỏ - Tự hào học sinh!',
        summary: 'Tự tay chuẩn bị trang phục đi học thể hiện lòng tự trọng, sự tôn trọng thầy cô và mái trường. Khi con gọn gàng sạch sẽ, ai nhìn vào cũng yêu mến.',
        actionSteps: [
          'Bước 1: Kiểm tra lịch tuần xem có ngày nào cần đồng phục đặc biệt (chào cờ, thể dục).',
          'Bước 2: Chuẩn bị đủ: áo, quần/váy, khăn quàng đỏ, thẻ học sinh và tất sạch.',
          'Bước 3: Treo lên móc hoặc xếp gọn gàng để sáng mai mặc ngay trong 2 phút.'
        ],
        parentTeacherTip: 'Dạy con cách gấp khăn quàng hình tam giác và thắt khăn quàng đúng chuẩn Đội Thiếu niên Tiền phong để con tự tin thực hành.'
      }
    },
    {
      title: 'Giữ gìn góc học tập tại nhà ngăn nắp và đủ ánh sáng',
      icon: '📐',
      dur: '12 - 15 phút',
      objective: 'Rèn luyện tính ngăn nắp, biết tổ chức không gian sống sạch đẹp, tạo nguồn cảm hứng và bảo vệ thị lực khi học tập.',
      situation: 'Sau khi làm xong bài tập môn Thủ công cắt dán, trên bàn học của con đầy giấy vụn, hồ dán dính trên mặt bàn, sách vở và bút chì màu nằm ngổn ngang. Con đã thấy buồn ngủ. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ xử lý góc học tập như thế nào trước khi đi ngủ?',
        correctKey: 'B',
        hint: 'Bàn học bừa bộn sẽ làm con ngày mai học bài cảm thấy khó chịu và dễ thất lạc dụng cụ!',
        options: [
          {
            key: 'A',
            text: 'Cứ để nguyên như vậy trên bàn rồi đi ngủ, mai tính sau.',
            isCorrect: false,
            feedback: '💡 Hồ dán để qua đêm sẽ khô cứng dính chặt vào bàn rất khó lau, giấy vụn bay lung tung và sáng mai bàn học rất luộm thuộm.'
          },
          {
            key: 'B',
            text: 'Dành 3-5 phút dọn sạch giấy vụn vào thùng rác, đậy nắp hồ dán, cắm bút vào lọ và xếp sách vở ngay ngắn rồi mới đi ngủ.',
            isCorrect: true,
            feedback: '🎉 Con thật ngoan và ngăn nắp! Một bàn học sạch sẽ giúp không gian phòng thoáng đãng và sáng mai con có tâm trạng sảng khoái để học tiếp.'
          },
          {
            key: 'C',
            text: 'Gạt hết tất cả giấy vụn và bút thước xuống gầm bàn cho nhanh khuất mắt.',
            isCorrect: false,
            feedback: '💡 Gạt xuống sàn sẽ làm phòng ngủ bị bẩn, bút rơi có thể bị gãy ngòi và chân dẫm phải sẽ đau đấy con nhé.'
          },
          {
            key: 'D',
            text: 'Gọi mẹ vào dọn dẹp hộ vì con bảo con làm thủ công rất mệt rồi.',
            isCorrect: false,
            feedback: '💡 Ai bày ra người đó phải dọn dẹp! Đó là nguyên tắc vàng của người tự lập và có trách nhiệm với đồ đạc của mình.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Góc học tập sáng ngăn nắp - Trí tuệ sáng ngời!',
        summary: 'Bàn học chính là người bạn đồng hành của con mỗi ngày. Giữ bàn học gọn gàng, lau chùi sạch sẽ và đủ ánh sáng sẽ giúp con học nhanh hơn và mắt luôn sáng khỏe.',
        actionSteps: [
          'Bước 1: Phân loại đồ: rác bỏ thùng rác, bút cắm vào ống, sách xếp vào giá.',
          'Bước 2: Lau sạch mặt bàn bằng khăn ẩm, không để vết mực hay hồ dán bám dính.',
          'Bước 3: Tắt đèn bàn học và đẩy ghế sát vào gầm bàn khi kết thúc buổi học.'
        ],
        parentTeacherTip: 'Cùng con trang trí một chậu cây nhỏ hoặc dán một câu châm ngôn tích cực ở góc học tập để tăng thêm cảm hứng học tập cho bé.'
      }
    },
    {
      title: 'Tự thức dậy khi chuông báo thức reo và gấp chăn màn',
      icon: '🛏️',
      dur: '10 phút',
      objective: 'Tập cho bé thói quen thức dậy đúng giờ với chuông báo thức, tự giác gấp chăn gối gọn gàng, bắt đầu ngày mới năng động và không phụ thuộc vào người khác.',
      situation: 'Sáng sớm 6 giờ, chuông đồng hồ báo thức của con reo vang bài hát vui nhộn. Trời mùa đông se lạnh và chiếc chăn đang rất ấm áp. Con cảm thấy mắt còn hơi buồn ngủ. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ phản ứng thế nào khi chuông báo thức reo?',
        correctKey: 'A',
        hint: 'Quy tắc 5 giây: Đếm 5-4-3-2-1 rồi bật dậy ngay sẽ xua tan cơn lười biếng!',
        options: [
          {
            key: 'A',
            text: 'Tắt chuông báo thức, hít thở sâu, đếm 1-2-3 bật dậy vươn vai, mở rèm cửa đón ánh sáng và gấp chăn gối phẳng phiu.',
            isCorrect: true,
            feedback: '🎉 Con là chiến binh buổi sáng dũng cảm! Vượt qua cơn buồn ngủ giúp con làm chủ ngày mới tràn đầy năng lượng và tự hào.'
          },
          {
            key: 'B',
            text: 'Thò tay bấm nút tắt báo thức rồi trùm chăn ngủ tiếp thêm 30 phút nữa.',
            isCorrect: false,
            feedback: '💡 Ngủ cố thêm sẽ khiến con vào giấc ngủ sâu lại, khi bị gọi dậy sẽ rất uể oải, muộn giờ ăn sáng và đi học muộn.'
          },
          {
            key: 'C',
            text: 'Nằm trên giường chờ đến khi ba mẹ vào gọi 3-4 lần và kéo chăn ra mới chịu dậy.',
            isCorrect: false,
            feedback: '💡 Để ba mẹ phải giục nhiều lần sẽ làm ba mẹ mệt mỏi và con đánh mất cơ hội rèn luyện tính tự lập của bản thân.'
          },
          {
            key: 'D',
            text: 'Bật dậy nhảy ngay xuống giường chạy đi chơi, để chăn gối vo tròn thành một đống bừa bãi.',
            isCorrect: false,
            feedback: '💡 Chiếc giường lộn xộn sẽ làm phòng ngủ trông rất xấu xí. Gấp chăn màn gọn gàng chỉ mất 1 phút nhưng thể hiện con là người văn minh!'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Chuông reo dậy ngay - Gấp chăn ngay ngắn - Một ngày tươi vui!',
        summary: 'Cách con bắt đầu buổi sáng quyết định cả ngày của con. Thức dậy đúng giờ và gấp chăn gối là chiến thắng đầu tiên trong ngày của một học sinh tự giác.',
        actionSteps: [
          'Bước 1: Khi chuông reo, tắt chuông và ngồi dậy ngay, không nằm nấn ná.',
          'Bước 2: Trải phẳng ga giường, gấp chăn thành hình chữ nhật gọn gàng và xếp gối ngăn nắp.',
          'Bước 3: Uống một ngụm nước ấm và vào nhà vệ sinh đánh răng rửa mặt chuẩn bị ngày mới.'
        ],
        parentTeacherTip: 'Để đồng hồ báo thức cách xa giường một chút để con buộc phải bước chân ra khỏi giường mới tắt được chuông, tránh tắt đi ngủ lại.'
      }
    },
    {
      title: 'Hoàn thành bài tập về nhà trước khi xem tivi hoặc chơi game',
      icon: '📝',
      dur: '15 phút',
      objective: 'Xây dựng nguyên tắc "Làm xong bài mới chơi", giúp học sinh có tinh thần trách nhiệm với nhiệm vụ học tập của mình.',
      situation: 'Chiều thứ Sáu tan học về nhà, bạn hàng xóm rủ con sang chơi máy chơi game thế hệ mới cực hay. Nhưng cô giáo chủ nhiệm có giao 3 bài toán luyện tập cuối tuần. Con sẽ xử lý thế nào?',
      quiz: {
        question: 'Con sẽ sắp xếp giữa việc chơi game và làm bài tập ra sao?',
        correctKey: 'C',
        hint: 'Chơi game sau khi đã xong bài tập sẽ cảm thấy cực kỳ thoải mái và không lo bị nhắc nhở!',
        options: [
          {
            key: 'A',
            text: 'Chạy sang nhà bạn chơi game cả chiều, tối chơi tiếp, để mặc bài tập đến tối Chủ Nhật mới làm vội.',
            isCorrect: false,
            feedback: '💡 Để bài đến tối Chủ Nhật con sẽ phải làm trong lo sợ, mệt mỏi và có thể làm ẩu làm sai hết bài tập.'
          },
          {
            key: 'B',
            text: 'Sang nhà bạn chơi trước 1 tiếng, sau đó về nhà vừa xem tivi vừa làm bài cho nhanh.',
            isCorrect: false,
            feedback: '💡 Chơi game rất dễ bị cuốn và quên giờ giấc. Khi về nhà con sẽ mệt mỏi và không còn tinh thần tập trung giải toán.'
          },
          {
            key: 'C',
            text: 'Lịch sự hẹn bạn: "Mình hoàn thành xong 3 bài toán này rồi 4 giờ chiều mình sang chơi cùng bạn nhé!".',
            isCorrect: true,
            feedback: '🎉 Con ứng xử vô cùng thông minh và chuẩn mực! Hoàn thành trách nhiệm trước giúp con chơi game với tinh thần hoàn toàn vui vẻ và thảnh thơi.'
          },
          {
            key: 'D',
            text: 'Nói dối ba mẹ là cô giáo không giao bài tập nào rồi sang nhà bạn chơi thoải mái.',
            isCorrect: false,
            feedback: '💡 Nói dối là điều rất xấu! Cô giáo và ba mẹ sẽ phát hiện ra và con sẽ đánh mất niềm tin của mọi người.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Bài vở tinh tươm - Vui chơi trọn vẹn - Không lo thấp thỏm!',
        summary: 'Người thông minh luôn hoàn thành nghĩa vụ trước khi tận hưởng niềm vui. Khi bài tập đã xong xuôi, con có thể tự hào vui chơi mà trong lòng nhẹ tênh.',
        actionSteps: [
          'Bước 1: Mở sổ dặn dò kiểm tra kỹ các bài tập cần làm.',
          'Bước 2: Ngồi vào bàn giải quyết dứt điểm các bài tập theo độ khó từ dễ đến khó.',
          'Bước 3: Soát lại bài một lượt, cất vào cặp rồi thoải mái xin phép ba mẹ đi chơi.'
        ],
        parentTeacherTip: 'Khen ngợi nỗ lực tự giác của con bằng cách thưởng cho con thêm thời gian vận động ngoài trời hoặc một trò chơi bổ ích sau khi hoàn thành bài.'
      }
    },
    {
      title: 'Kỹ năng ghi chép sổ dặn dò và theo dõi hạn nộp bài',
      icon: '📒',
      dur: '10 phút',
      objective: 'Rèn luyện thói quen ghi chú cẩn thận, theo dõi công việc bằng sổ tay học sinh để không bao giờ bị sót bài tập hay thông báo của nhà trường.',
      situation: 'Cuối tiết học cuối cùng, trước giờ ra về, cô giáo đọc dặn dò các bài tập về nhà và thông báo ngày mai phải nộp tiền bảo hiểm. Tiếng chuông reo và các bạn đang vội cất cặp đi về. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ xử lý thông tin dặn dò của cô giáo như thế nào?',
        correctKey: 'B',
        hint: 'Một mẩu bút chì cùn còn hơn một trí nhớ siêu phàm, hãy ghi chép cẩn thận!',
        options: [
          {
            key: 'A',
            text: 'Cứ nghe qua loa rồi nhét sách vào cặp chạy về, tự tin rằng mình sẽ nhớ hết trong đầu.',
            isCorrect: false,
            feedback: '💡 Về đến nhà con sẽ mải chơi và quên sạch các chi tiết, không nhớ cô dặn trang nào hay ngày mai cần nộp gì.'
          },
          {
            key: 'B',
            text: 'Mở ngay cuốn sổ dặn dò, ghi chép nắn nót từng mục cô dặn và đánh dấu việc cần nộp ngày mai trước khi đứng dậy ra về.',
            isCorrect: true,
            feedback: '🎉 Rất chuyên nghiệp và cẩn thận! Ghi chép rõ ràng là kỹ năng của một học sinh xuất sắc và tự lập.'
          },
          {
            key: 'C',
            text: 'Không thèm nghe, tối về nhắn tin lên nhóm hỏi bạn xem cô dặn gì.',
            isCorrect: false,
            feedback: '💡 Hỏi bạn làm phiền thời gian học của bạn và đôi khi bạn nhớ nhầm thì con cũng sẽ làm sai theo bạn đấy.'
          },
          {
            key: 'D',
            text: 'Viết nguệch ngoạc lên mặt bàn học của lớp rồi hôm sau đến lớp xem lại.',
            isCorrect: false,
            feedback: '💡 Vẽ bậy lên bàn là vi phạm nội quy bảo vệ của công và về nhà con đâu thể xem bàn học ở trường được!'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Sổ tay dặn dò - Ghi chép rõ ràng - Không lo quên việc!',
        summary: 'Cuốn sổ dặn dò là chiếc la bàn giúp con quản lý việc học hiệu quả. Thói quen ghi chép cẩn thận từ nhỏ sẽ giúp con trở thành người làm việc có kế hoạch và uy tín.',
        actionSteps: [
          'Bước 1: Luôn để sổ dặn dò ở ngăn dễ lấy nhất trong cặp sách.',
          'Bước 2: Lắng nghe cô dặn và ghi chép ngắn gọn, đủ ý: Tên môn, bài tập, trang sách, hạn nộp.',
          'Bước 3: Về nhà mở sổ ra đối chiếu và tích dấu tick khi hoàn thành từng việc.'
        ],
        parentTeacherTip: 'Hàng ngày ba mẹ hãy cùng con ký sổ dặn dò sau khi con đã tự hoàn thành và tích kiểm tra các mục.'
      }
    },
    {
      title: 'Tự gọt bút chì, kiểm tra mực bút và chuẩn bị đồ dùng học tập',
      icon: '✏️',
      dur: '10 phút',
      objective: 'Giúp học sinh biết chăm sóc dụng cụ học tập của mình, rèn luyện sự khéo léo, cẩn thận và sẵn sàng cho các giờ viết trên lớp.',
      situation: 'Tối nay kiểm tra hộp bút, con thấy cả 3 cây bút chì đều bị cùn và gãy ngòi, bút mực thì gần cạn mực, cục tẩy bị dính bẩn. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ chăm sóc hộp bút của mình như thế nào?',
        correctKey: 'C',
        hint: 'Đồ dùng học tập sẵn sàng sẽ giúp con viết bài trôi chảy và đẹp mắt!',
        options: [
          {
            key: 'A',
            text: 'Cứ để nguyên như vậy, ngày mai đến lớp mượn gọt bút của bạn hoặc nhờ cô gọt hộ.',
            isCorrect: false,
            feedback: '💡 Trong giờ học làm vậy sẽ gây mất trật tự lớp học và làm phiền cô giáo cùng các bạn xung quanh.'
          },
          {
            key: 'B',
            text: 'Dùng tay bẻ gãy ngòi chì luôn rồi vứt đi, đòi ba mẹ mua ngay bộ bút chì mới đắt tiền hơn.',
            isCorrect: false,
            feedback: '💡 Như vậy là lãng phí và không biết trân trọng đồ dùng học tập của mình con nhé.'
          },
          {
            key: 'C',
            text: 'Lấy gọt bút chì tự gọt nhọn vừa phải, gom vỏ chì vào sọt rác, bơm đầy mực hoặc thay ống mực mới, cất gọn vào hộp bút.',
            isCorrect: true,
            feedback: '🎉 Con thật khéo tay và chu đáo! Một hộp bút tinh tươm với những cây bút sắc nét sẽ giúp chữ viết của con đẹp hơn nhiều.'
          },
          {
            key: 'D',
            text: 'Nhờ ba hoặc mẹ gọt bút và bơm mực hộ vì con sợ bị bẩn tay.',
            isCorrect: false,
            feedback: '💡 Con hoàn toàn có thể tự làm được! Rửa tay sau khi bơm mực là sạch ngay, tự làm đồ của mình mới thực sự tự lập.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Bút mực tinh tươm - Ngòi chì sắc nét - Nét chữ nết người!',
        summary: 'Biết chăm sóc đồ dùng học tập là bước đầu tiên để học sinh tôn trọng con chữ và tri thức. Cây bút được chuẩn bị chu đáo sẽ mang lại cho con những trang vở sạch đẹp điểm mười.',
        actionSteps: [
          'Bước 1: Kiểm tra đầu ngòi của các bút chì và lượng mực của bút mực mỗi tối.',
          'Bước 2: Gọt bút chì vừa tầm, không gọt quá nhọn dễ gãy; bơm mực cẩn thận không để vương vãi.',
          'Bước 3: Lau sạch vỏ bút và xếp ngay ngắn vào hộp bút vải mềm.'
        ],
        parentTeacherTip: 'Hướng dẫn con cách cầm máy gọt chì quay tay an toàn và cách dùng khăn giấy lót khi bơm mực để giữ vệ sinh.'
      }
    },
    {
      title: 'Bảo quản cặp sách nhẹ gọn: Bỏ bớt sách vở không cần thiết',
      icon: '📚',
      dur: '10 - 12 phút',
      objective: 'Bảo vệ cột sống học sinh khỏi tình trạng gù lưng do mang cặp quá nặng; hình thành kỹ năng sàng lọc đồ dùng khoa học.',
      situation: 'Cặp sách của con nặng trĩu vì chứa cả truyện tranh, đồ chơi mang từ hôm trước, sách của cả tuần chưa dọn ra và các chai lọ linh tinh. Khi đeo cặp lên vai con cảm thấy đau vai và lưng bị còng xuống. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ làm gì để giảm tải cho chiếc cặp của mình?',
        correctKey: 'A',
        hint: 'Chỉ mang những gì ngày mai học, bỏ lại những đồ không cần thiết ở nhà!',
        options: [
          {
            key: 'A',
            text: 'Bỏ hết đồ ra ngoài, chỉ giữ lại đúng sách vở của ngày mai theo thời khóa biểu, để truyện tranh và đồ chơi ở nhà.',
            isCorrect: true,
            feedback: '🎉 Rất thông minh và khoa học! Chiếc cặp nhẹ nhàng sẽ giúp con đi lại thoăn thoắt, giữ cho lưng thẳng và dáng đi khỏe khoắn.'
          },
          {
            key: 'B',
            text: 'Cứ để tất cả mọi thứ trong cặp để đỡ phải dọn, nặng thì nhờ ba mẹ xách hộ từ cổng vào lớp.',
            isCorrect: false,
            feedback: '💡 Ba mẹ không thể đi theo xách cặp vào tận lớp cho con mãi được. Tự làm nhẹ cặp là bảo vệ chính sức khỏe của con.'
          },
          {
            key: 'C',
            text: 'Bỏ hết sách vở học ở nhà, chỉ mang mỗi đồ chơi và truyện tranh đến lớp.',
            isCorrect: false,
            feedback: '💡 Đến lớp để học tập chứ không phải để đọc truyện tranh hay chơi đồ chơi con nhé! Không có sách vở con sẽ không học được.'
          },
          {
            key: 'D',
            text: 'Bực bội vứt cặp xuống đất và không chịu đi học vì cặp quá nặng.',
            isCorrect: false,
            feedback: '💡 Cáu kỉnh không giải quyết được vấn đề! Chỉ cần bỏ ra 3 phút dọn bớt đồ là chiếc cặp sẽ nhẹ bẫng ngay.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Cặp sách nhẹ êm - Vai ngay lưng thẳng - Tự tin bước nhanh!',
        summary: 'Một chiếc cặp sách chuẩn y khoa không nên nặng quá 10% trọng lượng cơ thể học sinh. Thường xuyên dọn dẹp cặp giúp con rèn luyện tư duy tinh gọn và bảo vệ sức khỏe lâu dài.',
        actionSteps: [
          'Bước 1: Đổ toàn bộ đồ trong cặp ra giường hoặc thảm sạch một tuần một lần.',
          'Bước 2: Phân loại: Sách ngày mai cất vào cặp; sách cũ cất lên giá; giấy rác bỏ đi.',
          'Bước 3: Kiểm tra cân nặng cặp: cảm thấy nhẹ nhàng, vừa vặn với bờ vai.'
        ],
        parentTeacherTip: 'Khuyên phụ huynh chọn cho con loại cặp chống gù có đai trợ lực ngực và hông, hướng dẫn con cách chia đều sách nặng sát lưng.'
      }
    },
    {
      title: 'Tự bảo quản đồ dùng cá nhân: Không làm rơi mất bút, tẩy, thước',
      icon: '📏',
      dur: '10 phút',
      objective: 'Rèn luyện tính cẩn thận, ý thức trân trọng của cải và tiết kiệm, không làm rơi rớt hay thất lạc đồ dùng học tập.',
      situation: 'Trong giờ ra chơi, con và các bạn chơi đùa quanh lớp học. Khi vào tiết học tiếp theo, con nhìn xuống bàn và không thấy hộp bút cùng cục tẩy gọt chì của mình đâu nữa. Con sẽ làm gì?',
      quiz: {
        question: 'Con nên có thói quen gì để không bao giờ làm mất đồ dùng?',
        correctKey: 'C',
        hint: 'Dùng xong cất ngay vào hộp bút là bí quyết số một để đồ đạc không bao giờ thất lạc!',
        options: [
          {
            key: 'A',
            text: 'Mặc kệ, về nhà bảo ba mẹ mua cho hộp bút mới to hơn, đẹp hơn.',
            isCorrect: false,
            feedback: '💡 Đồ dùng mua bằng tiền mồ hôi công sức của ba mẹ, nếu con làm mất liên tục sẽ tạo thói quen cẩu thả và hoang phí.'
          },
          {
            key: 'B',
            text: 'Đổ lỗi cho bạn bên cạnh lấy cắp và to tiếng gây gổ với bạn trong lớp.',
            isCorrect: false,
            feedback: '💡 Đổ lỗi cho bạn khi chưa tìm hiểu rõ sẽ làm tổn thương tình bạn và gây xích mích không đáng có.'
          },
          {
            key: 'C',
            text: 'Bình tĩnh tìm quanh ngăn bàn và dưới sàn, đồng thời rèn thói quen: mỗi khi đứng dậy ra chơi phải cất đồ vào hộp bút và kéo khóa cặp.',
            isCorrect: true,
            feedback: '🎉 Con xử lý rất điềm đạm và chuẩn mực! Thói quen dùng xong cất ngay là bí quyết giúp con giữ đồ đạc luôn nguyên vẹn suốt cả năm học.'
          },
          {
            key: 'D',
            text: 'Khóc toáng lên giữa lớp để cô giáo và các bạn phải đi tìm hộ.',
            isCorrect: false,
            feedback: '💡 Khóc không tìm được đồ dùng con ơi! Hãy giữ bình tĩnh, quan sát kỹ các ngóc ngách hoặc hỏi bạn xung quanh một cách lịch sự.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Dùng xong cất ngay - Đúng nơi quy định - Đồ dùng bền lâu!',
        summary: 'Biết gìn giữ đồ dùng cá nhân là biểu hiện của người cẩn thận và biết quý trọng đồng tiền. Đồ dùng sạch đẹp, đầy đủ sẽ giúp con luôn tự tin trong mỗi giờ học.',
        actionSteps: [
          'Bước 1: Dán nhãn tên nhỏ lên từng cây bút, thước kẻ, cục tẩy của mình.',
          'Bước 2: Thiết lập phản xạ: Cầm bút xong là cất ngay vào hộp bút, không để lăn lóc trên mép bàn.',
          'Bước 3: Trước khi ra về, kiểm tra lại mặt bàn và ngăn bàn xem còn sót đồ gì không.'
        ],
        parentTeacherTip: 'Khuyên phụ huynh cùng con dán sticker tên con lên đồ dùng để nếu rơi ở trường, các bạn và cô giáo dễ dàng trả lại cho bé.'
      }
    },
    {
      title: 'Tự sắp xếp quần áo cá nhân vào ngăn tủ riêng của mình',
      icon: '👕',
      dur: '12 - 15 phút',
      objective: 'Dạy học sinh kỹ năng gấp quần áo cơ bản, phân loại đồ theo mùa và tự quản lý tủ quần áo của mình gọn gàng.',
      situation: 'Mẹ vừa phơi khô và đem vào cho con một chồng quần áo sạch gồm: áo thun, quần soóc, đồ lót và tất chân. Tủ quần áo của con đang hơi lộn xộn. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ sắp xếp chồng quần áo này như thế nào?',
        correctKey: 'B',
        hint: 'Phân loại đồ theo từng ngăn sẽ giúp con mỗi sáng lấy đồ chỉ mất 10 giây!',
        options: [
          {
            key: 'A',
            text: 'Vò tròn toàn bộ quần áo nhét đại vào một góc tủ rồi đóng sập cửa tủ lại.',
            isCorrect: false,
            feedback: '💡 Nhét như vậy quần áo sẽ bị nhăn nhúm, ẩm mốc và khi cần tìm một chiếc áo con sẽ phải bới tung cả tủ lên.'
          },
          {
            key: 'B',
            text: 'Gấp phẳng từng chiếc áo, quần, cuộn tròn đôi tất cùng màu và xếp vào đúng các ngăn quy định trong tủ.',
            isCorrect: true,
            feedback: '🎉 Bàn tay con thật khéo léo và chăm chỉ! Một ngăn tủ gọn gàng thể hiện con là người có óc tổ chức tuyệt vời và rất thương yêu mẹ.'
          },
          {
            key: 'C',
            text: 'Để nguyên chồng quần áo trên giường để mẹ gấp hộ, mình đi chơi trước.',
            isCorrect: false,
            feedback: '💡 Mẹ đã đi làm và nấu ăn rất vất vả rồi, tự gấp quần áo của mình là hành động giúp đỡ mẹ thiết thực nhất.'
          },
          {
            key: 'D',
            text: 'Ném quần áo sạch xuống sàn nhà để chơi trò ném bóng cùng em nhỏ.',
            isCorrect: false,
            feedback: '💡 Quần áo sạch vừa giặt xong sẽ bị dính bụi bẩn và vi khuẩn trên sàn, mẹ sẽ phải giặt lại từ đầu rất vất vả.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Gấp áo ngay ngắn - Xếp quần thẳng hàng - Tủ đẹp tinh tươm!',
        summary: 'Tự gấp và sắp xếp quần áo rèn luyện tính kiên nhẫn, sự khéo léo của đôi bàn tay và lòng biết ơn đối với công việc nhà của cha mẹ.',
        actionSteps: [
          'Bước 1: Trải áo/quần ra mặt phẳng sạch, vuốt phẳng các nếp nhăn.',
          'Bước 2: Gấp hai tay áo vào trong, gấp đôi theo chiều dọc rồi gấp theo chiều ngang.',
          'Bước 3: Đặt vào ngăn tủ tương ứng: ngăn áo, ngăn quần, ngăn tất riêng biệt.'
        ],
        parentTeacherTip: 'Dạy con phương pháp cuộn quần áo kiểu KonMari để tiết kiệm diện tích và giúp con dễ nhìn thấy màu áo mình thích.'
      }
    },
    {
      title: 'Tự biết chuẩn bị áo mưa hoặc ô trong cặp phòng khi trời mưa',
      icon: '☂️',
      dur: '8 - 10 phút',
      objective: 'Tập cho trẻ thói quen quan sát thời tiết, có sự chuẩn bị chu đáo để bảo vệ sức khỏe không bị ướt mưa hay cảm lạnh.',
      situation: 'Sáng nay chuẩn bị đi học, con nhìn qua cửa sổ thấy bầu trời nhiều mây đen, gió thổi mạnh và đài dự báo thời tiết báo chiều nay có mưa rào. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ chuẩn bị gì cho ngày thời tiết thất thường?',
        correctKey: 'C',
        hint: 'Cẩn tắc vô áy náy - Mang sẵn áo mưa sẽ giúp con luôn khô ráo và an toàn!',
        options: [
          {
            key: 'A',
            text: 'Không cần mang gì, mưa thì chạy thật nhanh dưới mưa cho mát.',
            isCorrect: false,
            feedback: '💡 Tắm mưa rất dễ bị cảm sốt, viêm phổi và làm ướt hết sách vở trong cặp sách con nhé!'
          },
          {
            key: 'B',
            text: 'Nghĩ rằng ba mẹ sẽ mang ô đến đón tận cửa lớp nên không cần lo lắng gì cả.',
            isCorrect: false,
            feedback: '💡 Nếu trời mưa kẹt xe ba mẹ đến muộn thì sao? Tự mình có áo mưa nhỏ sẽ giúp con chủ động bảo vệ bản thân.'
          },
          {
            key: 'C',
            text: 'Chủ động lấy chiếc áo mưa học sinh gấp gọn hoặc chiếc ô gấp bỏ vào ngăn phụ của cặp sách trước khi ra khỏi nhà.',
            isCorrect: true,
            feedback: '🎉 Con thật chu đáo và biết quan sát! Chuẩn bị trước như vậy giúp con luôn an toàn và khỏe mạnh trong mọi thời tiết.'
          },
          {
            key: 'D',
            text: 'Xin nghỉ học luôn ở nhà vì sợ trời mưa to làm bẩn giày dép.',
            isCorrect: false,
            feedback: '💡 Không nên nghỉ học vì lý do nhỏ như vậy! Chỉ cần trang bị đầy đủ áo mưa là con có thể vững bước đến trường tiếp thu kiến thức.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Áo mưa trong cặp - Chẳng ngại gió sương - Khỏe mạnh tới trường!',
        summary: 'Biết dự liệu và chuẩn bị cho những thay đổi của thời tiết là kỹ năng sinh tồn và tự lập quan trọng giúp con không bao giờ rơi vào thế bị động.',
        actionSteps: [
          'Bước 1: Tập thói quen nhìn trời hoặc hỏi người lớn về dự báo thời tiết mỗi sáng.',
          'Bước 2: Gấp gọn áo mưa cá nhân cho vào ngăn đáy hoặc ngăn hông cặp sách.',
          'Bước 3: Sau khi dùng áo mưa về nhà, nhớ phơi khô áo mưa trước khi gấp lại để tránh bị mốc hôi.'
        ],
        parentTeacherTip: 'Chọn cho con loại áo mưa cánh dơi hoặc bộ áo mưa có vạt trùm balo chống ướt sách vở và có dải phản quang an toàn khi trời tối.'
      }
    },
    {
      title: 'Tự chuẩn bị bình nước uống cá nhân mang theo đến trường',
      icon: '💧',
      dur: '8 - 10 phút',
      objective: 'Hình thành thói quen uống nước sạch, giữ vệ sinh nguồn nước cá nhân để phòng ngừa bệnh truyền nhiễm đường hô hấp và tiêu hóa.',
      situation: 'Trước khi xỏ giày đi học, bình nước cá nhân của con vẫn còn trống rỗng trên kệ bếp. Bạn rủ con thôi khỏi mang, đến lớp uống chung bình với các bạn hoặc uống vòi nước công cộng. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ làm gì với bình nước uống của mình?',
        correctKey: 'A',
        hint: 'Uống chung nước với người khác rất dễ lây vi khuẩn cảm cúm, hãy dùng bình riêng của mình!',
        options: [
          {
            key: 'A',
            text: 'Tráng sạch bình, rót đầy nước lọc đun sôi để nguội từ bình lọc của gia đình, vặn chặt nắp và cài vào bên hông cặp.',
            isCorrect: true,
            feedback: '🎉 Con có ý thức vệ sinh và chăm sóc cơ thể tuyệt vời! Mang nước riêng vừa an toàn vệ sinh, vừa giúp cơ thể đủ nước cả ngày.'
          },
          {
            key: 'B',
            text: 'Nghe lời bạn, không mang bình nước để cặp cho nhẹ, khát thì mượn bình bạn uống ghé miệng vào.',
            isCorrect: false,
            feedback: '💡 Uống chung bình nước rất dễ lây các bệnh truyền nhiễm như cảm cúm, quai bị, tay chân miệng con nhé!'
          },
          {
            key: 'C',
            text: 'Đòi mẹ cho tiền để đến cổng trường mua nước ngọt có gas hoặc trà sữa uống thay nước lọc.',
            isCorrect: false,
            feedback: '💡 Uống nước ngọt có gas và nước ngọt vỉa hè thường xuyên sẽ gây sâu răng, béo phì và không tốt cho dạ dày.'
          },
          {
            key: 'D',
            text: 'Cứ để bình rỗng mang đi, nhịn uống nước cả ngày cho đỡ phải đi vệ sinh ở trường.',
            isCorrect: false,
            feedback: '💡 Nhịn uống nước rất nguy hiểm, làm cơ thể bị thiếu nước, mệt mỏi, đau đầu và có hại cho thận.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Bình nước cá nhân - Nước sạch mỗi ngày - Tươi tắn học hay!',
        summary: 'Uống đủ nước là chìa khóa để não bộ tập trung và cơ thể khỏe mạnh. Tự chuẩn bị bình nước riêng là thói quen văn minh của học sinh thời đại mới.',
        actionSteps: [
          'Bước 1: Rửa sạch bình nước bằng nước ấm sau mỗi ngày đi học về.',
          'Bước 2: Mỗi sáng lấy nước lọc tinh khiết vào bình khoảng 500ml - 750ml.',
          'Bước 3: Vặn chặt nắp thử xem có rò rỉ không rồi đặt vào túi lưới bên hông cặp.'
        ],
        parentTeacherTip: 'Chọn bình nước chất liệu nhựa Tritan an toàn không chứa BPA hoặc bình inox giữ nhiệt có vòi hút tiện lợi cho bé.'
      }
    },
    {
      title: 'Tự dọn dẹp và cất khay ăn bán trú đúng nơi quy định',
      icon: '🍽️',
      dur: '10 phút',
      objective: 'Rèn luyện văn hóa ăn uống văn minh, biết quý trọng hạt cơm người nông dân, giữ vệ sinh phòng ăn bán trú và biết ơn các cô nhà bếp.',
      situation: 'Giờ ăn trưa bán trú tại trường kết thúc, con đã ăn xong suất cơm của mình. Xung quanh bàn ăn có một vài hạt cơm rơi rớt trên bàn, trên khay còn chiếc thìa và khăn giấy ăn đã dùng. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ xử lý khay ăn bán trú của mình như thế nào?',
        correctKey: 'D',
        hint: 'Học sinh văn minh luôn để lại bàn ăn sạch sẽ hơn lúc mình mới ngồi vào!',
        options: [
          {
            key: 'A',
            text: 'Bỏ mặc khay ăn trên bàn rồi chạy vội ra sân chơi đuổi bắt cùng bạn.',
            isCorrect: false,
            feedback: '💡 Để khay ăn bừa bãi sẽ làm các cô bác nhà bếp phải dọn dẹp rất vất vả và làm bàn ăn mất vệ sinh.'
          },
          {
            key: 'B',
            text: 'Dùng thìa gạt toàn bộ cơm thừa và khăn giấy xuống sàn phòng ăn cho nhanh.',
            isCorrect: false,
            feedback: '💡 Gạt xuống sàn sẽ làm sàn nhà bị trơn trượt, các bạn khác đi qua có thể bị trượt ngã nguy hiểm.'
          },
          {
            key: 'C',
            text: 'Nhờ bạn bên cạnh bê khay đi cất hộ mình vì mình lười đi bộ.',
            isCorrect: false,
            feedback: '💡 Mỗi người phải tự chịu trách nhiệm với khay ăn của mình, không nên đùn đẩy việc riêng cho người khác.'
          },
          {
            key: 'D',
            text: 'Gạt thức ăn thừa vào xô quy định, vứt khăn giấy vào thùng rác, xếp thìa ngay ngắn và bê khay chồng lên giá cất khay gọn gàng.',
            isCorrect: true,
            feedback: '🎉 Con là một học sinh cực kỳ văn minh và lịch thiệp! Hành động nhỏ này thể hiện lòng biết ơn sâu sắc đối với các cô bác cấp dưỡng.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Ăn hết phần cơm - Dọn khay sạch sẽ - Văn minh học đường!',
        summary: 'Văn hóa bán trú thể hiện ý thức tập thể của học sinh. Tự dọn sạch chỗ ngồi ăn của mình giúp nhà ăn trường học luôn sạch đẹp và ấm cúng.',
        actionSteps: [
          'Bước 1: Ăn hết khẩu phần, hạn chế làm rơi vãi cơm canh ra bàn.',
          'Bước 2: Gom giấy ăn vào thùng rác, gạt thức ăn thừa vào xô thức ăn thừa.',
          'Bước 3: Đặt thìa, đũa vào rổ riêng và xếp khay inox chồng ngay ngắn vào kệ.'
        ],
        parentTeacherTip: 'Ở nhà, hãy phân công cho con nhiệm vụ dọn bát đũa của mình và lau bàn ăn sau mỗi bữa cơm gia đình.'
      }
    }
  ],

  'Giao tiếp': [
    {
      title: 'Lễ phép khoanh tay chào thầy cô giáo khi vào trường và ra về',
      icon: '🙇',
      dur: '8 - 10 phút',
      objective: 'Giúp học sinh rèn luyện thái độ tôn sư trọng đạo, hình thành nét đẹp lễ phép và phản xạ chào hỏi tự nhiên đối với người lớn.',
      situation: 'Sáng sớm bước vào cổng trường, con nhìn thấy thầy hiệu trưởng và cô giáo chủ nhiệm đang đứng tươi cười đón học sinh. Một nhóm bạn đi trước con mải nói chuyện nên đi thẳng qua mà không chào. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ ứng xử như thế nào khi gặp thầy cô ở sân trường?',
        correctKey: 'B',
        hint: 'Lời chào cao hơn mâm cỗ - Một nụ cười và lời chào lễ phép sẽ làm thầy cô rất vui lòng!',
        options: [
          {
            key: 'A',
            text: 'Cúi gằm mặt xuống đất giả vờ không nhìn thấy thầy cô để khỏi phải chào.',
            isCorrect: false,
            feedback: '💡 Lảng tránh thầy cô là hành động thiếu tự tin và chưa lễ phép. Thầy cô luôn yêu thương và chào đón con mà!'
          },
          {
            key: 'B',
            text: 'Dừng lại một bước, đứng thẳng người, khoanh hai tay trước ngực, mỉm cười và nói to rõ ràng: "Em chào Thầy, em chào Cô ạ!".',
            isCorrect: true,
            feedback: '🎉 Thật đáng khen ngợi! Con là một học sinh ngoan ngoãn và tràn đầy năng lượng tích cực! Lời chào của con làm sáng bừng cả buổi sáng của thầy cô.'
          },
          {
            key: 'C',
            text: 'Vừa chạy vụt qua vừa hét tướng lên một câu rồi phóng thẳng vào lớp.',
            isCorrect: false,
            feedback: '💡 Chào hỏi khi đang chạy nhảy và hét lớn trông rất thiếu trang nghiêm và có thể va chạm vào người khác.'
          },
          {
            key: 'D',
            text: 'Chỉ chào khi thầy cô gọi đích danh tên mình, không thì thôi.',
            isCorrect: false,
            feedback: '💡 Học sinh nên là người chủ động chào hỏi thầy cô giáo trước để thể hiện lòng kính trọng và lễ phép.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Khoanh tay kính cẩn - Nụ cười trên môi - Lễ phép ngoan ngoãn!',
        summary: 'Lời chào là viên gạch đầu tiên xây dựng nhân cách người học sinh. Một đứa trẻ biết cúi đầu chào người lớn sẽ luôn được mọi người yêu quý và chỉ bảo tận tình.',
        actionSteps: [
          'Bước 1: Nhìn thẳng vào thầy cô bằng ánh mắt tôn trọng và nụ cười thân thiện.',
          'Bước 2: Khoanh hai tay ngay ngắn trước ngực, hơi cúi đầu nhẹ.',
          'Bước 3: Nói rõ ràng, âm lượng vừa nghe: "Con/Em chào Thầy/Cô ạ!" cả khi đến và khi ra về.'
        ],
        parentTeacherTip: 'Cha mẹ hãy làm gương bằng cách chủ động chào hỏi người lớn tuổi, bác bảo vệ và hàng xóm khi đưa con đi học.'
      }
    },
    {
      title: 'Giơ tay xin phép trước khi phát biểu ý kiến trong lớp học',
      icon: '✋',
      dur: '10 phút',
      objective: 'Tập cho học sinh thói quen giữ trật tự kỷ luật lớp học, biết chờ đến lượt và tôn trọng không gian phát biểu chung.',
      situation: 'Cô giáo vừa đặt ra một câu đố vui môn Tự nhiên & Xã hội rất thú vị. Con vừa nghĩ ra ngay đáp án đúng và cảm thấy vô cùng hào hứng muốn nói ngay. Trong lớp có nhiều bạn cũng đang xôn xao. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ làm gì để được cô giáo mời trả lời câu hỏi?',
        correctKey: 'C',
        hint: 'Muốn phát biểu thì phải giơ tay xin phép, không nói leo để giữ trật tự lớp!',
        options: [
          {
            key: 'A',
            text: 'Đứng phắt dậy hét to tướng đáp án lên để cô giáo và cả lớp phải nghe thấy mình đầu tiên.',
            isCorrect: false,
            feedback: '💡 Nói leo và hét to sẽ phá vỡ trật tự lớp học, làm cô giáo khó chịu và cướp mất cơ hội suy nghĩ của các bạn khác.'
          },
          {
            key: 'B',
            text: 'Nói thầm vào tai bạn bên cạnh để bạn ấy nói hộ mình.',
            isCorrect: false,
            feedback: '💡 Hãy tự tin nói lên ý kiến của chính mình con nhé! Đừng ngại ngùng giơ tay phát biểu.'
          },
          {
            key: 'C',
            text: 'Ngồi ngay ngắn, giơ cánh tay phải thẳng đứng, mắt nhìn cô giáo và kiên nhẫn chờ cô gọi tên rồi mới đứng dậy trả lời.',
            isCorrect: true,
            feedback: '🎉 Con là một học sinh rất văn minh và hiểu luật lệ lớp học! Sự kiên nhẫn và cử chỉ giơ tay đẹp sẽ được cô giáo đánh giá rất cao.'
          },
          {
            key: 'D',
            text: 'Đập mạnh tay xuống bàn để gây sự chú ý của cô giáo.',
            isCorrect: false,
            feedback: '💡 Đập bàn là hành động thô lỗ và gây ồn ào, không phù hợp trong môi trường lớp học tôn nghiêm.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Giơ tay ngay ngắn - Chờ lượt phát biểu - Lớp học văn minh!',
        summary: 'Giơ tay xin phép phát biểu thể hiện sự tự chủ và tôn trọng tập thể. Khi mọi người lắng nghe nhau theo lượt, lớp học sẽ trở thành nơi trao đổi tri thức tuyệt vời.',
        actionSteps: [
          'Bước 1: Suy nghĩ kỹ câu trả lời trong đầu trước khi giơ tay.',
          'Bước 2: Cánh tay giơ thẳng, khép các ngón tay, tư thế ngồi thẳng lưng.',
          'Bước 3: Khi được cô gọi, đứng dậy đàng hoàng, nói: "Thưa cô, con xin trả lời..." rõ ràng.'
        ],
        parentTeacherTip: 'Trong các buổi trò chuyện gia đình, khuyến khích các con cũng đợi người khác nói xong rồi mới phát biểu ý kiến của mình.'
      }
    },
    {
      title: 'Kỹ năng thuyết trình: Đứng thẳng, nói to rõ ràng trước tập thể',
      icon: '🎤',
      dur: '12 - 15 phút',
      objective: 'Giúp học sinh vượt qua nỗi sợ đám đông, tự tin đứng trước lớp chia sẻ ý tưởng với giọng nói rõ ràng và ánh mắt tự tin.',
      situation: 'Hôm nay đến lượt nhóm con lên bảng thuyết trình về chủ đề "Bảo vệ môi trường". Khi đứng trước cả lớp, nhìn thấy mấy chục ánh mắt đang nhìn mình, con cảm thấy tim đập thình thịch, hai chân hơi run và muốn trốn sau lưng bạn. Con sẽ làm gì?',
      quiz: {
        question: 'Làm thế nào để con vượt qua sự hồi hộp và thuyết trình tự tin?',
        correctKey: 'A',
        hint: 'Hít sâu một hơi, đứng thẳng hai chân và mỉm cười nhìn vào mắt các bạn bè!',
        options: [
          {
            key: 'A',
            text: 'Hít một hơi thật sâu, đứng thẳng người, mỉm cười nhìn cả lớp và nói to, dõng dạc câu chào mở đầu.',
            isCorrect: true,
            feedback: '🎉 Quá xuất sắc! Hít sâu giúp nhịp tim đập chậm lại và cung cấp oxy lên não. Dáng đứng thẳng giúp con toát lên vẻ tự tin cuốn hút cả lớp.'
          },
          {
            key: 'B',
            text: 'Cúi gằm mặt xuống tờ giấy đọc lí nhí như muỗi kêu để cho nhanh xong chuyện.',
            isCorrect: false,
            feedback: '💡 Đọc lí nhí sẽ khiến các bạn bên dưới không nghe thấy gì và bài thuyết trình của nhóm con sẽ không đạt điểm tốt.'
          },
          {
            key: 'C',
            text: 'Vặn vẹo người, liên tục gãi đầu, rung chân và quay lưng về phía khán giả.',
            isCorrect: false,
            feedback: '💡 Ngôn ngữ cơ thể bồn chồn sẽ làm người nghe cảm thấy khó chịu. Hãy đứng vững vàng trên hai bàn chân con nhé.'
          },
          {
            key: 'D',
            text: 'Bật khóc và chạy ngay về chỗ ngồi từ chối thuyết trình.',
            isCorrect: false,
            feedback: '💡 Đừng bỏ cuộc con ơi! Ai lần đầu đứng trước lớp cũng có chút run sợ, chỉ cần dũng cảm nói câu đầu tiên là con sẽ làm được.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Dáng đứng tự tin - Giọng nói dõng dạc - Tỏa sáng trước lớp!',
        summary: 'Thuyết trình tự tin là chìa khóa mở ra cánh cửa lãnh đạo tương lai. Khi con dám cất tiếng nói chia sẻ tri thức, con đang truyền cảm hứng cho tất cả mọi người xung quanh.',
        actionSteps: [
          'Bước 1: Đứng thẳng, hai chân mở rộng bằng vai, hai tay buông tự nhiên hoặc cầm tài liệu ngang ngực.',
          'Bước 2: Quét ánh mắt thân thiện nhìn sang các bạn ở ba phía: trái, giữa và phải.',
          'Bước 3: Nói to hơn bình thường một chút, phát âm tròn vành rõ chữ và kết thúc bằng lời cảm ơn.'
        ],
        parentTeacherTip: 'Cho con tập đứng trước gương ở nhà hoặc quay video ngắn cho con xem lại để con tự nhận ra nét đáng yêu và tự tin của mình.'
      }
    },
    {
      title: 'Lắng nghe bạn phát biểu: Không cười cợt hay nói chen ngang',
      icon: '👂',
      dur: '10 - 12 phút',
      objective: 'Dạy học sinh lòng thấu cảm và sự tôn trọng người khác, biết lắng nghe chân thành ngay cả khi bạn phát biểu chưa chính xác.',
      situation: 'Bạn Nam lên bảng trả lời câu hỏi môn Toán. Do quá hồi hộp nên bạn đọc nhầm kết quả phép tính và nói hơi lắp bắp. Một vài bạn ở bàn cuối khúc khích cười trêu chọc bạn. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ thể hiện thái độ lắng nghe văn minh như thế nào?',
        correctKey: 'D',
        hint: 'Đặt mình vào vị trí của bạn - Nếu mình là người bị cười trêu thì mình sẽ buồn thế nào?',
        options: [
          {
            key: 'A',
            text: 'Cười to hùa theo các bạn và chỉ tay trêu chọc bạn Nam.',
            isCorrect: false,
            feedback: '💡 Cười cợt sai lầm của người khác là hành vi bất lịch sự và làm tổn thương sâu sắc lòng tự trọng của bạn.'
          },
          {
            key: 'B',
            text: 'Cắt ngang lời bạn, hét to kết quả đúng lên để chứng tỏ mình giỏi hơn bạn.',
            isCorrect: false,
            feedback: '💡 Chen ngang là thiếu tôn trọng. Hãy đợi bạn nói xong và cô giáo cho phép mới bổ sung ý kiến.'
          },
          {
            key: 'C',
            text: 'Lấy đồ chơi ra nghịch vì nghĩ phần phát biểu của bạn không liên quan đến mình.',
            isCorrect: false,
            feedback: '💡 Không tập trung lắng nghe sẽ khiến con bỏ lỡ những bài học bổ ích từ việc sửa sai của cô giáo.'
          },
          {
            key: 'D',
            text: 'Giữ trật tự nghiêm túc, hướng ánh mắt khích lệ về phía bạn Nam và vỗ tay động viên khi bạn hoàn thành câu trả lời.',
            isCorrect: true,
            feedback: '🎉 Con có một trái tim nhân hậu và phong thái rất cao thượng! Sự cảm thông của con sẽ tiếp thêm dũng khí to lớn cho bạn Nam.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Lắng nghe tôn trọng - Không trêu bạn sai - Tình bạn thêm đẹp!',
        summary: 'Biết lắng nghe là phẩm chất của người có học thức và sự tinh tế. Ai trong chúng ta cũng có lúc mắc sai lầm, điều quan trọng là cùng nhau học hỏi và tiến bộ.',
        actionSteps: [
          'Bước 1: Hướng ánh mắt và tư thế về phía người đang phát biểu.',
          'Bước 2: Giữ im lặng tuyệt đối, không làm việc riêng hoặc thì thầm bàn tán.',
          'Bước 3: Ghi nhận ý hay của bạn và góp ý tế nhị nếu được thầy cô yêu cầu nhận xét.'
        ],
        parentTeacherTip: 'Dạy con câu ngạn ngữ: "Nói là gieo, nghe là gặt" để con hiểu giá trị của việc chăm chú lắng nghe người khác.'
      }
    },
    {
      title: 'Kỹ năng làm việc nhóm: Biết lắng nghe và hợp tác cùng bạn',
      icon: '🤝',
      dur: '15 phút',
      objective: 'Phát triển kỹ năng hợp tác đồng đội, biết đóng góp ý kiến mang tính xây dựng và tôn trọng sự phân công trong nhóm học tập.',
      situation: 'Trong tiết Hoạt động trải nghiệm, nhóm con gồm 4 bạn được giao vẽ một bức tranh về chủ đề "Ngôi trường mơ ước". Hai bạn trong nhóm tranh cãi gay gắt vì một bạn muốn vẽ lâu đài, một bạn muốn vẽ trường học trên mây. Thời gian sắp hết. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ đóng vai trò hòa giải và kết nối nhóm như thế nào?',
        correctKey: 'B',
        hint: 'Làm việc nhóm là tìm tiếng nói chung và kết hợp những ý tưởng sáng tạo lại với nhau!',
        options: [
          {
            key: 'A',
            text: 'Bỏ mặc nhóm cãi nhau, tự mình lấy một tờ giấy riêng ngồi vẽ một mình cho đỡ bực.',
            isCorrect: false,
            feedback: '💡 Tách nhóm ra một mình sẽ khiến cả nhóm bị trừ điểm tinh thần đồng đội và bài tập không được hoàn thành.'
          },
          {
            key: 'B',
            text: 'Lắng nghe cả hai bạn và gợi ý giải pháp kết hợp: "Hay là chúng mình vẽ một trường học hình lâu đài nằm trên những đám mây ngũ sắc nhé!".',
            isCorrect: true,
            feedback: '🎉 Quá xuất sắc! Con có tố chất của một người đội trưởng tài ba! Ý tưởng kết hợp hòa bình giúp nhóm đoàn kết và bài vẽ trở nên độc đáo hơn hẳn.'
          },
          {
            key: 'C',
            text: 'Hùa theo bạn thân của mình để chê bai ý tưởng của bạn còn lại là xấu xí.',
            isCorrect: false,
            feedback: '💡 Bè phái chê bai sẽ làm tinh thần nhóm tan vỡ và làm bạn bè tủi thân.'
          },
          {
            key: 'D',
            text: 'Giật lấy hộp màu và tờ giấy vẽ rồi vẽ theo ý mình, không cho ai tham gia.',
            isCorrect: false,
            feedback: '💡 Độc đoán ép buộc người khác là tối kỵ trong làm việc nhóm. Nhóm cần sự chung tay của tất cả các thành viên.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Hợp tác sẻ chia - Lắng nghe thấu hiểu - Cùng nhau chiến thắng!',
        summary: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao. Khi biết lắng nghe và tôn trọng ý tưởng của nhau, sức mạnh tập thể sẽ tạo nên những điều kỳ diệu.',
        actionSteps: [
          'Bước 1: Bầu nhóm trưởng và phân chia công việc cụ thể rõ ràng cho từng bạn.',
          'Bước 2: Mỗi người lần lượt trình bày ý kiến, không ai được ngắt lời ai.',
          'Bước 3: Thống nhất phương án tối ưu dựa trên biểu quyết và cùng nhau bắt tay hoàn thành.'
        ],
        parentTeacherTip: 'Tổ chức các trò chơi gia đình như cùng nhau nấu ăn, cùng nhau xếp lego để con rèn luyện thói quen phối hợp với mọi người.'
      }
    },
    {
      title: 'Cách mượn và gửi trả đồ dùng học tập của bạn đúng hẹn',
      icon: '🎁',
      dur: '10 phút',
      objective: 'Dạy học sinh văn hóa mượn đồ lịch sự, biết bảo quản đồ dùng của bạn cẩn thận và trả lại đúng hẹn kèm lời cảm ơn chân thành.',
      situation: 'Hôm nay con quên mang compa trong giờ Toán. Bạn Mai ngồi bàn bên có hai chiếc compa và vui vẻ cho con mượn một chiếc. Khi dùng xong con thấy compa của bạn rất xịn. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ làm gì sau khi dùng xong đồ mượn của bạn?',
        correctKey: 'A',
        hint: 'Đồ mượn phải giữ gìn cẩn thận hơn đồ của mình và trả ngay khi dùng xong!',
        options: [
          {
            key: 'A',
            text: 'Kiểm tra compa nguyên vẹn, cất cẩn thận và trả lại tận tay bạn Mai ngay khi hết giờ, kèm nụ cười và lời nói: "Cảm ơn bạn đã cho mình mượn nhé!".',
            isCorrect: true,
            feedback: '🎉 Con là một người bạn tuyệt vời và rất đáng tin cậy! Thái độ mượn trả đàng hoàng này sẽ khiến ai cũng quý mến và sẵn sàng giúp đỡ con.'
          },
          {
            key: 'B',
            text: 'Cứ nhét compa vào cặp mình mang về nhà dùng tiếp, bao giờ bạn hỏi đòi mới trả.',
            isCorrect: false,
            feedback: '💡 Tự ý mang về nhà là sai con nhé! Tối về bạn Mai cần compa làm bài tập sẽ không có để dùng đấy.'
          },
          {
            key: 'C',
            text: 'Quăng compa qua bàn bạn một cách cẩu thả mà không nói một lời nào.',
            isCorrect: false,
            feedback: '💡 Quăng ném đồ có thể làm gãy đầu ngòi compa và hành động đó thể hiện sự vô ơn, bất lịch sự.'
          },
          {
            key: 'D',
            text: 'Làm hỏng đầu chì của compa rồi giấu nhẹm đi, bảo là bạn cho mượn từ đầu đã hỏng.',
            isCorrect: false,
            feedback: '💡 Nếu lỡ làm hỏng phải thành thật xin lỗi và đền bù cho bạn. Nói dối sẽ làm mất hoàn toàn lòng tin của bạn bè.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Hỏi mượn nhã nhặn - Giữ gìn nâng niu - Trả đúng hẹn ngay!',
        summary: 'Cách con đối xử với đồ dùng của người khác phản ánh nhân cách và chữ tín của con. Có mượn có trả, đúng hẹn đàng hoàng thì tình bạn mới bền chặt.',
        actionSteps: [
          'Bước 1: Hỏi xin phép đàng hoàng: "Bạn cho mình mượn chiếc compa một lát được không?".',
          'Bước 2: Sử dụng cẩn thận, không làm bẩn, không làm rơi vỡ hay vẽ bậy lên đồ của bạn.',
          'Bước 3: Trả lại tận tay ngay sau khi dùng xong cùng lời cảm ơn ấm áp.'
        ],
        parentTeacherTip: 'Dạy con nguyên tắc: Không bao giờ tự ý lấy đồ trong balo hay bàn học của người khác khi chưa được sự đồng ý.'
      }
    },
    {
      title: 'Biết nói "Cảm ơn" khi được giúp và "Xin lỗi" khi vô ý va vào bạn',
      icon: '🌸',
      dur: '8 - 10 phút',
      objective: 'Hình thành phản xạ sử dụng hai câu thần chú lịch thiệp "Cảm ơn" và "Xin lỗi" trong mọi tình huống giao tiếp đời sống hàng ngày.',
      situation: 'Giờ ra chơi con chạy vội ra cửa lớp và vô tình va phải bạn Lan làm rơi cuốn truyện tranh trên tay bạn xuống sàn nhà. Cả hai bạn đều hơi giật mình. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ xử lý tình huống va chạm này như thế nào?',
        correctKey: 'C',
        hint: 'Hai từ kỳ diệu "Xin lỗi" nói ra kịp thời sẽ xua tan mọi sự giận dữ!',
        options: [
          {
            key: 'A',
            text: 'Trợn mắt lườm bạn và quát: "Đi đứng kiểu gì mà không nhìn đường thế hả!".',
            isCorrect: false,
            feedback: '💡 Mình là người va vào bạn mà lại quát mắng bạn là sai hoàn toàn và thể hiện sự hung hăng, thiếu giáo dục.'
          },
          {
            key: 'B',
            text: 'Cứ thế chạy vụt đi coi như không có chuyện gì xảy ra.',
            isCorrect: false,
            feedback: '💡 Bỏ chạy thể hiện sự hèn nhát và thiếu trách nhiệm với hành động của chính mình.'
          },
          {
            key: 'C',
            text: 'Dừng lại ngay, đỡ bạn dậy, nhặt cuốn truyện lên phủi bụi và chân thành nói: "Tớ xin lỗi Lan nhé, tớ vội quá nên không chú ý. Bạn có bị đau ở đâu không?".',
            isCorrect: true,
            feedback: '🎉 Con thật lịch thiệp và dũng cảm! Lời xin lỗi chân thành và hành động ân cần sẽ biến một va chạm nhỏ thành một tình bạn đẹp.'
          },
          {
            key: 'D',
            text: 'Đứng cười hề hề chế giễu bạn bị ngã vụng về.',
            isCorrect: false,
            feedback: '💡 Cười trên nỗi đau của người khác là hành vi rất đáng chê trách. Bạn Lan sẽ cảm thấy rất tức giận và tủi thân.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Cảm ơn khi nhận - Xin lỗi khi sai - Lời hay ý đẹp!',
        summary: '"Cảm ơn" và "Xin lỗi" là hai chìa khóa vàng mở rộng trái tim của mọi người. Người biết nhận lỗi chân thành luôn là người dũng cảm và đáng kính trọng nhất.',
        actionSteps: [
          'Bước 1: Nói "Cảm ơn" với ánh mắt chân thành mỗi khi ai đó giúp đỡ, nhường nhịn hay tặng quà cho mình.',
          'Bước 2: Khi lỡ va chạm hoặc làm sai, dừng lại ngay, không tìm lý do thoái thác.',
          'Bước 3: Nhìn vào mắt bạn, nói lời xin lỗi rõ ràng và chủ động giúp bạn khắc phục hậu quả.'
        ],
        parentTeacherTip: 'Ba mẹ hãy thường xuyên nói "Cảm ơn con" khi con giúp việc nhà và "Ba mẹ xin lỗi con" khi người lớn lỡ lời để làm gương cho con.'
      }
    },
    {
      title: 'Nói năng văn minh, lịch sự: Tuyệt đối không nói tục, chửi thề',
      icon: '✨',
      dur: '12 - 15 phút',
      objective: 'Giữ gìn sự trong sáng của tiếng Việt, giúp học sinh xây dựng phong cách giao tiếp tao nhã, nói lời hay ý đẹp và miễn nhiễm với thói hư tật xấu.',
      situation: 'Trong giờ ra chơi ở góc sân trường, có một nhóm bạn lớn hơn đang nói chuyện và liên tục chêm vào những từ ngữ thô tục, chửi bậy để chứng tỏ mình "ngầu". Một bạn quay sang rủ con cùng chửi thề cho vui. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ giữ gìn lời nói của mình như thế nào?',
        correctKey: 'B',
        hint: 'Lời nói thô tục làm bẩn tâm hồn mình, người nói năng lịch sự mới thực sự là người văn minh!',
        options: [
          {
            key: 'A',
            text: 'Bắt chước nói theo ngay để hòa nhập và tỏ ra mình cũng "người lớn, sành điệu".',
            isCorrect: false,
            feedback: '💡 Nói tục không hề ngầu chút nào! Nó chỉ chứng tỏ người nói kém hiểu biết và làm hạ thấp giá trị bản thân trong mắt thầy cô bạn bè.'
          },
          {
            key: 'B',
            text: 'Từ chối dứt khoát: "Mình không thích nói những từ đó vì nó rất xấu", rồi chủ động đi ra khu vực khác chơi trò chơi lành mạnh.',
            isCorrect: true,
            feedback: '🎉 Con có bản lĩnh kiên định tuyệt vời! Biết giữ gìn lời nói trong sáng chứng tỏ con là một học sinh có giáo dưỡng và tự trọng cao.'
          },
          {
            key: 'C',
            text: 'Đứng lại nghe chăm chú và ghi nhớ các từ bậy đó để về nhà nói với em nhỏ.',
            isCorrect: false,
            feedback: '💡 Mang những từ ngữ độc hại về nhà sẽ làm hư em nhỏ và làm tổn thương truyền thống gia đình văn hóa của con.'
          },
          {
            key: 'D',
            text: 'Chửi bới lại nhóm bạn đó thật to để dọa các bạn.',
            isCorrect: false,
            feedback: '💡 Dùng lời tục để đáp lại lời tục chỉ làm con cũng trở thành người nói tục mà thôi. Hãy im lặng và rời đi là cách ứng xử cao thượng nhất.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Lời nói thanh tao - Nụ cười rạng rỡ - Tâm hồn trong sáng!',
        summary: 'Chim khôn kêu tiếng rảnh rang, người khôn nói tiếng dịu dàng dễ nghe. Lời nói văn minh thể hiện trí tuệ và sự tôn trọng của con đối với bản thân và người nghe.',
        actionSteps: [
          'Bước 1: Luôn ý thức suy nghĩ kỹ trước khi phát ngôn: "Lời nói này có làm tổn thương ai không?".',
          'Bước 2: Nói "Không" với các video nhảm nhí, kênh mạng xã hội có chứa từ ngữ thô tục.',
          'Bước 3: Dùng các từ ngữ tích cực, lịch thiệp để bày tỏ cảm xúc thay vì chửi thề.'
        ],
        parentTeacherTip: 'Xây dựng quy tắc "Chiếc lọ lời nói đẹp" tại nhà: Nếu ai lỡ nói lời chưa chuẩn sẽ phải bỏ 5 ngàn vào lọ quyên góp từ thiện.'
      }
    },
    {
      title: 'Cách chủ động bắt chuyện và chào đón một người bạn mới',
      icon: '👋',
      dur: '10 - 12 phút',
      objective: 'Tập cho trẻ sự cởi mở, lòng hiếu khách và kỹ năng hòa nhập xã hội, biết chủ động kết nối và giúp đỡ bạn học sinh mới chuyển trường.',
      situation: 'Hôm nay lớp con có một bạn học sinh mới tên là An vừa chuyển từ quê lên. Giờ ra chơi, bạn An ngồi một mình co ro ở góc bàn cuối lớp, mắt nhìn rụt rè e ngại và không dám ra sân chơi cùng ai. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ chào đón người bạn mới như thế nào?',
        correctKey: 'C',
        hint: 'Một nụ cười và lời mời chân thành sẽ xua tan nỗi cô đơn của bạn mới!',
        options: [
          {
            key: 'A',
            text: 'Tụ tập cùng các bạn khác nhìn chằm chằm và chỉ trỏ bàn tán về quần áo, giọng nói của bạn An.',
            isCorrect: false,
            feedback: '💡 Chỉ trỏ bàn tán sẽ làm bạn An cảm thấy bị cô lập, tủi thân và sợ hãi ngôi trường mới.'
          },
          {
            key: 'B',
            text: 'Cứ mặc kệ bạn ấy, ai chuyển đến đây cũng phải tự làm quen lấy chứ ai rảnh mà quan tâm.',
            isCorrect: false,
            feedback: '💡 Sự thờ ơ, lạnh nhạt sẽ khiến môi trường lớp học thiếu đi sự ấm áp của tình bạn bè.'
          },
          {
            key: 'C',
            text: 'Chủ động bước đến mỉm cười chào bạn: "Chào An, mình là Bơ. Lớp mình chuẩn bị chơi nhảy dây, bạn ra chơi cùng tụi mình cho vui nhé!".',
            isCorrect: true,
            feedback: '🎉 Con có trái tim ấm áp như ánh mặt trời vậy! Sự thân thiện và chủ động của con sẽ giúp bạn An nhanh chóng hòa nhập và có một người bạn tuyệt vời.'
          },
          {
            key: 'D',
            text: 'Đến đòi bạn An phải nộp bánh kẹo thì mới cho chơi cùng nhóm.',
            isCorrect: false,
            feedback: '💡 Bắt nạt và vòi vĩnh bạn mới là hành vi cực kỳ xấu, vi phạm nghiêm trọng nội quy học sinh và đạo đức bạn bè.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Nở nụ cười tươi - Chủ động bắt chuyện - Thêm một bạn thân!',
        summary: 'Mở rộng vòng tay đón chào một người bạn mới không chỉ giúp bạn bớt bỡ ngỡ mà còn làm phong phú thêm cuộc sống và tâm hồn của chính con.',
        actionSteps: [
          'Bước 1: Tiến đến gần với nụ cười thân thiện, tư thế cởi mở không đe dọa.',
          'Bước 2: Tự giới thiệu tên mình và hỏi thăm nhẹ nhàng: "Bạn chuyển từ trường nào đến?".',
          'Bước 3: Dẫn bạn đi giới thiệu các khu vực trong trường (thư viện, nhà vệ sinh, căng tin) và rủ bạn cùng chơi.'
        ],
        parentTeacherTip: 'Kể cho con nghe về những ngày đầu tiên con đi học để khơi dậy sự đồng cảm của con đối với các bạn mới đến.'
      }
    },
    {
      title: 'Kỹ năng gọi điện thoại hoặc nhắn tin lịch sự khi xin nghỉ học',
      icon: '📞',
      dur: '10 phút',
      objective: 'Dạy học sinh quy tắc giao tiếp qua điện thoại chuẩn mực: chào hỏi, xưng danh, nêu lý do rõ ràng và cảm ơn lễ phép.',
      situation: 'Sáng nay con bị sốt và ho nhiều, mẹ đang bận chăm em nhỏ nên bảo con tự cầm máy gọi điện cho cô giáo chủ nhiệm để xin phép nghỉ học một ngày. Con sẽ gọi điện thế nào?',
      quiz: {
        question: 'Con sẽ bắt đầu và trình bày cuộc gọi với cô giáo ra sao?',
        correctKey: 'A',
        hint: 'Xưng tên rõ ràng, nói lễ phép và trình bày lý do ngắn gọn!',
        options: [
          {
            key: 'A',
            text: '"Dạ em chào cô ạ, em là Bơ học sinh lớp 3A. Hôm nay em bị sốt nên xin phép cô cho em nghỉ học một buổi. Em sẽ nhờ bạn chép bài giúp. Em cảm ơn cô ạ!".',
            isCorrect: true,
            feedback: '🎉 Rất chuẩn mực và lễ phép! Lời thưa gửi rõ ràng, đầy đủ thông tin giúp cô giáo nắm được tình hình và rất an tâm về con.'
          },
          {
            key: 'B',
            text: 'Nhấc máy lên nói cộc lốc: "Alo, nay tôi nghỉ nhé!" rồi cúp máy luôn.',
            isCorrect: false,
            feedback: '💡 Nói cộc lốc và xưng hô vô lễ với cô giáo là hành vi cực kỳ thiếu tôn trọng, cô giáo sẽ không biết ai đang nói đâu con nhé.'
          },
          {
            key: 'C',
            text: 'Nói lí nhí trong điện thoại khiến cô không nghe rõ, sau đó ngại quá nên tắt máy ngang.',
            isCorrect: false,
            feedback: '💡 Hãy hít thở sâu, nói to rõ ràng từng từ vào micro điện thoại để cô giáo nghe được thông tin chính xác.'
          },
          {
            key: 'D',
            text: 'Nhờ một người lạ ngoài đường gọi điện thoại cho cô giáo nói dối là bị ốm nặng.',
            isCorrect: false,
            feedback: '💡 Nhờ người lạ rất nguy hiểm và nói dối là điều hoàn toàn sai trái. Con hãy tự mình hoặc nhờ người thân gọi điện.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Dạ thưa rõ ràng - Xưng tên mạch lạc - Lễ phép văn minh!',
        summary: 'Giao tiếp qua điện thoại là tấm gương phản chiếu tính cách của con dù hai người không nhìn thấy mặt nhau. Nói năng có đầu có cuối thể hiện con là đứa trẻ ngoan ngoãn.',
        actionSteps: [
          'Bước 1: Chào hỏi kính cẩn: "Dạ em chào Thầy/Cô ạ!".',
          'Bước 2: Xưng danh và lớp: "Em là [Tên], học sinh lớp [Lớp] ạ".',
          'Bước 3: Nêu lý do xin phép và kết thúc bằng lời cảm ơn: "Em xin cảm ơn Thầy/Cô ạ!".'
        ],
        parentTeacherTip: 'Cùng con chơi trò đóng giả gọi điện thoại ở nhà để rèn luyện sự tự tin khi nói chuyện từ xa.'
      }
    },
    {
      title: 'Khen ngợi và chúc mừng khi bạn đạt điểm tốt hoặc thành tích cao',
      icon: '⭐',
      dur: '10 phút',
      objective: 'Nuôi dưỡng lòng bao dung, vượt qua sự đố kỵ hẹp hòi, biết thật lòng chung vui với sự tiến bộ và thành công của người khác.',
      situation: 'Trong kỳ thi Học sinh giỏi môn Toán cấp trường, bạn thân cùng bàn của con đạt giải Nhất, còn con chỉ đạt giải Khuyến khích. Các bạn trong lớp xúm lại chúc mừng bạn ấy. Con cảm thấy hơi buồn trong lòng. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ đối diện với cảm xúc này và ứng xử với bạn như thế nào?',
        correctKey: 'C',
        hint: 'Biết chúc mừng người khác chứng tỏ con có một tâm hồn cao thượng và bản lĩnh vững vàng!',
        options: [
          {
            key: 'A',
            text: 'Mặt mày bí xị, quay mặt đi chỗ khác và lẩm bẩm: "Chắc là bạn ấy gặp may thôi chứ có gì giỏi đâu!".',
            isCorrect: false,
            feedback: '💡 Đố kỵ và nói xấu sau lưng chỉ làm tâm trạng con thêm bực bội và hủy hoại tình bạn đẹp giữa hai người.'
          },
          {
            key: 'B',
            text: 'Giận dỗi không thèm nói chuyện với bạn suốt cả tuần.',
            isCorrect: false,
            feedback: '💡 Bạn đạt thành tích nhờ nỗ lực của bạn mà. Giận bạn là hành vi trẻ con và thiếu công bằng.'
          },
          {
            key: 'C',
            text: 'Gạt bỏ nỗi buồn, bước đến bắt tay bạn với nụ cười chân thành: "Chúc mừng bạn nhé, bạn làm bài xuất sắc lắm! Mình rất tự hào về bạn!".',
            isCorrect: true,
            feedback: '🎉 Con có nhân cách thật cao quý! Biết chân thành chúc mừng chiến thắng của bạn chứng tỏ con là một người bạn tuyệt vời và có tinh thần thượng võ.'
          },
          {
            key: 'D',
            text: 'Về nhà nói với ba mẹ là cô giáo chấm bài thiên vị cho bạn ấy.',
            isCorrect: false,
            feedback: '💡 Đổ lỗi cho cô giáo là không trung thực. Hãy nhìn nhận điểm mạnh của bạn để bản thân mình cùng cố gắng hơn.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Chúc mừng thành công - Mở rộng tấm lòng - Cùng nhau tiến bộ!',
        summary: 'Khi con biết chúc mừng thành công của người khác, con đang hấp thu những năng lượng tích cực vào mình. Học hỏi từ người giỏi hơn là con đường nhanh nhất để thành công.',
        actionSteps: [
          'Bước 1: Hít thở sâu và mỉm cười để xua tan cảm xúc ganh tị trong lòng.',
          'Bước 2: Đến chúc mừng bạn bằng ánh mắt ấm áp, cái bắt tay hoặc cái ôm thân thiện.',
          'Bước 3: Tự nhủ sẽ cố gắng học hỏi bí quyết ôn tập của bạn để lần sau mình cũng tiến bộ.'
        ],
        parentTeacherTip: 'Cha mẹ tuyệt đối không so sánh con mình với "con nhà người ta", hãy khen ngợi sự nỗ lực tiến bộ của chính con so với ngày hôm qua.'
      }
    },
    {
      title: 'Nói âm lượng vừa phải, giữ trật tự trong thư viện và lớp học',
      icon: '🤫',
      dur: '8 - 10 phút',
      objective: 'Tập cho học sinh ý thức tôn trọng không gian chung, biết điều chỉnh âm lượng giọng nói phù hợp với từng hoàn cảnh công cộng.',
      situation: 'Trong giờ đọc sách tại thư viện trường, không gian đang rất yên ắng. Con phát hiện ra một tập truyện tranh màu sắc cực đẹp và muốn khoe ngay với bạn ngồi cách đó 3 bàn. Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ chia sẻ niềm vui này như thế nào mà không làm ảnh hưởng người khác?',
        correctKey: 'B',
        hint: 'Thư viện là nơi cần sự yên tĩnh tuyệt đối để mọi người tập trung đọc sách!',
        options: [
          {
            key: 'A',
            text: 'Hét toáng tên bạn lên từ xa: "Này Tuấn ơi, lại đây xem quyển truyện này đỉnh cực luôn!".',
            isCorrect: false,
            feedback: '💡 Hét to trong thư viện sẽ làm tất cả thầy cô và các bạn bị giật mình, vi phạm nghiêm trọng nội quy thư viện.'
          },
          {
            key: 'B',
            text: 'Cầm nhẹ cuốn truyện, đi nhẹ nhàng đến bàn bạn, ghé sát tai nói thầm với âm lượng thì thầm vừa đủ hai bạn nghe.',
            isCorrect: true,
            feedback: '🎉 Con thật tinh tế và có văn hóa công cộng xuất sắc! Hành động giữ im lặng thể hiện sự tôn trọng tuyệt đối đối với những người xung quanh.'
          },
          {
            key: 'C',
            text: 'Cầm cuốn truyện ném bay qua đầu các bạn khác sang bàn của bạn Tuấn.',
            isCorrect: false,
            feedback: '💡 Ném sách có thể trúng đầu người khác gây đau đớn và làm hỏng gáy cuốn sách quý của thư viện.'
          },
          {
            key: 'D',
            text: 'Bật cười khúc khích và đập bàn liên tục để thu hút sự chú ý.',
            isCorrect: false,
            feedback: '💡 Làm ồn trong không gian yên tĩnh sẽ làm mọi người xung quanh rất khó chịu và cô thủ thư sẽ mời con ra ngoài.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Đi nhẹ nói khẽ - Cười mỉm dịu dàng - Nơi chốn tôn nghiêm!',
        summary: 'Âm lượng giọng nói là thước đo văn minh của mỗi người ở nơi công cộng. Biết nói khẽ ở thư viện, bệnh viện và bảo tàng là phẩm chất của người có học thức.',
        actionSteps: [
          'Bước 1: Quan sát biển báo "Giữ trật tự" và cảm nhận không gian xung quanh trước khi cất lời.',
          'Bước 2: Sử dụng "âm lượng mức 1" (thì thầm) trong thư viện và "âm lượng mức 2" trong lớp học.',
          'Bước 3: Nhấc nhẹ ghế khi di chuyển, không kéo lê chân gây tiếng động ồn ào.'
        ],
        parentTeacherTip: 'Quy ước mức âm lượng trong gia đình: Mức 0 (im lặng), Mức 1 (thì thầm), Mức 2 (nói chuyện gia đình), Mức 3 (thuyết trình), Mức 4 (ngoài sân bóng).'
      }
    },
    {
      title: 'Nhìn vào mắt đối phương khi trò chuyện để thể hiện sự tôn trọng',
      icon: '👀',
      dur: '10 phút',
      objective: 'Rèn luyện kỹ năng giao tiếp bằng mắt (Eye Contact), giúp học sinh thể hiện sự chân thành, tự tin và tập trung khi đối thoại.',
      situation: 'Cô giáo gọi con lên bàn giáo viên để hướng dẫn lại cách làm một bài văn miêu tả. Trong lúc cô đang ân cần chỉ bảo từng câu chữ, mắt con cứ liếc nhìn ra ngoài cửa sổ xem các bạn lớp khác đang tập thể dục. Con sẽ làm gì?',
      quiz: {
        question: 'Con nên hướng ánh mắt như thế nào khi giao tiếp với cô giáo?',
        correctKey: 'C',
        hint: 'Đôi mắt là cửa sổ tâm hồn - Nhìn vào mắt người nói thể hiện con đang chăm chú lắng nghe!',
        options: [
          {
            key: 'A',
            text: 'Cứ nhìn chằm chằm ra sân trường, tai vẫn nghe cô nói nhưng mặt quay đi hướng khác.',
            isCorrect: false,
            feedback: '💡 Nhìn đi hướng khác sẽ khiến cô giáo cảm thấy con không tôn trọng cô và không hào hứng với bài học.'
          },
          {
            key: 'B',
            text: 'Cúi gằm mặt nhìn vào mũi giày của mình suốt cả buổi trò chuyện.',
            isCorrect: false,
            feedback: '💡 Cúi gằm mặt thể hiện sự thiếu tự tin và làm cho cuộc trò chuyện trở nên ngượng ngùng, xa cách.'
          },
          {
            key: 'C',
            text: 'Hướng ánh mắt nhìn thẳng vào mắt và khuôn mặt cô giáo với thái độ chăm chú, thỉnh thoảng gật đầu tiếp thu.',
            isCorrect: true,
            feedback: '🎉 Rất tuyệt vời! Giao tiếp bằng mắt thể hiện sự kính trọng, thông minh và cầu tiến của con. Cô giáo sẽ rất hài lòng và yêu quý con.'
          },
          {
            key: 'D',
            text: 'Trợn tròn mắt nhìn trừng trừng không chớp mắt để dọa cô giáo.',
            isCorrect: false,
            feedback: '💡 Nhìn trừng trừng sẽ làm đối phương cảm thấy căng thẳng. Hãy nhìn tự nhiên, ấm áp và chớp mắt bình thường con nhé.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Ánh mắt chân thành - Lắng nghe chăm chú - Gắn kết yêu thương!',
        summary: 'Giao tiếp bằng ánh mắt là ngôn ngữ không lời quyền lực nhất. Khi con nhìn vào mắt người đối diện, con gửi đi thông điệp: "Tôi đang lắng nghe bạn với tất cả sự tôn trọng".',
        actionSteps: [
          'Bước 1: Hướng khuôn mặt thẳng về phía người đang nói chuyện với mình.',
          'Bước 2: Giữ ánh mắt tự nhiên vào vùng tam giác (mắt và trán) của người đối diện.',
          'Bước 3: Kết hợp gật đầu nhẹ để thể hiện mình đang hiểu và đồng hành cùng câu chuyện.'
        ],
        parentTeacherTip: 'Khi nói chuyện với con, cha mẹ hãy ngồi ngang tầm mắt của con và nhìn vào mắt con để con cảm nhận được sự tôn trọng và tình yêu thương.'
      }
    },
    {
      title: 'Dùng kính ngữ "Dạ, Thưa" khi giao tiếp với người lớn tuổi',
      icon: '💬',
      dur: '8 - 10 phút',
      objective: 'Bồi dưỡng nếp sống hiếu nghĩa, thói quen xưng hô có trên có dưới, giữ gìn nét đẹp văn hóa truyền thống của người Việt Nam.',
      situation: 'Bác tổ trưởng dân phố đến nhà gửi giấy mời họp tổ dân phố cho ba mẹ. Khi bác bấm chuông, con ra mở cửa. Bác hỏi: "Ba mẹ cháu có nhà không?". Con sẽ trả lời như thế nào?',
      quiz: {
        question: 'Con sẽ dùng kính ngữ trả lời bác như thế nào cho đúng lễ phép?',
        correctKey: 'D',
        hint: 'Với người lớn tuổi, luôn bắt đầu bằng từ "Dạ" và kết thúc bằng từ "ạ"!',
        options: [
          {
            key: 'A',
            text: 'Trả lời cộc lốc: "Có!".',
            isCorrect: false,
            feedback: '💡 Trả lời cộc lốc với người lớn là hành vi vô lễ, làm người lớn đánh giá con là đứa trẻ chưa ngoan.'
          },
          {
            key: 'B',
            text: 'Lắc đầu không nói câu nào rồi quay lưng đi vào nhà.',
            isCorrect: false,
            feedback: '💡 Lắc đầu không nói thể hiện sự thờ ơ và thiếu tôn trọng đối với người lớn tuổi.'
          },
          {
            key: 'C',
            text: 'Hét to vào mặt bác: "Đi chỗ khác chơi đi!".',
            isCorrect: false,
            feedback: '💡 Đây là lời nói xúc phạm người lớn tuổi, con tuyệt đối không bao giờ được phát ngôn như vậy.'
          },
          {
            key: 'D',
            text: 'Khoanh tay lễ phép: "Dạ thưa Bác, ba mẹ cháu đang ở trong bếp ạ. Cháu mời Bác vào nhà uống nước để cháu đi gọi ba mẹ ạ!".',
            isCorrect: true,
            feedback: '🎉 Con thật ngoan ngoãn và lễ độ! Lời thưa gửi ngọt ngào và hiếu khách của con làm rạng danh gia đình và bác hàng xóm sẽ khen con hết lời.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Dạ trước thưa sau - Lời chào đi trước - Kính trên nhường dưới!',
        summary: 'Kính ngữ "Dạ, Thưa" là bông hoa thơm trong lời nói của trẻ thơ. Một đứa trẻ lễ phép sẽ đi đến đâu cũng được người lớn chở che, quý mến và giúp đỡ.',
        actionSteps: [
          'Bước 1: Luôn thêm từ "Dạ" ở đầu mỗi câu trả lời khi giao tiếp với người lớn tuổi.',
          'Bước 2: Luôn kết thúc câu bằng từ "ạ" tròn vành rõ chữ.',
          'Bước 3: Giữ thái độ niềm nở, không bao giờ nói trống không hay cộc lốc.'
        ],
        parentTeacherTip: 'Khen ngợi con ngay tại chỗ khi con sử dụng kính ngữ chuẩn mực với ông bà, cha mẹ và khách đến chơi nhà.'
      }
    },
    {
      title: 'Cách nói lời từ chối lịch thiệp khi bị bạn rủ rê làm việc sai',
      icon: '🙅',
      dur: '12 - 15 phút',
      objective: 'Xây dựng bản lĩnh dám nói "Không" trước những cám dỗ và việc làm sai trái, bảo vệ bản thân và giữ vững nguyên tắc đạo đức.',
      situation: 'Giờ kiểm tra 15 phút, bạn ngồi phía sau lấy bút chọc vào lưng con thì thào: "Này, mở vở ra che cho tao chép bài với, không thì tí nữa ra chơi tao không cho chơi chung đâu!". Con sẽ làm gì?',
      quiz: {
        question: 'Con sẽ từ chối lời ép buộc gian lận này như thế nào?',
        correctKey: 'A',
        hint: 'Dũng cảm từ chối hành vi sai trái bằng lời lẽ kiên quyết nhưng lịch sự!',
        options: [
          {
            key: 'A',
            text: 'Quay lại nói nhỏ nhưng kiên quyết: "Không được đâu bạn, giờ kiểm tra phải tự làm bài. Tí nữa ra chơi tớ sẽ giảng lại bài cho bạn hiểu nhé!".',
            isCorrect: true,
            feedback: '🎉 Con có bản lĩnh của một người chính trực! Vừa không tiếp tay cho việc gian lận, vừa đề nghị giúp bạn học tập sau giờ học là cách ứng xử tuyệt vời.'
          },
          {
            key: 'B',
            text: 'Sợ bạn không cho chơi cùng nên vội vàng mở toang vở ra cho bạn chép thoải mái.',
            isCorrect: false,
            feedback: '💡 Tiếp tay cho gian lận sẽ khiến cả hai bạn bị điểm 0 và làm bạn ấy ỷ lại, không bao giờ tự học được.'
          },
          {
            key: 'C',
            text: 'Đứng phắt dậy hét toáng lên giữa lớp: "Cô ơi bạn này đòi chép bài em nè!".',
            isCorrect: false,
            feedback: '💡 Làm vậy trong giờ kiểm tra sẽ gây ồn ào cả lớp. Hãy dứt khoát từ chối trước, nếu bạn vẫn quấy rầy mới giơ tay báo cô.'
          },
          {
            key: 'D',
            text: 'Đưa cho bạn chép nhưng đòi bạn phải cho 10 ngàn tiền thù lao.',
            isCorrect: false,
            feedback: '💡 Đổi chác gian lận lấy tiền là hành vi sai trái nghiêm trọng, con tuyệt đối không được làm.'
          }
        ]
      },
      conclusion: {
        keyTakeaway: 'Dũng cảm nói Không - Giữ lòng trung thực - Tình bạn chân chính!',
        summary: 'Biết từ chối cái sai là biểu hiện của lòng dũng cảm và tự trọng. Một người bạn tốt thật sự sẽ không bao giờ ép con làm việc vi phạm nội quy.',
        actionSteps: [
          'Bước 1: Giữ bình tĩnh, nhìn thẳng vào bạn với ánh mắt dứt khoát.',
          'Bước 2: Nói lời từ chối rõ ràng kèm lý do chính đáng: "Mình không thể làm vậy vì...".',
          'Bước 3: Đưa ra giải pháp tích cực thay thế hoặc báo người lớn can thiệp nếu bị đe dọa.'
        ],
        parentTeacherTip: 'Trang bị cho con "Quy tắc 3 bước từ chối": Nhìn thẳng - Nói Không dứt khoát - Rời khỏi tình huống nguy hiểm.'
      }
    }
  ]
};
