// Nạp dữ liệu 365 bài học Kỹ Năng Mỗi Ngày từ file JSON đã generate
import full365Lessons from './full_365_lessons.json';

export const PILLARS = [
  'Tất cả',
  'Tự lập',
  'Giao tiếp',
  'Cảm xúc',
  'An toàn',
  'Tài chính',
  'Vệ sinh',
  'Tư duy',
  'Xã hội',
];

export const initialChildProfile = {
  name: 'Bé Bơ',
  avatar: '🥑',
  birthYear: 2022,
  daysLearned: 12,
};

// Toàn bộ 365 bài học kỹ năng
export const lessonsData = full365Lessons;

// Helper lấy màu sắc theo Trụ cột kỹ năng
export function getPillarStyle(pillar) {
  switch (pillar) {
    case 'Tự lập':
      return {
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        gradient: 'from-emerald-50 via-teal-50 to-green-50',
        accent: 'text-emerald-700',
        activeBtn: 'bg-emerald-600 text-white shadow-emerald-200',
      };
    case 'Giao tiếp':
      return {
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        gradient: 'from-amber-50 via-orange-50 to-yellow-50',
        accent: 'text-amber-700',
        activeBtn: 'bg-amber-600 text-white shadow-amber-200',
      };
    case 'Cảm xúc':
      return {
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
        gradient: 'from-rose-50 via-pink-50 to-orange-50',
        accent: 'text-rose-700',
        activeBtn: 'bg-rose-600 text-white shadow-rose-200',
      };
    case 'An toàn':
      return {
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        gradient: 'from-purple-50 via-indigo-50 to-pink-50',
        accent: 'text-purple-700',
        activeBtn: 'bg-purple-600 text-white shadow-purple-200',
      };
    case 'Tài chính':
      return {
        badge: 'bg-yellow-100 text-yellow-900 border-yellow-300',
        gradient: 'from-yellow-50 via-amber-50 to-orange-50',
        accent: 'text-yellow-800',
        activeBtn: 'bg-yellow-600 text-white shadow-yellow-200',
      };
    case 'Vệ sinh':
      return {
        badge: 'bg-sky-100 text-sky-800 border-sky-200',
        gradient: 'from-sky-50 via-teal-50 to-cyan-50',
        accent: 'text-sky-700',
        activeBtn: 'bg-sky-600 text-white shadow-sky-200',
      };
    case 'Xã hội':
      return {
        badge: 'bg-teal-100 text-teal-800 border-teal-200',
        gradient: 'from-teal-50 via-emerald-50 to-green-50',
        accent: 'text-teal-700',
        activeBtn: 'bg-teal-600 text-white shadow-teal-200',
      };
    case 'Tư duy':
    default:
      return {
        badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        gradient: 'from-indigo-50 via-purple-50 to-blue-50',
        accent: 'text-indigo-700',
        activeBtn: 'bg-indigo-600 text-white shadow-indigo-200',
      };
  }
}
