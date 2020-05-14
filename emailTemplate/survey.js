const keys = require("../config/keys");
const link = keys.redirectDomain + "/api/thankyou";
module.exports = body =>
    `
    <html>
        <body>
            <div style="text-align: center;">
                <div>
                    <h2>${body}</h2>
                </div>
                <div>
                    <a href="${link}" style="font-size:200%;" >Yes</a>
                </div>
                <div>
                    <a href="${link}" style="font-size:200%;" >No</a>
                </div>
            </div>
        </body>
    </html>
    `;