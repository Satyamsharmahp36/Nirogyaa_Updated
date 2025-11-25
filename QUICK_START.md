# 🚀 Quick Start - Real-time Translation

This is the **simple HTTP-based approach** that works just like your Jupyter notebook!

## Step 1: Start Translation Service

```bash
cd translation-service
python simple_translation_server.py
```

**Or double-click:** `translation-service/start_simple_service.bat`

You should see:
```
🚀 SIMPLE TRANSLATION SERVER STARTING
====================================
📍 Server: http://localhost:5000
📍 Endpoints:
   GET  /          - Health check
   GET  /health    - Detailed health check  
   POST /translate - Translate audio
====================================

🔄 Loading Whisper model...
✅ Whisper model ready!

* Running on all addresses (0.0.0.0)
* Running on http://127.0.0.1:5000
* Running on http://[::1]:5000
```

## Step 2: Test the Service

```bash
python translation-service/test_translation.py
```

You should see:
```
✅ Translation service is running
   Status: ok
   Whisper loaded: True
   Message: Simple translation service is running
```

## Step 3: Start Video Call Server

```bash
cd Server
npm start
```

## Step 4: Start Web Client

```bash
cd Client  
npm run dev
```

## Step 5: Test Translation

1. **Open browser:** http://localhost:5173
2. **Enable Translation:** Toggle "Real-time Translation" 
3. **Select Languages:** Your language → Target language
4. **Create Room:** Click "Start New Consultation"
5. **Use Translation:** Click "🌍 Translation" tab → "Start Recording" → Speak → "Stop Recording"

## How It Works (Simple HTTP)

```
[Record Audio] → [Send to /translate] → [Whisper + Gemini + gTTS] → [Get MP3] → [Play Audio]
```

**Much simpler than WebSockets!** 

- No complex real-time connections
- Standard HTTP POST requests
- Works exactly like your Jupyter notebook
- Easy to debug and modify

## Troubleshooting

**Service won't start:**
```bash
pip install flask flask-cors openai-whisper google-generativeai gtts
```

**Test fails:**
- Make sure service is running on http://localhost:5000
- Check if Python dependencies are installed
- Try restarting the service

**Translation not working:**
- Check browser console for errors
- Verify microphone permissions
- Ensure internet connection (for Gemini API)

## Files Structure

```
translation-service/
├── simple_translation_server.py    # Main server (like your notebook)
├── start_simple_service.bat        # Windows startup script
├── test_translation.py             # Test script
└── requirements.txt                # Dependencies

Client/src/
├── hooks/useSimpleTranslation.js   # HTTP-based hook
├── components/SimpleTranslationPanel.jsx  # UI component
└── Pages/Room.jsx                  # Updated to use simple approach
```

This approach is **much easier** to understand and debug compared to WebSockets!
