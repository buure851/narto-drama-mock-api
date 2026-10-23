const express = require('express');
const cors = require('cors');
const app = express();

// Autorise tout le monde à appeler l'API (contourne l'erreur CORS)
app.use(cors());

// Le port par défaut sur lequel Render va démarrer le serveur
const PORT = process.env.PORT || 3000;

// La route principale qui simule la réponse de l'API DramaBox
app.get('/api/episodes', (req, res) => {
    res.json({
        success: true,
        message: "Catalogue récupéré avec succès",
        data: {
            seriesTitle: "Le CEO Caché",
            totalEpisodes: 3,
            episodes: [
                {
                    id: 1,
                    episodeNumber: 1,
                    title: "La Rencontre",
                    duration: "01:25",
                    cover: "https://via.placeholder.com/720x1280.png?text=Episode+1",
                    // Ceci est un flux HLS (m3u8) de test public et légal
                    videoUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                    isLocked: false // Simule le fait que l'épisode est gratuit
                },
                {
                    id: 2,
                    episodeNumber: 2,
                    title: "La Révélation",
                    duration: "01:40",
                    cover: "https://via.placeholder.com/720x1280.png?text=Episode+2",
                    videoUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                    isLocked: false // Débloqué pour nos tests
                }
            ]
        }
    });
});

app.listen(PORT, () => {
    console.log(`Le Mock API tourne sur le port ${PORT}`);
});
