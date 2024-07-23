const puppeteer = require('puppeteer');

async function launchBrowser() {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/opt/render/project/.chrome/chrome/linux-126.0.6478.182/chrome-linux64/chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    return browser;
}

module.exports = { launchBrowser };
