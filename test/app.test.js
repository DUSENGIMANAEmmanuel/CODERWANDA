
const { test } = require("node:test");
const assert = require("node:assert/strict");

const app = require("../server");

test("Home page should load successfully", async () => {

    const server = app.listen(0);

    await new Promise(resolve => {
        server.once("listening", resolve);
    });

    const port = server.address().port;

    try {
        const response = await fetch(
            `http://127.0.0.1:${port}/index.html`
        );

        assert.equal(response.status, 200);

        const html = await response.text();

        assert.match(html, /<html/i);

    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});
