import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LessonDetail from './components/LessonDetail';
import LibraryScreen from './components/LibraryScreen';
import ReflectionModal from './components/ReflectionModal';
import SettingsModal from './components/SettingsModal';
import { lessonsData } from './data/lessonsData';
import {
  loadStudentProfile,
  saveStudentProfile,
  loadCurrentLessonIndex,
  saveCurrentLessonIndex,
  loadCompletedLessons,
  saveCompletedLessons,
  defaultStudentProfile,
} from './utils/storage';

export default function App() {
  const totalLessons = lessonsData.length;

  // 1. Student Profile State (safe localStorage loader)
  const [studentProfile, setStudentProfile] = useState(() => loadStudentProfile());

  // 2. Queue State: currentLessonIndex (safe localStorage loader)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(() =>
    loadCurrentLessonIndex(totalLessons)
  );

  // 3. Completed Lessons Journal State (safe localStorage loader)
  const [completedLessons, setCompletedLessons] = useState(() =>
    loadCompletedLessons()
  );

  // 4. Navigation & Tab State:
  // screen: 'dashboard' | 'lesson-detail' | 'library'
  // dashboard tab: 'lessons' | 'journal'
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [activeDashboardTab, setActiveDashboardTab] = useState('lessons');
  const [viewingLessonIndex, setViewingLessonIndex] = useState(0);

  // 5. Modals State
  const [isReflectionModalOpen, setIsReflectionModalOpen] = useState(false);
  const [activeCompletingLesson, setActiveCompletingLesson] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Safe sync to localStorage whenever state changes
  useEffect(() => {
    saveStudentProfile(studentProfile);
  }, [studentProfile]);

  useEffect(() => {
    saveCurrentLessonIndex(currentLessonIndex);
  }, [currentLessonIndex]);

  useEffect(() => {
    saveCompletedLessons(completedLessons);
  }, [completedLessons]);

  // Next lesson in Queue (the one currently at currentLessonIndex)
  const nextLesson = currentLessonIndex < totalLessons ? lessonsData[currentLessonIndex] : null;

  // Completed lesson IDs array for easy lookup
  const completedLessonIds = completedLessons.map((l) => l.lessonId);

  // Start the current lesson in queue
  const handleStartLesson = (index = currentLessonIndex) => {
    const targetIndex = index < totalLessons ? index : currentLessonIndex;
    setViewingLessonIndex(targetIndex);
    setCurrentScreen('lesson-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Preview / select a specific lesson (from Dashboard or Library)
  const handleSelectLesson = (index) => {
    setViewingLessonIndex(index);
    setCurrentScreen('lesson-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Library Screen
  const handleOpenLibrary = () => {
    setCurrentScreen('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to dashboard without changing queue
  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // LOGIC: BẤM "BỎ QUA"
  const handleSkipLesson = () => {
    setCurrentLessonIndex((prevIndex) => Math.min(prevIndex + 1, totalLessons));
    setCurrentScreen('dashboard');
    setActiveDashboardTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // LOGIC: BẤM "ĐÃ HOÀN THÀNH"
  const handleCompleteLesson = (lesson) => {
    // 1. Pháo hoa Confetti ăn mừng
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#34D399', '#FBBF24', '#F472B6', '#60A5FA', '#A78BFA'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 250);
    } catch (err) {
      console.error('Confetti error', err);
    }

    // 2. Mở Modal "Ghi nhận hôm nay" (không về Dashboard ngay)
    setActiveCompletingLesson(lesson);
    setIsReflectionModalOpen(true);
  };

  // LOGIC: BẤM "LƯU VÀ VỀ TRANG CHỦ" TRONG MODAL
  const handleSaveReflection = (reflectionData) => {
    // 1. Đẩy dữ liệu vào completedLessons
    setCompletedLessons((prev) => [...prev, reflectionData]);

    // 2. Tăng số bài học sinh đã hoàn thành
    setStudentProfile((prev) => ({
      ...prev,
      daysLearned: prev.daysLearned + 1,
    }));

    // 3. Tăng currentLessonIndex lên 1
    setCurrentLessonIndex((prevIndex) => Math.min(prevIndex + 1, totalLessons));

    // 4. Đóng Modal và chuyển về Dashboard tại tab "Nhật ký"
    setIsReflectionModalOpen(false);
    setActiveCompletingLesson(null);
    setCurrentScreen('dashboard');
    setActiveDashboardTab('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cập nhật thông tin học sinh từ Settings
  const handleSaveProfile = (newProfile) => {
    setStudentProfile(newProfile);
  };

  // Đặt lại hàng đợi về Bài 1
  const handleResetQueue = () => {
    setCurrentLessonIndex(0);
    setViewingLessonIndex(0);
    setCurrentScreen('dashboard');
    setActiveDashboardTab('lessons');
  };

  // Xóa toàn bộ dữ liệu & Reset sạch sẽ (an toàn khi clear cache)
  const handleClearAllData = () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.warn('Lỗi khi clear localStorage:', e);
    }
    setStudentProfile(defaultStudentProfile);
    setCurrentLessonIndex(0);
    setCompletedLessons([]);
    setViewingLessonIndex(0);
    setCurrentScreen('dashboard');
    setActiveDashboardTab('lessons');
  };

  // Xóa chỉ nhật ký
  const handleClearJournal = () => {
    setCompletedLessons([]);
  };

  // The lesson to show in detail view
  const activeDetailLesson = lessonsData[viewingLessonIndex] || nextLesson || lessonsData[0];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 flex flex-col font-sans">
      {/* Persistent Mobile-First Header */}
      <Header
        studentProfile={studentProfile}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto">
        {currentScreen === 'dashboard' ? (
          <Dashboard
            studentProfile={studentProfile}
            currentLessonIndex={currentLessonIndex}
            totalLessons={totalLessons}
            allLessons={lessonsData}
            nextLesson={nextLesson}
            completedLessons={completedLessons}
            activeTab={activeDashboardTab}
            onTabChange={setActiveDashboardTab}
            onStartLesson={handleStartLesson}
            onSelectLesson={handleSelectLesson}
            onResetQueue={handleResetQueue}
            onClearJournal={handleClearJournal}
            onOpenLibrary={handleOpenLibrary}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        ) : currentScreen === 'library' ? (
          <LibraryScreen
            lessons={lessonsData}
            currentLessonIndex={currentLessonIndex}
            completedLessonIds={completedLessonIds}
            onBack={handleBackToDashboard}
            onSelectLesson={handleSelectLesson}
          />
        ) : (
          <LessonDetail
            lesson={activeDetailLesson}
            studentProfile={studentProfile}
            lessonIndex={viewingLessonIndex}
            totalLessons={totalLessons}
            onBack={handleBackToDashboard}
            onCompleteLesson={handleCompleteLesson}
            onSkipLesson={handleSkipLesson}
          />
        )}
      </main>

      {/* Modal "Ghi nhận rèn luyện" */}
      <ReflectionModal
        isOpen={isReflectionModalOpen}
        lesson={activeCompletingLesson}
        studentProfile={studentProfile}
        onSaveAndClose={handleSaveReflection}
        onDismiss={() => setIsReflectionModalOpen(false)}
      />

      {/* Modal Cài đặt & Xuất dữ liệu */}
      <SettingsModal
        isOpen={isSettingsOpen}
        studentProfile={studentProfile}
        completedLessons={completedLessons}
        onClose={() => setIsSettingsOpen(false)}
        onSaveProfile={handleSaveProfile}
        onResetQueue={handleResetQueue}
        onClearAllData={handleClearAllData}
      />
    </div>
  );
}
