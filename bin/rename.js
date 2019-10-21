const Fs = require('fs');
const Path = require('path');

function main() {
    const cwd = process.cwd();
    const exercisesPath = Path.resolve(cwd, 'exercises');

    const exercises = Fs.readdirSync(exercisesPath);

    exercises
        .map(name => ({ path: Path.join(exercisesPath, name), name }))
        .filter(exercise => Fs.statSync(exercise.path).isDirectory())
        .forEach(exercise => {
            const manifestPath = Path.resolve(exercise.path, 'package.json');
            const manifest = JSON.parse(Fs.readFileSync(manifestPath));

            const name = ['@typescript', exercise.name].join('/');
            Fs.writeFileSync(manifestPath, JSON.stringify({...manifest, name}, null, '  '));
        });
    }

main();
