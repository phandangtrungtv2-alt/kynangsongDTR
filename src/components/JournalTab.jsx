import React from 'react';
import { BookOpen, Sparkles, Calendar, MessageSquare, Clock, Trash2, GraduationCap } from 'lucide-react';
import { getPillarStyle } from '../data/lessonsData';

function formatCompletedDate(isoString) {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Gần đây';
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} lúc ${hours}:${mins}`;
  } catch {
    return 'Gần đây';
  }
}

function getEvaluationBadge(evaluation) {
  switch (evaluation) {
    case 'Rất tự giác':
    case 'Rất thích':
      return {
        emoji: '🤩',
        text: 'Rất tự giác',
        color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      };
    case 'Hoàn thành tốt':
    case 'Bình thường':
      return {
        emoji: '😊',
        text: 'Hoàn thành tốt',
        color: 'bg-amber-100 text-amber-800 border-amber-200',
      };
    case 'Cần rèn thêm':
    case 'Khó hiểu':
    default:
      return {
        emoji: '🤔',
        text: 'Cần rèn thêm',
        color: 'bg-rose-100 text-rose-800 border-rose-200',
      };
  }
}

export default function JournalTab({
  completedLessons = [],
  studentProfile,
  onClearJournal,
}) {
  const sortedEntries = [...completedLessons].reverse();

  const countGreat = completedLessons.filter(l => l.emotion === 'Rất tự giác' || l.emotion === 'Rất thích').length;
  const countGood = completedLessons.filter(l => l.emotion === 'Hoàn thành tốt' || l.emotion === 'Bình thường').length;
  const countNeedWork = completedLessons.filter(l => l.emotion === 'Cần rèn thêm' || l.emotion === 'Khó hiểu').length;

  return (
    <div className="space-y-5">
      {/* 1. JOURNAL HEADER SUMMARY */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50/70 to-amber-50/80 rounded-3xl p-5 border border-emerald-200/90 shadow-xs relative overflow-hidden">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Sổ tay rèn luyện nề nếp
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              Nhật ký của {studentProfile?.name || 'Học sinh Cấp 1'} 📖
            </h2>
            <p className="text-xs font-bold text-slate-600 mt-1">
              Ghi nhận hành trình xây dựng tính tự lập và các kỹ năng sống tiểu học.
            </p>
          </div>
          <div className="text-3xl">🎒</div>
        </div>

        {/* Evaluation quick stats */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-emerald-200/60 text-center">
          <div className="p-2.5 rounded-2xl bg-white/80 border border-emerald-200/80 shadow-2xs">
            <div className="text-base">🤩</div>
            <div className="text-lg font-black text-emerald-700">{countGreat}</div>
            <div className="text-[10px] font-bold text-slate-500">Rất tự giác</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/80 border border-amber-200/80 shadow-2xs">
            <div className="text-base">😊</div>
            <div className="text-lg font-black text-amber-700">{countGood}</div>
            <div className="text-[10px] font-bold text-slate-500">Hoàn thành tốt</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/80 border border-rose-200/80 shadow-2xs">
            <div className="text-base">🤔</div>
            <div className="text-lg font-black text-rose-700">{countNeedWork}</div>
            <div className="text-[10px] font-bold text-slate-500">Cần rèn thêm</div>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE ENTRIES */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Lịch sử rèn luyện ({completedLessons.length})</span>
          </h3>
          {completedLessons.length > 0 && onClearJournal && (
            <button
              onClick={() => {
                if (window.confirm('Bạn có chắc muốn xóa lịch sử nhật ký không?')) {
                  onClearJournal();
                }
              }}
              className="text-[11px] font-bold text-slate-400 hover:text-rose-500 flex items-center gap-1 transition cursor-pointer"
              title="Xóa lịch sử"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa nhật ký</span>
            </button>
          )}
        </div>

        {sortedEntries.length > 0 ? (
          <div className="space-y-3.5">
            {sortedEntries.map((entry, index) => {
              const pillarStyle = getPillarStyle(entry.pillar);
              const evalBadge = getEvaluationBadge(entry.emotion);

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3"
                >
                  {/* Top line: Date and Evaluation */}
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                    <span className="inline-flex items-center gap-1 text-slate-400 font-bold text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {formatCompletedDate(entry.completedAt)}
                    </span>

                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-black ${evalBadge.color}`}>
                      <span>{evalBadge.emoji}</span>
                      <span>{evalBadge.text}</span>
                    </span>
                  </div>

                  {/* Lesson Info */}
                  <div className="flex items-start gap-3 pt-1">
                    <span className="text-3xl p-2 rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs shrink-0">
                      {entry.icon || '🌱'}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${pillarStyle.badge}`}>
                          Trụ cột: {entry.pillar}
                        </span>
                        {entry.duration && (
                          <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {entry.duration}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-black text-slate-800 leading-snug">
                        {entry.lessonTitle}
                      </h4>
                    </div>
                  </div>

                  {/* Comments from parent / teacher */}
                  {entry.notes ? (
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-left space-y-1">
                      <div className="text-[11px] font-black text-amber-800 uppercase flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-amber-600" />
                        Nhận xét của Ba Mẹ / Thầy Cô:
                      </div>
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed italic">
                        "{entry.notes}"
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs font-semibold text-slate-400 italic px-1">
                      Đạt yêu cầu rèn luyện kỹ năng.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 text-center space-y-3 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-xs border border-emerald-100">
              🎒
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-black text-slate-800">
                Chưa có ghi chép rèn luyện nào
              </h4>
              <p className="text-xs font-semibold text-slate-500 max-w-xs mx-auto leading-relaxed">
                Khi học sinh hoàn thành mỗi bài và bấm <strong className="text-emerald-700">"Đã hoàn thành"</strong>, ba mẹ hoặc thầy cô có thể ghi lại nhận xét và đánh giá tại đây!
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
