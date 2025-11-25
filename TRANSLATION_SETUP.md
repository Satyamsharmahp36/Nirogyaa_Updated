# Real-time Translation Setup Guide

This guide will help you set up the real-time translation feature for the Nirogya telemedicine platform.

## Overview

The translation feature allows two people speaking different languages to communicate seamlessly during video calls. When Person A speaks in English, it gets translated to Hindi for Person B, and vice versa.

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Web Client A  │    │  Translation     │    │   Web Client B  │
│   (English)     │◄──►│    Service       │◄──►│   (Hindi)       │
│                 │    │  (Python/Flask)  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌──────────────────┐
                    │   Video Call     │
                    │   Server         │
                    │  (Node.js)       │
                    └──────────────────┘
```

## Quick Start

### 1. Start the Translation Service

```bash
# Navigate to translation service directory
cd translation-service

# Install Python dependencies (first time only)
pip install -r requirements.txt

# Start the service
python translation_server.py
```

The service will be available at `http://localhost:5000`

### 2. Start the Video Call Server

```bash
# Navigate to server directory
cd Server

# Install Node.js dependencies (first time only)
npm install

# Start the server
npm start
```

Server will run at `http://localhost:8000`

### 3. Start the Web Client

```bash
# Navigate to client directory
cd Client

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Client will be available at `http://localhost:5173`

## Using Real-time Translation

### Step 1: Enable Translation on Landing Page

1. Open the web application in your browser
2. Toggle the "Real-time Translation" switch
3. Select your language (e.g., English)
4. Select the other person's language (e.g., Hindi)
5. Click "Start New Consultation"

### Step 2: Share the Room

1. Copy the room URL from your browser
2. Send it to the other person
3. They should also enable translation and select their languages before joining

### Step 3: Use Translation During the Call

1. Once both people are in the call, click the "🌍 Translation" tab
2. Click "Start Recording" when you want to speak
3. Speak clearly in your language
4. Click "Stop Recording" when done
5. The other person will hear your speech translated into their language

## Language Support

Currently supported languages:

- 🇺🇸 English
- 🇮🇳 Hindi
- 🇮🇳 Marathi
- 🇮🇳 Tamil
- 🇮🇳 Telugu
- 🇮🇳 Bengali
- 🇮🇳 Kannada
- 🇮🇳 Gujarati
- 🇮🇳 Odia
- 🇫🇷 French
- 🇪🇸 Spanish

## How It Works

### For Person A (English Speaker):

1. **Speaks in English** → Microphone captures audio
2. **Audio sent to Translation Service** → Whisper converts speech to English text
3. **Text translated to Hindi** → Gemini AI translates English text to Hindi
4. **Hindi text converted to speech** → gTTS creates Hindi audio
5. **Hindi audio played to Person B** → Person B hears Hindi translation

### For Person B (Hindi Speaker):

1. **Speaks in Hindi** → Microphone captures audio
2. **Audio sent to Translation Service** → Whisper converts speech to Hindi text
3. **Text translated to English** → Gemini AI translates Hindi text to English
4. **English text converted to speech** → gTTS creates English audio
5. **English audio played to Person A** → Person A hears English translation

## Best Practices

### For Better Translation Quality:

1. **Speak Clearly**: Articulate words properly
2. **Speak Slowly**: Don't rush your speech
3. **Use Simple Sentences**: Avoid complex grammar
4. **Minimize Background Noise**: Use in a quiet environment
5. **Wait for Translation**: Let the translation complete before speaking again
6. **Use Good Microphone**: Better audio input = better recognition

### Recommended Usage Pattern:

1. **Turn-based Speaking**: One person speaks at a time
2. **Short Sentences**: Keep sentences under 10-15 words
3. **Pause Between Sentences**: Give time for processing
4. **Confirm Understanding**: Ask if the translation was clear

## Troubleshooting

### Translation Service Issues

**Service won't start:**
```bash
# Check if Python is installed
python --version

# Check if all dependencies are installed
pip list

# Try installing dependencies again
pip install -r requirements.txt --force-reinstall
```

**Translation not working:**
- Check if service is running at `http://localhost:5000`
- Verify internet connection (needed for Gemini API)
- Check browser console for errors

### Audio Issues

**Microphone not working:**
- Check browser permissions for microphone access
- Test microphone in other applications
- Try refreshing the browser page

**No audio output:**
- Check system volume settings
- Verify speakers/headphones are working
- Check browser audio settings

### Performance Issues

**Slow translation:**
- Check internet connection speed
- Close unnecessary applications
- Try using a smaller Whisper model (edit `translation_server.py`)

**High CPU usage:**
- Whisper model processing is CPU intensive
- Consider using GPU acceleration if available
- Use smaller model for better performance

## Advanced Configuration

### Changing Whisper Model

Edit `translation_server.py`:

```python
# For faster processing (less accurate)
self.whisper_model = whisper.load_model("tiny")

# For better accuracy (slower)
self.whisper_model = whisper.load_model("small")
```

### Adding New Languages

1. Add to `LANG_MAP` in `translation_server.py`
2. Add to `LANGUAGES` array in `LandingPage.jsx`
3. Add to `LANGUAGES` array in `TranslationPanel.jsx`

### Custom API Key

Replace the API key in `translation_server.py`:

```python
genai.configure(api_key="YOUR_GEMINI_API_KEY_HERE")
```

## Security Considerations

- Translation service runs locally for privacy
- Audio is processed in real-time, not stored
- Consider using environment variables for API keys in production
- All communication uses secure WebSocket connections

## Limitations

- Requires internet connection for translation
- Some delay inherent in the translation process (2-5 seconds)
- Translation quality depends on speech clarity
- Limited to supported languages
- One person should speak at a time for best results

## Support

If you encounter issues:

1. Check that all services are running
2. Verify browser permissions for microphone
3. Check browser console for error messages
4. Ensure stable internet connection
5. Try using different browsers (Chrome recommended)

## Future Enhancements

Planned improvements:
- Faster translation processing
- More language support
- Offline translation capabilities
- Better noise cancellation
- Automatic language detection
