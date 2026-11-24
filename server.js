
const express = require("express");

const app = express();

// Serve HTML files
app.use(express.static(__dirname));

// Start server when running directly
if (require.main === module) {
    const PORT = 3000;

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export app for testing
module.exports = app;
