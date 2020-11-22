const PercyScript = require('@percy/script');
const httpServer = require('http-server');

const PORT = process.env.PORT_NUMBER || 3000;
const TEST_URL = `http://localhost:${PORT}`;

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
    let server = httpServer.createServer();
    server.listen(PORT);

    console.log(`Server started at ${TEST_URL}`);

    await page.goto(TEST_URL);
    await percySnapshot('Hacker News home page');

    await page.click('#root > div > div > p:nth-child(3) > a');
    await percySnapshot('Hacker News with a top Posts', { widths: [768, 992, 1200] });
    await page.click('#root > div > nav > div > div > div:nth-child(3) > a');
    await percySnapshot('Hacker News with a new Posts', { widths: [768, 992, 1200] });
    server.close();
});