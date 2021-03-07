import { writeFile } from 'fs';

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
   production: true,
   firebaseConfig: {
        apiKey: '${process.env.FIREBASE_API_KEY}',
        authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
        databaseURL: '${process.env.FIREBASE_DB_URL}',
        projectId: "angular-greenday",
        storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
        messagingSenderId: "709946393712",
        appId: "1:709946393712:web:8f67ff9c06a3846b4da0b5"
    },
    algolia: '${process.env.ALGOLIA_SEARCH_KEY}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});