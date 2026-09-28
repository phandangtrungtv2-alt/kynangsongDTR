import React from 'react';
import { Award, Star, Flame, CheckCircle, ArrowRight, Heart } from 'lucide-react';

export default function CompletionModal({
  isOpen,
  lesson,
  childProfile,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full border-2 border-emerald-300 shadow-2xl space-y-5 text-center relative overflow-hidden animate-scale-up">
        {/* Decorative background glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none"></div>

        {/* Celebration Trophy Icon */}
        <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-amber-200 via-yellow-100 to-emerald-100 flex items-center justify-center border-4 border-white shadow-lg">
          <span className="text-5xl animate-bounce">🏆</span>
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md">
            <Heart className="w-4 h-4 fill-white" />
          </div>
        </div>

        {/* Congratulatory Text */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Tuyệt vời lắm!
          </div>
          <h3 className="text-2xl font-black text-slate-800 pt-1">
            Hoan hô {childProfile.name}!
          </h3>
          <p className="text-sm font-semibold text-slate-600 px-2">
            Bé và Ba Mẹ đã cùng nhau hoàn thành bài học:
          </p>
          <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-extrabold line-clamp-2">
            "{lesson.title}"
          </div>
        </div>

        {/* Stats Milestone */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-around">
          <div className="text-center">
            <div className="text-[11px] font-bold text-slate-500 uppercase">Ngày rèn luyện</div>
            <div className="text-xl font-black text-orange-600 flex items-center justify-center gap-1">
              <Flame className="w-5 h-5 fill-orange-500 text-orange-500" />
              <span>{childProfile.daysLearned} ngày</span>
            </div>
          </div>
          <div className="h-8 w-px bg-amber-200"></div>
          <div className="text-center">
            <div className="text-[11px] font-bold text-slate-500 uppercase">Thưởng huy hiệu</div>
            <div className="text-sm font-black text-emerald-700 flex items-center justify-center gap-1">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>+1 Sao Chăm</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-base shadow-lg shadow-emerald-200 transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Trở về Trang chủ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
