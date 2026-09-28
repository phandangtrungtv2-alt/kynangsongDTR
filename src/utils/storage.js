// Tiện ích quản lý LocalStorage cho Sổ tay Kỹ Năng Sống Học Sinh Cấp 1

export const STORAGE_KEYS = {
  STUDENT_PROFILE: 'kynang_studentProfile',
  CHILD_PROFILE: 'kynang_childProfile', // Giữ tương thích ngược
  CURRENT_LESSON_INDEX: 'kynang_currentLessonIndex',
  COMPLETED_LESSONS: 'kynang_completedLessons',
};

export const defaultStudentProfile = {
  name: 'Học sinh Cấp 1',
  grade: 'Khối Tiểu học', // Lớp 1, 2, 3, 4, 5
  avatar: '🎒',
  daysLearned: 0,
};

// Đọc studentProfile an toàn
export function loadStudentProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STUDENT_PROFILE) || localStorage.getItem(STORAGE_KEYS.CHILD_PROFILE);
    if (!raw) return defaultStudentProfile;
    const parsed = JSON.parse(raw);
    return {
      name: parsed.name?.trim() || defaultStudentProfile.name,
      grade: parsed.grade || defaultStudentProfile.grade,
      avatar: parsed.avatar || defaultStudentProfile.avatar,
      daysLearned: typeof parsed.daysLearned === 'number' ? parsed.daysLearned : 0,
    };
  } catch (err) {
    console.warn('Lỗi đọc studentProfile từ localStorage, dùng mặc định:', err);
    return defaultStudentProfile;
  }
}

// Lưu studentProfile an toàn
export function saveStudentProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEYS.STUDENT_PROFILE, JSON.stringify(profile));
  } catch (err) {
    console.error('Không thể lưu studentProfile:', err);
  }
}

// Đọc currentLessonIndex an toàn
export function loadCurrentLessonIndex(maxLessons = 365) {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_LESSON_INDEX);
    if (raw === null) return 0;
    const idx = parseInt(raw, 10);
    if (isNaN(idx) || idx < 0) return 0;
    if (idx > maxLessons) return maxLessons;
    return idx;
  } catch (err) {
    console.warn('Lỗi đọc currentLessonIndex từ localStorage, reset về 0:', err);
    return 0;
  }
}

// Lưu currentLessonIndex an toàn
export function saveCurrentLessonIndex(index) {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_LESSON_INDEX, String(index));
  } catch (err) {
    console.error('Không thể lưu currentLessonIndex:', err);
  }
}

// Đọc completedLessons an toàn
export function loadCompletedLessons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Lỗi đọc completedLessons từ localStorage, trả về rỗng:', err);
    return [];
  }
}

// Lưu completedLessons an toàn
export function saveCompletedLessons(lessons) {
  try {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(lessons));
  } catch (err) {
    console.error('Không thể lưu completedLessons:', err);
  }
}

// Xuất file CSV (Tương thích tốt với Excel tiếng Việt có UTF-8 BOM)
export function exportJournalToCSV(completedLessons, studentName = 'Hoc_sinh_Cap_1') {
  if (!completedLessons || completedLessons.length === 0) {
    alert('Chưa có bài học nào trong nhật ký để xuất file!');
    return;
  }

  const headers = ['STT', 'Mã bài', 'Tên kỹ năng rèn luyện', 'Trụ cột', 'Thời lượng', 'Ngày hoàn thành', 'Đánh giá / Cảm xúc', 'Nhận xét của Ba Mẹ / Thầy Cô'];

  const rows = completedLessons.map((item, idx) => {
    const dateStr = item.completedAt ? new Date(item.completedAt).toLocaleString('vi-VN') : '';
    const cleanNote = (item.notes || '').replace(/"/g, '""');
    return [
      idx + 1,
      item.lessonId || '',
      `"${(item.lessonTitle || '').replace(/"/g, '""')}"`,
      `"${item.pillar || ''}"`,
      `"${item.duration || ''}"`,
      `"${dateStr}"`,
      `"${item.emotion || ''}"`,
      `"${cleanNote}"`,
    ].join(',');
  });

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  const fileName = `Nhat_ky_ky_nang_Cap_1_${studentName.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Xuất file JSON dự phòng đầy đủ
export function exportJournalToJSON(completedLessons, studentProfile) {
  const data = {
    exportDate: new Date().toISOString(),
    targetAudience: 'Học sinh Cấp 1 (Tiểu học)',
    studentProfile,
    totalCompleted: completedLessons.length,
    completedLessons,
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  const fileName = `Backup_KyNangCap1_${studentProfile?.name?.replace(/\s+/g, '_') || 'HocSinh'}_${new Date().toISOString().slice(0, 10)}.json`;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
