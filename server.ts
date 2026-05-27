import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily on first API request
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is missing from environment variables.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API: AI Leadership Mentor powered by John C. Maxwell principles
app.post("/api/mentor", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "El mensaje es obligatorio." });
    }

    const ai = getGeminiClient();

    // Prepare system prompt setting up character
    const systemPrompt = `Eres un asesor de liderazgo elite y mentor experto entrenado en el libro 'Las 21 cualidades indispensables de un líder' de John C. Maxwell. 
Tus respuestas deben basarse estrictamente en estas 21 cualidades (como Carácter, Carisma, Compromiso, Valentía, Relaciones, etc.).
Tu tono debe ser inspirador, elegante, pedagógico y muy profesional. Responde con estructuración limpia en formato markdown. 
Siempre asocia el problema del usuario con al menos una de las 21 cualidades, explica la lección del libro (usando anécdotas cortas del libro si aplica, como Bill Lear, Benjamin Disraeli, Jerry Rice o Walt Disney) y entrega 2 o 3 consejos prácticos diarios en forma de lista accionable. Habla siempre en español.`;

    const chatParts: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        chatParts.push({
          role: turn.role === "assistant" ? "model" : "user",
          parts: [{ text: turn.text }],
        });
      });
    }

    chatParts.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: chatParts,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Lo siento, no pude procesar tu solicitud de coaching hoy.";
    res.json({ text: reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Ocurrió un error al contactar al Mentor de Liderazgo AI.",
      details: error.message || error,
    });
  }
});

// API: Code templates for modular PHP & Java integrations requested by user
app.get("/api/templates", (req, res) => {
  res.json({
    php: {
      header: `<?php
/**
 * header.php - Navegación y Cabecera Modular para la Academia de Liderazgo
 */
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academia de Liderazgo: John C. Maxwell</title>
    <!-- Tailwind CSS CDN para estilo glassmorphic robusto -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .glass-header {
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(234, 179, 8, 0.2);
        }
    </style>
</head>
<body class="bg-slate-950 text-white font-sans">
<header class="sticky top-0 z-50 glass-header px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-xl font-bold tracking-wider text-yellow-500">MAXWELL</span>
        <span class="text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded font-mono">21 Cualidades</span>
    </div>
    <nav class="flex gap-6 text-sm font-medium">
        <a href="index.php" class="text-gray-300 hover:text-white transition">Cualidades</a>
        <a href="quiz.php" class="text-gray-300 hover:text-white transition">Auto-Evaluar</a>
        <a href="templates.php" class="text-yellow-500 hover:text-yellow-400 font-bold transition">Código PHP / Java</a>
    </nav>
</header>
<main class="min-h-[80vh]">
`,
      index: `<?php
/**
 * index.php - Carga modular de las 21 cualidades indispensables de un líder
 */
include_once 'header.php';

// Base de datos simulada de cualidades
$qualities = [
    1 => [
        "nombre" => "Carácter",
        "subtitulo" => "Sé un pedazo de roca",
        "frase" => "El liderazgo es la capacidad y voluntad de conducir a hombres y mujeres a un propósito común y a un carácter que inspire confianza.",
        "autor" => "Bernard Montgomery",
        "resumen" => "El carácter es la base sobre la que se construye toda la vida y el liderazgo.",
        "ejemplo" => "Bill Lear, el creador de Learjet, arriesgó su vida volando un jet para diagnosticar fallas en el aire, preservando la integridad humana por encima de ganancias."
    ],
    // ... Otras cualidades consecutivas
];
?>
<div class="max-w-6xl mx-auto py-12 px-6">
    <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
            Las 21 Cualidades Indispensables de un Líder
        </h1>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explora de manera dinámica y pedagógica cada principio indispensable basado en la obra maestra de John C. Maxwell.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <?php foreach ($qualities as $id => $q): ?>
            <div class="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl p-6 hover:border-yellow-500/40 transition duration-300">
                <span class="text-xs font-mono text-yellow-500">Cualidad <?php echo sprintf("%02d", $id); ?></span>
                <h3 class="text-2xl font-bold mt-2"><?php echo htmlspecialchars($q['nombre']); ?></h3>
                <p class="text-yellow-500/80 text-sm italic mt-1">"<?php echo htmlspecialchars($q['subtitulo']); ?>"</p>
                <p class="text-gray-400 mt-4 text-sm"><?php echo htmlspecialchars($q['resumen']); ?></p>
                
                <!-- Acordeón Desplegable -->
                <div class="mt-6 border-t border-slate-800 pt-4">
                    <h4 class="text-yellow-400 text-xs uppercase font-mono">Ejemplo Práctico e Histórico</h4>
                    <p class="text-gray-300 text-xs mt-2 leading-relaxed"><?php echo htmlspecialchars($q['ejemplo']); ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php
include_once 'footer.php';
?>`,
      footer: `<?php
/**
 * footer.php - Pie de página modular
 */
?>
</main>
<footer class="bg-slate-950/80 border-t border-slate-900 py-8 px-6 text-center text-sm text-gray-500">
    <p>© <?php echo date('Y'); ?> Academia de Liderazgo. Basado en la obra de John C. Maxwell.</p>
    <p class="text-xs text-gray-600 mt-1">Estructurado de forma modular utilizando PHP 8 y Tailwind CSS avanzado.</p>
</footer>
</body>
</html>`
    },
    java: `package com.maxwell.academy.backend;

import org.springframework.web.bind.annotation.*;
import java.util.*;

/**
 * Controller de integración API Java de Liderazgo
 * Clase para persistir y sincronizar la evolución de líderes, lecturas y evaluaciones
 */
@RestController
@RequestMapping("/api/v1/leadership")
@CrossOrigin(origins = "*")
public class LeadershipController {

    private static final Map<Integer, Boolean> userProgress = new HashMap<>();

    // Obtener Progreso de Lectura de Cualidades
    @GetMapping("/progress/{userId}")
    public Map<String, Object> getProgress(@PathVariable String userId) {
        Map<String, Object> response = new HashMap<>();
        response.put("userId", userId);
        
        long completedCount = userProgress.values().stream().filter(v -> v).count();
        double percentage = (completedCount / 21.0) * 100.0;
        
        response.put("completed", completedCount);
        response.put("percentageProgress", Math.round(percentage * 100.0) / 100.0);
        response.put("progressMap", userProgress);
        return response;
    }

    // Registrar Cualidad de Liderazgo leída / dominada
    @PostMapping("/progress/{userId}/complete/{qualityId}")
    public Map<String, Object> markAsRead(
            @PathVariable String userId,
            @PathVariable Integer qualityId,
            @RequestParam Boolean completed) {
        
        if (qualityId < 1 || qualityId > 21) {
            throw new IllegalArgumentException("El ID de la cualidad debe estar entre 1 y 21");
        }

        userProgress.put(qualityId, completed);

        Map<String, Object> response = new HashMap<>();
        response.put("userId", userId);
        response.put("qualityId", qualityId);
        response.put("status", "UPDATED");
        response.put("isCompleted", completed);
        return response;
    }

    // Procesar evaluación de fortalezas del líder
    @PostMapping("/evaluate/{userId}")
    public Map<String, Object> processEvaluation(
            @PathVariable String userId,
            @RequestBody List<Integer> scores) {
        
        int totalScore = scores.stream().mapToInt(Integer::intValue).sum();
        String recommendation;
        
        if (totalScore >= 40) {
            recommendation = "Nivel Oro: Eres un líder proactivo y empático con altas capacidades y alineado a Maxwell. Enfócate en mentorizar a otros en 'Aprender' y 'Servicio'.";
        } else if (totalScore >= 25) {
            recommendation = "Nivel Plata: Liderazgo sólido con margen de mejora. Prioriza fortalecer 'Autodisciplina' y 'Concentración' para estabilizar tu influencia.";
        } else {
            recommendation = "Nivel Bronce: Eres un líder emergente. Te sugerimos repasar el capítulo 1 (Carácter) y capítulo 15 (Relaciones) en la Academia.";
        }

        Map<String, Object> response = new HashMap<>();
        response.put("userId", userId);
        response.put("totalPoints", totalScore);
        response.put("leadershipTier", totalScore >= 40 ? "ORO" : (totalScore >= 25 ? "PLATA" : "BRONCE"));
        response.put("actionPlan", recommendation);
        return response;
    }
}`
  });
});

// Vite middleware dynamic integration for dev, static files for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
