document.addEventListener('DOMContentLoaded', () => {
    // Show language modal
    document.getElementById('languageModal').style.display = 'flex';

    // Initialize reviews
    const reviews = [
        {
            name: "Pepe Ramos",
            stars: "★★★★★",
            time_en: "3 months ago",
            time_es: "hace 3 meses",
            text_en: "Fernando Flores is an exceptional mechanic, with a deep knowledge of automotive mechanics and an undeniable ability to solve any problem. His honesty in diagnoses and costs makes him stand out in his profession. He is a reliable, dedicated and transparent person, which makes him a 100% guaranteed recommendation for those looking for quality and confidence in the care of their cars. A true professional! Thank you very much for your HONESTY.",
            text_es: "Fernando Flores es un mecánico excepcional, con un conocimiento profundo de la mecánica automotriz y una habilidad indiscutible para resolver cualquier problema. Su honestidad en los diagnósticos y en los costos lo hace destacar en su profesión. Es una persona confiable, dedicada y transparente, lo que lo convierte en una recomendación 100% garantizada para quienes buscan calidad y confianza en el cuidado de sus automóviles. ¡Un verdadero profesional! Muchas gracias por su HONESTIDAD."
        },
        {
            name: "Jessica Avalos",
            stars: "★★★★★",
            time_en: "9 months ago",
            time_es: "hace 9 meses",
            text_en: "It gives very good service and with us recommended 100% it has helped us a lot and until you are sure what it is you will not regret it",
            text_es: "Da muy buen servicio y con nosotros recomendado al 100 nos a ayudado en mucho y hasta que esta seguro lo que es no se arrepentirán"
        },
        {
            name: "Roberto “El GaRrAfOnEs” Vera-Ibarra",
            stars: "★★★★★",
            time_en: "10 months ago",
            time_es: "hace 10 meses",
            text_en: "The best, good service, I recommend it 100% and very satisfied with its service.",
            text_es: "Lo mejor buen servicio lo recomiendo al 100 y muy conforme con su servicio"
        },
        {
            name: "Richard Miranda",
            stars: "★★★★★",
            time_en: "a year ago",
            time_es: "hace un año",
            text_en: "Fernando is the best mechanic in Southern California....hands down! He is always honest about what is wrong with your vehicle and fixes the problem 1st time. Never had issues with Fernando. He's been our family mechanic for years. I whole heartedly recommend Fernando for your vehicle needs.",
            text_es: "Fernando es el mejor mecánico del sur de California. Siempre es honesto sobre lo que está mal con su vehículo y soluciona el problema la primera vez. Nunca he tenido problemas con Fernando. Ha sido el mecánico de nuestra familia durante años. Recomiendo a Fernando de todo corazón para las necesidades de su vehículo."
        },
        {
            name: "Lily Mona",
            stars: "★★★★★",
            time_en: "a year ago",
            time_es: "hace un año",
            text_en: "Very good mechanic, I went to 5 mechanics and none of them solved my problem, they all charged and did not fix the problem and I arrived at this workshop with Fernando Flores and he fixed my car. I recommend him 100%",
            text_es: "Muy buen mecánico, anduve con 5 mecánicos y ninguno me solucionó mi problema todos cobraban y no arreglan el problema y llegué en este taller con Fernando Flores y me arreglo mi carro lo recomiendo 100%"
        },
        {
            name: "Franklin Lamar",
            stars: "★★★★★",
            time_en: "1 year ago",
            time_es: "hace 1 año",
            text_en: "I went to two mechanics before going to Fernando. The mechanics solved one problem but then caused another. When I went to Fernando, he drove my car once and told me everything that was wrong and fixed everything in the car and charged me a reasonable price. The best mechanic in all of Rosemead; does everything quickly. It has a 10",
            text_es: "Fui a dos mecánicos antes de ir con Fernando. Los mecánicos solucionaron un problema pero luego causo otro. Cuando fui con Fernando, él manejo mi carro una vez y me dijo todo lo que tenía mal y arregló todo lo que tenía el auto y me cobró un precio razonable. El mejor mecánico de todo Rosemead; hace todo rápidamente. Tiene un 10"
        }
    ];

    // Store reviews in memory
    window.reviewsData = reviews;
});

function setLanguage(lang) {
    document.getElementById('languageModal').style.display = 'none';
    document.documentElement.lang = lang;

    // Update all text elements
    document.querySelectorAll('[data-en], [data-es]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) element.textContent = text;
    });

    // Populate reviews
    const reviewsGrid = document.querySelector('.reviews-grid');
    reviewsGrid.innerHTML = '';

    window.reviewsData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card fade-in';
        reviewCard.innerHTML = `
            <div class="review-header">
                <h4>${review.name}</h4>
                <div class="stars">${review.stars}</div>
            </div>
            <div class="review-time">${review[`time_${lang}`]}</div>
            <p>${review[`text_${lang}`]}</p>
        `;
        reviewsGrid.appendChild(reviewCard);
    });
}