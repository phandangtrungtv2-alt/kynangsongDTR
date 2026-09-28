import React, { useState } from 'react';
import { X, Save, Download, FileSpreadsheet, FileCode, RotateCcw, User, GraduationCap, ShieldCheck } from 'lucide-react';
import { exportJournalToCSV, exportJournalToJSON } from '../utils/storage';

const STUDENT_AVATARS = ['🎒', '✏️', '📚', '🌟', '🚀', '⚽', '🎨', '🔬', '🏆', '🦁', '🦄', '🐼'];

const GRADE_OPTIONS = [
  'Khối Tiểu học',
  'Lớp 1 (6 tuổi)',
  'Lớp 2 (7 tuổi)',
  'Lớp 3 (8 tuổi)',
  'Lớp 4 (9 tuổi)',
  'Lớp 5 (10 tuổi)',
];

export default function SettingsModal({
  isOpen,
  studentProfile,
  completedLessons = [],
  onClose,
  onSaveProfile,
  onResetQueue,
  onClearAllData,
}) {
  const [name, setName] = useState(studentProfile?.name || 'Học sinh Cấp 1');
  const [grade, setGrade] = useState(studentProfile?.grade || 'Khối Tiểu học');
  const [avatar, setAvatar] = useState(studentProfile?.avatar || '🎒');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSaveProfile({
      ...studentProfile,
      name: name.trim(),
      grade,
      avatar,
    });

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full border-2 border-emerald-300 shadow-2xl space-y-5 relative overflow-hidden animate-scale-up max-h-[92vh] overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 text-lg shadow-2xs">
              ⚙️
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800 leading-tight">
                Cài đặt & Thông tin học sinh
              </h3>
              <p className="text-[11px] font-bold text-slate-400">
                Sổ tay kỹ năng sống học sinh Cấp 1
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. FORM THÔNG TIN HỌC SINH / LỚP HỌC */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-3 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80">
            <h4 className="text-xs font-black uppercase tracking-wide text-emerald-900 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-700" />
              Thông tin học sinh / Khối lớp
            </h4>

            {/* Tên học sinh */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Tên học sinh / Tên gọi của con:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Học sinh Cấp 1, Bảo Nam, Minh Thư..."
                maxLength={25}
                required
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:border-emerald-500 shadow-2xs"
              />
            </div>

            {/* Khối lớp */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                Khối lớp rèn luyện:
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:border-emerald-500 shadow-2xs"
              >
                {GRADE_OPTIONS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Chọn Avatar biểu tượng học sinh */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-bold text-slate-600">Chọn biểu tượng học sinh:</label>
              <div className="grid grid-cols-6 gap-1.5">
                {STUDENT_AVATARS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setAvatar(emoji)}
                    className={`h-9 rounded-xl text-lg flex items-center justify-center transition cursor-pointer ${
                      avatar === emoji
                        ? 'bg-white border-2 border-emerald-500 shadow-xs scale-110'
                        : 'bg-white/60 border border-slate-200 hover:bg-white'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Nút Lưu thông tin */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{savedSuccess ? 'Đã lưu thành công! ✓' : 'Lưu thông tin'}</span>
            </button>
          </div>
        </form>

        {/* 2. XUẤT NHẬT KÝ RÈN LUYỆN OFFLINE */}
        <div className="space-y-2.5 bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 text-left">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black uppercase tracking-wide text-amber-900 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-amber-700" />
              Xuất nhật ký rèn luyện (Offline)
            </h4>
            <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              {completedLessons.length} bài đã lưu
            </span>
          </div>
          <p className="text-[11px] font-semibold text-slate-600 leading-relaxed">
            Xuất dữ liệu tiến độ rèn luyện của học sinh ra file để lưu trữ học bạ hoặc mở xem trên Excel.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => exportJournalToCSV(completedLessons, name)}
              className="py-2.5 px-3 rounded-xl bg-white hover:bg-amber-100/70 border border-amber-300 text-amber-900 font-extrabold text-xs shadow-2xs transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Xuất file Excel (CSV)</span>
            </button>

            <button
              onClick={() => exportJournalToJSON(completedLessons, studentProfile)}
              className="py-2.5 px-3 rounded-xl bg-white hover:bg-amber-100/70 border border-amber-300 text-amber-900 font-extrabold text-xs shadow-2xs transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <FileCode className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Xuất file JSON</span>
            </button>
          </div>
        </div>

        {/* 3. QUẢN LÝ DỮ LIỆU & BẢO MẬT */}
        <div className="space-y-2 pt-1 border-t border-slate-100 text-left">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dữ liệu lưu 100% trên thiết bị của bạn, bảo mật tuyệt đối.</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                if (window.confirm('Bạn có muốn đặt lại hàng đợi về Bài số 1 không? (Nhật ký vẫn được giữ nguyên)')) {
                  onResetQueue();
                  onClose();
                }
              }}
              className="flex-1 py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition text-center cursor-pointer"
            >
              Đặt lại hàng đợi về #1
            </button>

            <button
              onClick={() => {
                if (window.confirm('CẢNH BÁO: Hành động này sẽ xóa toàn bộ nhật ký và tiến độ rèn luyện trên máy này. Bạn có chắc chắn không?')) {
                  onClearAllData();
                  onClose();
                }
              }}
              className="py-2 px-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] transition text-center cursor-pointer border border-rose-200"
            >
              Xóa tất cả
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
