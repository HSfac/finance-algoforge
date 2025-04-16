'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaCommentDots, FaRegCalendarCheck, FaTimes, FaPhone } from 'react-icons/fa';

export const MobileBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 페이지 로드 후 지연시간을 두고 배너 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3초 후에 표시

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* 접힌 상태의 배너 */}
      {!isExpanded && (
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg py-3 px-4 rounded-t-lg mx-auto max-w-xs w-full flex items-center justify-between"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/30 p-2 rounded-full">
              <FaCommentDots className="text-white" />
            </div>
            <span className="text-white font-medium">알고포지 문의하기</span>
          </div>
          <div className="bg-blue-600 p-2 rounded-full animate-pulse">
            <FaArrowRight className="text-white" />
          </div>
        </motion.div>
      )}

      {/* 펼쳐진 상태의 배너 */}
      {isExpanded && (
        <motion.div
          className="bg-gradient-to-b from-blue-900 to-black shadow-xl border-t border-blue-500/30 p-4 rounded-t-xl max-w-md mx-auto w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">알고포지에 문의하기</h3>
            <button
              className="bg-blue-800/50 p-2 rounded-full"
              onClick={() => setIsExpanded(false)}
            >
              <FaTimes className="text-white text-sm" />
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/contact"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-md p-3 group transition-colors duration-200"
              >
                <div className="bg-blue-500/30 p-2 rounded-full">
                  <FaCommentDots className="text-sm" />
                </div>
                <span className="text-sm font-medium">상담 요청하기</span>
                <FaArrowRight className="ml-auto text-xs" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/programs"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-md p-3 group transition-colors duration-200"
              >
                <div className="bg-blue-500/30 p-2 rounded-full">
                  <FaRegCalendarCheck className="text-sm" />
                </div>
                <span className="text-sm font-medium">프로그램 보기</span>
                <FaArrowRight className="ml-auto text-xs" />
              </Link>
            </motion.div>
            
            <motion.a
              href="tel:021234567"
              className="flex items-center gap-3 bg-blue-600/30 hover:bg-blue-600/50 text-white rounded-md p-3 transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bg-blue-500/30 p-2 rounded-full">
                <FaPhone className="text-sm" />
              </div>
              <span className="text-sm font-medium">전화 문의하기</span>
              <span className="ml-auto text-yellow-300 text-xs font-bold">02-123-4567</span>
            </motion.a>
          </div>
          
          <div className="text-center text-xs text-white/70 mt-2">
            <div className="data-line w-2/3 h-px mx-auto mb-2 bg-blue-500/30"></div>
            24시간 자동화 알고리즘 트레이딩 전문 서비스
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MobileBanner; 