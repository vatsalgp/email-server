const keys = require("../config/keys");
const link = keys.redirectDomain + "/api/thankyou";
module.exports = body =>
    `
    <html>
        <body>
            <div style="text-align: center;">
                <div>
                    <p>${body}</p>
                </div>
                <div>
                    <a href="${link}">Yes</a>
                </div>
                <div>
                    <a href="${link}">No</a>
                </div>
            </div>
        </body>
    </html>
    `;