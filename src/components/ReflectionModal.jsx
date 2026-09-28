import React, { useState } from 'react';
import { Sparkles, MessageSquare, Save } from 'lucide-react';
import { getPillarStyle } from '../data/lessonsData';

const EVALUATIONS = [
  {
    id: 'Rất tự giác',
    label: 'Rất tự giác',
    emoji: '🤩',
    desc: 'Chủ động, tích cực',
    color: 'border-emerald-300 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'Hoàn thành tốt',
    label: 'Hoàn thành tốt',
    emoji: '😊',
    desc: 'Đạt yêu cầu rèn luyện',
    color: 'border-amber-300 bg-amber-50 text-amber-800'
  },
  {
    id: 'Cần rèn thêm',
    label: 'Cần rèn thêm',
    emoji: '🤔',
    desc: 'Cần nhắc nhở / ôn lại',
    color: 'border-rose-300 bg-rose-50 text-rose-800'
  }
];

export default function ReflectionModal({
  isOpen,
  lesson,
  studentProfile,
  onSaveAndClose,
  onDismiss,
}) {
  const [selectedEvaluation, setSelectedEvaluation] = useState('Rất tự giác');
  const [notes, setNotes] = useState('');

  if (!isOpen || !lesson) return null;

  const pillarStyle = getPillarStyle(lesson.pillar);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveAndClose({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      pillar: lesson.pillar,
      icon: lesson.icon,
      duration: lesson.duration,
      emotion: selectedEvaluation,
      notes: notes.trim(),
      completedAt: new Date().toISOString(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full border-2 border-emerald-300 shadow-2xl space-y-4 relative overflow-hidden animate-scale-up max-h-[92vh] overflow-y-auto">
        {/* Glow background */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-100 rounded-full blur-2xl pointer-events-none"></div>

        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-2xl bg-emerald-100 text-xl shadow-xs">
              🎒
            </span>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Ghi nhận rèn luyện
              </div>
              <h3 className="text-lg font-black text-slate-800 pt-0.5">
                Nhật ký nề nếp {studentProfile?.name || 'Học sinh Cấp 1'}
              </h3>
            </div>
          </div>
        </div>

        {/* Lesson Tag Summary */}
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${pillarStyle.badge}`}>
              Trụ cột: {lesson.pillar}
            </span>
            <span className="text-[11px] text-slate-400 font-bold">•</span>
            <span className="text-[11px] text-slate-500 font-bold">{lesson.duration}</span>
          </div>
          <div className="text-sm font-black text-slate-800 flex items-center gap-1.5">
            <span>{lesson.icon}</span>
            <span className="line-clamp-1">{lesson.title}</span>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* 1. Đánh giá mức độ tự giác của học sinh */}
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wide">
              Mức độ tự giác & hoàn thành:
            </label>
            
            {/* Dropdown */}
            <div className="relative">
              <select
                value={selectedEvaluation}
                onChange={(e) => setSelectedEvaluation(e.target.value)}
                className="w-full py-2.5 px-3.5 rounded-2xl border-2 border-emerald-200 bg-white text-sm font-bold text-slate-800 shadow-2xs focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
              >
                <option value="Rất tự giác">🤩 Rất tự giác (Hào hứng, chủ động thực hiện)</option>
                <option value="Hoàn thành tốt">😊 Hoàn thành tốt (Đạt yêu cầu rèn luyện)</option>
                <option value="Cần rèn thêm">🤔 Cần rèn thêm (Cần nhắc nhở / luyện tập thêm)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500 text-xs font-bold">
                ▼
              </div>
            </div>

            {/* Visual Pills */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {EVALUATIONS.map((item) => {
                const isSelected = selectedEvaluation === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedEvaluation(item.id)}
                    className={`p-2 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                      isSelected
                        ? item.color + ' shadow-xs scale-102 font-black'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold opacity-75'
                    }`}
                  >
                    <div className="text-xl mb-0.5">{item.emoji}</div>
                    <div className="text-xs leading-tight">{item.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Nhận xét của Ba Mẹ / Thầy Cô */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wide flex items-center justify-between">
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                Nhận xét của Ba Mẹ / Thầy Cô:
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">(Tùy chọn)</span>
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="VD: Hôm nay con đã chủ động tự giác soạn cặp sách đúng thời khóa biểu, làm bài tập xong trước 8h tối..."
              className="w-full p-3 rounded-2xl border-2 border-slate-200 bg-slate-50/70 focus:bg-white text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition"
            />
          </div>

          {/* 3. NÚT "LƯU VÀ VỀ TRANG CHỦ" */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 active:scale-[0.98] text-white font-black text-base shadow-lg shadow-emerald-200/80 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Save className="w-5 h-5" />
              <span>Lưu và Về Trang Chủ</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
