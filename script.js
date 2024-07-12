function generateRosary() {
    const rosaryType = document.getElementById('rosary-type').value;
    
    if (rosaryType === 'rosary') {
        generateRosaryPrayers();
    } else if (rosaryType === 'simple') {
        generateSimpleRosary();
    } else if (rosaryType === 'custom') {
        generateCustomRosary();
    }
}

function generateSimpleRosary() {
    const canvas = document.getElementById('rosary-canvas');
    const ctx = canvas.getContext('2d');
    
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar o terço simples
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Terço Simples', 50, 50);
    
    // Exibir o botão de enviar pelo WhatsApp
    document.getElementById('whatsapp-button').style.display = 'block';
}

function generateCustomRosary() {
    const crucifix = document.getElementById('crucifix').value;
    const cord = document.getElementById('cord').value;

    let xPrimeiraDezena;
    let yPrimeiraDezena;

    const colors = [
        document.getElementById('decade1').value,
        document.getElementById('decade2').value,
        document.getElementById('decade3').value,
        document.getElementById('decade4').value,
        document.getElementById('decade5').value
    ];

    const cordaGrande = document.getElementById('cordas-grandes').value;

    const canvas = document.getElementById('rosary-canvas');
    const ctx = canvas.getContext('2d');
    
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar as contas do terço personalizado
    const beadRadius = 8; // Tamanho das contas
    const bigBeadRadius = 12; // Raio da bola maior
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2.5;
    const gap = 40; // Espaçamento entre contas

    // Função para desenhar uma conta
    function drawBead(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.fill();
        ctx.closePath();
    }

    // Desenhar as cinco dezenas
    let angle = -11;
    for (let decade = 0; decade < 5; decade++) {
        const color = colors[decade];
        for (let i = 0; i < 10; i++) {
            const x = centerX + Math.cos(angle) * (centerX - gap);
            const y = centerY + Math.sin(angle) * (centerY - gap);
            drawBead(x, y, beadRadius, color);
            angle += (Math.PI / 27); // Incrementar o ângulo
        }

        // Desenhar a bola maior para o início do mistério
        const x = centerX + Math.cos(angle) * (centerX - gap);
        const y = centerY + Math.sin(angle) * (centerY - gap);
        drawBead(x, y, bigBeadRadius, cordaGrande);
        angle += (Math.PI / 27); // Incrementar o ângulo
    }

    // Carregar e desenhar o crucifixo
    const crucifixImage = new Image();
    crucifixImage.src = `images/crucifix/${crucifix}.png`;
    
    crucifixImage.onload = function() {
        ctx.shadowBlur = 0; // Limpar sombras para o crucifixo
        ctx.drawImage(crucifixImage, centerX - 50, centerY + centerY / 2, 100, 100);
    };

    // Exibir o botão de enviar pelo WhatsApp
    document.getElementById('whatsapp-button').style.display = 'block';
}

function generateRosaryPrayers() {
    const canvas = document.getElementById('rosary-canvas');
    const ctx = canvas.getContext('2d');
    
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar o rosário com as orações tradicionais
    const beadRadius = 12; // Tamanho das contas
    const bigBeadRadius = 18; // Raio da bola maior
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const gap = 40; // Espaçamento entre contas

    // Função para desenhar uma conta
    function drawBead(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.fill();
        ctx.closePath();
    }

    // Desenhar as cinco dezenas
    let angle = 0;
    for (let decade = 0; decade < 5; decade++) {
        const color = 'black'; // Cor padrão para o rosário
        for (let i = 0; i < 10; i++) {
            const x = centerX + Math.cos(angle) * (centerX - gap);
            const y = centerY + Math.sin(angle) * (centerY - gap);
            drawBead(x, y, beadRadius, color);
            angle += (Math.PI / 25); // Incrementar o ângulo
        }
        // Desenhar a bola maior para o início do mistério
        const x = centerX + Math.cos(angle) * (centerX - gap);
        const y = centerY + Math.sin(angle) * (centerY - gap);
        drawBead(x, y, bigBeadRadius, color);
        angle += (Math.PI / 25); // Incrementar o ângulo
    }

    // Desenhar a Coroa de Glória
    const gloryX = centerX + Math.cos(angle) * (centerX - gap);
    const gloryY = centerY + Math.sin(angle) * (centerY - gap);
    drawBead(gloryX, gloryY, bigBeadRadius, 'black');

    // Carregar e desenhar o crucifixo
    const crucifixImage = new Image();
    crucifixImage.src = 'images/simple.png'; // Crucifixo padrão
    
    crucifixImage.onload = function() {
        ctx.shadowBlur = 0; // Limpar sombras para o crucifixo
        ctx.drawImage(crucifixImage, centerX - 50, centerY + centerY / 2, 100, 100);
    };

    // Exibir o botão de enviar pelo WhatsApp
    document.getElementById('whatsapp-button').style.display = 'block';
}

function sendToWhatsApp() {
    // Implemente a função para enviar a oração gerada pelo WhatsApp
    alert('Enviar pelo WhatsApp!');
}
