<?php
/**
 * header.php - Navegación y Cabecera Modular para la Academia de Liderazgo
 * Basado en la obra de John C. Maxwell: "Las 21 cualidades indispensables de un líder"
 */
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academia de Liderazgo: John C. Maxwell</title>
    <!-- Tailwind CSS CDN para estilo glassmorphic de alta fidelidad -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .glass-header {
            background: rgba(15, 23, 42, 0.85);
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
<main class="min-h-[85vh]">
