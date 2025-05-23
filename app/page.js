"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, RotateCcw, Gift, Sparkles, Heart, Users, Briefcase, Home } from 'lucide-react';

// נתוני שאלות
const questions = [
  {
    id: 1,
    type: 'choice',
    question: 'למי המתנה מיועדת?',
    options: ['בן/בת זוג', 'בן משפחה', 'חבר/ה', 'עמית בעבודה', 'אחר']
  },
  {
    id: 2,
    type: 'choice',
    question: 'מה הגיל של האדם?',
    options: ['עד 18', '18-25', '26-35', '36-50', '50+']
  },
  {
    id: 3,
    type: 'choice',
    question: 'מה המין של האדם?',
    options: ['זכר', 'נקבה', 'מעדיף לא לציין']
  },
  {
    id: 4,
    type: 'text',
    question: 'מה התחביבים של האדם? (לדוגמה: ספורט, קריאה, בישול)',
    placeholder: 'תאר את התחביבים...'
  },
  {
    id: 5,
    type: 'choice',
    question: 'מה טווח המחירים שאתה מחפש?',
    options: ['עד 50₪', '50-150₪', '150-300₪', '300-500₪', '500₪+']
  },
  {
    id: 6,
    type: 'choice',
    question: 'איזה סוג מתנה אתה מעדיף?',
    options: ['משהו פרקטי', 'משהו נחמד ומפנק', 'חוויה', 'טכנולוגיה', 'משהו יצירתי']
  },
  {
    id: 7,
    type: 'text',
    question: 'מה אישיות האדם? (לדוגמה: חברותי, שקט, אמן)',
    placeholder: 'תאר את האישיות...'
  },
  {
    id: 8,
    type: 'choice',
    question: 'מה האירוע?',
    options: ['יום הולדת', 'חגים', 'יום השנה', 'סתם כך', 'הערכה']
  },
  {
    id: 9,
    type: 'choice',
    question: 'האדם אוהב הפתעות?',
    options: ['כן, מאוד!', 'קצת', 'לא בטוח', 'לא באמת']
  },
  {
    id: 10,
    type: 'text',
    question: 'יש עוד משהו חשוב שכדאי לדעת עליו?',
    placeholder: 'פרטים נוספים...'
  }
];

// רכיב כפתור מותאם
const CustomButton = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseClasses = 'px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg';
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-purple-500/25',
    secondary: 'bg-white text-gray-800 border-2 border-gray-200 hover:border-purple-400 hover:text-purple-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-purple-600'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''}`}
    >
      {children}
    </button>
  );
};

// רכיב מסך פתיחה
const WelcomeScreen = ({ onStart }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* רקע מונפש */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <Gift className="w-20 h-20 mx-auto text-white mb-4 animate-bounce" />
            <Sparkles className="w-12 h-12 mx-auto text-yellow-400 -mt-16 ml-16 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            מתנה
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> מושלמת</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            הבינה מלאכותית שלנו תמצא עבורך את המתנה הכי מתאימה
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            ענה על 10 שאלות קצרות ותקבל המלצה מותאמת אישית עם קישור ישיר לרכישה מאלי אקספרס
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CustomButton onClick={onStart} className="text-lg">
              בואו נתחיל <ChevronRight className="mr-2 w-6 h-6" />
            </CustomButton>
            
            <div className="flex items-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>חינם לחלוטין</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>מותאם אישית</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// רכיב מסך שאלות
const QuestionScreen = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      onComplete(answers);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const question = questions[currentQuestion];
  const hasAnswer = answers[question.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* פס התקדמות */}
      <div className="w-full bg-black/20 h-2">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* מספר שאלה */}
          <div className="text-center mb-8">
            <span className="text-purple-300 text-lg font-medium">
              שאלה {currentQuestion + 1} מתוך {questions.length}
            </span>
          </div>

          {/* השאלה */}
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 leading-relaxed">
              {question.question}
            </h2>

            {/* תשובות */}
            <div className="space-y-4 mb-12">
              {question.type === 'choice' ? (
                question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-6 rounded-xl text-right transition-all duration-300 transform hover:scale-[1.02] ${
                      answers[question.id] === option
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <span className="text-lg font-medium">{option}</span>
                  </button>
                ))
              ) : (
                <textarea
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder={question.placeholder}
                  className="w-full p-6 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:border-purple-400 focus:outline-none resize-none h-32 text-lg"
                  dir="rtl"
                />
              )}
            </div>

            {/* כפתורי ניווט */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  currentQuestion === 0
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                ← חזור
              </button>

              <CustomButton
                onClick={nextQuestion}
                disabled={!hasAnswer}
                variant="primary"
              >
                {currentQuestion === questions.length - 1 ? 'סיים' : 'הבא'} →
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// רכיב מסך תוצאות
const ResultScreen = ({ answers, onRestart, onChangeGift }) => {
  const [gift, setGift] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showChangeReason, setShowChangeReason] = useState(false);

  useEffect(() => {
    // סימולציה של קריאה לשרת
    setTimeout(() => {
      setGift({
        name: 'אוזניות בלוטות' + (answers[1] === 'זכר' ? ' גיימינג מתקדמות' : ' אלגנטיות'),
        description: 'אוזניות איכותיות עם ביטול רעשים, מושלמות עבור ' + (answers[4] || 'האדם המיוחד בחייך'),
        price: '₪149',
        image: '/blue.jpg',
//        image: '/api/placeholder/400/400',
        aliexpressLink: 'https://aliexpress.com/item/example',
        rating: 4.8,
        reviews: 2847
      });
      setIsLoading(false);
    }, 2000);
  }, [answers]);

  const handleChangeGift = (reason) => {
    setShowChangeReason(false);
    setIsLoading(true);
    
    // סימולציה של קבלת מתנה חדשה
    setTimeout(() => {
      setGift({
        name: reason === 'לא התאים לתקציב' ? 'מחזיק מפתחות LED חכם' : 'רמקול בלוטות' + (answers[1] === 'זכר' ? ' קומפקטי' : ' אלגנטי'),
        description: 'מתנה חלופית מושלמת שמתאימה לצרכים שלך',
        price: reason === 'לא התאים לתקציב' ? '₪39' : '₪89',
 //       image: '/api/placeholder/400/400',
        image: '/speker.png',
        aliexpressLink: 'https://aliexpress.com/item/example-alt',
        rating: 4.6,
        reviews: 1532
      });
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-6"></div>
          <h3 className="text-2xl font-bold mb-2">מחפש את המתנה המושלמת...</h3>
          <p className="text-lg text-gray-300">הבינה המלאכותית מתאימה עבורך מתנה מיוחדת</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* כותרת */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Gift className="w-12 h-12 text-yellow-400" />
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              מצאנו עבורך את המתנה המושלמת!
            </h1>
            <p className="text-xl text-gray-300">
              בהתבסס על התשובות שלך, זו המתנה הכי מתאימה
            </p>
          </div>

          {/* כרטיס המתנה */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-white mb-4">{gift.name}</h2>
                <p className="text-lg text-gray-300 mb-6">{gift.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-green-400">{gift.price}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xl ${i < Math.floor(gift.rating) ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-300">({gift.reviews.toLocaleString()} ביקורות)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={gift.aliexpressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    קנה באלי אקספרס →
                  </a>
                  
                  <button
                    onClick={() => setShowChangeReason(true)}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5 ml-2 inline" />
                    החלף מתנה
                  </button>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* כפתור התחלה מחדש */}
          <div className="text-center">
            <CustomButton onClick={onRestart} variant="outline">
              חפש מתנה חדשה
            </CustomButton>
          </div>
        </div>
      </div>

      {/* מודל החלפת מתנה */}
      {showChangeReason && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">למה תרצה להחליף?</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleChangeGift('לא התאים לתקציב')}
                className="w-full p-4 text-right bg-gray-100 hover:bg-purple-100 rounded-xl transition-colors duration-300"
              >
                לא התאים לתקציב שלי
              </button>
              <button
                onClick={() => handleChangeGift('לא התאים לאישיות')}
                className="w-full p-4 text-right bg-gray-100 hover:bg-purple-100 rounded-xl transition-colors duration-300"
              >
                לא מתאים לאישיות של האדם
              </button>
            </div>
            <button
              onClick={() => setShowChangeReason(false)}
              className="w-full mt-6 p-3 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              ביטול
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// רכיב ראשי
const AIGiftFinder = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [answers, setAnswers] = useState({});

  const handleStartQuiz = () => {
    setCurrentScreen('questions');
  };

  const handleCompleteQuiz = (answersData) => {
    setAnswers(answersData);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentScreen('welcome');
  };

  return (
    <div className="font-sans" dir="rtl">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleStartQuiz} />
      )}
      
      {currentScreen === 'questions' && (
        <QuestionScreen 
          questions={questions} 
          onComplete={handleCompleteQuiz} 
        />
      )}
      
      {currentScreen === 'result' && (
        <ResultScreen 
          answers={answers}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default AIGiftFinder;