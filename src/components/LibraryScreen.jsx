import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, CheckCircle2, PlayCircle, Clock, BookOpen, ChevronRight, Layers } from 'lucide-react';
import { PILLARS, getPillarStyle } from '../data/lessonsData';

export default function LibraryScreen({
  lessons,
  currentLessonIndex,
  completedLessonIds = [],
  onBack,
  onSelectLesson,
}) {
  const [selectedPillar, setSelectedPillar] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'unlearned' | 'learned'
  const [displayCount, setDisplayCount] = useState(10); // Infinite scroll / pagination chunk

  // Filter lessons
  const filteredLessons = lessons.filter((lesson, index) => {
    // 1. Pillar filter
    if (selectedPillar !== 'Tất cả' && lesson.pillar !== selectedPillar) {
      return false;
    }
    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = lesson.title.toLowerCase().includes(q);
      const matchObjective = lesson.objective.toLowerCase().includes(q);
      if (!matchTitle && !matchObjective) return false;
    }
    // 3. Status filter
    const isLearned = completedLessonIds.includes(lesson.id) || index < currentLessonIndex;
    if (statusFilter === 'learned' && !isLearned) return false;
    if (statusFilter === 'unlearned' && isLearned) return false;

    return true;
  });

  const visibleLessons = filteredLessons.slice(0, displayCount);
  const hasMore = displayCount < filteredLessons.length;

  return (
    <div className="max-w-md mx-auto px-4 py-4 space-y-5 pb-28">
      {/* 1. TOP HEADER & BACK BUTTON */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm shadow-xs transition cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600" />
          <span>Về Trang chủ</span>
        </button>

        <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Kho 365 bài</span>
        </span>
      </div>

      {/* 2. TITLE BANNER */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50/70 border border-emerald-200 rounded-3xl p-5 shadow-xs">
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
          📚 Thư viện Kỹ Năng Sống Cấp 1
        </h1>
        <p className="text-xs font-bold text-slate-600 mt-1 leading-relaxed">
          Kho tàng 365 bài học rèn nề nếp, tự lập và ứng xử dành cho học sinh Tiểu học (Lớp 1 - 5). Chạm vào bất kỳ bài nào để xem chi tiết.
        </p>
      </div>

      {/* 3. SEARCH & STATUS FILTER */}
      <div className="space-y-2.5">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm bài học, kỹ năng..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-400 shadow-2xs"
          />
        </div>

        {/* Status Filter buttons */}
        <div className="flex gap-2 text-xs font-bold">
          <button
            onClick={() => setStatusFilter('all')}
            className={`flex-1 py-1.5 rounded-xl border transition cursor-pointer ${
              statusFilter === 'all'
                ? 'bg-slate-800 text-white border-slate-800 font-black'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Tất cả ({lessons.length})
          </button>
          <button
            onClick={() => setStatusFilter('unlearned')}
            className={`flex-1 py-1.5 rounded-xl border transition cursor-pointer ${
              statusFilter === 'unlearned'
                ? 'bg-slate-800 text-white border-slate-800 font-black'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Chưa học ({lessons.length - currentLessonIndex})
          </button>
          <button
            onClick={() => setStatusFilter('learned')}
            className={`flex-1 py-1.5 rounded-xl border transition cursor-pointer ${
              statusFilter === 'learned'
                ? 'bg-emerald-600 text-white border-emerald-600 font-black'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Đã học ({currentLessonIndex})
          </button>
        </div>

        {/* Horizontal Scroll Pill Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar;
            return (
              <button
                key={pillar}
                onClick={() => setSelectedPillar(pillar)}
                className={`px-3 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs scale-102'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-200 hover:text-emerald-700'
                }`}
              >
                {pillar}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. LESSONS LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1 text-xs font-bold text-slate-500">
          <span>Kết quả: {filteredLessons.length} bài học</span>
          <span>Đang hiển thị {visibleLessons.length} bài</span>
        </div>

        {visibleLessons.length > 0 ? (
          visibleLessons.map((lesson) => {
            // Find real index in full lessons array
            const originalIndex = lessons.findIndex((l) => l.id === lesson.id);
            const isLearned = completedLessonIds.includes(lesson.id) || originalIndex < currentLessonIndex;
            const isNext = originalIndex === currentLessonIndex;
            const style = getPillarStyle(lesson.pillar);

            return (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(originalIndex)}
                className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 shadow-2xs hover:shadow-md active:scale-[0.99] ${
                  isNext
                    ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/70 border-2 border-emerald-400 shadow-emerald-100'
                    : isLearned
                    ? 'bg-white/80 border-emerald-200/80 opacity-90'
                    : 'bg-white border-slate-200/90 hover:border-emerald-300'
                }`}
              >
                {/* Left Index & Icon */}
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shadow-2xs">
                      {lesson.icon}
                    </div>
                    <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                      {lesson.id}
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${style.badge}`}>
                        {lesson.pillar}
                      </span>

                      {/* Status Badge */}
                      {isLearned ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Đã học
                        </span>
                      ) : isNext ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-300 animate-pulse">
                          <PlayCircle className="w-3 h-3 text-amber-600" />
                          Bài tiếp theo
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                          Chưa học
                        </span>
                      )}

                      <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.duration}
                      </span>
                    </div>

                    <h3 className="text-sm font-black text-slate-800 leading-snug line-clamp-1">
                      {lesson.title}
                    </h3>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="text-slate-400 shrink-0 pl-1">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-2">
            <div className="text-3xl">🔍</div>
            <p className="text-sm font-bold text-slate-700">Không tìm thấy bài học phù hợp</p>
            <p className="text-xs text-slate-400">Hãy thử đổi từ khóa tìm kiếm hoặc chọn trụ cột khác nhé!</p>
          </div>
        )}

        {/* Load More Button (Infinite scroll pagination) */}
        {hasMore && (
          <div className="pt-2 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 10)}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-emerald-200 text-emerald-800 font-extrabold text-sm shadow-xs transition cursor-pointer active:scale-95"
            >
              Xem thêm 10 bài tiếp theo ({filteredLessons.length - visibleLessons.length} bài còn lại)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
