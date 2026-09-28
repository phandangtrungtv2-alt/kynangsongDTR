import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  Clock,
  Target,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  Heart,
  SkipForward,
  GraduationCap,
  Trophy,
  Award,
  ChevronDown,
  ChevronUp,
  MessageSquareHeart,
  RotateCcw,
  Star,
  Compass
} from 'lucide-react';
import { getPillarStyle } from '../data/lessonsData';

export default function LessonDetail({
  lesson,
  studentProfile,
  lessonIndex,
  totalLessons,
  onBack,
  onCompleteLesson,
  onSkipLesson,
}) {
  // Trạng thái trắc nghiệm tình huống
  const [selectedOptionKey, setSelectedOptionKey] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showRoleplay, setShowRoleplay] = useState(false);
  const [completedSteps, setCompletedSteps] = useState({});

  if (!lesson) {
    return (
      <div className="max-w-md mx-auto p-6 text-center space-y-4">
        <p className="text-slate-600 font-bold">Không tìm thấy bài học!</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-emerald-500 text-white rounded-xl font-bold cursor-pointer"
        >
          Quay về Trang chủ
        </button>
      </div>
    );
  }

  const pillarStyle = getPillarStyle(lesson.pillar);

  // Fallback an toàn nếu dữ liệu thiếu trường
  const objective = lesson.objective || 'Giúp học sinh rèn luyện kỹ năng tự lập, văn minh và tự tin.';
  const situation = lesson.situation || 'Hãy tưởng tượng con đang gặp tình huống này ở trường học hoặc gia đình. Con sẽ ứng xử như thế nào?';
  const quiz = lesson.quiz || {
    question: 'Nếu là con trong tình huống này, con sẽ chọn cách xử lý nào sau đây?',
    correctKey: 'B',
    hint: 'Hãy suy nghĩ xem cách nào vừa an toàn, lịch sự và thể hiện tính tự giác nhất nhé!',
    options: [
      { key: 'A', text: 'Phản ứng vội vàng, không suy nghĩ kỹ hậu quả.', isCorrect: false, feedback: '💡 Vội vàng dễ dẫn đến sai sót, con hãy bình tĩnh suy nghĩ lại nhé!' },
      { key: 'B', text: 'Chủ động xử lý theo cách văn minh, an toàn và đúng đắn.', isCorrect: true, feedback: '🎉 Hoan hô! Con lựa chọn rất chính xác và gương mẫu!' },
      { key: 'C', text: 'Trông chờ người khác làm hộ mà không tự mình cố gắng.', isCorrect: false, feedback: '💡 Tự mình giải quyết mới giúp con trưởng thành và tự lập con nhé.' },
      { key: 'D', text: 'Lảng tránh, giả vờ như không biết việc gì xảy ra.', isCorrect: false, feedback: '💡 Lảng tránh không giải quyết được vấn đề đâu con ơi!' }
    ]
  };

  const conclusion = lesson.conclusion || {
    keyTakeaway: 'Học kỹ năng hay - Vững bước mỗi ngày!',
    summary: objective,
    actionSteps: [
      'Bước 1: Nhận diện tình huống và giữ bình tĩnh.',
      'Bước 2: Lựa chọn hành động văn minh, an toàn nhất.',
      'Bước 3: Rút ra bài học và thực hành đều đặn mỗi ngày.'
    ],
    parentTeacherTip: lesson.activity?.parentTip || 'Đồng hành, khen ngợi tính tự giác của học sinh mỗi ngày.'
  };

  const options = quiz.options || [];
  const correctKey = quiz.correctKey || 'B';
  const isAnswered = selectedOptionKey !== null;
  const isCorrect = selectedOptionKey === correctKey;
  const selectedOptionObj = options.find((opt) => opt.key === selectedOptionKey);

  // Xử lý khi bé chọn đáp án A, B, C, D
  const handleSelectOption = (key) => {
    setSelectedOptionKey(key);

    const chosen = options.find((o) => o.key === key);
    if (chosen && chosen.isCorrect) {
      // Bắn pháo hoa nhỏ ăn mừng bé chọn đúng
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10B981', '#F59E0B', '#3B82F6', '#EC4899']
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    }
  };

  // Đánh dấu các bước hành động
  const toggleStep = (stepIdx) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepIdx]: !prev[stepIdx]
    }));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-4 space-y-5 pb-36">
      {/* 1. TOP NAV / BACK & STATUS */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm shadow-xs transition cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600" />
          <span>Về Trang chủ</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            Bài {lessonIndex + 1}/{totalLessons}
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border ${pillarStyle.badge}`}>
            <span>{lesson.icon}</span>
            {lesson.pillar}
          </span>
        </div>
      </div>

      {/* 2. LESSON HEADER BANNER */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50/70 border-2 border-emerald-200 rounded-3xl p-5 shadow-xs">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Thời lượng: <strong className="text-slate-800">{lesson.duration || '10 - 15 phút'}</strong></span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black border border-emerald-200">
            Tình huống tương tác A-B-C-D
          </span>
        </div>

        <div className="flex items-start gap-3.5">
          <span className="text-4xl p-2.5 rounded-2xl bg-white/90 shadow-xs border border-emerald-100 shrink-0">
            {lesson.icon}
          </span>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug">
              {lesson.title}
            </h1>
            <p className="text-xs font-bold text-emerald-700 mt-1 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" />
              Đồng hành cùng {studentProfile?.name || 'Học sinh Cấp 1'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. BƯỚC 1: NÊU MỤC TIÊU RÈN LUYỆN */}
      <section className="bg-emerald-50/90 border-2 border-emerald-200 rounded-3xl p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-black text-emerald-950 flex items-center gap-1.5">
              <span>1. Mục tiêu bài rèn luyện</span>
            </h2>
            <p className="text-xs font-bold text-emerald-800/80">Kỹ năng và giá trị con sẽ đạt được</p>
          </div>
        </div>

        <div className="bg-white/95 rounded-2xl p-4 border border-emerald-200 shadow-2xs">
          <p className="text-[15px] sm:text-base font-bold text-slate-700 leading-relaxed">
            🎯 {objective}
          </p>
        </div>
      </section>

      {/* 4. BƯỚC 2: TẠO TÌNH HUỐNG THỰC TẾ */}
      <section className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/90 border-2 border-amber-200 rounded-3xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-black text-amber-950">
                2. Tình huống thực tế của bé
              </h2>
              <p className="text-xs font-bold text-amber-800/80">
                Chuyện gì xảy ra và con sẽ xử lý thế nào?
              </p>
            </div>
          </div>
          <span className="text-2xl animate-pulse">📖</span>
        </div>

        <div className="bg-white/95 rounded-2xl p-4 border border-amber-200/90 shadow-2xs space-y-2">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
            Bối cảnh câu chuyện
          </div>
          <p className="text-[15px] sm:text-base font-bold text-slate-800 leading-relaxed italic">
            "{situation}"
          </p>
        </div>
      </section>

      {/* 5. BƯỚC 3: ĐƯA RA CÁC CÂU TRẢ LỜI A, B, C, D ĐỂ BÉ TRẢ LỜI */}
      <section className="bg-white border-2 border-indigo-200 rounded-3xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-xs">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-black text-indigo-950">
                3. Thử thách: Bé chọn cách nào?
              </h2>
              <p className="text-xs font-bold text-indigo-700/80">
                Bấm vào phương án A, B, C hoặc D để trả lời
              </p>
            </div>
          </div>

          {/* Nút xem gợi ý */}
          <button
            onClick={() => setShowHint(!showHint)}
            className="p-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-black flex items-center gap-1 border border-indigo-200 transition cursor-pointer"
            title="Xem gợi ý nếu con băn khoăn"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý'}</span>
          </button>
        </div>

        {/* Khung Gợi ý nếu mở */}
        {showHint && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-xs font-semibold text-amber-900 flex items-start gap-2 animate-fade-in">
            <span className="text-base shrink-0">💡</span>
            <div>
              <strong className="font-black">Gợi ý từ Thầy Cô:</strong> {quiz.hint}
            </div>
          </div>
        )}

        {/* Câu hỏi */}
        <div className="font-extrabold text-slate-800 text-sm sm:text-base bg-indigo-50/50 p-3 rounded-2xl border border-indigo-100">
          ❓ {quiz.question}
        </div>

        {/* 4 Lựa chọn A, B, C, D */}
        <div className="space-y-3">
          {options.map((opt) => {
            const isSelected = selectedOptionKey === opt.key;
            const isOptionCorrect = opt.isCorrect;

            let cardStyle = 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-700';
            let badgeStyle = 'bg-white border-slate-300 text-slate-600';

            if (isSelected) {
              if (isOptionCorrect) {
                cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs ring-2 ring-emerald-300';
                badgeStyle = 'bg-emerald-500 text-white border-emerald-500';
              } else {
                cardStyle = 'bg-rose-50 border-rose-300 text-rose-950 shadow-xs ring-2 ring-rose-200';
                badgeStyle = 'bg-rose-500 text-white border-rose-500';
              }
            }

            return (
              <div
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex items-start gap-3 active:scale-[0.99] ${cardStyle}`}
              >
                {/* Badge A, B, C, D */}
                <div className={`w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shrink-0 border-2 transition-colors ${badgeStyle}`}>
                  {opt.key}
                </div>

                <div className="flex-1 pt-0.5">
                  <p className="font-bold text-sm sm:text-[15px] leading-snug">
                    {opt.text}
                  </p>
                </div>

                {isSelected && (
                  <div className="shrink-0 pt-0.5">
                    {isOptionCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* PHẢN HỒI NGAY LẬP TỨC CHO LỰA CHỌN CỦA BÉ */}
        {isAnswered && selectedOptionObj && (
          <div
            className={`p-4 rounded-2xl border-2 transition-all animate-fade-in ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-amber-50 border-amber-300 text-amber-900'
            }`}
          >
            <div className="flex items-start gap-2.5">
              <span className="text-2xl shrink-0">
                {isCorrect ? '🎉' : '💡'}
              </span>
              <div className="space-y-1">
                <div className="text-sm font-black flex items-center gap-1.5">
                  {isCorrect ? (
                    <span className="text-emerald-700 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      Xuất sắc! Con chọn rất chính xác!
                    </span>
                  ) : (
                    <span className="text-amber-800">
                      Chưa phải cách tốt nhất con ơi!
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  {selectedOptionObj.feedback}
                </p>
                {!isCorrect && (
                  <p className="text-xs font-bold text-amber-700 pt-1">
                    👉 Con hãy bấm thử chọn phương án khác xem cách nào tốt hơn nhé!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. BƯỚC 4: RÚT RA KẾT LUẬN TỔNG KẾT CHO TÌNH HUỐNG HỌC */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 border-2 border-teal-200 rounded-3xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-black text-teal-950">
                4. Kết luận & Bài học rút ra
              </h2>
              <p className="text-xs font-bold text-teal-800/80">
                Bí kíp bỏ túi giúp con luôn ứng xử thông minh
              </p>
            </div>
          </div>
          <span className="text-2xl">🌟</span>
        </div>

        {/* Ghi nhớ vàng (Key takeaway) */}
        <div className="bg-white/95 rounded-2xl p-4 border-2 border-amber-300 shadow-2xs space-y-1.5 text-center relative overflow-hidden">
          <div className="text-[11px] font-black uppercase tracking-wider text-amber-700 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Câu khẩu hiệu ghi nhớ vàng</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <p className="text-base sm:text-lg font-black text-slate-800 leading-snug">
            "{conclusion.keyTakeaway}"
          </p>
          <p className="text-xs font-semibold text-slate-500">
            Con hãy đọc to câu thần chú này 3 lần để khắc sâu vào trí nhớ nhé!
          </p>
        </div>

        {/* Tổng kết tình huống */}
        <div className="bg-white/80 rounded-2xl p-3.5 border border-teal-200 text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
          📌 <strong className="text-slate-800">Ý nghĩa bài học:</strong> {conclusion.summary}
        </div>

        {/* 3 Bước hành động áp dụng */}
        <div className="space-y-2">
          <div className="text-xs font-black uppercase text-teal-900 flex items-center gap-1.5 px-1">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>3 Bước hành động khi gặp tình huống tương tự:</span>
          </div>

          {conclusion.actionSteps && conclusion.actionSteps.map((stepText, idx) => {
            const isChecked = !!completedSteps[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleStep(idx)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                  isChecked
                    ? 'bg-emerald-100/80 border-emerald-300 text-emerald-950 shadow-2xs'
                    : 'bg-white border-teal-200/80 hover:border-teal-300 text-slate-700'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black transition-colors ${
                    isChecked ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'
                  }`}
                >
                  {isChecked ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                </div>
                <span className={`text-xs sm:text-sm font-bold flex-1 ${isChecked ? 'line-through opacity-70' : ''}`}>
                  {stepText}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. KỊCH BẢN ĐÓNG VAI CÙNG BA MẸ / THẦY CÔ (ACCORDION THU GỌN) */}
      <section className="bg-slate-100/80 border border-slate-200 rounded-3xl p-4 shadow-2xs space-y-3">
        <button
          onClick={() => setShowRoleplay(!showRoleplay)}
          className="w-full flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-white text-base shadow-2xs">💬</span>
            <div>
              <h3 className="text-sm font-black text-slate-800">
                Gợi ý đóng vai cùng Ba Mẹ / Thầy Cô
              </h3>
              <p className="text-[11px] font-bold text-slate-500">
                Thực hành đối thoại nhập vai tình huống
              </p>
            </div>
          </div>
          {showRoleplay ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {showRoleplay && (
          <div className="space-y-2.5 pt-2 border-t border-slate-200/60 animate-fade-in">
            {lesson.script && lesson.script.map((item, idx) => {
              const isParent = item.role === 'parent';
              const speakerName = isParent ? item.speaker : (studentProfile?.name || 'Học sinh');
              const cleanText = item.text.replace(/Bơ/g, studentProfile?.name || 'con');

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isParent ? 'items-start' : 'items-end'}`}
                >
                  <div className="flex items-center gap-1 mb-0.5 px-1 text-[11px] font-bold text-slate-500">
                    <span>{item.avatar}</span>
                    <span className={isParent ? 'text-emerald-700' : 'text-amber-700'}>
                      {speakerName}
                    </span>
                  </div>

                  <div
                    className={`max-w-[90%] rounded-2xl p-3 shadow-2xs text-xs sm:text-sm leading-relaxed border ${
                      isParent
                        ? 'bg-white text-slate-800 border-emerald-200 rounded-tl-xs'
                        : 'bg-amber-100 text-amber-950 border-amber-300 rounded-tr-xs'
                    }`}
                  >
                    <p className="font-bold">"{cleanText}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 8. MẸO SƯ PHẠM ĐỒNG HÀNH */}
      {conclusion.parentTeacherTip && (
        <section className="bg-purple-50/80 border border-purple-200 rounded-3xl p-4 shadow-xs space-y-1.5">
          <div className="flex items-center gap-2 text-purple-900 font-extrabold text-xs">
            <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
            <span>Mẹo đồng hành cho Phụ huynh & Thầy cô:</span>
          </div>
          <p className="text-xs font-semibold text-slate-700 leading-relaxed bg-white/70 p-3 rounded-2xl border border-purple-100">
            {conclusion.parentTeacherTip}
          </p>
        </section>
      )}

      {/* 9. FIXED BOTTOM ACTION BAR: [BỎ QUA] VÀ [HOÀN THÀNH] */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-30 shadow-xl">
        <div className="max-w-md mx-auto flex items-center gap-3">
          {/* Nút BỎ QUA */}
          <button
            onClick={() => onSkipLesson(lesson)}
            className="py-3.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 font-bold text-sm transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 border border-slate-200"
            title="Bỏ qua bài này và chuyển sang kỹ năng tiếp theo"
          >
            <SkipForward className="w-4 h-4" />
            <span>Bỏ qua</span>
          </button>

          {/* Nút ĐÃ HOÀN THÀNH */}
          <button
            onClick={() => onCompleteLesson(lesson)}
            className={`flex-1 py-3.5 px-5 rounded-2xl font-black text-base sm:text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
              isCorrect
                ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-emerald-200/80'
                : 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-slate-200'
            }`}
          >
            <Sparkles className="w-5 h-5 shrink-0" />
            <span>{isCorrect ? 'HOÀN THÀNH BÀI RÈN LUYỆN' : 'GHI NHẬN HOÀN THÀNH'}</span>
            <Heart className="w-4 h-4 fill-rose-300 text-rose-300 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
