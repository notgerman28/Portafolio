// Función para imprimir la página actual
function printPage() {
    window.print();
}
// Función para abrir un popup con contenido dinámico según el ID proporcionado
function openPopup(imageId) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');

    const popupContent = {
        popup1: {
            title: 'TrashCicle',
            text: 'TrashCicle es una iniciativa emocionante que combina de manera ingeniosa la responsabilidad ambiental con la participación comunitaria. Mediante la implementación de un sistema de intercambio de basura reciclable por puntos canjeables, ofrece un enfoque fresco y motivador para abordar el desafío del reciclaje.'
        },
        popup2: {
            title: 'Notatio',
            text: 'Notatio es un sistema diseñado específicamente para facilitar el manejo de las calificaciones de los estudiantes a los profesores. Su principal objetivo es simplificar el proceso de registro, cálculo de promedios y administración de las calificaciones, ofreciendo una solución intuitiva y sencilla para todo tipo de público.'
        },
        popup3: {
            title: 'Briffs',
            text: 'Briffs es una página dedicada a la redistribución de gorras en Santo Domingo. Su objetivo es ofrecer una variedad de gorras a los clientes, brindando un servicio conveniente y accesible para aquellos interesados en adquirir o cambiar gorras en la ciudad. A través de su plataforma, Briffs facilita el acceso a diferentes estilos y modelos, contribuyendo a una experiencia de compra más dinámica y personalizada en la localidad.'
        },
        popup4: {
            title: 'Formulario (txt)',
            text: 'Formulario interactivo que permita a los usuarios introducir sus datos personales a través de campos específicos. Al completar el formulario, se generará de manera automática un archivo de texto (.txt) que contendrá la información proporcionada. Este archivo será descargado directamente por el usuario, facilitando la gestión y almacenamiento de los datos de forma eficiente y segura.'
        }
    };
// Obtiene el contenido según el ID y actualiza el popup
    const content = popupContent[imageId];
    if (content) {
        popupTitle.textContent = content.title;
        popupText.textContent = content.text;
    }

    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
//funcion que identifica el archivo pdf y lo abre mediante el id
document.addEventListener('DOMContentLoaded', () => {
    const pdfPath = 'pdf/vg.pdf';

    const openPdfButton = document.getElementById('open-pdf');
    const downloadPdfButton = document.getElementById('download-pdf');

    if (openPdfButton) {
        openPdfButton.addEventListener('click', () => {
            window.open(pdfPath, '_blank');
        });
    } else {
        console.error("Element with ID 'open-pdf' not found.");
    }

    if (downloadPdfButton) {
        downloadPdfButton.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'vg.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        console.error("Element with ID 'download-pdf' not found.");
    }
});