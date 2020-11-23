const { createWorker } = require('tesseract.js')

const worker = createWorker({
    logger: m => console.log(m)
});

(async () => {
    await worker.load();
    await worker.loadLanguage('chi_sim');
    await worker.initialize('chi_sim');
    const { data: { text } } = await worker.recognize('./target.png');
    console.log(text.split('\n').filter(item => item.length !== 0))
    await worker.terminate();
})();