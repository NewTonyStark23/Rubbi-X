# 🚀 Rubbi-X v4.0 — Quick Start Guide

## ⚠️ IMPORTANT: These Are the Working Files

This project contains **3 deployment files** that you can actually use:

| File | What It Does | How to Use |
|------|--------------|------------|
| `FORM_A_SYSTEM_PROMPT.txt` | System prompt for cloud AIs | Copy & paste into Claude/GPT/Grok |
| `FORM_B_MIDDLEWARE.py` | Python middleware for local use | Run with Python |
| `FORM_C_MODELFILE` | Ollama config for local models | Create local AI with Ollama |

---

## 📋 File Descriptions

### 1. FORM_A_SYSTEM_PROMPT.txt
**What:** The complete Rubbi-X v4.0 cognitive framework as a system prompt  
**Size:** ~4KB of instructions  
**Use:** Feed this to ANY AI (Claude, GPT-4, Grok, etc.) to activate Rubbi-X

**How to use:**
```bash
# Open the file
cat FORM_A_SYSTEM_PROMPT.txt

# Copy the entire contents
# Paste at the start of your AI conversation
# Then ask your question
```

**Example:**
```
[Paste FORM_A_SYSTEM_PROMPT.txt contents here]

User: Fix this React useEffect infinite loop
```

---

### 2. FORM_B_MIDDLEWARE.py
**What:** Python middleware that manages R1/R2, atomic notes, path hashing  
**Size:** ~500 lines of production-ready code  
**Use:** Run locally to intercept prompts and manage Graphify cube

**How to use:**
```bash
# Install dependencies
pip install numpy

# Run the middleware
python FORM_B_MIDDLEWARE.py

# Or import in your code
from FORM_B_MIDDLEWARE import RubbiXMiddleware, PromptInterceptor

middleware = RubbiXMiddleware("my_project")
interceptor = PromptInterceptor(middleware)
enhanced_prompt = interceptor.intercept("Fix this bug")
```

**What it does:**
- Creates SQLite database for atomic notes
- Manages R1 (persistent) and R2 (ephemeral) instances
- Detects loops via path hashing
- Computes complexity scores
- Auto-backs up R1

---

### 3. FORM_C_MODELFILE
**What:** Ollama configuration that bakes Rubbi-X into a local model  
**Size:** ~3KB of configuration  
**Use:** Create a permanent local AI that always uses Rubbi-X

**How to use:**
```bash
# Install Ollama (if not installed)
# https://ollama.com

# Create the model
ollama create rubbi-x -f FORM_C_MODELFILE

# Run it
ollama run rubbi-x

# Now ask questions - it automatically uses Rubbi-X framework
>>> Fix this React useEffect infinite loop
```

**What it does:**
- Creates a local AI model (based on llama3.2:3b)
- Bakes Rubbi-X v4.0 framework into the model's system prompt
- Model permanently operates under Rubbi-X protocols
- No need to paste system prompt every time

---

## 🎯 Which One Should I Use?

### Use FORM_A (System Prompt) if:
- ✅ You want to try Rubbi-X quickly
- ✅ You're using Claude, GPT-4, or other cloud AIs
- ✅ You don't want to install anything
- ✅ You want maximum flexibility

**Pros:** Fastest to start, works with any AI  
**Cons:** Need to paste every time, no persistent memory

---

### Use FORM_B (Middleware) if:
- ✅ You want persistent memory across sessions
- ✅ You're building an AI application
- ✅ You want programmatic control
- ✅ You need loop detection and path hashing

**Pros:** Persistent memory, programmatic control, full features  
**Cons:** Requires Python setup, more complex

---

### Use FORM_C (Ollama) if:
- ✅ You want a permanent local AI
- ✅ You don't want to paste prompts every time
- ✅ You want privacy (runs locally)
- ✅ You want the model to "remember" Rubbi-X

**Pros:** Permanent, private, no repeated setup  
**Cons:** Requires Ollama, smaller model (3b)

---

## 📊 What Each File Contains

### FORM_A_SYSTEM_PROMPT.txt
```
- Core directives (zero tolerance for loops, 3x speed, 5x accuracy)
- Graphify cube (6 dimensions)
- Atomic notes schema
- Loop detection (predictive)
- R1/R2 nested architecture
- 10 internal strategies
- Superpowers integration
- Incremental processing (CocoIndex)
- AST-aware code resolution
- Self-evolving Superpowers
- Multi-Graphify parallelism
- Model detection & capability router
- Deterministic complexity engine
- Auto-backup protocol
- End-of-session protocol
```

### FORM_B_MIDDLEWARE.py
```python
- AtomicNote dataclass
- GraphifyNode dataclass
- GraphifyInstance dataclass
- PathHasher class (SHA-256 hashing)
- PatternRecognitionEngine class (GPU-accelerated)
- DeterministicScorer class (6 metrics)
- RubbiXMiddleware class (main orchestrator)
- PromptInterceptor class (prompt transformation)
- SQLite database management
- R1/R2 lifecycle management
- Loop detection algorithm
- Complexity scoring algorithm
```

### FORM_C_MODELFILE
```
- Base model: llama3.2:3b
- System prompt: Full Rubbi-X v4.0 framework
- Parameters: temperature 0.3, top_p 0.9, repeat_penalty 1.3
- Context window: 32768 tokens
- Template: Structured output format
```

---

## 🔧 Troubleshooting

### FORM_A Not Working?
**Problem:** AI ignores the system prompt  
**Solution:** Make sure you paste it at the VERY START of the conversation, before any other text

### FORM_B Not Running?
**Problem:** `ModuleNotFoundError: No module named 'numpy'`  
**Solution:** Run `pip install numpy`

**Problem:** Database locked  
**Solution:** Make sure only one instance is running. Delete `rubbix_*.db` files and restart

### FORM_C Not Working?
**Problem:** `ollama: command not found`  
**Solution:** Install Ollama from https://ollama.com

**Problem:** Model too slow  
**Solution:** Use a smaller base model in FORM_C_MODELFILE (change `FROM llama3.2:3b` to `FROM llama3.2:1b`)

---

## 📚 Next Steps

1. **Try FORM_A first** — Copy the system prompt and test with Claude/GPT
2. **If you like it, try FORM_C** — Create a permanent local model
3. **If you need more power, try FORM_B** — Run the full middleware

---

## 🎓 Understanding the Architecture

### R1 (Persistent Core)
- Master Graphify map for your project
- Accumulates atomic notes from all R2 instances
- Auto-backs up after every resolution
- Survives across sessions
- **Never requires user reminder to backup**

### R2 (Ephemeral Solver)
- Spawns for specific sub-problems
- Uses 10 advanced strategies
- Writes immutable atomic notes
- Merges successful notes to R1
- **DELETES ITSELF** to free context window space

### The Lifecycle
1. User submits problem
2. R1 loads (or creates new)
3. R2 spawns for this specific problem
4. R2 decomposes into 6 dimensions (Graphify cube)
5. R2 applies strategies, writes atomic notes
6. Loop detection checks path hashes
7. If loop detected → inject Superpower → new path
8. R2 converges on solution
9. R2 merges successful notes to R1
10. R2 deletes itself
11. R1 auto-backs up
12. User sees only final resolution

---

## 💡 Tips

- **Start simple:** Try FORM_A with a basic question first
- **Test loop detection:** Ask the same question twice and see if it detects the loop
- **Check atomic notes:** Use FORM_B to inspect the database and see what notes were written
- **Compare models:** Try FORM_A with Claude, then GPT-4, then Grok — see which works best
- **Monitor complexity:** Use FORM_B to see complexity scores and tier activation

---

## 🆘 Need Help?

- **README.md** — Full documentation (800+ lines)
- **FORM_A_SYSTEM_PROMPT.txt** — The actual system prompt
- **FORM_B_MIDDLEWARE.py** — The Python middleware (with comments)
- **FORM_C_MODELFILE** — The Ollama configuration

**Remember:** These are the WORKING files. The README is just documentation.

---

**Rubbi-X v4.0 — The Universal AI Reasoning Layer** 🎲
