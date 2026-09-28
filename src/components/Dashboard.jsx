import React, { useState } from 'react';
import { Sparkles, Flame, Clock, Play, ChevronRight, Award, BookOpen, Layers, RotateCcw, BookHeart, Library, Compass, Settings, GraduationCap } from 'lucide-react';
import { PILLARS, getPillarStyle } from '../data/lessonsData';
import JournalTab from './JournalTab';

export default function Dashboard({
  studentProfile,
  currentLessonIndex,
  totalLessons,
  allLessons = [],
  nextLesson,
  completedLessons = [],
  activeTab = 'lessons',
  onTabChange,
  onStartLesson,
  onSelectLesson,
  onResetQueue,
  onClearJournal,
  onOpenLibrary,
  onOpenSettings,
}) {
  const [selectedPillar, setSelectedPillar] = useState('Tất cả');

  const isFinishedAll = currentLessonIndex >= totalLessons;
  const pillarStyle = nextLesson ? getPillarStyle(nextLesson.pillar) : null;

  // Filter 5 upcoming lessons in the queue based on selected pillar
  const remainingInQueue = allLessons.slice(currentLessonIndex + 1);
  const filteredUpcoming = (
    selectedPillar === 'Tất cả'
      ? remainingInQueue
      : remainingInQueue.filter((l) => l.pillar === selectedPillar)
  ).slice(0, 5);

  return (
    <div className="max-w-md mx-auto px-4 py-4 space-y-5 pb-24">
      {/* NAVIGATION TABS: [Bài học] vs [Nhật ký] */}
      <div className="flex p-1 rounded-2xl bg-slate-200/70 border border-slate-200/80 shadow-2xs">
        <button
          onClick={() => onTabChange('lessons')}
          className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
            activeTab === 'lessons'
              ? 'bg-white text-emerald-800 shadow-xs scale-100'
              : 'text-slate-600 hover:text-slate-900 opacity-75'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>Bài rèn luyện</span>
        </button>

        <button
          onClick={() => onTabChange('journal')}
          className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
            activeTab === 'journal'
              ? 'bg-white text-emerald-800 shadow-xs scale-100'
              : 'text-slate-600 hover:text-slate-900 opacity-75'
          }`}
        >
          <BookHeart className="w-4 h-4 text-rose-500" />
          <span>Nhật ký nề nếp</span>
          {completedLessons.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-200">
              {completedLessons.length}
            </span>
          )}
        </button>
      </div>

      {/* RENDER TAB CONTENT */}
      {activeTab === 'journal' ? (
        <JournalTab
          completedLessons={completedLessons}
          studentProfile={studentProfile}
          onClearJournal={onClearJournal}
        />
      ) : (
        /* TAB BÀI HỌC (DEFAULT) */
        <div className="space-y-6">
          {/* 1. GREETING & STREAK BANNER DÀNH CHO HỌC SINH CẤP 1 */}
          <section className="bg-gradient-to-br from-emerald-50 via-teal-50/70 to-amber-50/80 rounded-3xl p-5 border border-emerald-200/90 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8"></div>

            <div className="flex items-start justify-between relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                    Kỹ năng sống Tiểu học
                  </span>
                  {onOpenSettings && (
                    <button
                      onClick={onOpenSettings}
                      className="p-1 rounded-lg bg-white/70 hover:bg-white text-slate-500 hover:text-emerald-700 transition text-[11px] font-bold flex items-center gap-1 border border-emerald-200"
                      title="Chỉnh sửa thông tin lớp/học sinh"
                    >
                      <Settings className="w-3 h-3" />
                      <span>Cài đặt</span>
                    </button>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug">
                  Đồng hành cùng {studentProfile?.name || 'Học sinh Cấp 1'}! 🎒
                </h2>

                {/* Display grade & details */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mt-1 flex-wrap">
                  <span className="px-2 py-0.5 bg-white/80 rounded-md border border-slate-200">
                    {studentProfile?.name || 'Học sinh Cấp 1'}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200">
                    {studentProfile?.grade || 'Khối Tiểu học'}
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-600 mt-1.5 leading-relaxed">
                  Rèn luyện nếp sống tự lập, kỷ luật và kỹ năng ứng xử học đường mỗi ngày.
                </p>
              </div>

              <button
                onClick={onOpenSettings}
                className="text-4xl animate-bounce-slow p-1.5 rounded-2xl hover:bg-white/50 transition cursor-pointer"
                title="Bấm để đổi avatar"
              >
                {studentProfile?.avatar || '🎒'}
              </button>
            </div>

            {/* Highlight Stats Row */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-emerald-200/60">
              <div className="bg-white/85 backdrop-blur-xs rounded-2xl p-3 border border-emerald-200/70 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-xs">
                  <Flame className="w-6 h-6 fill-orange-500 text-orange-500" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Đã hoàn thành</div>
                  <div className="text-xl font-black text-orange-600 leading-tight">
                    {studentProfile?.daysLearned ?? 0} <span className="text-xs font-bold text-slate-600">kỹ năng</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/85 backdrop-blur-xs rounded-2xl p-3 border border-emerald-200/70 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
                  <Layers className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Hàng đợi rèn luyện</div>
                  <div className="text-sm font-black text-emerald-700 leading-tight">
                    {isFinishedAll ? 'Hoàn tất' : `Bài ${(currentLessonIndex ?? 0) + 1} / ${totalLessons || 365}`}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. THẺ TO Ở GIỮA: "BÀI TIẾP THEO" TRONG HÀNG ĐỢI */}
          {!isFinishedAll && nextLesson ? (
            <section className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                  Kỹ năng rèn luyện hôm nay
                </span>
                <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                  Bài #{(currentLessonIndex ?? 0) + 1}
                </span>
              </div>

              <div className="relative group rounded-3xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-amber-50/70 border-2 border-emerald-300 p-6 shadow-md shadow-emerald-100/60 hover:shadow-lg transition-all duration-300">
                {/* Top Tag & Pillar badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border ${pillarStyle?.badge}`}>
                      <span>{nextLesson.icon}</span>
                      Trụ cột: {nextLesson.pillar}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{nextLesson.duration}</span>
                  </div>
                </div>

                {/* Lesson Big Title */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl p-2.5 bg-white/90 rounded-2xl shadow-xs border border-emerald-100">
                      {nextLesson.icon}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug">
                      {nextLesson.title}
                    </h3>
                  </div>

                  {/* 4-step workflow badge */}
                  <div className="flex items-center gap-1.5 text-[11px] font-black text-emerald-800 bg-white/80 py-1.5 px-3 rounded-xl border border-emerald-200/90 flex-wrap">
                    <span className="text-emerald-700">🎯 Mục tiêu</span>
                    <span>→</span>
                    <span className="text-amber-700">📖 Tình huống</span>
                    <span>→</span>
                    <span className="text-indigo-700">💡 Chọn A-B-C-D</span>
                    <span>→</span>
                    <span className="text-teal-700">🏆 Kết luận</span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed bg-white/70 p-3 rounded-2xl border border-emerald-100/80">
                    🎯 <strong className="text-slate-900">Mục tiêu:</strong> {nextLesson.objective}
                  </p>

                  {nextLesson.situation && (
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed bg-amber-50/70 p-3 rounded-2xl border border-amber-200/70 line-clamp-2">
                      📖 <strong className="text-amber-950">Tình huống:</strong> "{nextLesson.situation}"
                    </p>
                  )}
                </div>

                {/* Big Action Button "Bắt đầu rèn luyện" */}
                <button
                  onClick={() => onStartLesson(currentLessonIndex)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-lg shadow-lg shadow-emerald-300/50 hover:shadow-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group/btn cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                  </div>
                  <span>Bắt đầu rèn luyện</span>
                  <ChevronRight className="w-5 h-5 text-emerald-100 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </section>
          ) : (
            /* Khi đã hoàn thành hết hàng đợi */
            <section className="bg-gradient-to-br from-emerald-100 to-teal-50 border-2 border-emerald-300 rounded-3xl p-6 text-center space-y-4 shadow-sm">
              <div className="text-5xl animate-bounce">🏆</div>
              <h3 className="text-2xl font-black text-emerald-950">
                Xuất sắc! Đã hoàn thành toàn bộ {totalLessons} bài rèn luyện!
              </h3>
              <p className="text-sm font-semibold text-slate-600">
                Học sinh đã xây dựng được nền tảng kỹ năng sống vững chắc. Có thể bắt đầu lại từ đầu để tiếp tục duy trì thói quen tốt.
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={onResetQueue}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Rèn luyện lại từ Bài 1</span>
                </button>
                <button
                  onClick={onOpenLibrary}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-sm shadow-xs transition cursor-pointer"
                >
                  <Library className="w-4 h-4" />
                  <span>Mở Thư viện</span>
                </button>
              </div>
            </section>
          )}

          {/* 3. BỘ LỌC TRỤ CỘT KỸ NĂNG & DANH SÁCH 5 BÀI SẮP TỚI */}
          <section className="space-y-3.5">
            {/* Header: Title + Button "Xem tất cả bài" */}
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-500" />
                  5 Kỹ năng tiếp theo trong hàng đợi
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Lọc theo 8 trụ cột kỹ năng học sinh tiểu học
                </p>
              </div>

              {/* Nút Xem tất cả bài */}
              <button
                onClick={onOpenLibrary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-black shadow-2xs transition cursor-pointer active:scale-95"
              >
                <Library className="w-3.5 h-3.5 text-emerald-600" />
                <span>Xem tất cả ({totalLessons})</span>
              </button>
            </div>

            {/* THANH NGANG CUỘN (HORIZONTAL SCROLL) CHỨA CÁC TRỤ CỘT KỸ NĂNG */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 px-0.5">
              {PILLARS.map((pillar) => {
                const isSelected = selectedPillar === pillar;
                return (
                  <button
                    key={pillar}
                    onClick={() => setSelectedPillar(pillar)}
                    className={`px-3.5 py-1.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all duration-150 cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs scale-102'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-200 hover:text-emerald-700 shadow-2xs'
                    }`}
                  >
                    {pillar}
                  </button>
                );
              })}
            </div>

            {/* DANH SÁCH 5 BÀI SẮP TỚI THEO FILTER */}
            {filteredUpcoming.length > 0 ? (
              <div className="space-y-3">
                {filteredUpcoming.map((lesson) => {
                  const originalIndex = allLessons.findIndex((l) => l.id === lesson.id);
                  const style = getPillarStyle(lesson.pillar);

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => onSelectLesson(originalIndex)}
                      className="group bg-white rounded-2xl p-4 border border-slate-200/90 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer active:scale-[0.99]"
                    >
                      {/* Left Queue Order & Icon */}
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <div className="relative shrink-0">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-emerald-50 group-hover:to-teal-50 border border-slate-200 group-hover:border-emerald-200 flex items-center justify-center text-2xl transition-colors shadow-xs">
                            {lesson.icon}
                          </div>
                          <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                            {originalIndex + 1}
                          </span>
                        </div>

                        {/* Lesson Info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${style.badge}`}>
                              {lesson.pillar}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {lesson.duration}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-1">
                            {lesson.title}
                          </h4>
                        </div>
                      </div>

                      {/* Right Action */}
                      <div className="flex items-center gap-1 text-slate-400 group-hover:text-emerald-600 transition-colors pl-2 shrink-0">
                        <span className="text-xs font-bold hidden sm:inline">Xem</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1.5 shadow-2xs">
                <p className="text-xs font-bold text-slate-600">
                  Không có bài học nào thuộc trụ cột <strong className="text-emerald-700">"{selectedPillar}"</strong> trong hàng đợi kế tiếp.
                </p>
                <button
                  onClick={() => setSelectedPillar('Tất cả')}
                  className="text-xs font-black text-emerald-600 hover:underline cursor-pointer"
                >
                  Xem tất cả các trụ cột
                </button>
              </div>
            )}
          </section>

          {/* 4. FOOTER NOTE */}
          <footer className="pt-2 text-center space-y-2">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/70 to-amber-50/70 border border-slate-200/70 text-xs font-semibold text-slate-600 leading-relaxed">
              🌿 <em>"Rèn nề nếp và kỹ năng sống từ cấp 1 là nền tảng vững chắc nhất cho sự tự lập và trưởng thành của các em học sinh!"</em>
            </div>
            <p className="text-[11px] text-slate-400 font-bold">
              Kỹ Năng Mỗi Ngày • Cẩm nang kỹ năng sống cho Học sinh Cấp 1
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
