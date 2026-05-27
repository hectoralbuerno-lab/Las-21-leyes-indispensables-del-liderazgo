package com.maxwell.academy.backend;

import org.springframework.web.bind.annotation.*;
import java.util.*;

/**
 * Controller de integración API Java de Liderazgo
 * Clase para persistir y sincronizar la evolución de líderes, lecturas y evaluaciones
 * Basado en la obra de John C. Maxwell: "Las 21 cualidades indispensables de un líder"
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
}
