module.exports = {
    apps: [
        {
            name: 'mi-aplicacion',
            script: 'npm start',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
        },
    ],
};