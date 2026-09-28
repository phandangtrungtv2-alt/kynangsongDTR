import React, { useState } from 'react';
import { ArrowLeft, Clock, Target, MessageSquareHeart, CheckSquare, Lightbulb, CheckCircle, Sparkles, Heart, SkipForward, GraduationCap } from 'lucide-react';
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

  const toggleStep = (stepId) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const steps = lesson.activity?.steps || [];
  const parentTip = lesson.activity?.parentTip;

  return (
    <div className="max-w-md mx-auto px-4 py-4 space-y-5 pb-36">
      {/* 1. TOP NAV / BACK BUTTON & QUEUE POSITION */}
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
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
          <Clock className="w-3.5 h-3.5 text-amber-500" />
          <span>Thời gian rèn luyện: <strong className="text-slate-800">{lesson.duration}</strong></span>
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
              Rèn nề nếp cùng {studentProfile?.name || 'Học sinh Cấp 1'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. MỤC TIÊU BÀI HỌC (Pastel Mint) */}
      <section className="bg-emerald-50/80 border-2 border-emerald-200/90 rounded-3xl p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-black text-emerald-950">
              Mục tiêu rèn luyện
            </h2>
            <p className="text-xs font-bold text-emerald-800/80">Kết quả và kỹ năng học sinh đạt được</p>
          </div>
        </div>

        <div className="bg-white/90 rounded-2xl p-4 border border-emerald-200/80 shadow-2xs">
          <p className="text-base font-bold text-slate-700 leading-relaxed">
            {lesson.objective}
          </p>
        </div>
      </section>

      {/* 4. KỊCH BẢN NÓI VỚI HỌC SINH (Pastel Warm Yellow / Cream) */}
      <section className="bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-yellow-50/90 border-2 border-amber-200/90 rounded-3xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <MessageSquareHeart className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-black text-amber-950">
                Kịch bản tình huống thực tế
              </h2>
              <p className="text-xs font-bold text-amber-800/80">
                Gợi ý đối thoại giữa Ba Mẹ / Thầy Cô và Học sinh
              </p>
            </div>
          </div>
          <span className="text-xl">💬</span>
        </div>

        <div className="space-y-3 pt-1">
          {lesson.script && lesson.script.map((item, idx) => {
            const isParent = item.role === 'parent';
            const speakerName = isParent ? item.speaker : (studentProfile?.name || 'Học sinh');
            const cleanText = item.text.replace(/Bơ/g, studentProfile?.name || 'con');

            return (
              <div
                key={idx}
                className={`flex flex-col ${isParent ? 'items-start' : 'items-end'}`}
              >
                {/* Speaker label */}
                <div className="flex items-center gap-1.5 mb-1 px-1 text-xs font-bold text-slate-500">
                  <span>{item.avatar}</span>
                  <span className={isParent ? 'text-emerald-700' : 'text-amber-700'}>
                    {speakerName}
                  </span>
                </div>

                {/* Speech Bubble */}
                <div
                  className={`max-w-[92%] rounded-2xl p-4 shadow-2xs leading-relaxed border ${
                    isParent
                      ? 'bg-white text-slate-800 border-emerald-200 rounded-tl-xs'
                      : 'bg-gradient-to-r from-amber-100/90 to-orange-100/80 text-amber-950 border-amber-300 rounded-tr-xs'
                  }`}
                >
                  <p className="text-[15px] sm:text-base font-bold">
                    "{cleanText}"
                  </p>

                  {/* pedagogical note/tip */}
                  {item.tip && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-start gap-1">
                      <span className="text-amber-500 shrink-0">💡</span>
                      <span>{item.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. HOẠT ĐỘNG THỰC HÀNH (Pastel Peach / Soft Orange) */}
      <section className="bg-orange-50/80 border-2 border-orange-200/90 rounded-3xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-xs">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-black text-orange-950">
                Các bước thực hành
              </h2>
              <p className="text-xs font-bold text-orange-800/80">
                Đánh dấu các bước học sinh tự giác hoàn thành
              </p>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
            {Object.values(completedSteps).filter(Boolean).length} / {steps.length}
          </span>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => {
            const isChecked = !!completedSteps[step.id];
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-50/90 border-emerald-300 shadow-2xs'
                    : 'bg-white/95 border-orange-200/80 hover:border-orange-300 shadow-2xs'
                }`}
              >
                <div className="pt-0.5">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isChecked
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'border-2 border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked ? <CheckCircle className="w-4 h-4" /> : null}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-orange-100 text-orange-800">
                      Bước {index + 1}
                    </span>
                    <h3 className={`text-base font-extrabold ${isChecked ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm font-semibold leading-relaxed ${isChecked ? 'text-slate-400' : 'text-slate-600'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. MẸO SƯ PHẠM CHO PHỤ HUYNH & THẦY CÔ */}
      {parentTip && (
        <section className="bg-purple-50/80 border border-purple-200 rounded-3xl p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-purple-900 font-extrabold text-sm">
            <Lightbulb className="w-4 h-4 text-purple-600" />
            <span>Mẹo sư phạm & đồng hành cùng học sinh Tiểu học:</span>
          </div>
          <p className="text-sm font-semibold text-slate-700 leading-relaxed bg-white/70 p-3.5 rounded-2xl border border-purple-100">
            {parentTip}
          </p>
        </section>
      )}

      {/* 7. FIXED BOTTOM ACTION BAR: [BỎ QUA] VÀ [ĐÃ HOÀN THÀNH] */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-30 shadow-xl">
        <div className="max-w-md mx-auto flex items-center gap-3">
          {/* Nút BỎ QUA */}
          <button
            onClick={() => onSkipLesson(lesson)}
            className="py-4 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 font-bold text-sm transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 border border-slate-200"
            title="Bỏ qua bài này và chuyển sang kỹ năng tiếp theo"
          >
            <SkipForward className="w-4 h-4" />
            <span>Bỏ qua</span>
          </button>

          {/* Nút ĐÃ HOÀN THÀNH */}
          <button
            onClick={() => onCompleteLesson(lesson)}
            className="flex-1 py-4 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 active:scale-[0.98] text-white font-black text-base sm:text-lg shadow-lg shadow-emerald-200/80 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 animate-spin-slow shrink-0" />
            <span>ĐÃ HOÀN THÀNH BÀI RÈN LUYỆN</span>
            <Heart className="w-4 h-4 fill-rose-300 text-rose-300 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
