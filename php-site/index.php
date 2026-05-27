<?php
/**
 * index.php - Carga modular de las 21 cualidades indispensables de un líder
 * Basado en la obra de John C. Maxwell: "Las 21 cualidades indispensables de un líder"
 */
include_once 'header.php';

// Base de datos simulada de cualidades para la demostración
$qualities = [
    1 => [
        "nombre" => "Carácter",
        "subtitulo" => "Sé un pedazo de roca",
        "frase" => "El liderazgo es la capacidad y voluntad de conducir a hombres y mujeres a un propósito común y a un carácter que inspire confianza.",
        "autor" => "Bernard Montgomery",
        "resumen" => "El carácter es la base sobre la que se construye toda la vida y el liderazgo.",
        "ejemplo" => "Bill Lear, el creador de Learjet, arriesgó su vida volando un jet para diagnosticar fallas en el aire, preservando la integridad humana por encima de ganancias."
    ],
    2 => [
        "nombre" => "Carisma",
        "subtitulo" => "La primera impresión puede ser determinante",
        "frase" => "¿Cómo puedes tener carisma? Preocúpate más por hacer que otros se sientan bien consigo mismos que en hacerlos sentir bien contigo.",
        "autor" => "Dan Reiland",
        "resumen" => "El carisma se enfoca genuinamente en el valor del prójimo.",
        "ejemplo" => "Benjamin Disraeli hacía sentir a sus acompañantes que eran las personas más inteligentes de Inglaterra."
    ],
    3 => [
        "nombre" => "Compromiso",
        "subtitulo" => "Es lo que separa a los hacedores de los soñadores",
        "frase" => "La gente no sigue a los líderes no comprometidos. Se prueba en el sacrificio.",
        "autor" => "Stephen Gregg",
        "resumen" => "El compromiso comienza en el corazón y se prueba mediante la acción sostenida.",
        "ejemplo" => "Miguel Ángel pintando la Capilla Sixtina de rodillas y boca arriba por 4 años arduos."
    ]
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
                <div class="bg-slate-950/40 border border-slate-800 p-3 rounded-lg text-xs italic mt-3 mb-4">
                     "<?php echo htmlspecialchars($q['frase']); ?>" <span class="block mt-1 font-mono text-yellow-500/60">— <?php echo htmlspecialchars($q['autor']); ?></span>
                </div>
                <p class="text-gray-400 mt-4 text-sm mb-4"><?php echo htmlspecialchars($q['resumen']); ?></p>
                
                <!-- Acordeón Desplegable -->
                <div class="mt-6 border-t border-slate-800 pt-4">
                    <h4 class="text-yellow-400 text-xs uppercase font-mono">Ejemplo de Liderazgo</h4>
                    <p class="text-gray-300 text-xs mt-2 leading-relaxed"><?php echo htmlspecialchars($q['ejemplo']); ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php
include_once 'footer.php';
?>
