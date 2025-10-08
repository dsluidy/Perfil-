
// --- Funções de Interação (Mantidas) ---

// Função chamada pelo atributo onclick da foto
function arredondar() {
    const foto = document.getElementById('foto');
    const estiloAtual = window.getComputedStyle(foto).borderRadius;
    const radiusCircular = '50%';
    const radiusQuadrado = '14px';

    if (estiloAtual === radiusCircular) {
        foto.style.borderRadius = radiusQuadrado;
    } else {
        foto.style.borderRadius = radiusCircular;
    }
}


// --- Nova Função de Animação Typewriter ---

const textoCompleto = "Luidy Santos da Silva"; // O texto que será digitado
let i = 0; // Contador da letra atual
const velocidade = 100; // Velocidade de digitação (em milissegundos)

function typeWriter() {
    const elementoNome = document.getElementById("nome");
    const cursor = document.querySelector(".cursor");

    if (i < textoCompleto.length) {
        // Adiciona a próxima letra ao elemento
        elementoNome.innerHTML += textoCompleto.charAt(i);
        i++;
        
        // Chama a função novamente após o intervalo de velocidade
        setTimeout(typeWriter, velocidade);
    } else {
        // Se o texto estiver completo, remove a animação de piscar do cursor
        cursor.style.animation = 'none';
        // Opcional: Oculta o cursor após um breve atraso
        setTimeout(() => {
            cursor.style.opacity = '0';
        }, 1000); 
    }
}

// Inicia a animação quando a janela carrega completamente
window.onload = function() {
    typeWriter();
};