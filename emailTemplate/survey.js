const keys = require("../config/keys");

module.exports = (body, id) =>
    `
    <html>
        <body>
            <div style="text-align: center;">
                <div>
                    <h2>${body}</h2>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/thankyou/${id}/yes" style="font-size:200%;" >Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/thankyou/${id}/no" style="font-size:200%;" >No</a>
                </div>
            </div>
        </body>
    </html>
    `;