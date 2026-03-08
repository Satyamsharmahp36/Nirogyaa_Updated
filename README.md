#### Multilingual Video Calls
<img width="1280" height="681" alt="image" src="https://github.com/user-attachments/assets/1ba7d9c8-e53a-4578-9f5f-7a63f7890324" />


Scenario: **Patient (Hindi/Punjabi)** + **Doctor (English/Kannada)** on video call.

- Real-time **STT → translation → captions/audio**.  
- Patient says in Hindi: “Mujhe kal se bukhar hai” (I have fever since yesterday).  
- Doctor sees Kannada caption + hears English audio.  
- Doctor responds in Kannada, patient sees Hindi captions.

**Tech**

- React / WebRTC
- Node.js + Socket.IO
- Python Flask
- Whisper
- Gemini
- TTS

#### Flow Diagram

```text
┌─────────────────────────────────────────────────────────┐
│                   USER A (Patient)                      │
│  React App (Hindi) - Video + Mic + Audio               │
└───────────┬─────────────────────────────┬──────────────┘
            │ WebRTC (Video/Audio)        │ Audio Chunks
            ▼                             ▼
┌───────────────────────┐   ┌──────────────────────────┐
│  Node.js Backend      │   │  Python Translation API  │
│  Socket.IO + Express  │   │  Whisper + Gemini + TTS  │
│  MongoDB              │   │  Input: webm → mp3       │
└───────────┬───────────┘   └──────────────────────────┘
            │ Video                       │ Translated Audio
            ▼                             ▼
┌─────────────────────────────────────────────────────────┐
│                 USER B (Doctor)                         │
│  React App (Kannada) - Video + Captions + Audio        │
└─────────────────────────────────────────────────────────┘
```
