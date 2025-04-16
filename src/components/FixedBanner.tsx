'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaCommentDots, FaRegCalendarCheck } from 'react-icons/fa';

interface FixedBannerProps {
  showOnMobile?: boolean;
}

export const FixedBanner = ({ showOnMobile = true }: FixedBannerProps) => {
  const [isExpanded, setIsExpanded] = useState(true); // 처음에는 펼쳐진 상태로 설정
  const [isVisible, setIsVisible] = useState(false);

  // 페이지 로드 후 지연시간을 두고 배너 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500); // 2.5초 후에 표시 (충분히 지연)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed right-0 z-40 ${showOnMobile ? 'bottom-16 md:bottom-auto md:top-1/3' : 'hidden md:block md:top-1/3'}`}>
      <div className="relative">
        {/* 배너 컨텐츠 */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-black shadow-xl border-l border-t border-b border-primary/30 py-4 rounded-l-lg overflow-hidden flex"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ 
            x: !isVisible ? '100%' : (isExpanded ? 0 : 'calc(100% - 36px)'),
            opacity: isVisible ? 1 : 0
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 35,
            delay: 0  // 애니메이션 지연은 useEffect로 처리
          }}
        >
          {/* 확장 토글 버튼 - 배너 내부로 이동 */}
          <button
            className="w-9 h-auto flex-shrink-0 flex items-center justify-center text-white bg-blue-600 -ml-[1px] -my-[1px] rounded-l-md border-r border-blue-500/30"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronLeft className="text-white" />
            </motion.div>
          </button>

          <div className="px-4 w-64 md:w-64 sm:w-56 xs:w-48">
            <h3 className="text-lg font-bold text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              알고포지에 문의하기
            </h3>
            
            <div className="space-y-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/contact"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-md p-3 group transition-colors duration-200"
                >
                  <div className="bg-primary/30 p-2 rounded-full">
                    <FaCommentDots className="text-sm" />
                  </div>
                  <span className="text-sm font-medium">상담 요청하기</span>
                  <FaArrowRight className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/programs"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-md p-3 group transition-colors duration-200"
                >
                  <div className="bg-primary/30 p-2 rounded-full">
                    <FaRegCalendarCheck className="text-sm" />
                  </div>
                  <span className="text-sm font-medium">프로그램 보기</span>
                  <FaArrowRight className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </div>
            
            <div className="p-3 bg-black/40 rounded-md">
              <p className="text-xs text-white/80 font-light text-center mb-1">
                맞춤형 솔루션이 필요하신가요?
              </p>
              <div className="data-line w-full h-px my-2"></div>
              <p className="text-center text-yellow-300 text-xs font-medium">
                02-123-4567
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FixedBanner; 