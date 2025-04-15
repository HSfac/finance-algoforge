'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

// SVG 아이콘 컴포넌트 직접 정의
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-secondary text-2xl">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const EnvelopeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const MapMarkerIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const STRATEGY_TYPES = [
  { id: 'quant', label: '퀀트 전략' },
  { id: 'trend', label: '추세 추종' },
  { id: 'arbitrage', label: '차익거래' },
  { id: 'market_making', label: '마켓 메이킹' },
  { id: 'options', label: '옵션 전략' },
  { id: 'custom', label: '커스텀 개발' },
];

const BUDGET_OPTIONS = [
  { id: 'under_5m', label: '500만원 미만' },
  { id: '5m_10m', label: '500만원 - 1000만원' },
  { id: '10m_30m', label: '1000만원 - 3000만원' },
  { id: 'over_30m', label: '3000만원 이상' },
  { id: 'discuss', label: '협의 필요' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    strategyTypes: [] as string[],
    budget: '',
    timeframe: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckboxChange = (id: string) => {
    if (formData.strategyTypes.includes(id)) {
      setFormData({
        ...formData,
        strategyTypes: formData.strategyTypes.filter(type => type !== id),
      });
    } else {
      setFormData({
        ...formData,
        strategyTypes: [...formData.strategyTypes, id],
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData);
    
    // 여기에 실제 폼 제출 로직이 들어갑니다 (API 호출 등)
    // 현재는 성공적으로 제출됐다고 가정합니다.
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };
  
  return (
    <div className="flex flex-col">
      {/* 페이지 헤더 */}
      <section className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">문의하기</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            전략이 있으신가요? 기술은 저희가 맡겠습니다.
            금융 알고리즘 매매 시스템 개발에 관한 모든 문의를 환영합니다.
          </p>
        </div>
      </section>
      
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 폼 섹션 */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-card">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 font-heading">문의 양식</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          이름 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          회사명
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          이메일 *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          연락처 *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        관심 전략 유형 (다중 선택 가능)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {STRATEGY_TYPES.map((type) => (
                          <div key={type.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={type.id}
                              checked={formData.strategyTypes.includes(type.id)}
                              onChange={() => handleCheckboxChange(type.id)}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label htmlFor={type.id} className="ml-2 text-sm text-gray-700">
                              {type.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                          예산
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="" disabled>예산을 선택하세요</option>
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                          희망 기간
                        </label>
                        <input
                          type="text"
                          id="timeframe"
                          name="timeframe"
                          placeholder="예: 2개월 이내, 6개월 이내"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        상세 문의 내용 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="개발하고자 하는 시스템, 적용하고 싶은 전략, 특별한 요구사항 등을 자유롭게 작성해주세요."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        문의하기
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
                      <CheckIcon />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 font-heading">문의가 접수되었습니다!</h2>
                    <p className="text-gray-600 mb-8">
                      소중한 문의에 감사드립니다. 담당자가 검토 후 영업일 기준 1-2일 내에 
                      입력하신 연락처로 회신드리겠습니다.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          strategyTypes: [],
                          budget: '',
                          timeframe: '',
                          message: '',
                        });
                      }}
                    >
                      새로운 문의하기
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* 연락처 정보 섹션 */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-card mb-8">
                <h2 className="text-xl font-bold mb-6 font-heading">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary">
                      <MapMarkerIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">주소</h3>
                      <p className="text-gray-600">
                        서울특별시 강남구 테헤란로 123<br />
                        알고포지 빌딩 8층
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-primary">
                      <EnvelopeIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">이메일</h3>
                      <p className="text-primary">contact@algoforge.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-primary">
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">전화</h3>
                      <p className="text-primary">02-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-white p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4 font-heading">업무 시간</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>월요일 - 금요일:</span>
                    <span>09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>토요일 - 일요일:</span>
                    <span>휴무</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    긴급한 문의는 이메일로 연락 주시면 최대한 빠르게 답변드리겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 