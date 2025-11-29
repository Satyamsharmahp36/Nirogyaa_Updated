import React from 'react';
import { Languages } from 'lucide-react';

const LANGUAGES = [
  { code: 'off', name: 'No Translation', flag: '🚫' },
  { code: 'auto', name: 'Auto Detect', flag: '🔍' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
];

export default function SimpleLanguageSelector({ 
  selectedLanguage = 'off', 
  onLanguageChange,
  className = '',
  label = "Listen in",
  isListening = false,
  error = null
}) {
  const getLanguageName = (code) => {
    const lang = LANGUAGES.find(l => l.code === code);
    return lang ? `${lang.flag} ${lang.name}` : '🚫 No Translation';
  };

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{
      padding: '0.5rem 1rem',
      background: '#f8fafc',
      borderRadius: '0.75rem',
      border: '1px solid #e2e8f0'
    }}>
      <Languages size={18} style={{ color: '#3b82f6' }} />
      <span style={{ 
        color: '#374151', 
        fontSize: '0.875rem', 
        fontWeight: '600',
        minWidth: 'fit-content'
      }}>{label}:</span>
      <select
        value={selectedLanguage}
        onChange={(e) => {
          console.log('Language selector changed to:', e.target.value);
          onLanguageChange?.(e.target.value);
        }}
        style={{ 
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#374151',
          minWidth: '150px',
          cursor: 'pointer',
          outline: 'none',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#3b82f6';
          e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#d1d5db';
          e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} style={{ 
            color: '#374151', 
            backgroundColor: 'white',
            padding: '0.5rem'
          }}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      
      {selectedLanguage !== 'off' && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.375rem 0.75rem',
          borderRadius: '1rem',
          fontSize: '0.75rem',
          fontWeight: '600',
          border: '1px solid',
          backgroundColor: error 
            ? '#fef2f2' 
            : isListening 
              ? '#f0fdf4'
              : '#eff6ff',
          color: error 
            ? '#dc2626' 
            : isListening 
              ? '#15803d'
              : '#1d4ed8',
          borderColor: error 
            ? '#fecaca' 
            : isListening 
              ? '#bbf7d0'
              : '#bfdbfe'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: error 
              ? '#dc2626' 
              : isListening 
                ? '#15803d'
                : '#1d4ed8',
            animation: isListening ? 'pulse 2s infinite' : 'none'
          }}></div>
          {error ? 'Error' : isListening ? 'Listening' : 'Ready'}
        </div>
      )}
    </div>
  );
}
