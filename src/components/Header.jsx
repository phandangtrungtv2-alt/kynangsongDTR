import React from 'react';
import { BookOpen, Settings, GraduationCap } from 'lucide-react';

export default function Header({ studentProfile, onOpenSettings }) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-md mx-auto px-4 py-2.5">
        {/* Top small badge */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-medium">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Học sinh Cấp 1 • Tiểu học (Lớp 1 - 5)
          </span>
          <span className="inline-flex items-center gap-1 text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 text-[11px] font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            Rèn luyện nề nếp
          </span>
        </div>

        {/* Main Header bar */}
        <div className="flex items-center justify-between gap-2">
          {/* Logo & App Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-200 via-teal-100 to-amber-100 flex items-center justify-center text-xl shadow-xs border border-emerald-200 shrink-0">
              🎒
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black text-slate-800 tracking-tight leading-tight">
                Kỹ Năng Mỗi Ngày
              </h1>
              <p className="text-[11px] text-slate-500 font-bold leading-none mt-0.5">
                Cẩm nang kỹ năng sống cho Học sinh Cấp 1
              </p>
            </div>
          </div>

          {/* Right Action: Student Profile Pill & Settings Button */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition text-left cursor-pointer active:scale-95"
              title="Cài đặt thông tin học sinh"
            >
              <span className="text-base">{studentProfile?.avatar || '🎒'}</span>
              <div className="leading-tight">
                <div className="text-xs font-black text-slate-800 max-w-[85px] truncate">
                  {studentProfile?.name || 'Học sinh Cấp 1'}
                </div>
                <div className="text-[10px] font-bold text-emerald-700">
                  {studentProfile?.grade || 'Khối Tiểu học'}
                </div>
              </div>
            </button>

            {/* Dedicated Settings Gear Button */}
            <button
              onClick={onOpenSettings}
              className="w-8 h-8 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition shadow-2xs cursor-pointer active:scale-90"
              title="Cài đặt & Xuất nhật ký"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
